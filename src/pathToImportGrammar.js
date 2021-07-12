var path = require("path");
var shell = require("shelljs");

module.exports = function (string) {
  const name = path.basename(string, path.extname(string));
  const filePath = string.replace(/.*src/, "@");
  const text = `import ${name} from \"${filePath}\"`;
  const cmdStr = `echo '${text}' | pbcopy`;
  shell.exec(cmdStr).stderr;
};
