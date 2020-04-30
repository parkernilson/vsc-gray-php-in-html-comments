// Copyright 2020 Parker Nilson
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as vscode from 'vscode';

/**
 * extension is activated the very first time this command is executed
 */
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "Gray PHP In HTML Comments" is now active!');
}

// this method is called when the extension is deactivated
export function deactivate() {}
