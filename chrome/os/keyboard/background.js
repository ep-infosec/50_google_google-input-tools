// Copyright 2013 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//

/**
 * @fileoverview The background of Virtual Keyboard extension for ChromeOS.
 */

goog.provide('i18n.input.chrome.vk.Background');

goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('i18n.input.chrome.vk.Controller');
goog.require('i18n.input.chrome.vk.DeferredCallManager');


/**
 * Generates a BrowserEvent instance from a key event of ChromeOS Input API.
 *
 * @param {!ChromeKeyboardEvent} keyEvent The key event of ChromeOS Input API.
 * @return {goog.events.BrowserEvent} The browser event.
 */
i18n.input.chrome.vk.Background.generateBrowserEvent = function(keyEvent) {
  var e = /** @type {!goog.events.BrowserEvent} */ (
      new goog.events.Event(keyEvent.type));
  e.fromChrome = true;
  e.keyCode = e.charCode = 0;
  e.altKey = keyEvent.altKey;
  e.ctrlKey = keyEvent.ctrlKey;
  e.shiftKey = keyEvent.shiftKey;
  e.capsLock = keyEvent['capsLock'];
  e.charCode = (keyEvent.key.length == 1) ? keyEvent.key.charCodeAt(0) : 0;
  var code = keyEvent['code'];
  if (code.indexOf('Key') == 0) {
    e.keyCode = code.charCodeAt(3);
  } else if (code.indexOf('Digit') == 0) {
    e.keyCode = code.charCodeAt(5);
  } else {
    var ch = i18n.input.chrome.vk.Background.KEY_CODES_[code];
    if (ch) {
      e.keyCode = ch.charCodeAt(0);
    }
  }
  return e.keyCode == 0 ? null : e;
};


/**
 * Key event codes map.
 *
 * @type {!Object.<string, string>}
 * @private
 */
i18n.input.chrome.vk.Background.KEY_CODES_ = {
  'BackQuote': '\u00c0',
  'Minus': '\u00bd',
  'Equal': '\u00bb',
  'Backspace': '\u0008',
  'BracketLeft': '\u00db',
  'BracketRight': '\u00dd',
  'BlacketRight': '\u00dd', // Workaround API typo bug in M28.
  'Backslash': '\u00dc',
  'Semicolon': '\u00ba',
  'Quote': '\u00de',
  'Comma': '\u00bc',
  'Period': '\u00be',
  'Slash': '\u00bf',
  'Space': '\u0020'
};


(function() {
  var controller = new i18n.input.chrome.vk.Controller();

  chrome.input.ime.onActivate.addListener(function(engineID) {
    controller.activate(engineID);
  });

  chrome.input.ime.onDeactivated.addListener(function() {
    controller.deactivate();
  });

  chrome.input.ime.onFocus.addListener(function(context) {
    controller.setContext(context);
  });

  chrome.input.ime.onBlur.addListener(function(contextID) {
    //controller.setContext(null);
  });

  // Handles onReset event to reset text input as necessary.
  // Note: onReset event is implemented in M29, so we need to keep the backward
  // compatibility here.
  var onReset = chrome.input.ime.onReset;
  if (onReset) {
    onReset.addListener(function(engineID) {
      controller.handleReset();
    });
  }

  chrome.input.ime.onSurroundingTextChanged.addListener(
      function(engineID, surroundingInfo) {
        var text = surroundingInfo.text.slice(0, Math.min(
            surroundingInfo.focus, surroundingInfo.anchor));
        controller.handleSurroundingTextChanged(text);
      });

  chrome.input.ime.onKeyEvent.addListener(function(engine, keyEvent) {
    var ret = false;
    var keyDown = keyEvent.type == goog.events.EventType.KEYDOWN;
    var code = keyEvent['code'];

    var altGrBit = i18n.input.chrome.vk.Controller.StateBit.ALTGR;
    var shiftBit = i18n.input.chrome.vk.Controller.StateBit.SHIFT;
    if (code == 'AltRight') {
      controller.setState(altGrBit, keyDown);
    } else if (/^Shift/.test(code)) {
      controller.setState(shiftBit, keyDown);
    } else if (keyDown) {
      var e = i18n.input.chrome.vk.Background.generateBrowserEvent(keyEvent);
      if (e && !e.ctrlKey && (!e.altKey || controller.getState(altGrBit))) {
        ret = !!controller.processEvent(e);
      } else if (code.indexOf('Shift') && code.indexOf('Alt')) {
        // If not modifier keys, do reset.
        controller.resetTextInput();
      }
    }
    if (ret) {
      // If truely handled the key event, defer call APIs, otherwise it will
      // block some API calls (e.g. commitText when holding ALTGR).
      chrome.input.ime.keyEventHandled(keyEvent.requestId, ret);
      i18n.input.chrome.vk.DeferredCallManager.getInstance().execAll();
    } else {
      // If falsely handled the key event, don't defer call APIs, otherwise it
      // will execute the default action before API calls (e.g. ArrowRight
      // before commitText).
      i18n.input.chrome.vk.DeferredCallManager.getInstance().execAll();
      chrome.input.ime.keyEventHandled(keyEvent.requestId, ret);
    }
  }, ['async']);

  if (chrome.inputMethodPrivate && chrome.inputMethodPrivate.startIme) {
    chrome.inputMethodPrivate.startIme();
  }
})();
