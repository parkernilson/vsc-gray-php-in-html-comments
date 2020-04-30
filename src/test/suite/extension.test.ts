import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('');

	test('Visual Inspection', async function() {
		this.enableTimeouts(false);

		const goodOption = "All of the visual tests look good.";
		const badOption = "There are one or more problems in the visual tests.";
		assert(await vscode.window.showQuickPick([goodOption, badOption], {
			canPickMany: false,
			ignoreFocusOut: true,
			placeHolder: "Please inspect the test files and indicate if all of the visual tests pass.",
		}), goodOption);

		return true;
	});
});
