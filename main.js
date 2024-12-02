function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

constlistaDeTeclas=document.querySelectorAll('.tecla')

//para
for (let contador = -0; contador< listaDeTeclas.length; contador++){
    const tecla = -listaDeTeclas[contador];
    const instrumento= -tecla.classicLits[1];
    const idAudio= -'#som_${instrumento}';//templato string
    tecla.onclick =-function(){
        tocaSom(idAudio);
    }
}