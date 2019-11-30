const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function createTimeInput(startOrEnd, day) {
    time = document.createElement("input");
    time.setAttribute("type", "time");
    time.setAttribute("id", startOrEnd + day);
    time.setAttribute("name", startOrEnd + day);
    time.setAttribute("required", true);
    return time;
}

function createHoursRow(day) {
    row = document.createElement("div");
    row.classList.add("row");
    label = document.createElement("label");
    label.innerText = daysOfWeek[day] + " start and end";
    startTime = createTimeInput("start", day);
    endTime = createTimeInput("end", day);
    row.appendChild(label);
    row.appendChild(startTime);
    row.appendChild(endTime);
    return row;
}

async function setupHours() {
    hoursArea = document.getElementById("hours-area");
    for (i = 0; i < 7; i++) {
        row = createHoursRow(i);
        hoursArea.appendChild(row);
    }
}

// function changingTableType() {
//     numberTables = document.getElementById("number-of-tables"); // this time it's the element
//     console.log(document.getElementById("table-type").value);
//     if (document.getElementById("table-type").value == "booth") {
//         numberTables.setAttribute("max", 1);
//         numberTables.setAttribute("disabled", true);
//     } else {
//         numberTables.setAttribute("max", 8);
//         numberTables.setAttribute("disabled", false);
//     }
// }

function createHiddenInput(name, value) {
    input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    return input;
}

function addTableSection() {
    list = document.getElementById("table-sections");
    row = document.createElement("li");
    type = document.getElementById("table-type").value;
    numberTables = document.getElementById("number-of-tables").value; // this time it's the value
    tableSize = document.getElementById("size-per-table").value;
    row.innerText = "Section of " + numberTables + " " + type + "(s) with " + tableSize + " seats each";
    list.appendChild(row);
    // row.appendChild()
}