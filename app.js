const inputBox = document.querySelector("#input-box");
const btn = document.querySelector("#btn");
const taskList = document.querySelector("#list-container");

btn.addEventListener("click", () =>{
    if (inputBox.value === '') {
        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savaData();
    }
    inputBox.value = "";
});

taskList.addEventListener("click", (e) =>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savaData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData();
    }
}, false);

function savaData() {
    localStorage.setItem("data", taskList.innerHTML);
};

function showTask() {
   taskList.innerHTML = localStorage.getItem("data");
};
showTask();