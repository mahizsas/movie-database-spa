/*global
 basePath:true,
 files:true,
 JASMINE:false,
 JASMINE_ADAPTER:false,
 autoWatch:true,
 browsers:true,
 singleRun:true,
 junitReporter:true,
 reporters:true,
 preprocessors: true
*/
basePath = "../";

files = [
  JASMINE,
  JASMINE_ADAPTER,
  "target/js/app.js",
  "test/helper.js",
  "test/unit/**/*.js"
];

browsers = ["PhantomJS"];
autoWatch = false;
singleRun = true;

reporters = ["progress", "coverage"];

preprocessors = {
  "**/target/js/app.js": "coverage"
};