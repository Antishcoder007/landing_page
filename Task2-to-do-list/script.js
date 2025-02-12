const taskInput = document.getElementById("taskname");
const categorySelect = document.getElementById("category");
const prioritySelect = document.getElementById("priority");
const deadlinedate = document.getElementById("deadline");

    function addTask() {
        const taskName = taskInput.value;
        const category = categorySelect.value;
        const priority = prioritySelect.value;
        const deadline = deadlinedate.value;

        if (category === "") {
            alert("Task category cannot be empty.");
            return;
        }
        else if (deadline === "") {
            alert("Task deadline cannot be empty.");
            return;
        }
        else if (priority === "") {
            alert("Task priority cannot be empty.");
            return;
        }
        else if (taskName === '') {
            alert("Task name cannot be empty.");
            return;
        } else{
            const li = document.createElement("listitems");
            li.innerHTML = `<span>Task:${taskName}|</span>
            <span>Category: ${category}|</span>
            <span>Priority: ${priority}|</span>
            <span>deadline: ${deadline}</span>
        `;
        const taskList = document.getElementById("listitems");
        taskList.appendChild(li);
        }
        // Clear input fields
        taskInput.value = "";
        categorySelect.value = "";
        prioritySelect.selectedIndex = 0;
    }
