(function(){
Template.__checkName("corpSelect");
Template["corpSelect"] = new Template("Template.corpSelect", (function() {
  var view = this;
  return [ HTML.Raw('<figure id="small_logo">\n        <img id="logo" src="/img/an_logo.png">\n        <figcaption>Tracker App</figcaption>\n    </figure>\n    \n    <h1>Select Your Corporation</h1>\n    '), HTML.UL({
    "class": "selectList",
    id: "corpSelect"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("names"));
  }, function() {
    return [ "\n            ", HTML.LI(HTML.A({
      href: function() {
        return [ "/corp/", Spacebars.mustache(view.lookup("_id")) ];
      },
      style: function() {
        return [ "background:url('", Spacebars.mustache(view.lookup("imageURL")), "') no-repeat; background-size:contain;" ];
      }
    }, HTML.BUTTON({
      "class": function() {
        return Spacebars.mustache(view.lookup("name"));
      }
    }, Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    })))), "\n        " ];
  }), "\n    ") ];
}));

}).call(this);
