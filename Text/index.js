var $ = require( "jquery" );
window.$ = $;
require('bootstrap');
var fs = require('fs-extra');
const homedir = require('os').homedir();
var root = '/Documents/';
$("#save").click(function(){
  var con = $("#con").text();
  var title = $("#title").text();
  console.log(homedir + root + title);
  fs.writeFileSync( homedir + root + title, con);
});
