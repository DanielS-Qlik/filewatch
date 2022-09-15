const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");

// One-liner for current directory
// chokidar.watch('.').on('all', (event, path) => {
//   console.log(event, path);
// });
const USE_CUSTOM_COMMAND = false;
const custumCommand = '(cd ../nebula_js_DanielS_Fork3/commands/serve && yarn build:dev)';
const useCustumCommand = () => {
  exec(custumCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const PROJECT = '../nebula_js_DanielS_Fork3/examples/dev-mashup';
const LINKED_DEPENDENCY = ['../nebula_js_DanielS_Fork3'];
chokidar.watch(LINKED_DEPENDENCY, {/* OPTIONS */ }).on('all', () => {
  if (USE_CUSTOM_COMMAND) {
    useCustumCommand();
  } else {
    // Make a write to package.json
    const projectPackagePath = path.resolve(PROJECT, 'package.json');
    const now = new Date();
    fs.utimes(projectPackagePath, now, now, () => { });
  }
});
