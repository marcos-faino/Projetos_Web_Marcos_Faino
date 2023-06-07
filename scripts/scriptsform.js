telefone.onblur = function(){
    if(this.value.length < 11){
        erros1.innerHTML = '<p>Verifique o número de telefone</p>'
        this.style.backgroundColor = 'red';
    }else{
        this.style.backgroundColor = 'white';
    }
};

aperitivo = document.getElementById('aperit');
aperitivo.onchange = function(){
    this.checked ? alert("Ok, vou providenciar!") : alert('Até a próxima');
};


let sexo = document.getElementsByName('sexo');
let hobbies = document.getElementsByName('hobbies');

btSexo.onclick = function(){
    let mens = "";
    mens += 'Sexo:';
    sexo.forEach(s =>{
        s.checked ? mens += s.value + '\n': undefined;
    });
    mens += '\nHobbies: \n';
    hobbies.forEach(h =>{
        mens += h.checked ? h.value +'\n': '';
    });
    mensagem.value = mens;
};

uf.onchange = function(){
    switch(this.value){
        case 'AC' : natural.innerHTML = 'Acreano'; break;
        case 'AL' : natural.innerHTML = 'Alagoano'; break;
        case 'AM' : natural.innerHTML = 'Amazonense'; break;
        case 'BA' : natural.innerHTML = 'Baiano'; break;
        default : natural.innerHTML = 'Outros estados';
    }
};