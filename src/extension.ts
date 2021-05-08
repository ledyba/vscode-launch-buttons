// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('launch-buttons.run', () => {
    vscode.commands.executeCommand('workbench.action.debug.run');
  }));
  context.subscriptions.push(vscode.commands.registerCommand('launch-buttons.debug', () => {
    vscode.commands.executeCommand('workbench.action.debug.start');
  }));
}

// this method is called when your extension is deactivated
export function deactivate() {

}
