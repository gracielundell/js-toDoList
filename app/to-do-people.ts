/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@epicodus.com"
  }

  var loki: ToDoList.IPerson = {
    name: "God of Miscief",
    email: "loki@epicodus.com",
    phone: "555-555-5555"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  };
}
