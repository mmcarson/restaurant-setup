const students = ["Kaylee", "Sebastian", "Josh", "Ben", "Sam", "Kate", "Tayshaun", "Brodie", "Alex", "Farhad", "Skyler"];

function randomize(array) {
    if (array.length == 1) {
        return array[0];
    } else {
        let index = Math.floor(Math.random() * array.length);
        smallArray = array.slice(0, index).concat(array.slice(index + 1, array.length));
        return [array[index]].concat(randomize(smallArray));
    }
}

function createGroups() {
    let shuffled = randomize(students);
    let groups = [shuffled.slice(0, 4), shuffled.slice(4, 8), shuffled.slice(8, 11)];
    return groups;
}

function showNewGroups() {
    listElement = document.getElementById("groups");
    listElement.innerHTML = "";
    let groups = createGroups();
    groups.forEach(group => {
        let li = document.createElement("li");
        listElement.appendChild(li);
        let names = "";
        group.forEach(name => {
            names += name + " ";
        });
        li.innerText = names;
    });
}