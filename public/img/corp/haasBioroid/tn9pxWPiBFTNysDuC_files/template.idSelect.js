(function(){
Template.__checkName("idSelect");
Template["idSelect"] = new Template("Template.idSelect", (function() {
  var view = this;
  return HTML.Raw('<figure id="large_logo">\n        <img id="logo" src="/img/an_logo.png">\n        <figcaption>Tracker App</figcaption>\n    </figure>\n    \n    <h1>Select your Identity:</h1>\n    <section id="selectSide">\n        <a href="/corp"><button id="corpBtn">Corporation</button></a>\n        <a href="/runner"><button id="runnerBtn">Runner</button></a>\n    </section>');
}));

}).call(this);
