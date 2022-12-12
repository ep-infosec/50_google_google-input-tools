# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# This file is meant to be included into a target to provide a rule
# to invoke protoc in a consistent manner. For Java-targets, see
# protoc_java.gypi.
#
# To use this, create a gyp target with the following form:
# {
#   'target_name': 'my_proto_lib',
#   'type': 'static_library',
#   'sources': [
#     'foo.proto',
#     'bar.proto',
#   ],
#   'variables': {
#     # Optional, see below: 'proto_in_dir': '.'
#     'proto_out_dir': 'dir/for/my_proto_lib'
#   },
#   'includes': ['path/to/this/gypi/file'],
# }
# If necessary, you may add normal .cc files to the sources list or other gyp
# dependencies.  The proto headers are guaranteed to be generated before any
# source files, even within this target, are compiled.
#
# The 'proto_in_dir' variable must be the relative path to the
# directory containing the .proto files.  If left out, it defaults to '.'.
#
# The 'proto_out_dir' variable specifies the path suffix that output
# files are generated under.  Targets that gyp-depend on my_proto_lib
# will be able to include the resulting proto headers with an include
# like:
#   #include "dir/for/my_proto_lib/foo.pb.h"
#
# If you need to add an EXPORT macro to a protobuf's c++ header, set the
# 'cc_generator_options' variable with the value: 'dllexport_decl=FOO_EXPORT:'
# e.g. 'dllexport_decl=BASE_EXPORT:'
#
# It is likely you also need to #include a file for the above EXPORT macro to
# work. You can do so with the 'cc_include' variable.
# e.g. 'base/base_export.h'
#
# Implementation notes:
# A proto_out_dir of foo/bar produces
#   <(SHARED_INTERMEDIATE_DIR)/protoc_out/foo/bar/{file1,file2}.pb.{cc,h}
#   <(SHARED_INTERMEDIATE_DIR)/pyproto/foo/bar/{file1,file2}_pb2.py

{
  'variables': {
    'cc_dir': '<(SHARED_INTERMEDIATE_DIR)/protoc_out/<(proto_out_dir)',
    'py_dir': '<(PRODUCT_DIR)/pyproto/<(proto_out_dir)',
    'cc_generator_options%': '',
    'cc_include%': '',
    'proto_in_dir%': '.',
  },
  'conditions': [
    ['OS=="win"', {
      'variables' : {
        'protoc': '<!(echo %PROTOC%)',
      },
    },],
    ['OS=="linux"', {
      'variables': {
         'protoc': '<!(which protoc)',
      },
    }],
  ],
  'rules': [
    {
      'rule_name': 'genproto',
      'extension': 'proto',
      'inputs': [
        '<(protoc)',
      ],
      'outputs': [
        '<(cc_dir)/<(RULE_INPUT_ROOT).pb.cc',
        '<(cc_dir)/<(RULE_INPUT_ROOT).pb.h',
      ],
      'action': [
        '<(protoc)',
        # Using the --arg val form (instead of --arg=val) allows gyp's msvs rule
        # generation to correct 'val' which is a path.
        '--proto_path','<(proto_in_dir)',
        # Naively you'd use <(RULE_INPUT_PATH) here, but protoc requires
        # --proto_path is a strict prefix of the path given as an argument.
        '<(proto_in_dir)/<(RULE_INPUT_ROOT)<(RULE_INPUT_EXT)',
        '--cpp_out', '<(cc_generator_options)<(cc_dir)',
      ],
      'msvs_cygwin_shell': 0,
      'message': 'Generating C++ and Python code from <(RULE_INPUT_PATH)',
      'process_outputs_as_sources': 1,
    },
    {
      'rule_name': 'genprotodevel',  # all but extension and name are the same
      'extension': 'protodevel',
      'inputs': [
        # Generating two rules with the same input will fail. Adding a trailing
        # whitespace can work around the problem
        '<(protoc) ',
      ],
      'outputs': [
        '<(cc_dir)/<(RULE_INPUT_ROOT).pb.cc',
        '<(cc_dir)/<(RULE_INPUT_ROOT).pb.h',
      ],
      'action': [
        '<(protoc)',
        # Using the --arg val form (instead of --arg=val) allows gyp's msvs rule
        # generation to correct 'val' which is a path.
        '--proto_path','<(proto_in_dir)',
        # Naively you'd use <(RULE_INPUT_PATH) here, but protoc requires
        # --proto_path is a strict prefix of the path given as an argument.
        '<(proto_in_dir)/<(RULE_INPUT_ROOT)<(RULE_INPUT_EXT)',
        '--cpp_out', '<(cc_generator_options)<(cc_dir)',
      ],
      'msvs_cygwin_shell': 0,
      'message': 'Generating C++ and Python code from <(RULE_INPUT_PATH)',
      'process_outputs_as_sources': 1,
    },
  ],
  'include_dirs': [
    '<(SHARED_INTERMEDIATE_DIR)/protoc_out',
    '<(DEPTH)',
  ],
  'direct_dependent_settings': {
    'include_dirs': [
      '<(SHARED_INTERMEDIATE_DIR)/protoc_out',
      '<(DEPTH)',
    ],
  },
  # This target exports a hard dependency because it generates header
  # files.
  'hard_dependency': 1,
  'target_conditions': [
    ['_target_name.endswith("_x64")', {
      'export_dependent_settings': [
        '<(DEPTH)/third_party/protobuf/protobuf.gyp:protobuf_x64',
      ],
    }, { #else
      'export_dependent_settings': [
        '<(DEPTH)/third_party/protobuf/protobuf.gyp:protobuf',
      ],
    },],
  ],
}
