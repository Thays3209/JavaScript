function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    }else {
       
       var fsex = document.getElementsByName('textradio') 
       var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada ${idade}` 
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       
       if (fsex[0].checked) {
           genero = "Homem"
             if (idade >=0  && idade < 10) {
                 //CRIANÇA
                 img.setAttribute('src', './img/criancamasculino.jpg')
                 document.body.style.background = '#D2B48C'
             }else if (idade>=10 && idade <21 ) {
                 //JOVEM 
                 img.setAttribute('src', './img/jovemmasculino.jpg')
                 document.body.style.background = '#1874CD'
             }else  if (idade>=21 && idade<50) {
                 //ADULTO
                 img.setAttribute('src', './img/homem.jpg')
                 document.body.style.background = '#363636'
             }else {
                 //IDOSO
                 img.setAttribute('src', './img/idoso.jpg')
                 document.body.style.background = '#696969'
             }
        }else if (fsex[1].checked){
           genero = "Mulher"
           if (idade >=0  && idade < 10) {
                     //CRIANÇA
                     img.setAttribute('src', './img/criancafeminino.jpg')
                     document.body.style.background = '	#FF7256'
              }else if (idade>=10 && idade <21 ) {
                      //JOVEM 
                      img.setAttribute('src', './img/jovemfeminino.jpg')
                      document.body.style.background = '#6E7B8B'
              }else  if (idade>=21 && idade<50) {
                     //ADULTO
                     img.setAttribute('src', './img/mulher.jpg')
                     document.body.style.background = '#E9967A'
              }else {
                     //IDOSO
                     img.setAttribute('src', './img/idosa.jpg')
                     document.body.style.background = '#3CB371'
              }
        }
    }
       res.style.textAlign = 'center'
       if (idade <=1) {
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} ano <p>` 
       } else {
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos <p>` 
       }
        
       img.style.width = '200pt'
       img.style.height = '200pt'
       res.appendChild(img)
}