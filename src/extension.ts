// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const kRunRegexp = /run/i;

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand('setContext', 'launch-buttons.enabled', true)
  .then(() => {
    context.subscriptions.push(vscode.commands.registerCommand('launch-buttons.run', () => {
      vscode.tasks.fetchTasks().then((tasks) => {
        let globalTask: vscode.Task | null = null;
        let workspaceTask: vscode.Task | null = null;
        let workspaceFolderTask: vscode.Task | null = null;
        let defaultTask: vscode.Task | null = null;
        for(const task of tasks) {
          if(kRunRegexp.test(task.name)){
            if (task.scope === vscode.TaskScope.Global) {
              globalTask = task;
            } else if (task.scope === vscode.TaskScope.Workspace) {
              workspaceTask = task;
            } else if (task.scope === undefined) {
              defaultTask = task;
            } else {
              workspaceFolderTask = task;
            }
          } else {
            if(task.group?.isDefault === true) {
              defaultTask = task;
            }
          }
        }
        if(workspaceTask !== null) {
          return workspaceTask;
        }
        if(workspaceFolderTask !== null) {
          return workspaceFolderTask;
        }
        if(globalTask !== null) {
          return globalTask;
        }
        if(defaultTask !== null) {
          return defaultTask;
        }
        return null;
      }).then((runTask: vscode.Task | null) => {
        if (runTask) {
          vscode.tasks.executeTask(runTask);
        } else {
          vscode.commands.executeCommand('workbench.action.debug.run');
        }
      });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('launch-buttons.debug', () => {
      vscode.commands.executeCommand('workbench.action.debug.start');
    }));
  });
}

// this method is called when your extension is deactivated
export function deactivate() {
  vscode.commands.executeCommand('setContext', 'launch-buttons.enabled', undefined);
}
