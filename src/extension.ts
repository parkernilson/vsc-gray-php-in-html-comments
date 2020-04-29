import * as vscode from 'vscode';

/**
 * extension is activated the very first time this command is executed
 */
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "gray-php-in-html-comments" is now active!');
}

// this method is called when the extension is deactivated
export function deactivate() {}
