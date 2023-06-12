
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
// const chalk = require('chalk');
const handlebars = require('handlebars');
const { spawn } = require('child_process');
// const fetch = require('node-fetch');

// Linux 文件与目录管理命令: https://www.yuque.com/xuebao-runen/icbftt/zg0sm1 
// console.log(/aa/, process.argv, process.argv[2], process.cwd()+ 'src/' + process.argv[2]);
// console.log(path, path.join(process.cwd(), 'src/' + process.argv[2]));

const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/g, m => m[0].toUpperCase());
// console.log('varCase: ', varCase);
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/-[a-z]/g, m => m[1].toUpperCase());
// console.log('lowCase: ', lowCase);
(async () => {
  const component = process.argv[2];
  const dirName = lowCase(component);
  const componentName = varCase(component);

  spawn('mkdir', ['-p', `${process.cwd()}/${dirName}`]);

  //读取模版
  const tplFiles = glob.sync(path.join(__dirname, 'template2/*.hbs'));
  tplFiles.forEach((async filePath => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName
    });
    // console.log('path.pwd(): ', filePath, path.dirname);
    console.log('path.pwd(): ', process.cwd());
    console.log('filePath: ', filePath);
    console.log('__dirname: ', __dirname);
    // const newPath = filePath.replace(path.join(__dirname, 'create/template2'), `${process.cwd()}/${dirName}`)
    //   .replace('componentName', componentName)
    //   .replace('ComponentName', componentName)
    //   .replace('.hbs', '');

    const newPath = filePath.replace('create/template2', `${process.cwd().substring(process.cwd().search("src"))}/${componentName}`)
      .replace('componentName', componentName)
      .replace('ComponentName', componentName)
      .replace('.hbs', '');
    console.log('newPath: ', newPath)
    // const  newTargetPath = path.join(process.cwd(), 'src');
    await fs.writeFileSync(newPath, result);
    console.log(`write ${newPath} success`);
    // console.log(chalk.green(`write ${newPath} success`));
  }));
  // const response = await fetch(`https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`);
  // const body = await response.text();
  // const scssFile = path.join(process.cwd(), `src/${dirName}/index.scss`);
  // await fs.writeFile(scssFile, body);
})();


