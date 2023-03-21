let jsonObj = JSON.parse(localStorage.getItem("tasks"));
console.log(jsonObj)
let tasks =  jsonObj == undefined  ? [] : jsonObj;
console.log(tasks)

tasks.forEach(task => {
    let h1 = document.createElement("h1");
    let text = document.createTextNode(task);
    h1.appendChild(text);
    h1.addEventListener("click", (e) => {
        let val = e.target.innerText
        tasks = tasks.filter(task => val != task);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        location.reload();
    })
    
    document.getElementById("tasks").appendChild(h1)
})

document.getElementById("push").addEventListener("click", () => {
    let task = document.getElementById("task-input").value;
    document.getElementById("task-input").value = "";
    if (task == "" || task == undefined) return;
    console.log(task)
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    document.getElementById("tasks").textContent = "";
    tasks.forEach(task => {
        let h1 = document.createElement("h1");
        let text = document.createTextNode(task);
        h1.appendChild(text);
        h1.addEventListener("click", (e) => {
            let val = e.target.innerText
            tasks = tasks.filter(task => val != task);
            localStorage.setItem("tasks", JSON.stringify(tasks))
            location.reload();
        })
       
        document.getElementById("tasks").appendChild(h1)
    })
;})