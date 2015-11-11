(function(){
Template.__checkName("runnerFactionSelect");
Template["runnerFactionSelect"] = new Template("Template.runnerFactionSelect", (function() {
  var view = this;
  return [ HTML.Raw("<h2>Select your Runner Faction</h2>\n"), HTML.UL("\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("faction"));
  }, function() {
    return [ "\n        ", HTML.LI(HTML.A({
      href: function() {
        return [ "/runner/", Spacebars.mustache(view.lookup("_id")) ];
      }
    }, HTML.BUTTON(Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    })))), "\n    " ];
  }), "\n") ];
}));

}).call(this);
