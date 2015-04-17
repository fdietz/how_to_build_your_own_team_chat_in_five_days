"use strict";

var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var methodOverride = require('method-override');
var multer         = require('multer');
var path           = require('path');
var _              = require('underscore');

var app            = express();
var http           = require('http').createServer(app);
var io             = require('socket.io').listen(http);

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

// [
//  { session_id: "5W5f-HSzolBOjMj7AAAC", name: "Peter" },
//  { session_id: "YXlbm_LmHD7oUGwkAAAD", name: "Martin"}
// ]
var participants = [];
var messages     = [];

function mostRecentMessages() {
  return messages.slice(messages.length-20, messages.length);
}

app.post("/messages", function(request, response) {
  var message = request.body.message;

  if(message && message.trim().length > 0) {
    var user_id    = request.body.user_id;
    var created_at = request.body.created_at;
    var user       = _.findWhere(participants, { id: user_id });

    messages.push({ message: message, user: user, type: "message", created_at: created_at });

    // let our chatroom know there was a new message
    io.sockets.emit("incoming_message", _.last(messages));

    response.json(200, { message: "Message received" });
  } else {
    return response.json(400, { error: "Invalid message" });
  }
});

var nameCounter = 1;

io.on("connection", function(socket) {
  socket.on("new_user", function(data) {
    console.log("ON new_user", data);

    var newName = "Guest " + nameCounter++;
    participants.push({ id: data.id, name: newName });

    console.log("messages", messages, mostRecentMessages())

    io.sockets.emit("new_connection", {
      user: {
        id: data.id,
        name: newName
      },
      sender:"system",
      created_at: new Date().toISOString(),
      participants: participants,
      messages: mostRecentMessages()
    });
  });

  socket.on("name_change", function(data) {
    console.log("ON name_change", data);

    _.findWhere(participants, { id: socket.id }).name = data.name;
    io.sockets.emit("name_changed", { id: data.id, name: data.name });
  });

  socket.on("disconnect", function() {
    console.log("ON disconnect", socket.id);

    var participant = _.findWhere(participants, { id: socket.id });
    participants    = _.without(participants, participant);
    io.sockets.emit("user_disconnected", {
      user: {
        id: socket.id,
        name: participant.name
      },
      sender:"system",
      created_at: new Date().toISOString()
    });
  });
});

http.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
