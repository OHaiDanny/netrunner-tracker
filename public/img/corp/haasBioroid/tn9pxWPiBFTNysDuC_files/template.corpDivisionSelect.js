(function(){
Template.__checkName("corpDivisionSelect");
Template["corpDivisionSelect"] = new Template("Template.corpDivisionSelect", (function() {
  var view = this;
  return [ HTML.Raw('<figure id="small_logo">\n    <img id="logo" src="/img/an_logo.png">\n    <figcaption>Tracker App</figcaption>\n</figure>\n'), HTML.H1("You have selected ", HTML.SPAN({
    "class": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("corp"), "name"));
    }
  }, Blaze.View("lookup:corp.label", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("corp"), "label"));
  }))), HTML.Raw("\n<p>Choose your division / subsidiary</p>\n"), HTML.UL({
    "class": "selectList",
    id: "divisionSelect"
  }, "\n    ", Spacebars.include(view.lookupTemplate("divisionSelect")), "\n") ];
}));

Template.__checkName("divisionSelect");
Template["divisionSelect"] = new Template("Template.divisionSelect", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("division"));
  }, function() {
    return [ " \n        ", HTML.LI(HTML.A({
      href: "/tracker/",
      style: function() {
        return [ "background:url('", Spacebars.mustache(view.lookup("imageURL")), "') no-repeat; background-size:contain;" ];
      }
    }, HTML.BUTTON({
      "class": function() {
        return Spacebars.mustache(view.lookup("parent"));
      }
    }, Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    })))), "\n    " ];
  });
}));

}).call(this);
