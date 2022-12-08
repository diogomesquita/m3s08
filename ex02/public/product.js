let containerData = document.querySelector('.produtoContainerData');
let tableData = document.querySelector('.tableData');
let atualiza = document.querySelector('#atualiza');
let submit = document.querySelector('#submit');
let deleta = document.querySelector('#deleta');
let novo = document.querySelector('#novo');
let stock = document.querySelector('#stock');
const url = "http://localhost:3000/produtos";


async function getAll() {
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data);
    
    data.map((dado) => {
        let table =
        `<table>
            <tr>
                <th>Id</th>
                <th>Tamanho</th>
                <th>Cor</th>
            </tr>
                <td>${dado.id}</td>
                <td>${dado.size}</td>
                <td>${dado.color}</td>
                <tr>
        </table>`;

        tableData.innerHTML += table;
        containerData.appendChild(tableData);
    });
}


novo.addEventListener('click', (e) => {
    containerData.innerHTML = "";
    e.preventDefault();
    let formulario = `<form>
    <input id="cor" type="text" placeholder="Digite a Cor">
    <input id="tamanho" type="text" placeholder="Digite o Tamanho">
    <input onclick="pegaDados()" id="submit" type="submit">
</form>`;

    containerData.innerHTML += formulario;
    
    let tamanho = document.querySelector('#tamanho');
    let cor = document.querySelector('#cor');
    pegaDados();
});

stock.addEventListener('click', (e) => {
    containerData.innerHTML = "";
    tableData.innerHTML = "";
    e.preventDefault();

    getAll();

});


function pegaDados() {
    if(cor.value !== "" && tamanho.value !== ""){
        let toObj = {
            color: `${cor.value}`,
            size: `${tamanho.value}`
        };

        novoPost(JSON.stringify(toObj));
    }
}

async function novoPost(bejetu) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: bejetu
    });
}

async function deleteItem() {

}

deleta.addEventListener('click', (e) => {
    containerData.innerHTML = "";
    e.preventDefault();
    let formulario = `<form>
    <input id="itemId" type="text" placeholder="Informe o ID">
    <input onclick="pegaID()" id="submit" type="submit">
</form>`;

    containerData.innerHTML += formulario;
    
    let itemId = document.querySelector('#itemId');
    pegaID();
});

function pegaID() {
    if(itemId.value !== "") {
       deleteItem(itemId.value);
        }   
}

async function deleteItem(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    });
}


atualiza.addEventListener('click', (e) => {
    containerData.innerHTML = "";
    e.preventDefault();
    let formulario = `<form>
    <input id="itemId" type="text" placeholder="Informe o ID">
    <input id="cor" type="text" placeholder="Digite a Cor">
    <input id="tamanho" type="text" placeholder="Digite o Tamanho">
    <input onclick="atualizaDados()" id="submit" type="submit">
</form>`;

    containerData.innerHTML += formulario;

    let itemId = document.querySelector('#itenId');
    let tamanho = document.querySelector('#tamanho');
    let cor = document.querySelector('#cor');
    atualizaDados();
});

function atualizaDados() {
    if(itemId.value !== "" &&  cor.value !== "" && tamanho.value !== ""){
        let toObj = {
            color: `${cor.value}`,
            size: `${tamanho.value}`
        };

        updateItem(itemId.value, JSON.stringify(toObj));
    }
}

async function updateItem(id, bejetu) {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: bejetu
    });
}