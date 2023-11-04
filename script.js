var materia = document.getElementById("txt-add");
var num = document.getElementById("num-add");
var idcont = 0;

function AddMat(){
    idcont++
    var itens = document.getElementById("itens");
    itens.insertAdjacentHTML('beforeend','<div class="item" id="'+idcont+'"></div>');
    var classes = itens.getElementsByClassName('item');
    var numerodeitens = classes.length;
    //window.alert(numerodeitens)
    var item = document.querySelectorAll('div, .item')[numerodeitens];
    item.insertAdjacentHTML('beforeend','<h2>'+materia.value+'</h2>')
    for (i=0; i<num.value;i++) {
        item.insertAdjacentHTML('beforeend','   <span onclick="Trocar(this)" class="material-symbols-outlined">check_box_outline_blank</span>');        
    }
    item.insertAdjacentHTML('beforeend','<span onclick="Recarregar(this)" class="material-symbols-outlined recarregar">refresh</span>')
    
    item.insertAdjacentHTML('beforeend','<span onclick="Deletar(this)" class="material-symbols-outlined lixeira">delete</span>')
}

function Trocar(elemento) {
    if (elemento.innerText==="check_box_outline_blank") {
        elemento.innerText = 'check_box'
    } else {
        elemento.innerText = 'check_box_outline_blank'
    }
}

function Deletar(elemento) {
    let confirmacao = window.confirm('Deseja excluir o elemento?')
    if (confirmacao == true){
        let elementoPai = elemento.parentElement;
        elementoPai.remove()
    }
}

function Recarregar(elemento) {
    let elementoPai = elemento.parentElement;
    let filhos = elementoPai.querySelectorAll('span')
    console.log(filhos)
    for(let i = 0; i<filhos.length;i++){
        console.log()
        console.log(i)
        if (filhos[i].innerText === "check_box"){

            filhos[i].innerText = 'check_box_outline_blank'
        }
    }

}