import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('');

	test('Does it look good?', async function() {
		this.enableTimeouts(false);

		const goodOption = "Does it look GOOD?";
		const badOption = "Does it look BAD?";
		assert(await vscode.window.showQuickPick([goodOption, badOption]), goodOption);

		return true;
	});
});
