$(document).ready(function(){
  
  initializeFooters();

});

var presTitleClass = ".title";
var presTitle = "How Private is Private?: Effects of Varied Transparency on Group Ideation";
var footerClass = ".footer";
var presenterNameClass = ".presenter-name";
var presenter = '<a href="http://people.cs.vt.edu/tgm/">Michael Stewart</a>';
var pgNumClass = ".pg-num";
//  add info to footer
function initializeFooters() {
  $(footerClass).filter(function(){
    return !$(this).parents('#intro').length;
  }).each(function(idx, elem){
    insertFooterAuthor($(elem));
    insertFooterContent($(elem));
    insertPageNumber(idx, $(elem));

  });
}

function insertFooterAuthor(elem) {
  elem.find(presenterNameClass).html(presenter);
}

function insertFooterContent(elem) {
  elem.find(presTitleClass).text(presTitle);
}

function insertPageNumber(i, elem) {
  elem.find(pgNumClass).text(i+2);
}