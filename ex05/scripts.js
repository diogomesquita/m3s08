
let containerDadosCovid = document.querySelector('#containerDadosCovid');

const url =  "https://disease.sh/v3/covid-19/states";

async function pegaDados(url) {
    const response = await fetch(url)
    const data = await response.json();

    data.map( (dado) => {
        let tabela = `<table>
        <tr>
            <th>Estado</th>
            <th>Casos</th>
            <th>Casos Hoje</th>
            <th>Mortes</th>
        </tr>
        <tr>
            <td>${dado.state}</td>
            <td>${dado.cases}</td>
            <td>${dado.todayCases}</td>
            <td>${dado.deaths}</td>
        </tr>
    </table>`;

    containerDadosCovid.innerHTML += tabela;
    })
}

pegaDados(url);