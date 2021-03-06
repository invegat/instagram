/*
---
layout: playground
collection: playground
title: Search list
name: 02-search
---
*/

const d = React.DOM;

component.debug();

var SearchBox = component('SearchBox', function (cursor) {
  function onChange (e) {
    cursor.update('search', function (currentSearch) {
      return e.currentTarget.value;
    });
  }
  return d.div({}, d.input({
    placeholder: "Search..",
    value: cursor.get('search'),
    onChange: onChange }));
});

var Match = component('Match', function (cursor) {
  return d.li({},
              d.a({ href: cursor.get('url') }, cursor.get('title')));
});

var Matches = component('Matches', function (cursor) {
  var q = cursor.get('search');
  var libs = cursor.get('libs');
  var matches = libs.filter(function (lib) {
    return lib.get('title').indexOf(q) !== -1 || lib.get('url').indexOf(q) !== -1;
  });
  return d.ul({}, matches.toArray().map(function (lib, i) {
    return Match("match-"+i, lib);
  }));
});

var Search = component('Search', function (cursor) {
  return d.div({},
              SearchBox(cursor),
              Matches(cursor));
});

var structure = immstruct({
  search: "",
  libs: [
    { title: "Backbone.js", url: "http://documentcloud.github.io/backbone/" },
    { title: "AngularJS", url: "https://angularjs.org/" },
    { title: "jQuery", url: "http://jquery.com/" },
    { title: "Prototype", url: "http://www.prototypejs.org/" },
    { title: "React", url: "http://facebook.github.io/react/" },
    { title: "Omniscient", url: "https://github.com/omniscientjs/omniscient" },
    { title: "Ember", url: "http://emberjs.com/" },
    { title: "Knockout.js", url: "http://knockoutjs.com/" },
    { title: "Dojo", url: "http://dojotoolkit.org/" },
    { title: "Mootools", url: "http://mootools.net/" },
    { title: "Underscore", url: "http://documentcloud.github.io/underscore/" },
    { title: "Lodash", url: "http://lodash.com/" },
    { title: "Moment", url: "http://momentjs.com/" },
    { title: "Express", url: "http://expressjs.com/" },
    { title: "Koa", url: "http://koajs.com" },
  ]
});

render();
structure.on('next-animation-frame', render);

function render () {
  ReactDOM.render(Search(structure.cursor()), el);
}