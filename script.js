let deadlines = [
    {
        id: 1,
        title: "HTML Assignment",
        course: "Web Development",
        type: "Assignment",
        dueDate: "2026-11-14",
        completed: false
    },
    {
        id: 2,
        title: "Computer Hardware Test",
        course: "Computer Hardware",
        type: "Test",
        dueDate: "2026-11-18",
        completed: false
    },
    {
        id: 3,
        title: "Learning Theories Presentation",
        course: "Psychology",
        type: "Presentation",
        dueDate: "2026-11-07",
        completed: false
    },
    {
        id: 4,
        title: "Mathematics Examination",
        course: "Mathematics",
        type: "Examination",
        dueDate: "2026-11-25",
        completed: false
    },
];

const today = new Date();
today.setHours(0, 0, 0, 0);

function getDays(item) {
    let due = new Date(items.dueDate + "T00:00:00");

    return Math.round(
        (due - today) / (1000 * 60 * 60 * 24)
    );
}

function getStatus(item){
    if (item.completed) {
        return "Completed";
    }

    if (getDays(item) < 0){
        return "Overdue";
    }

    return "Pending";
}

function displayDeadlines(){

    let table = document.getElementById("deadlineTable");

    table.innerHTML = "";

    let search = document.getElementById("searchInput").value.toLowerCase();

    let course = document.getElementById("courseFilter").value;

    let type = document.getElementById("typeFilter").value;

    let status = document.getElementById("statusFilter").value;

    let filter =deadlines.filter(item => {
       
     return (

        (item.title.toLowerCase().includes(search) ||
        item.course.toLowerCase().includes(search))
        &&
            (!course || item.course === course) &&
            (!type || item.type ===type) &&
            (!status || getStatus(item) === status)
     );
    });

    filter.forEach(item => {
        let row = table.insertRow();
        let days = getDays(items);
        let remaining;
        if (item.completed) {remaining = "completed";} else if (days < 0){ remaining = Math.abc(days) + "days overdue";

        } else if (days === 0){remaining ="Due tody";

        } else { remaining = days + " days left";

        }
        row.innerHTML = `
        <td>${item.title}</td><td>${item.course}</td><td>${item.type}</td><td>${item.dueDate}</td><td>${remaining}</td><td>
                <span class="${getStatus(item).toLowerCasa()}">${getStatus(item)})
                </span> {constructor(parameters)}
                }
            </td>`;
    });
    updateSummary();

    updateComing();
}

function updateSummary(){

    document.getElementById("totalCount").textContent = deadlines.length;

    document.getElementById("upcomingCount").textCount = deadlines.filter(item => !item.completed&& getDays(item)>= 0

).length;

document.getElementById("overdueCount").textContent = deadlines.filter(item => getStatus(item)=== "overdue").length;

document.getElementById("completedCount").textContent = deadlines.filter(item => item.completed).length;

}
function completed(id) {

    let task = deadlines.find(item => item.id === id);

    if (task) {
        task.completed = true;
    }
    displayDeadlines();

}

function updateComing() {

    let list = document.getElementById("upcomingList");

    list.innerHTML = "";

    let upcoming = deadlines.filter(item => !item.completed && getDays(item)>= 0

    )
    .sort((a, b) => new Date(a.dueDate) - new Date(b.du)
    );

    upcoming.forEach(item => { let li = document.createElement("li");

        li.textContent =
           item.title + "-" +
           item.course + "-" +
           item.dueDate;

        list.appendChild(li);   
    });
}

function updateCourses() {

    let select =document.getElementById("couurseFilter");

    let courses = [...new setI(deadlines.map(item =>item.course))];

    courses.forEach(course =>{

        let option = document.createElement("option");
        option.value = course;
        option.textContent = course;

        select.appendChild(option);
    });
}

document.getElementById("deadlineForm").addEventListener("submit", function(event)
    {
    
    event.preventDefault();
    
    let form = new FormData(this);

    let newTask = {

        id: Date.now(),

        title: form.get("title").trim(),

        course: form.get("course").trim(),

        type: form.get("type"),

        dueDate: form.get("dueDate"),

        completed: false
    };

    deadlines.push(newTask);

    this.reset();

    updateCourses();

    displayDeadlines();

    alert("Deadline added successfully!");
});
document.getElementById("searchInput").addEventListener("input", displayDeadlines);

document.getElementById("courseFilter").addEventListener("change", displayDeadlines);

document.getElementById("typeFilter").addEventListener("change",displayDeadlines);

document.getElementById("statusFilter").addEventListener("change",displayDeadlines);

// start the website 
updateCourses();

displayDeadlines();
