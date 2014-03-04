if (Meteor.isClient) {
  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
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