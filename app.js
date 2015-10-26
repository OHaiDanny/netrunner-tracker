NRT_DB = new Meteor.Collection("NRT_DB");


if (Meteor.isServer) {
    Meteor.publish("NRT_DB", function() {
        return NRT_DB.find();
    });
}

if (Meteor.isClient) {
    Meteor.subscribe("NRT_DB");
}

