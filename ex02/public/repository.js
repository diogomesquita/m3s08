//post //update //patch
export async function pedeDados(url, requisicao, bejetu) {
    const response = await fetch(url, {
        method: `${requisicao}`,
        body: bejetu,
        headers: {
            "Content-type": "aplication/json",
        }
    })
}

//get
export async function pedeDados(url, requisicao) {
    const response = await fetch(url, {
        method: `${requisicao}`,
        headers: {
            "Content-type": "aplication/json",
        }
    }).then( (response) => {
        response.json
    } ).then( (data) => {
        //Falta testa esse código
    //     data.map( (dado) => {
    //         let tabela = `<table>
    //     <tr>
    //         <th>Tamanho</th>
    //         <th>Cor</th>
    //     </tr>
    //     <tr>
    //         <td>${dado.produto.size}</td>
    //         <td>${dado.produto.color}</td>
    //     </tr>
    // </table>`;

    // dados.innerHTML += tabela;
    //     });

        //mostrar tabela com esses dados
        console.log(data);
    }).catch("erro")
}

//delete
export async function pedeDados(url, id) {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    
}