/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes", "high"));
tasks.push(new ToDoList.HomeTask("Buy cookies", "low", people.diane));
tasks.push(new ToDoList.HomeTask("wash laundry", "high"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update website", "High", diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", "medium", thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", "low", loki));
console.log(tasks);
