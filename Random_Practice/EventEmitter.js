var events = require('events');
var util   = require('util');

var Person = function(name){
  this.name = name;
};


util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Josh  = new Person('Josh');
var Ayami = new Person('Ayami');

var people = [James, Josh, Ayami];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg)
  });
});

James.emit('speak', 'Hello everyone.');
Josh.emit('speak', 'I am very hungry as usual.');
Ayami.emit('speak', 'I want ramen.');
