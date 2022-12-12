// Copyright 2014 The ChromeOS IME Authors. All Rights Reserved.
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
goog.require('goog.chrome.extensions.i18n');


var msgs = {};


/**
 * @desc It is the Google input tools title.
 */
msgs.MSG_CHOS_INPUTTOOL_TITLE = goog.getMsg(
    'Google Input Tools'
    );


/**
 * @desc It is the description of the input tools chrome extension.
 */
msgs.MSG_CHOS_INPUTTOOL_DESCRIPTION = goog.getMsg(
    'Google Input Tools for Chrome OS lets you type in your desired language' +
    ' on Chrome OS.'
    );


/**
 * @desc It is the description of Pinyin setting pages.
 */
msgs.MSG_PINYIN_SETTINGS_PAGE = goog.getMsg(
    'Pinyin Settings Page'
    );


/**
 * @desc Description of selection tooltip.
 */
msgs.MSG_SWIPE_SELECTION_TOOLTIP = goog.getMsg(
    'Swipe left or right to move the cursor.'
    );


/**
 * @desc Description of restoration tooltip.
 */
msgs.MSG_SWIPE_RESTORATION_TOOLTIP = goog.getMsg(
    'Swipe right to restore words.'
    );


/**
 * @desc Description of deletion tooltip.
 */
msgs.MSG_SWIPE_DELETION_TOOLTIP = goog.getMsg(
    'Swipe left to delete whole words.'
    );


/**
 * @desc It is the description of Zhuyin setting pages.
 */
msgs.MSG_ZHUYIN_SETTINGS_PAGE = goog.getMsg(
    'Zhuyin Settings Page'
    );


/**
 * @desc It is the description of fuzzy pinyin checkbox in Pinyin setting page.
 */
msgs.MSG_FUZZY_PINYIN = goog.getMsg(
    'Enable Fuzzy-Pinyin mode'
    );


/**
 * @desc It is the description of personal dictionary checkbox in setting
 * pages.
 */
msgs.MSG_USER_DICT = goog.getMsg(
    'Enable personal dictionary'
    );


/**
 * @desc It is the description of to sync personal dictionary with Server
 * checkbox in setting pages.
 */
msgs.MSG_USER_DICT_SYNC = goog.getMsg(
    'Sync personal dictionary'
    );


/**
 * @desc Label for button that resets all user dictionary changes.
 */
msgs.MSG_USER_DICT_RESET = goog.getMsg('Reset All Dictionary Entries');


/**
 * @desc Label for button that edit user dictionary entries.
 */
msgs.MSG_USER_DICT_EDIT = goog.getMsg('Edit Dictionary Entries');


/**
 * @desc Label for button with popup user dictionary dialog.
 */
msgs.MSG_USER_DICT_MANAGE = goog.getMsg('Manage personal dictionary...');


/**
 * @desc Title for manage user dictionary popup dialog.
 */
msgs.MSG_USER_DICT_TITLE = goog.getMsg('Personal Dictionary');


/**
 * @desc Label for button that when clicked, removes the selected entries from
 * the personal dictionary.
 */
msgs.MSG_USER_DICT_REMOVE = goog.getMsg('Remove Selected');


/**
 * @desc Label for button that clears all personal dictionary entries.
 */
msgs.MSG_USER_DICT_CLEAR = goog.getMsg('Clear All');


/**
 * @desc Label for button that user can press to submit the word they entered to
 * be added to their personal dictionary.
 */
msgs.MSG_USER_DICT_ADD = goog.getMsg('Add');


/**
 * @desc Indicator that typing in this input box will add a new word to the
 * person's user dictionary.
 */
msgs.MSG_USER_DICT_NEW_WORD = goog.getMsg('New word');


/**
 * @desc Button text to save user dictionary changes.
 */
msgs.MSG_USER_DICT_SAVE = goog.getMsg('Save');


/**
 * @desc It is the description of whether to enable '-' and '=' keys checkbox in
 * Pinyin setting page.
 */
msgs.MSG_MOVE_PAGE_KEY_ABOVE = goog.getMsg(
    'Use - and = keys to page a candidate list'
    );


/**
 * @desc It is the description of whether to enable ',' and '.' keys checkbox in
 * Pinyin setting page.
 */
msgs.MSG_MOVE_PAGE_KEY_BELOW = goog.getMsg(
    'Use , and . keys to page a candidate list'
    );


/**
 * @desc It is the description of whether the the default input method is
 * Chinese.
 */
msgs.MSG_INIT_LANG = goog.getMsg(
    'Initial input language is Chinese'
    );


/**
 * @desc It is the description of whether the default punctuation width is Full.
 */
msgs.MSG_INIT_PUNC = goog.getMsg(
    'Initial punctuation width is Full'
    );


/**
 * @desc It is the description of whether the default character width is Full.
 */
msgs.MSG_INIT_SBC = goog.getMsg(
    'Initial character width is Full'
    );


/**
 * @desc It is the description of whether the current input method is
 * Chinese.
 */
msgs.MSG_CURRENT_LANG = goog.getMsg(
    'Input language is Chinese'
    );


/**
 * @desc It is the description of whether the current punctuation width is Full.
 */
msgs.MSG_CURRENT_PUNC = goog.getMsg(
    'Punctuation width is Full'
    );


/**
 * @desc It is the description of whether the current character width is Full.
 */
msgs.MSG_CURRENT_SBC = goog.getMsg(
    'Character width is Full'
    );


/**
 * @desc It is the description of keyboard types in Zhuyin setting page.
 */
msgs.MSG_ZHUYIN_KEYBOARD_LAYOUT = goog.getMsg(
    'Keyboard type'
    );


/**
 * @desc It is the description of which keys are used to select candidates in
 * Zhuyin setting page.
 */
msgs.MSG_ZHUYIN_SELECT_KEYS = goog.getMsg(
    'Selection keys'
    );


/**
 * @desc It is the description of how many candidate shown in one page for
 * Zhuyin input method.
 */
msgs.MSG_ZHUYIN_PAGE_SIZE = goog.getMsg(
    'Number of candidates to display per page'
    );


/**
 * @desc It is the label of a dropdown list for choosing keyboard layouts in
 * option pages of some of input methods. The keyboard layouts are like US,
 * Dvorak, Colemak, etc.
 */
msgs.MSG_XKB_LAYOUT = goog.getMsg(
    'Keyboard layouts'
    );


/**
 * @desc It is the label of keyboard without any descriptor in the input method
 * list.
 */
msgs.MSG_KEYBOARD_NONE = goog.getMsg(
    'Keyboard'
    );


/**
 * @desc It is the label of Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_PHONETIC = goog.getMsg(
    'Keyboard (Phonetic)'
    );


/**
 * @desc It is the label of inscript keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_INSCRIPT = goog.getMsg(
    'Keyboard (InScript)'
    );


/**
 * @desc It is the label of tamil99 keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL99 = goog.getMsg(
    'Keyboard (Tamil99)'
    );


/**
 * @desc It is the label of typewriter keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TYPEWRITER = goog.getMsg(
    'Keyboard (Typewriter)'
    );


/**
 * @desc It is the label of itrans keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_ITRANS = goog.getMsg(
    'Keyboard (itrans)'
    );


/**
 * @desc It is the label of Thai kedmanee keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_KEDMANEE = goog.getMsg(
    'Keyboard (Kedmanee)'
    );


/**
 * @desc It is the label of Thai pattachote keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_PATTACHOTE = goog.getMsg(
    'Keyboard (Pattachote)'
    );


/**
 * @desc It is the label of Thai TIS 820-2531 keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TIS = goog.getMsg(
    'Keyboard (TIS 820-2531)'
    );


/**
 * @desc It is the label of Vietnamese tcvn keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TCVN = goog.getMsg(
    'Keyboard (TCVN)'
    );


/**
 * @desc It is the label of Vietnamese telex keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TELEX = goog.getMsg(
    'Keyboard (Telex)'
    );


/**
 * @desc It is the label of Vietnamese vni keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VNI = goog.getMsg(
    'Keyboard (VNI)'
    );


/**
 * @desc It is the label of Vietnamese viqr keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VIQR = goog.getMsg(
    'Keyboard (VIQR)'
    );


/**
 * @desc It is the label for basic section in setting pages.
 */
msgs.MSG_BASIC = goog.getMsg(
    'Basics'
    );


/**
 * @desc It is the label for advanced section in setting pages.
 */
msgs.MSG_ADVANCED = goog.getMsg(
    'Advanced'
    );




// The following message is for Input Tools name.


/**
 * @desc It is the description of Korean input method.
 */
msgs.MSG_INPUTMETHOD_HANGUL = goog.getMsg(
    'Korean input method'
    );


/**
 * @desc It is the description of Pinyin input method for Simplified
 * Chinese.
 */
msgs.MSG_INPUTMETHOD_PINYIN = goog.getMsg(
    'Pinyin input method'
    );


/**
 * @desc It is the description of Pinyin input method for Traditional
 * Chinese.
 */
msgs.MSG_INPUTMETHOD_TRADITIONAL_PINYIN = goog.getMsg(
    'Pinyin input method for traditional Chinese'
    );


/**
 * @desc It is the description of Zhuyin input method for Traditional
 * Chinese.
 */
msgs.MSG_INPUTMETHOD_ZHUYIN = goog.getMsg(
    'Zhuyin input method'
    );


/**
 * @desc It is the description of Wubi input method for Simplified Chinese.
 */
msgs.MSG_INPUTMETHOD_WUBI = goog.getMsg(
    'Wubi input method'
    );


/**
 * @desc It is the description of Cangjie input method for Traditional
 * Chinese.
 */
msgs.MSG_INPUTMETHOD_CANGJIE = goog.getMsg(
    'Cangjie input method'
    );


/**
 * @desc It is the description of Array (\u884c\u5217) input method for
 * Traditional Chinese.
 */
msgs.MSG_INPUTMETHOD_ARRAY = goog.getMsg(
    'Array input method'
    );


/**
 * @desc It is the description of Dayi (\u5927\u6613) input method for
 * Traditional Chinese.
 */
msgs.MSG_INPUTMETHOD_DAYI = goog.getMsg(
    'Dayi input method'
    );


/**
 * @desc It is the description of Quick (\u901f\u6210) input method for
 * Traditional Chinese.
 */
msgs.MSG_INPUTMETHOD_QUICK = goog.getMsg(
    'Quick input method'
    );

/**
 * @desc It is the description of Cantonese (\u5ee3\u6771\u8a71) input method for
 * Traditional Chinese.
 */
msgs.MSG_INPUTMETHOD_CANTONESE = goog.getMsg(
    'Cantonese input method'
    );


/**
 * @desc It is the label of Bengali Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_BENGALI_PHONETIC = goog.getMsg(
    'Bengali keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Gujarati Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_GUJARATI_PHONETIC = goog.getMsg(
    'Gujarati keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Hindi Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_DEVANAGARI_PHONETIC = goog.getMsg(
    'Devanagari keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Kannada Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_KANNADA_PHONETIC = goog.getMsg(
    'Kannada keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Malayalam Phonetic keyboard in the input method
 * list.
 */
msgs.MSG_KEYBOARD_MALAYALAM_PHONETIC = goog.getMsg(
    'Malayalam keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Tamil Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL_PHONETIC = goog.getMsg(
    'Tamil keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Tamil inscript keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL_INSCRIPT = goog.getMsg(
    'Tamil keyboard (InScript)'
    );


/**
 * @desc It is the label of Tamil tamil99 keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL_TAMIL99 = goog.getMsg(
    'Tamil keyboard (Tamil99)'
    );


/**
 * @desc It is the label of Tamil typewriter keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL_TYPEWRITER = goog.getMsg(
    'Tamil keyboard (Typewriter)'
    );


/**
 * @desc It is the label of Tamil itrans keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TAMIL_ITRANS = goog.getMsg(
    'Tamil keyboard (itrans)'
    );


/**
 * @desc It is the label of Telugu Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_TELUGU_PHONETIC = goog.getMsg(
    'Telugu keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Ethiopic Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_ETHIOPIC = goog.getMsg(
    'Ethiopic keyboard'
    );


/**
 * @desc It is the label of Thai kedmanee keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_THAI_KEDMANEE = goog.getMsg(
    'Thai keyboard (Kedmanee)'
    );


/**
 * @desc It is the label of Thai pattachote keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_THAI_PATTACHOTE = goog.getMsg(
    'Thai keyboard (Pattachote)'
    );


/**
 * @desc It is the label of Thai TIS 820-2531 keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_THAI_TIS = goog.getMsg(
    'Thai keyboard (TIS 820-2531)'
    );


/**
 * @desc It is the label of Persian keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_PERSIAN = goog.getMsg(
    'Persian keyboard'
    );


/**
 * @desc It is the label of Vietnamese tcvn keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VIETNAMESE_TCVN = goog.getMsg(
    'Vietnamese keyboard (TCVN)'
    );


/**
 * @desc It is the label of Vietnamese telex keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VIETNAMESE_TELEX = goog.getMsg(
    'Vietnamese keyboard (Telex)'
    );


/**
 * @desc It is the label of Vietnamese vni keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VIETNAMESE_VNI = goog.getMsg(
    'Vietnamese keyboard (VNI)'
    );


/**
 * @desc It is the label of Vietnamese viqr keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_VIETNAMESE_VIQR = goog.getMsg(
    'Vietnamese keyboard (VIQR)'
    );


/**
 * @desc It is the label of Arrabic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_ARABIC = goog.getMsg(
    'Arabic keyboard'
    );


/**
 * @desc It is the label of Lao keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_LAO = goog.getMsg(
    'Lao keyboard'
    );


/**
 * @desc It is the label of Nepali InScript keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_NEPALI_INSCRIPT = goog.getMsg(
    'Nepali keyboard (InScript)'
    );


/**
 * @desc It is the label of Nepali Phonetic keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_NEPALI_PHONETIC = goog.getMsg(
    'Nepali keyboard (Phonetic)'
    );


/**
 * @desc It is the label of Khmer keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_KHMER = goog.getMsg(
    'Khmer keyboard'
    );


/**
 * @desc It is the label of Myanmar keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_MYANMAR = goog.getMsg(
    'Myanmar MM3 keyboard'
    );


/**
 * @desc It is the label of Sinhala keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_SINHALA = goog.getMsg(
    'Sinhala keyboard'
    );


/**
 * @desc The title of keyboard - us keyboard .
 */
msgs.MSG_KEYBOARD_US = goog.getMsg('US keyboard');


/**
 * @desc The title of keyboard - us international_keyboard .
 */
msgs.MSG_KEYBOARD_US_INTERNATIONAL = goog.getMsg('US international keyboard');


/**
 * @desc The title of keyboard - us extended_keyboard .
 */
msgs.MSG_KEYBOARD_US_EXTENDED = goog.getMsg('US extended keyboard');


/**
 * @desc The title of keyboard - us dvorak_keyboard .
 */
msgs.MSG_KEYBOARD_US_DVORAK = goog.getMsg('US Dvorak keyboard');


/**
 * @desc The title of keyboard - us dvp_keyboard .
 */
msgs.MSG_KEYBOARD_US_DVP = goog.getMsg('US programmer Dvorak keyboard');


/**
 * @desc The title of keyboard - us colemak_keyboard .
 */
msgs.MSG_KEYBOARD_US_COLEMAK = goog.getMsg('US Colemak keyboard');


/**
 * @desc The title of keyboard - belgian keyboard .
 */
msgs.MSG_KEYBOARD_BELGIAN = goog.getMsg('Belgian keyboard');


/**
 * @desc The title of keyboard - faroese keyboard .
 */
msgs.MSG_KEYBOARD_FAROESE = goog.getMsg('Faroese keyboard');


/**
 * @desc The title of keyboard - netherlands keyboard.
 */
msgs.MSG_KEYBOARD_NETHERLANDS = goog.getMsg('Netherlands keyboard');


/**
 * @desc The title of keyboard - french bepo_keyboard .
 */
msgs.MSG_KEYBOARD_FRENCH_BEPO = goog.getMsg('French BÉPO keyboard');


/**
 * @desc The title of keyboard - french keyboard .
 */
msgs.MSG_KEYBOARD_FRENCH = goog.getMsg('French keyboard');


/**
 * @desc The title of keyboard - canadian french_keyboard .
 */
msgs.MSG_KEYBOARD_CANADIAN_FRENCH = goog.getMsg('Canadian French keyboard');


/**
 * @desc The title of keyboard - swiss french_keyboard .
 */
msgs.MSG_KEYBOARD_SWISS_FRENCH = goog.getMsg('Swiss French keyboard');


/**
 * @desc The title of keyboard - canadian multilingual_keyboard .
 */
msgs.MSG_KEYBOARD_CANADIAN_MULTILINGUAL = goog.getMsg(
    'Canadian Multilingual keyboard');


/**
 * @desc The title of keyboard - german keyboard .
 */
msgs.MSG_KEYBOARD_GERMAN = goog.getMsg('German keyboard');


/**
 * @desc The title of keyboard - german neo_2_keyboard .
 */
msgs.MSG_KEYBOARD_GERMAN_NEO_2 = goog.getMsg('German Neo 2 keyboard');


/**
 * @desc The title of keyboard - swiss keyboard .
 */
msgs.MSG_KEYBOARD_SWISS = goog.getMsg('Swiss keyboard');


/**
 * @desc The title of keyboard - japanese keyboard .
 */
msgs.MSG_KEYBOARD_JAPANESE = goog.getMsg('Japanese keyboard');


/**
 * @desc The title of keyboard - russian keyboard .
 */
msgs.MSG_KEYBOARD_RUSSIAN = goog.getMsg('Russian keyboard');


/**
 * @desc The title of keyboard - russian phonetic keyboard .
 */
msgs.MSG_KEYBOARD_RUSSIAN_PHONETIC = goog.getMsg('Russian phonetic keyboard');


/**
 * @desc The title of keyboard - russian phonetic (AATSEEL) keyboard .
 */
msgs.MSG_KEYBOARD_RUSSIAN_PHONETIC_AATSEEL =
    goog.getMsg('Russian phonetic (AATSEEL) keyboard');


/**
 * @desc The title of keyboard - russian phonetic (YaZHert) keyboard .
 */
msgs.MSG_KEYBOARD_RUSSIAN_PHONETIC_YAZHERT =
    goog.getMsg('Russian phonetic (YaZHert) keyboard');


/**
 * @desc The title of keyboard - brazilian keyboard .
 */
msgs.MSG_KEYBOARD_BRAZILIAN = goog.getMsg('Brazilian keyboard');


/**
 * @desc The title of keyboard - bulgarian keyboard .
 */
msgs.MSG_KEYBOARD_BULGARIAN = goog.getMsg('Bulgarian keyboard');


/**
 * @desc The title of keyboard - bulgarian phonetic_keyboard .
 */
msgs.MSG_KEYBOARD_BULGARIAN_PHONETIC = goog.getMsg(
    'Bulgarian phonetic keyboard');


/**
 * @desc The title of keyboard - canadian english_keyboard .
 */
msgs.MSG_KEYBOARD_CANADIAN_ENGLISH = goog.getMsg('Canadian English keyboard');


/**
 * @desc The title of keyboard - czech keyboard .
 */
msgs.MSG_KEYBOARD_CZECH = goog.getMsg('Czech keyboard');


/**
 * @desc The title of keyboard - czech qwerty_keyboard .
 */
msgs.MSG_KEYBOARD_CZECH_QWERTY = goog.getMsg('Czech QWERTY keyboard');


/**
 * @desc The title of keyboard - estonian keyboard .
 */
msgs.MSG_KEYBOARD_ESTONIAN = goog.getMsg('Estonian keyboard');


/**
 * @desc The title of keyboard - spanish keyboard .
 */
msgs.MSG_KEYBOARD_SPANISH = goog.getMsg('Spanish keyboard');


/**
 * @desc The title of keyboard - catalan keyboard .
 */
msgs.MSG_KEYBOARD_CATALAN = goog.getMsg('Catalan keyboard');


/**
 * @desc The title of keyboard - danish keyboard .
 */
msgs.MSG_KEYBOARD_DANISH = goog.getMsg('Danish keyboard');


/**
 * @desc The title of keyboard - greek keyboard .
 */
msgs.MSG_KEYBOARD_GREEK = goog.getMsg('Greek keyboard');


/**
 * @desc The title of keyboard - hebrew keyboard .
 */
msgs.MSG_KEYBOARD_HEBREW = goog.getMsg('Hebrew keyboard');


/**
 * @desc The title of keyboard - latin american_keyboard .
 */
msgs.MSG_KEYBOARD_LATIN_AMERICAN = goog.getMsg('Latin American keyboard');


/**
 * @desc The title of keyboard - lithuanian keyboard .
 */
msgs.MSG_KEYBOARD_LITHUANIAN = goog.getMsg('Lithuanian keyboard');


/**
 * @desc The title of keyboard - latvian keyboard .
 */
msgs.MSG_KEYBOARD_LATVIAN = goog.getMsg('Latvian keyboard');


/**
 * @desc The title of keyboard - croatian keyboard .
 */
msgs.MSG_KEYBOARD_CROATIAN = goog.getMsg('Croatian keyboard');


/**
 * @desc The title of keyboard - uk keyboard .
 */
msgs.MSG_KEYBOARD_UK = goog.getMsg('UK keyboard');


/**
 * @desc The title of keyboard - uk dvorak_keyboard .
 */
msgs.MSG_KEYBOARD_UK_DVORAK = goog.getMsg('UK Dvorak keyboard');


/**
 * @desc The title of keyboard - finnish keyboard .
 */
msgs.MSG_KEYBOARD_FINNISH = goog.getMsg('Finnish keyboard');


/**
 * @desc The title of keyboard - hungarian keyboard .
 */
msgs.MSG_KEYBOARD_HUNGARIAN = goog.getMsg('Hungarian keyboard');


/**
 * @desc The title of keyboard - hungarian qwerty_keyboard .
 */
msgs.MSG_KEYBOARD_HUNGARIAN_QWERTY = goog.getMsg('Hungarian Qwerty keyboard');



/**
 * @desc The title of keyboard - italian keyboard .
 */
msgs.MSG_KEYBOARD_ITALIAN = goog.getMsg('Italian keyboard');


/**
 * @desc The title of keyboard - icelandic keyboard .
 */
msgs.MSG_KEYBOARD_ICELANDIC = goog.getMsg('Icelandic keyboard');


/**
 * @desc The title of keyboard - norwegian keyboard .
 */
msgs.MSG_KEYBOARD_NORWEGIAN = goog.getMsg('Norwegian keyboard');


/**
 * @desc The title of keyboard - polish keyboard .
 */
msgs.MSG_KEYBOARD_POLISH = goog.getMsg('Polish keyboard');


/**
 * @desc The title of keyboard - portuguese keyboard .
 */
msgs.MSG_KEYBOARD_PORTUGUESE = goog.getMsg('Portuguese keyboard');


/**
 * @desc The title of keyboard - romanian keyboard .
 */
msgs.MSG_KEYBOARD_ROMANIAN = goog.getMsg('Romanian keyboard');


/**
 * @desc The title of keyboard - romanian standard keyboard .
 */
msgs.MSG_KEYBOARD_ROMANIAN_STANDARD = goog.getMsg('Romanian standard keyboard');


/**
 * @desc The title of keyboard - swedish keyboard .
 */
msgs.MSG_KEYBOARD_SWEDISH = goog.getMsg('Swedish keyboard');


/**
 * @desc The title of keyboard - slovak keyboard .
 */
msgs.MSG_KEYBOARD_SLOVAKIAN = goog.getMsg('Slovak keyboard');


/**
 * @desc The title of keyboard - slovak keyboard .
 */
msgs.MSG_KEYBOARD_SLOVAK = goog.getMsg('Slovak keyboard');


/**
 * @desc The title of keyboard - slovenian keyboard .
 */
msgs.MSG_KEYBOARD_SLOVENIAN = goog.getMsg('Slovenian keyboard');


/**
 * @desc The title of keyboard - serbian keyboard .
 */
msgs.MSG_KEYBOARD_SERBIAN = goog.getMsg('Serbian keyboard');


/**
 * @desc The title of keyboard - turkish keyboard .
 */
msgs.MSG_KEYBOARD_TURKISH = goog.getMsg('Turkish keyboard');


/**
 * @desc The title of keyboard - turkish-f keyboard .
 */
msgs.MSG_KEYBOARD_TURKISH_F = goog.getMsg('Turkish-F keyboard');


/**
 * @desc The title of keyboard - ukrainian keyboard .
 */
msgs.MSG_KEYBOARD_UKRAINIAN = goog.getMsg('Ukrainian keyboard');


/**
 * @desc The title of keyboard - belarusian keyboard .
 */
msgs.MSG_KEYBOARD_BELARUSIAN = goog.getMsg('Belarusian keyboard');


/**
 * @desc The title of keyboard - armenian phonetic_keyboard .
 */
msgs.MSG_KEYBOARD_ARMENIAN_PHONETIC = goog.getMsg('Armenian Phonetic keyboard');


/**
 * @desc The title of keyboard - georgian keyboard .
 */
msgs.MSG_KEYBOARD_GEORGIAN = goog.getMsg('Georgian keyboard');


/**
 * @desc The title of keyboard - mongolian keyboard .
 */
msgs.MSG_KEYBOARD_MONGOLIAN = goog.getMsg('Mongolian keyboard');


/**
 * @desc The title of keyboard - maltese keyboard .
 */
msgs.MSG_KEYBOARD_MALTESE = goog.getMsg('Maltese keyboard');


/**
 * @desc The title of keyboard - macedonian keyboard .
 */
msgs.MSG_KEYBOARD_MACEDONIAN = goog.getMsg('Macedonian keyboard');


/**
 * @desc The title of keyboard - irish keyboard .
 */
msgs.MSG_KEYBOARD_IRISH = goog.getMsg('Irish keyboard');


/**
 * @desc The title of keyboard - Kurdish English-based keyboard .
 */
msgs.MSG_KEYBOARD_SORANIKURDISH_EN =
    goog.getMsg('Kurdish English-based keyboard');


/**
 * @desc The title of keyboard - Kurdish Arabic-based keyboard .
 */
msgs.MSG_KEYBOARD_SORANIKURDISH_AR =
    goog.getMsg('Kurdish Arabic-based keyboard');


/**
 * @desc It is the label of Myanmar Myansan keyboard in the input method list.
 */
msgs.MSG_KEYBOARD_MYANMAR_MYANSAN = goog.getMsg(
    'Myanmar Myansan keyboard'
    );


/**
 * @desc The title of keyboard - Laothian keyboard
 */
msgs.MSG_KEYBOARD_LAOTHIAN = goog.getMsg('Laothian keyboard');


/**
 * @desc The title of keyboard - Kazakh keyboard
 */
msgs.MSG_KEYBOARD_KAZAKH = goog.getMsg('Kazakh keyboard');


/**
 * @desc The input method name for Amharic.
 */
msgs.MSG_TRANSLITERATION_AM = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'salam \u2192 \u1230\u120b\u121d'
    });


/**
 * @desc The input method name for Arabic.
 */
msgs.MSG_TRANSLITERATION_AR = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'marhaban \u2190 \u0645\u0631\u062d\u0628\u0627'
    });


/**
 * @desc The input method name for Belarusian.
 */
msgs.MSG_TRANSLITERATION_BE = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'pryvitannie \u2192 \u043f\u0440\u044b\u0432\u0456\u0442' +
          '\u0430\u043d\u043d\u0435'
    });


/**
 * @desc The input method name for Bulgarian.
 */
msgs.MSG_TRANSLITERATION_BG = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'zdrasti \u2192 \u0437\u0434\u0440\u0430\u0441\u0442\u0438'
    });


/**
 * @desc The input method name for Bengali.
 */
msgs.MSG_TRANSLITERATION_BN = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaskar \u2192 \u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0'
    });


/**
 * @desc The input method name for Greek.
 */
msgs.MSG_TRANSLITERATION_EL = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'geia \u2192 \u03b3\u03b5\u03b9\u03b1'
    });


/**
 * @desc The input method name for Persian.
 */
msgs.MSG_TRANSLITERATION_FA = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'salam \u2190 \u0633\u0644\u0627\u0645'
    });


/**
 * @desc The input method name for Gujarati.
 */
msgs.MSG_TRANSLITERATION_GU = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaste \u2192 \u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7'
    });


/**
 * @desc The input method name for Hebrew.
 */
msgs.MSG_TRANSLITERATION_HE = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'shalom \u2190 \u05e9\u05dc\u05d5\u05dd'
    });


/**
 * @desc The input method name for Hindi.
 */
msgs.MSG_TRANSLITERATION_HI = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaste \u2192 \u0928\u092e\u0938\u094d\u0924\u0947'
    });


/**
 * @desc The input method name for Kannada.
 */
msgs.MSG_TRANSLITERATION_KN = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaskaram \u2192 \u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0'
    });


/**
 * @desc The input method name for Malayalam.
 */
msgs.MSG_TRANSLITERATION_ML = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaskar \u2192 \u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30' +
          '\u0d02'
    });


/**
 * @desc The input method name for Marathi.
 */
msgs.MSG_TRANSLITERATION_MR = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaste \u2192 \u0928\u092e\u0938\u094d\u0915\u093e\u0930'
    });


/**
 * @desc The input method name for Nepali.
 */
msgs.MSG_TRANSLITERATION_NE = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaste \u2192 \u0928\u092e\u0938\u094d\u0924\u0947'
    });


/**
 * @desc The input method name for Oriya.
 */
msgs.MSG_TRANSLITERATION_OR = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'mausam \u2192 \u0b28\u0b2e\u0b38\u0b4d\u0b24\u0b47'
    });


/**
 * @desc The input method name for Punjabi.
 */
msgs.MSG_TRANSLITERATION_PA = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'mausam \u2192 \u0a2e\u0a4c\u0a38\u0a2e'
    });


/**
 * @desc The input method name for Russian.
 */
msgs.MSG_TRANSLITERATION_RU = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'privet \u2192 \u043f\u0440\u0438\u0432\u0435\u0442'
    });


/**
 * @desc The input method name for Sanskrit.
 */
msgs.MSG_TRANSLITERATION_SA = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'namaste \u2192 \u0928\u092e\u0938\u094d\u0924\u0947'
    });


/**
 * @desc The input method name for Serbian.
 */
msgs.MSG_TRANSLITERATION_SR = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'zdravo \u2192 \u0437\u0434\u0440\u0430\u0432\u043e'
    });


/**
 * @desc The input method name for Sinhalese.
 */
msgs.MSG_TRANSLITERATION_SI = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'halo \u2192 \u0dc4\u0dbd\u0ddd'
    });


/**
 * @desc The input method name for Tamil.
 */
msgs.MSG_TRANSLITERATION_TA = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'vanakkam \u2192 \u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd'
    });


/**
 * @desc The input method name for Telugu.
 */
msgs.MSG_TRANSLITERATION_TE = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'emandi \u2192 \u0c0f\u0c2e\u0c02\u0c21\u0c40'
    });


/**
 * @desc The input method name for Tigrinya.
 */
msgs.MSG_TRANSLITERATION_TI = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'selam \u2192 \u1230\u120b\u121d'
    });


/**
 * @desc The input method name for Ukraine.
 */
msgs.MSG_TRANSLITERATION_UK = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'pryvit \u2192 \u043f\u0440\u0438\u0432\u0456\u0442'
    });


/**
 * @desc The input method name for Urdu.
 */
msgs.MSG_TRANSLITERATION_UR = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'salam \u2190 \u0633\u0644\u0627\u0645'
    });


/**
 * @desc The input method name for Vietnamese.
 */
msgs.MSG_TRANSLITERATION_VI = goog.getMsg(
    'Transliteration ({$label})',
    {
      'label': 'chao \u2192 ch\xe0o'
    });

// End of the Input Tools name.


/**
 * @desc "Back" button on handwriting panel
*/
msgs.MSG_HANDWRITING_BACK = goog.getMsg('Back');


/**
 * @desc Handwriting Input Tool need network access. If there is no network,
 * shows the message on handwriting panel
*/
msgs.MSG_HANDWRITING_NETOWRK_ERROR = goog.getMsg('Sorry, you can not use' +
    ' handwriting, because network is unavailable.');


/**
 * @desc Show the privacy message when user open handwriting IME first time.
 */
msgs.MSG_HANDWRITING_PRIVACY_INFO = goog.getMsg('Your input will be' +
    ' sent to Google servers to recognize text.');


/**
 * @desc Show the privacy message when user open voice IME first time.
 */
msgs.MSG_VOICE_PRIVACY_INFO = goog.getMsg('Your voice input will be' +
    ' sent to Google servers to recognize text.');


/**
 * @desc The message to indicate a character is in uppercase.
 */
msgs.MSG_CAPITAL = goog.getMsg('capital');


/**
 * @desc The name of the backspace key.
 */
msgs.MSG_BACKSPACE = goog.getMsg('backspace');


/**
 * @desc The name of the tab key.
 */
msgs.MSG_TAB = goog.getMsg('tab');


/**
 * @desc The name of the enter key.
 */
msgs.MSG_ENTER = goog.getMsg('enter');


/**
 * @desc The name of the space key.
 */
msgs.MSG_SPACE = goog.getMsg('space');


/**
 * @desc The name of the shift key.
 */
msgs.MSG_SHIFT = goog.getMsg('shift');


/**
 * @desc The name of the ctrl key.
 */
msgs.MSG_CTRL = goog.getMsg('ctrl');


/**
 * @desc The name of the alt key.
 */
msgs.MSG_ALT = goog.getMsg('alter');


/**
 * @desc The name of the altgr key.
 */
msgs.MSG_ALTGR = goog.getMsg('Alt Graphic');


/**
 * @desc The name of the capslock key.
 */
msgs.MSG_CAPSLOCK = goog.getMsg('capslock');


/**
 * @desc The message to indicate the shift key is locked.
 */
msgs.MSG_SHIFT_LOCK = goog.getMsg('Shift Lock');


/**
 * @desc The message to indicate it is the left arrow.
 */
msgs.MSG_LEFT_ARROW = goog.getMsg('left arrow');


/**
 * @desc The message to indicate it is the right arrow.
 */
msgs.MSG_RIGHT_ARROW = goog.getMsg('right arrow');


/**
 * @desc The message to indicate it is the up arrow.
 */
msgs.MSG_UP_ARROW = goog.getMsg('up arrow');


/**
 * @desc The message to indicate it is the down arrow.
 */
msgs.MSG_DOWN_ARROW = goog.getMsg('down arrow');


/**
 * @desc The message to indicate users this key will hide the keyboard.
 */
msgs.MSG_HIDE_KEYBOARD = goog.getMsg('hide keyboard');


/**
 * @desc The message to indicate users this key will switch to previous
 * keyboard.
 */
msgs.MSG_GLOBE = goog.getMsg('switch to previous keyboard');


/**
 * @desc The message to indicate users that press this key will open keyboard
 * menu for switching IMEs/layouts or open IME settings.
 */
msgs.MSG_MENU_KEY = goog.getMsg('open keyboard menu');


/**
 * @desc The message to indicate users that press this key will close the menu
 * for switching IMEs/layouts or open IME settings.
 */
msgs.MSG_DISMISS_MENU = goog.getMsg('dismiss keyboard menu');


/**
 * @desc The message to indicate users that press this button will open emoji
 * keyset.
 */
msgs.MSG_FOOTER_EMOJI_BUTTON = goog.getMsg('switch to emoji');


/**
 * @desc The message to indicate users that press this button will open
 * handwriting keyset.
 */
msgs.MSG_FOOTER_HANDWRITING_BUTTON = goog.getMsg('switch to handwriting');


/**
 * @desc The message to indicate users that press this button will open input
 * method settings.
 */
msgs.MSG_FOOTER_SETTINGS_BUTTON = goog.getMsg('open input method settings');


/**
 * @desc The message to indicate to users that pressing this button will make
 * the virtual keyboard floating, which means users can move the virtual
 * keyboard to anywhere on the screen.
 */
msgs.MSG_FOOTER_FLOATING_BUTTON = goog.getMsg('make virtual keyboard movable');


/**
 * @desc The message to indicate to users that pressing this button will dock
 * the virtual keyboard, which means the virtual keyboard will show at the
 * bottom of the screen and is as wide as the screen.
 */
msgs.MSG_FOOTER_DOCKING_BUTTON = goog.getMsg('dock virtual keyboard');


/**
 * @desc The message prefix which indicate users that press this button will
 * switch to a new keyboard.
 */
msgs.MSG_SWITCH_TO_KEYBOARD_PREFIX = goog.getMsg('switch to ');


/**
 * @desc The message prefix which indicate users the current selected keyboard.
 */
msgs.MSG_CURRENT_KEYBOARD_PREFIX = goog.getMsg('current selected keyboard ');


/**
 * @desc The message to indicate the button will switch to a new layout.
 */
msgs.MSG_SWITCH_TO = goog.getMsg('switch to ');


/**
 * @desc The message to indicate it has switched to a new layout.
 */
msgs.MSG_SWITCHED_TO = goog.getMsg('switched to ');


/**
 * @desc Show "Got it" button on a popup message. Uses click it means users saw
 * the message and want to hide the message.
 */
msgs.MSG_GOT_IT = goog.getMsg('Got it');


/**
 * @desc Option for input to never automatically correct or change user input
 * from keyboard.
 */
msgs.MSG_NEVER_AUTO_CORRECT = goog.getMsg('Off');


/**
 * @desc Option for input to sometimes automatically correct user input to what
 * the model thinks is the intended input when confidence is high.
 */
msgs.MSG_SOMETIMES_AUTO_CORRECT = goog.getMsg('Modest');


/**
 * @desc Option for input to always automatically correct user input to what
 * the model thinks is the intended input when confidence is high.
 */
msgs.MSG_ALWAYS_AUTO_CORRECT = goog.getMsg('Aggressive');


/**
 * @desc Option to determine how candidates are triggered. This one displays
 * input candidates only on backspace.
 */
msgs.MSG_SHOW_CANDIDATES_BACKSPACE =
    goog.getMsg('Show suggestion dropdown by Backspace');


/**
 * @desc Option to determine how candidates are triggered. This one displays
 * input candidates after waiting 500ms.
 */
msgs.MSG_SHOW_CANDIDATES_500 =
    goog.getMsg('Show suggestion dropdown after 500ms');


/**
 * @desc Option to determine how candidates are triggered. This one displays
 * input candidates after waiting 1 second.
 */
msgs.MSG_SHOW_CANDIDATES_1000 =
    goog.getMsg('Show suggestion dropdown after 1s');


/**
 * @desc Option to determine how candidates are triggered. This one displays
 * input candidates after waiting 2 second.
 */
msgs.MSG_SHOW_CANDIDATES_2000 =
    goog.getMsg('Show suggestion dropdown after 2s');


/**
 * @desc Option to determine how candidates are triggered. This one displays
 * input candidates after waiting 5 second.
 */
msgs.MSG_SHOW_CANDIDATES_5000 =
    goog.getMsg('Show suggestion dropdown after 5s');


/**
 * @desc The title for the settings page of latin input methods.
 */
msgs.MSG_LATIN_SETTINGS_PAGE = goog.getMsg('Settings');


/**
 * @desc Title for options to determine how often the input method
 * automatically corrects user input when confidence is high.
 */
msgs.MSG_AUTO_CORRECTION_LEVEL = goog.getMsg('Auto-correction');


/**
 * @desc Option to enable automatic capitalization of first character in a
 * sentence.
 */
msgs.MSG_ENABLE_CAPITALIZATION = goog.getMsg('Auto-capitalization');


/**
 * @desc Title for options to determine how often the input method
 * automatically corrects user input when confidence is high.
 */
msgs.MSG_PHYSICAL_AUTO_CORRECTION_LEVEL = goog.getMsg('Auto-correction');


/**
 * @desc Option to enable automatic capitalization of first character in a
 * sentence.
 */
msgs.MSG_PHYSICAL_ENABLE_CAPITALIZATION = goog.getMsg('Auto-capitalization');


/**
 * @desc Title for options to determine whether to show the candidates.
 */
msgs.MSG_SHOW_HANGUL_CANDIDATE = goog.getMsg('Show candidates in Hangul mode');


/**
 * @desc Title for options to determine when to show candidates.
 */
msgs.MSG_SHOW_CANDIDATE_MODE = goog.getMsg('Delay of suggestion dropdown');


/**
 * @desc Option to enable prediction of next word to be typed.
 */
msgs.MSG_ENABLE_PREDICTION = goog.getMsg('Enable next word prediction');


/**
 * @desc The title for the Armenian Phonetic Keyboard (Armenian) settings page.
 */
msgs.MSG_AM_PHONETIC_ARM_SETTINGS_PAGE =
    goog.getMsg('Armenian Phonetic Keyboard Settings Page');


/**
 * @desc The title for the Belgian Keyboard (French) settings page.
 */
msgs.MSG_BE_FRA_SETTINGS_PAGE =
    goog.getMsg('Belgian Keyboard (French) Settings Page');


/**
 * @desc The title for the Belgian Keyboard (German) settings page.
 */
msgs.MSG_BE_GER_SETTINGS_PAGE =
    goog.getMsg('Belgian Keyboard (German) Settings Page');


/**
 * @desc The title for the Belgian Keyboard (Dutch) settings page.
 */
msgs.MSG_BE_NLD_SETTINGS_PAGE =
    goog.getMsg('Belgian Keyboard (Dutch) Settings Page');


/**
 * @desc The title for the Bulgarian Keyboard (Bulgarian) settings page.
 */
msgs.MSG_BG_BUL_SETTINGS_PAGE =
    goog.getMsg('Bulgarian Keyboard Settings Page');


/**
 * @desc The title for the Bulgarian Phonetic Keyboard (Bulgarian) settings
 * page.
 */
msgs.MSG_BG_PHONETIC_BUL_SETTINGS_PAGE =
    goog.getMsg('Bulgarian Phonetic Keyboard Settings Page');


/**
 * @desc The title for the Brazilian Keyboard (Brazilian Portuguese) settings
 * page.
 */
msgs.MSG_BR_POR_SETTINGS_PAGE =
    goog.getMsg('Brazilian Keyboard (Brazilian Portuguese) Settings Page');


/**
 * @desc The title for the Belarusian Keyboard (Belarusian) settings page.
 */
msgs.MSG_BY_BEL_SETTINGS_PAGE =
    goog.getMsg('Belarusian Keyboard Settings Page');


/**
 * @desc The title for the Canadian French Keyboard (French) settings page.
 */
msgs.MSG_CA_FRA_SETTINGS_PAGE =
    goog.getMsg('Canadian French Keyboard (French) Settings Page');


/**
 * @desc The title for the Canadian English Keyboard (English) settings page.
 */
msgs.MSG_CA_ENG_ENG_SETTINGS_PAGE =
    goog.getMsg('Canadian English Keyboard (English) Settings Page');


/**
 * @desc The title for the Canadian Multilingual Keyboard (French) settings
 * page.
 */
msgs.MSG_CA_MULTIX_FRA_SETTINGS_PAGE =
    goog.getMsg('Canadian Multilingual Keyboard (French) Settings Page');


/**
 * @desc The title for the Swiss Keyboard (German) settings page.
 */
msgs.MSG_CH_GER_SETTINGS_PAGE =
    goog.getMsg('Swiss Keyboard (German) Settings Page');


/**
 * @desc The title for the Swiss French Keyboard (French) settings page.
 */
msgs.MSG_CH_FR_FRA_SETTINGS_PAGE =
    goog.getMsg('Swiss French Keyboard (French) Settings Page');


/**
 * @desc The title for the Czech Keyboard (Czech) settings page.
 */
msgs.MSG_CZ_CZE_SETTINGS_PAGE =
    goog.getMsg('Czech Keyboard Settings Page');


/**
 * @desc The title for the Czech Qwerty Keyboard (Czech) settings page.
 */
msgs.MSG_CZ_QWERTY_CZE_SETTINGS_PAGE =
    goog.getMsg('Czech Qwerty Keyboard Settings Page');


/**
 * @desc The title for the German Keyboard (German) settings page.
 */
msgs.MSG_DE_GER_SETTINGS_PAGE =
    goog.getMsg('German Keyboard Settings Page');


/**
 * @desc The title for the German Neo 2 Keyboard (German) settings page.
 */
msgs.MSG_DE_NEO_GER_SETTINGS_PAGE =
    goog.getMsg('German Neo 2 Keyboard Settings Page');


/**
 * @desc The title for the Danish Keyboard (Danish) settings page.
 */
msgs.MSG_DK_DAN_SETTINGS_PAGE =
    goog.getMsg('Danish Keyboard Settings Page');


/**
 * @desc The title for the Estonian Keyboard (Estonian) settings page.
 */
msgs.MSG_EE_EST_SETTINGS_PAGE =
    goog.getMsg('Estonian Keyboard Settings Page');


/**
 * @desc The title for the Spanish Keyboard (Spanish) settings page.
 */
msgs.MSG_ES_SPA_SETTINGS_PAGE =
    goog.getMsg('Spanish Keyboard Settings Page');


/**
 * @desc The title for the Catalan Keyboard (Catalan) settings page.
 */
msgs.MSG_ES_CAT_CAT_SETTINGS_PAGE =
    goog.getMsg('Catalan Keyboard Settings Page');


/**
 * @desc The title for the Faroese Keyboard (Faroese) settings page.
 */
msgs.MSG_FO_FAO_SETTINGS_PAGE =
    goog.getMsg('Faroese Keyboard Settings Page');


/**
 * @desc The title for the Finnish Keyboard (Finnish) settings page.
 */
msgs.MSG_FI_FIN_SETTINGS_PAGE =
    goog.getMsg('Finnish Keyboard Settings Page');


/**
 * @desc The title for the French BÉPO Keyboard (French) settings page.
 */
msgs.MSG_FR_BEPO_FRA_SETTINGS_PAGE =
    goog.getMsg('French BÉPO Keyboard (French) Settings Page');


/**
 * @desc The title for the French Keyboard (French) settings page.
 */
msgs.MSG_FR_FRA_SETTINGS_PAGE =
    goog.getMsg('French Keyboard Settings Page');


/**
 * @desc The title for the Uk Dvorak Keyboard (English) settings page.
 */
msgs.MSG_GB_DVORAK_ENG_SETTINGS_PAGE =
    goog.getMsg('Uk Dvorak Keyboard (English) Settings Page');


/**
 * @desc The title for the Uk Keyboard (English) settings page.
 */
msgs.MSG_GB_EXTD_ENG_SETTINGS_PAGE =
    goog.getMsg('Uk Keyboard (English) Settings Page');


/**
 * @desc The title for the Georgian Keyboard (Georgian) settings page.
 */
msgs.MSG_GE_GEO_SETTINGS_PAGE =
    goog.getMsg('Georgian Keyboard Settings Page');


/**
 * @desc The title for the Greek Keyboard (Greek) settings page.
 */
msgs.MSG_GR_GRE_SETTINGS_PAGE =
    goog.getMsg('Greek Keyboard Settings Page');


/**
 * @desc The title for the Croatian Keyboard (Croatian) settings page.
 */
msgs.MSG_HR_SCR_SETTINGS_PAGE =
    goog.getMsg('Croatian Keyboard Settings Page');


/**
 * @desc The title for the Hungarian Keyboard (Hungarian) settings page.
 */
msgs.MSG_HU_HUN_SETTINGS_PAGE =
    goog.getMsg('Hungarian Keyboard Settings Page');


/**
 * @desc The title for the Hungarian Qwerty Keyboard (Hungarian) settings page.
 */
msgs.MSG_HU_QWERTY_HUN_SETTINGS_PAGE =
    goog.getMsg('Hungarian Qwerty Keyboard Settings Page');


/**
 * @desc The title for the Irish Keyboard (Irish) settings page.
 */
msgs.MSG_IE_GA_SETTINGS_PAGE =
    goog.getMsg('Irish Keyboard Settings Page');


/**
 * @desc The title for the Hebrew Keyboard (Hebrew) settings page.
 */
msgs.MSG_IL_HEB_SETTINGS_PAGE =
    goog.getMsg('Hebrew Keyboard Settings Page');


/**
 * @desc The title for the Icelandic Keyboard (Icelandic) settings page.
 */
msgs.MSG_IS_ICE_SETTINGS_PAGE =
    goog.getMsg('Icelandic Keyboard Settings Page');


/**
 * @desc The title for the Italian Keyboard (Italian) settings page.
 */
msgs.MSG_IT_ITA_SETTINGS_PAGE =
    goog.getMsg('Italian Keyboard Settings Page');


/**
 * @desc The title for the Japanese Keyboard (Japanese) settings page.
 */
msgs.MSG_JP_JPN_SETTINGS_PAGE =
    goog.getMsg('Japanese Keyboard Settings Page');


/**
 * @desc The title for the Latin American Keyboard (Spanish) settings page.
 */
msgs.MSG_LATAM_SPA_SETTINGS_PAGE =
    goog.getMsg('Latin American Keyboard (Spanish) Settings Page');


/**
 * @desc The title for the Lithuanian Keyboard (Lithuanian) settings page.
 */
msgs.MSG_LT_LIT_SETTINGS_PAGE =
    goog.getMsg('Lithuanian Keyboard Settings Page');


/**
 * @desc The title for the Latvian Keyboard (Latvian, Lettish) settings page.
 */
msgs.MSG_LV_APOSTROPHE_LAV_SETTINGS_PAGE =
    goog.getMsg('Latvian Keyboard (Latvian, Lettish) Settings Page');


/**
 * @desc The title for the Mongolian Keyboard (Mongolian) settings page.
 */
msgs.MSG_MN_MON_SETTINGS_PAGE =
    goog.getMsg('Mongolian Keyboard Settings Page');


/**
 * @desc The title for the Norwegian Keyboard (Norwegian) settings page.
 */
msgs.MSG_NO_NOB_SETTINGS_PAGE =
    goog.getMsg('Norwegian Keyboard Settings Page');


/**
 * @desc The title for the Polish Keyboard (Polish) settings page.
 */
msgs.MSG_PL_POL_SETTINGS_PAGE =
    goog.getMsg('Polish Keyboard Settings Page');


/**
 * @desc The title for the Portuguese Keyboard (Portuguese) settings page.
 */
msgs.MSG_PT_POR_SETTINGS_PAGE =
    goog.getMsg('Portuguese Keyboard Settings Page');


/**
 * @desc The title for the Romanian Keyboard (Romanian) settings page.
 */
msgs.MSG_RO_RUM_SETTINGS_PAGE =
    goog.getMsg('Romanian Keyboard Settings Page');


/**
 * @desc The title for the Serbian Keyboard (Serbian) settings page.
 */
msgs.MSG_RS_SRP_SETTINGS_PAGE =
    goog.getMsg('Serbian Keyboard Settings Page');


/**
 * @desc The title for the Russian Keyboard (Russian) settings page.
 */
msgs.MSG_RU_RUS_SETTINGS_PAGE =
    goog.getMsg('Russian Keyboard Settings Page');


/**
 * @desc The title for the Russian Phonetic Keyboard (Russian) settings page.
 */
msgs.MSG_RU_PHONETIC_RUS_SETTINGS_PAGE =
    goog.getMsg('Russian Phonetic Keyboard Settings Page');


/**
 * @desc The title for the Swedish Keyboard (Swedish) settings page.
 */
msgs.MSG_SE_SWE_SETTINGS_PAGE =
    goog.getMsg('Swedish Keyboard Settings Page');


/**
 * @desc The title for the Slovenian Keyboard (Slovenian) settings page.
 */
msgs.MSG_SI_SLV_SETTINGS_PAGE =
    goog.getMsg('Slovenian Keyboard Settings Page');


/**
 * @desc The title for the Slovakian Keyboard (Slovak) settings page.
 */
msgs.MSG_SK_SLO_SETTINGS_PAGE =
    goog.getMsg('Slovakian Keyboard Settings Page');


/**
 * @desc The title for the Turkish Keyboard (Turkish) settings page.
 */
msgs.MSG_TR_TUR_SETTINGS_PAGE =
    goog.getMsg('Turkish Keyboard Settings Page');

/**
 * @desc The title for the Turkish-F Keyboard (Turkish) settings page.
 */
msgs.MSG_TR_F_TUR_SETTINGS_PAGE =
    goog.getMsg('Turkish-F Keyboard Settings Page');


/**
 * @desc The title for the Ukrainian Keyboard (Ukrainian) settings page.
 */
msgs.MSG_UA_UKR_SETTINGS_PAGE =
    goog.getMsg('Ukrainian Keyboard Settings Page');


/**
 * @desc The title for the US Keyboard (English) settings page.
 */
msgs.MSG_US_ENG_SETTINGS_PAGE =
    goog.getMsg('US Keyboard (English) Settings Page');


/**
 * @desc The title for the US Keyboard (Filipino) settings page.
 */
msgs.MSG_US_FIL_SETTINGS_PAGE =
    goog.getMsg('US Keyboard (Filipino) Settings Page');


/**
 * @desc The title for the US Keyboard (Indonesian) settings page.
 */
msgs.MSG_US_IND_SETTINGS_PAGE =
    goog.getMsg('US Keyboard (Indonesian) Settings Page');


/**
 * @desc The title for the US Keyboard (Malay) settings page.
 */
msgs.MSG_US_MSA_SETTINGS_PAGE =
    goog.getMsg('US Keyboard (Malay) Settings Page');


/**
 * @desc The title for the US Extended Keyboard (English) settings page.
 */
msgs.MSG_US_ALTGR_INTL_ENG_SETTINGS_PAGE =
    goog.getMsg('US Extended Keyboard (English) Settings Page');


/**
 * @desc The title for the US Colemak Keyboard (English) settings page.
 */
msgs.MSG_US_COLEMAK_ENG_SETTINGS_PAGE =
    goog.getMsg('US Colemak Keyboard (English) Settings Page');


/**
 * @desc The title for the US Dvorak Keyboard (English) settings page.
 */
msgs.MSG_US_DVORAK_ENG_SETTINGS_PAGE =
    goog.getMsg('US Dvorak Keyboard (English) Settings Page');


/**
 * @desc The title for the US International Keyboard (English) settings page.
 */
msgs.MSG_US_INTL_ENG_SETTINGS_PAGE =
    goog.getMsg('US International Keyboard (English) Settings Page');


/**
 * @desc The title for the US International Keyboard (Dutch) settings page.
 */
msgs.MSG_US_INTL_NLD_SETTINGS_PAGE =
    goog.getMsg('US International Keyboard (Dutch) Settings Page');


/**
 * @desc The title for the US International Keyboard (Brazilian Portuguese)
 * settings page.
 */
msgs.MSG_US_INTL_POR_SETTINGS_PAGE =
    goog.getMsg(
        'US International Keyboard (Brazilian Portuguese) Settings Page');


/**
 * @desc The title for the section containing touch-enabled keyboard settings.
 */
msgs.MSG_TOUCH_KEYBOARD = goog.getMsg('On-screen keyboard');


/**
 * @desc The title for the section containing physical-enabled keyboard
 * settings.
 */
msgs.MSG_PHYSICAL_KEYBOARD = goog.getMsg('Physical keyboard');


/**
 * @desc Description of a checkbox that when checked, will produce a sound for
 * every keypress on the touch keyboard, and when unchecked, will be silent.
 */
msgs.MSG_SOUND_ON_KEYPRESS = goog.getMsg('Sound on keypress');


/**
 * @desc Description of a checkbox that when checked, will replace two
 * consecutive space key presses with a period and a space, thus making it
 * easier to type long paragraphs by double tapping space at the end of a
 * sentence instead of finding the period key and pressing that and then space.
 */
msgs.MSG_DOUBLE_SPACE_PERIOD = goog.getMsg('Double-space to type period');


/**
 * @desc Option to enable auto-completion of the word being typed.
 */
msgs.MSG_ENABLE_COMPLETION = goog.getMsg('Enable completion');


/**
 * @desc It is the description of Korean setting pages.
 */
msgs.MSG_KOREAN_SETTINGS_PAGE =
    goog.getMsg('Korean Input Method Settings Page');


/**
 * @desc It is the description of Korean Keyboard Layouts.
 */
msgs.MSG_KOREAN_KEYBOARD_LAYOUT = goog.getMsg('Korean Keyboard Layout');


/**
 * @desc It is the description of Korean Syllable Inputs.
 */
msgs.MSG_KOREAN_SYLLABLE_INPUT = goog.getMsg('Input a syllable at a time');


/**
 * @desc It is the description of Korean Syllable Inputs.
 */
msgs.MSG_KOREAN_HANJA_DISPLAY = goog.getMsg('Hanja Candidate Mode');


/**
 * @desc It is the description of whether the user input Korean or English.
 */
msgs.MSG_INPUT_HANGUL = goog.getMsg('Hangul Mode');


/**
 * @desc It is the description of whether the user input hangul or hanja.
 */
msgs.MSG_INPUT_HANJA = goog.getMsg('Hanja Mode');


/**
 * @desc Title for the switch to compact layout menu item.
 */
msgs.MSG_SWITCH_TO_COMPACT_LAYOUT = goog.getMsg('Switch to compact layout');


/**
 * @desc Title for the switch to full layout menu item.
 */
msgs.MSG_SWITCH_TO_FULL_LAYOUT = goog.getMsg('Switch to full layout');


/**
 * @desc Title for the pause key in the phonepad keyset.
 */
msgs.MSG_PAUSE = goog.getMsg('Pause');


/**
 * @desc Title for the pause key in the phonepad keyset.
 */
msgs.MSG_WAIT = goog.getMsg('Wait');


/**
 * @desc Button to initiate moving floating virtual keyboard by press and drag.
 */
msgs.MSG_DRAG_BUTTON = goog.getMsg('Drag to move virtual keyboard');


/**
 * @desc Emoji tab spoken feedback label for category "recent".
 */
msgs.MSG_EMOJI_TAB_RECENT = goog.getMsg('Emoji category recent');


/**
 * @desc Emoji tab spoken feedback label for category "hot".
 */
msgs.MSG_EMOJI_TAB_HOT = goog.getMsg('Emoji category hot');


/**
 * @desc Emoji tab spoken feedback label for category "face".
 */
msgs.MSG_EMOJI_TAB_FACE = goog.getMsg('Emoji category face');


/**
 * @desc Emoji tab spoken feedback label for category "symbol".
 */
msgs.MSG_EMOJI_TAB_SYMBOL = goog.getMsg('Emoji category symbol');


/**
 * @desc Emoji tab spoken feedback label for category "nature".
 */
msgs.MSG_EMOJI_TAB_NATURE = goog.getMsg('Emoji category nature');


/**
 * @desc Emoji tab spoken feedback label for category "place".
 */
msgs.MSG_EMOJI_TAB_PLACE = goog.getMsg('Emoji category place');


/**
 * @desc Emoji tab spoken feedback label for category "object".
 */
msgs.MSG_EMOJI_TAB_OBJECT = goog.getMsg('Emoji category object');


/**
 * @desc Emoji tab spoken feedback label for category "emoticon".
 */
msgs.MSG_EMOJI_TAB_EMOTICON = goog.getMsg('Emoji category emoticon');


/**
 * @desc Whether to enable voice input tools
 */
msgs.MSG_VOICE = goog.getMsg('Voice');


/**
 * @desc Turn on voice input tool.
 */
msgs.MSG_VOICE_TURN_ON = goog.getMsg('turn on voice input tool');


/**
 * @desc Turn off voice input tool.
 */
msgs.MSG_VOICE_TURN_OFF = goog.getMsg('turn off voice input tool');


/**
 * @desc Adds the current edition word into personal dictionary.
 */
msgs.MSG_ADD_TO_PERSONAL_DICTIONARY = goog.getMsg('Add to personal dictionary');


/**
 * @desc Adds the current edition word into dictionary.
 */
msgs.MSG_ADD_TO_DICTIONARY = goog.getMsg('Add to dictionary');


/**
 * @desc Adds the given word  into dictionary. The given word is a placeholder.
 */
msgs.MSG_ADD_WORD_TO_DICTIONARY = goog.getMsg('Add "{$word}" to dictionary', {
  'word': '$1'
});


/**
 * @desc Ignore auto correction feature for the given word.
 */
msgs.MSG_IGNORE_CORRECTION = goog.getMsg('Ignore correction for');


/**
 * @desc Ignore auto correction feature for the given word.
 */
msgs.MSG_IGNORE_CORRECTION_SHORT = goog.getMsg('Ignore correction');


/**
 * @desc Settings for a Input Tool.
 */
msgs.MSG_SETTINGS = goog.getMsg('Settings');


/**
 * @desc expand the menu
 */
msgs.MSG_EXPAND = goog.getMsg('Expand');


/**
 * @desc expand the menu
 */
msgs.MSG_SHRINK_CANDIDATES = goog.getMsg('shrink candidate list');


/**
 * @desc expand the menu
 */
msgs.MSG_EXPAND_CANDIDATES = goog.getMsg('expand candidate list');


/**
 * @desc Title for gesture editing.
 */
msgs.MSG_ENABLE_GESTURE_EDITING = goog.getMsg(
    'Enable swipe gestures');


/**
 * @desc Description for gesture editing.
 */
msgs.MSG_ENABLE_GESTURE_EDITING_DESC = goog.getMsg(
    'Swipe from the edges of the keyboard to move the cursor, or from the ' +
        'backspace key to delete whole words');


/**
 * @desc Title for gesture typing.
 */
msgs.MSG_ENABLE_GESTURE_TYPING = goog.getMsg(
    'Enable gesture typing');


/**
 * @desc Description for gesture typing.
 */
msgs.MSG_ENABLE_GESTURE_TYPING_DESC = goog.getMsg(
    'Input a word by sliding through the letters');
