var materia = document.getElementById("txt-add");
var num = document.getElementById("num-add");


function AddMat(){

    var itens = document.getElementById("itens");
    itens.insertAdjacentHTML('beforeend','<div class="item"></div>');
    var classes = itens.getElementsByClassName('item');
    var numerodeitens = classes.length;
    //window.alert(numerodeitens)
    var item = document.querySelectorAll('div, .item')[numerodeitens];
    item.insertAdjacentHTML('beforeend','<h2>'+materia.value+'</h2>')
    for (i=0; i<num.value;i++) {
        item.insertAdjacentHTML('beforeend','   <span class="material-symbols-outlined">check_box_outline_blank</span>');
        
    }

}