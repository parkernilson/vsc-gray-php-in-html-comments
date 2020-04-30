import * as vscode from 'vscode';

/**
 * extension is activated the very first time this command is executed
 */
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "gray-php-in-html-comments" is now active!');

	vscode.commands.registerCommand('grayPhpInHtmlComments.activate', () => {
		vscode.window.showInformationMessage('Gray PHP in HTML Comments activated!');
	});
}

// this method is called when the extension is deactivated
export function deactivate() {}
