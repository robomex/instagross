if (Meteor.isClient) {
  
  Template.myMap.created = function() {
    Template.myMap.rendered = _.once(function() {
      var mapa = L.mapbox.map('map', 'robomex.he6o03jb');  

    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}