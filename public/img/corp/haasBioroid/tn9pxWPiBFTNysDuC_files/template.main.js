(function(){
Template.__checkName("main");
Template["main"] = new Template("Template.main", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.DIV({
    "class": "wrap"
  }, "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n        "), "\n    ");
}));

}).call(this);
