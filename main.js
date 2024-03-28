let writeTask = document.getElementById("write-task");
let listContainer = document.querySelector("#list-container");
let addTask = function () {
    if (writeTask.value == '') {
        alert("Please Write Something!")
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = writeTask.value;
        span.innerHTML = "X"
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    writeTask.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("done");
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
})

let saveData = function () {
    localStorage.setItem("data", listContainer.innerHTML);
}

let showData = function () {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

