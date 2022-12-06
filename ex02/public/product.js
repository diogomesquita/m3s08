let containerData = document.querySelector('.produtoContainerData');
let novo = document.querySelector('#novo');

novo.addEventListener('click', (e) => {
    e.preventDefault();

    produtoContainerData.innerHTML = formulario;
})