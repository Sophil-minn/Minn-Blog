const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");
// const chalk = require('chalk');
const handlebars = require("handlebars");
const { spawn } = require("child_process");
// const fetch = require('node-fetch');

// Linux 文件与目录管理命令: https://www.yuque.com/xuebao-runen/icbftt/zg0sm1

const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/g, (m) => m[0].toUpperCase());
const lowCase = (str) =>
  str
    .replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase());

(async () => {
  const component = process.argv[2];
  const dirName = lowCase(component);
  const componentName = varCase(component);

  spawn("mkdir", ["-p", `${process.cwd()}/${componentName}`]);

  //读取模版
  const tplFiles = glob.sync(path.join(__dirname, "template2/*.hbs"));
  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf-8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace(
        "create/template2",
        `${process
          .cwd()
          .substring(process.cwd().search("src"))}/${componentName}`
      )
      .replace("componentName", componentName)
      .replace("ComponentName", componentName)
      .replace(".hbs", "");
    await fs.writeFileSync(newPath, result);
  });
})();
