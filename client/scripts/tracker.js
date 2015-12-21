Template.trackerMain.helpers({
   isCorp: function() {
       if (CorpList.findOne({_id: this.parent._id})) {
           return true;
       } else {
           return false;
       }
   } 
});

Template.credits.events({
    'click #add .credit': function (event) {
        Meteor.call("credits", this.parent, $(event.currentTarget).data("value"));
    },
    'click #subtract .credit': function (event) {
        if (this.parent.credits + $(event.currentTarget).data("value") <= 0) {
            Meteor.call("zeroCredits", this.parent);
        } else {
            Meteor.call("credits", this.parent, $(event.currentTarget).data("value"));
        }
    }
});

Template.badPublicity.events({
    'click .badPubButton.plus': function (event) {
        Meteor.call('badPublicity', this.child, $(event.currentTarget).data("value"));
    },
    'click .badPubButton.minus': function (event) {
        if (this.child.badPublicity != 0) {
            Meteor.call('badPublicity', this.child, $(event.currentTarget).data("value"));
        }
    }
});

Template.agenda.events({
    'click .agendaButton.plus': function (event) {
        Meteor.call('agenda', this.parent, $(event.currentTarget).data("value"));
    },
    'click .agendaButton.minus': function (event) {
        if (this.parent.currentAgendaPts != 0) {
            Meteor.call('agenda', this.parent, $(event.currentTarget).data("value"));
        }
    }
});

Template.tag.events({
    'click .tagButton.plus': function (event) {
        Meteor.call('tag', this.parent, $(event.currentTarget).data("value"));
    },
    'click .tagButton.minus': function (event) {
        if (this.parent.tags != 0) {
            Meteor.call('tag', this.parent, $(event.currentTarget).data("value"));
        }
    }
});

Template.mu.events({
    'click .muButton.plus': function (event) {
        Meteor.call('mu', this.parent, $(event.currentTarget).data("value"));
    },
    'click .muButton.minus': function (event) {
        Meteor.call('mu', this.parent, $(event.currentTarget).data("value"));
    }
});

Template.link.events({
    'click .linkButton.plus': function (event) {
        Meteor.call('link', this.child, $(event.currentTarget).data("value"));
    },
    'click .linkButton.minus': function (event) {
        if (this.child.link != 0) {
            Meteor.call('link', this.child, $(event.currentTarget).data("value"));
        }
    }
});

Template.clicks.events({
    'click .click': function (event) {
        var clickCheck = [];
        var clickContainer = $('#click-container').find('.click');
        $(event.currentTarget).toggleClass('on');

        clickContainer.each(function () {
            if ($(this).hasClass('on')) {
                clickCheck.push(true);
            } else {
                clickCheck.push(false);
            }
        });

        if (noMoreClicks(clickCheck)) {
            clickContainer.each(function () {
                $(this).addClass('done');
            });

            setTimeout(function () {
                clickContainer.each(function () {
                    $(this).removeClass('on done');
                });
            }, 1200);
        }
    }
});


function noMoreClicks(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == false) {
            return false;
        }
    }
    return true;
}

Template.clicks.helpers({
    clickIndex: function () {
        return this; // return the primitive value in the array
    }
});