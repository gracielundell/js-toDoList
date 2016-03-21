/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

$(document).ready(function() {
  $("form.tasks").submit(function(event) {
    event.preventDefault();
    var type = $("#type option:selected").val();
    var task = $("#inputTask").val();
    var priority = $("#priority option:selected").val();
    var people = ToDoList.people;
    var selectedPerson = $("#person option:selected").val();
    console.log("people: ", people[selectedPerson]);
    var tasks = [];


    if (type === "work") {
      tasks.push(new ToDoList.WorkTask(task, priority, people[selectedPerson]));
      console.log("work task: ", tasks[0]);
    } else if (type === "home") {
      tasks.push(new ToDoList.HomeTask(task, priority, people[selectedPerson]));
      console.log("home task: ", tasks[0]);
    } else {
      tasks.push(new ToDoList.HobbyTask(task));
      console.log("hobby task: ", tasks[0]);
    }
  });
});

// tasks.push(new ToDoList.HomeTask("Do the dishes", "high"));
// tasks.push(new ToDoList.HomeTask("Buy cookies", "low", people.diane));
// tasks.push(new ToDoList.HomeTask("wash laundry", "high"));
//
// tasks.push(new ToDoList.HobbyTask("Practice origami."));
// tasks.push(new ToDoList.HobbyTask("Bake a pie."));

// var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() + 2);
//
// tasks.push(new ToDoList.WorkTask(today, "Update website", "High", people.diane));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", "medium", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
// tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
// tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", "low", people.loki));

// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
// for(var task of thorTasks){
//   console.log(task);
// }
