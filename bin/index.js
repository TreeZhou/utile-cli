#!/usr/bin/env node

const spawn = require("cross-spawn");
var fs = require("fs");
var path = require("path");

var program = require("commander");
program.version(require("../package.json").version);

// // 定义根命令
// program
//   .option("-o,--option <parmas>", "desc", "dafault")
//   .arguments("<requireArg> [optionArg]")
//   .action((requireArg, optionArg, commanderObj) => {
//     if (typeof requireArg === "undefined") {
//       console.error("no requireArg given!");
//       process.exit(1);
//     }
//     console.log(requireArg, optionArg, program.option, commanderObj.opts());
//   });

function requireUtil(name) {
  return require(path.resolve(__dirname, `../src/${name}.js`));
}
// 定义子命令
const pathToImportGrammar = "pathToImportGrammar";
program
  .command(`${pathToImportGrammar} <path> `)
  .alias("p")
  .description("路径转换成 import xx from '@/xx'")
  .action((filePath) => {
    requireUtil(pathToImportGrammar)(filePath);
  });

program.parse(process.argv);
