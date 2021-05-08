# "Launch buttons" in vscode.

Add "Run" and "Debug" button to execute commands in launch.json in your vscode.

![screenshot](https://raw.githubusercontent.com/ledyba/vscode-launch-buttons/magistra/screenshot.png)

[Available on market place](https://marketplace.visualstudio.com/items?itemName=ledyba.launch-buttons)!

## About buttons

### Run button

If there is a task whose label contains 'run' in `task.json`, run button executes that task. If not, the button executes the selected configuretion in `launch.json` without debugger (You can select a configuretion in debug panel).

### Debug button

Debug button executes the selected configuretion in `launch.json`. Please select a configuretion to spawn via debug panel (You can select a configuretion in debug panel).

## Copyright

These icons are based on [Material Icons](https://fonts.google.com/icons) by Google. Licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html):

 - images/run.light.svg
 - images/run.dark.svg

These icons are drawn by myself:

 - images/run.light.svg
 - images/run.dark.svg

## Release Notes

### 1.0.1

Add capability to spawn a task in `task.json`.

### 1.0.0

Initial release.
