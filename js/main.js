$(document).ready(function() {
  $.material.init();

  // Upcoming meetups
  $.ajax({
    url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_id=18522131&photo-host=public&page=10&fields=&order=time&status=upcoming&desc=false&sig_id=182801731&sig=4494e41c77900f88032d4c8cfef3b1e33ba13f7d",
    method: "GET",
    data: "json", 
    dataType: "jsonp",
    success: function(data) {

      var events = data.results;
      var upcoming_meetups = $("#upcoming-meetups");
      upcoming_meetups.empty();

      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var date = moment(event.time)
          upcoming_meetups.append("<div><strong><a href=\"" + event.event_url + "\" target=\"blank\">" + event.name + "</a></strong><br>" + date.format("dddd, Do MMM YYYY, h:mm a") + "<br>" + event.venue.name + "</div>");
          if (i+1 !== events.length) {
            upcoming_meetups.append("<hr>");
          }
        }
      } else {
        upcoming_meetups.append("No meetups found.");
      }

    },
    error: function(e) {
      console.log(e);
    }
  });

  // Past meetups
  $.ajax({
    url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_id=18522131&photo-host=public&page=2&fields=&order=time&status=past&desc=true&sig_id=182801731&sig=53b1a1ac2862ec71034070e9f2613ccee815ba4a",
    method: "GET",
    data: "json", 
    dataType: "jsonp",
    success: function(data) {

      var events = data.results;
      var past_meetups = $("#past-meetups");
      past_meetups.empty();

      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var date = moment(event.time);
          past_meetups.append("<div><strong><a href=\"" + event.event_url + "\" target=\"blank\">" + event.name + "</a></strong><br>" + date.format("dddd, Do MMM YYYY, h:mm a") + "<br>" + event.venue.name + "</div>");
          if (i+1 !== events.length) {
            past_meetups.append("<hr>");
          }
        }
      } else {
        past_meetups.append("No meetups found.");
      }

    },
    error: function(e) {
      console.log(e);
    }
  });

});
