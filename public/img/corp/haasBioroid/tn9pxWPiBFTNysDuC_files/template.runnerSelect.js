(function(){
Template.__checkName("runnerSelect");
Template["runnerSelect"] = new Template("Template.runnerSelect", (function() {
  var view = this;
  return [ HTML.H1("You have selected the ", Blaze.View("lookup:faction.label", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("faction"), "label"));
  })), HTML.Raw("\n    <h2>Select your Runner</h2>\n    "), HTML.UL("\n        ", Spacebars.include(view.lookupTemplate("selectRunner")), "\n    ") ];
}));

Template.__checkName("selectRunner");
Template["selectRunner"] = new Template("Template.selectRunner", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("runner"));
  }, function() {
    return [ "\n        ", HTML.LI(HTML.A(HTML.BUTTON(Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })))), "\n    " ];
  });
}));

}).call(this);
