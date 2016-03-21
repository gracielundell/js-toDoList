var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@epicodus.com"
    };
    var loki = {
        name: "God of Miscief",
        email: "loki@epicodus.com",
        phone: "555-555-5555"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
$(document).ready(function () {
    $("form.tasks").submit(function (event) {
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
        }
        else if (type === "home") {
            tasks.push(new ToDoList.HomeTask(task, priority, people[selectedPerson]));
            console.log("home task: ", tasks[0]);
        }
        else {
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
