function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var  hora = data.getHours() 
    //var hora = 22
    msg.innerHTML = `<strong> Agora são: ${hora} horas <strong>`

    if(hora >= 0  && hora <= 12 ) {
             //BOM DIA
             img.src = "./img/fotomanha.jpg"
             document.body.style.background = '#e2cd9f'
             msg.innerHTML += '<p>Bom Dia<p>'
        }else if (hora >12 && hora <=18 ){
                 //BOA TARDE
                img.src = "./img/fototarde.jpg"
                document.body.style.background = '#b9846f'
                msg.innerHTML += '<p>Boa Tarde<p>'
            }else {
                //BOA NOITE
                img.src = "./img/fotonoite.jpg"
                document.body.style.background = '#515154'
                msg.innerHTML += '<p>Bom Noite<p>'
    }
}




