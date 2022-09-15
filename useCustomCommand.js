const { exec } = require("child_process");

// One-liner for current directory
// chokidar.watch('.').on('all', (event, path) => {
//   console.log(event, path);
// });
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
};
exports.useCustumCommand = useCustumCommand;
