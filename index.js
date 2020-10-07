const babel = require(`@babel/core`);
const fs    = require(`fs`);

const src = process.argv[2];
const dist = process.argv[3];

const options = {
  "presets": [
    [ "@babel/preset-env", {
      targets: { ie: 11 },
      corejs: 3,
      useBuiltIns: "entry"
    }]
  ]
}

const srcCode  = fs.readFileSync( src, `utf-8` );
const distCode = babel.transform(srcCode, options).code;

fs.writeFileSync( dist, distCode );
console.log("Finished!")
