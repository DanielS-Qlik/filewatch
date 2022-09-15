const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const { useCustumCommand } = require("./useCustomCommand");
const enableUseCustomCommand = false;

const PROJECT_PATH = '../nebula_js_DanielS_Fork3/examples/dev-mashup';
const LINKED_DEPENDENCY_PATH = ['../nebula_js_DanielS_Fork3']; // Changes to any files in this path will trigger a write to package.json in PROJECT_PATH

console.log(`Watching for changes in ${LINKED_DEPENDENCY_PATH}`);
chokidar.watch(LINKED_DEPENDENCY_PATH, {/* OPTIONS */ }).on('change', () => {
  console.log(`Change detected, writing new timestamp to ${PROJECT_PATH}/package.json`);
  if (enableUseCustomCommand) {
    useCustumCommand();
  } else {
    // Make a write to package.json
    const projectPackagePath = path.resolve(PROJECT_PATH, 'package.json');
    const now = new Date();
    fs.utimes(projectPackagePath, now, now, () => { });
  }
});
