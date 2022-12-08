let tdl = document.querySelector('#tdl');
let listaContainer = document.querySelector('.listaContainer');
let campoContainer = document.querySelector('.campoContainer');
let butao = document.querySelector('#butao');
let x = document.querySelector('#x');
const url = "http://localhost:3000/todo";
let lista = [];

function addTask(){
    butao.classList.add('hide');
    tdl.classList.add('chegaMais');
    let newTask = `<button onclick="kbo()" id="x" >X</button>
    <input id="campoTexto" type="text" placeholder="Digite aqui">
    <button onclick="makeList()" id="addTa">Add</button>`;
    campoContainer.innerHTML += newTask;
}

function kbo() {
    if (lista.length === 0) {
        window.location.reload();
    } else {
        campoContainer.classList.add('hide');
        //Mas deixa a lista aparecendo
    }   
}

async function makeList() {
    let obj = {"task": `${campoTexto.value}`}
    if (campoTexto.value !== "" && campoTexto !== null && campoTexto !== undefined) {
        lista.push(`${campoTexto.value}`);
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(obj)
        });

        getAll();
    } else {
        alert("Insira um valor válido!")
    }
}

async function getAll() {
    const response = await fetch(url);
    const data = await response.json();
    data.map((dado) => {
        let tasks = `<li>${dado.task}</li>`;

        listaContainer.innerHTML += tasks;
    });
}