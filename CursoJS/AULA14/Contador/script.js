function contar() {
    let ini = (document.getElementById('txti'))
    let fim = (document.getElementById('txtf'))
    let passo = (document.getElementById('txtp'))
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        document.body.style.background = '#FF4040'
        res.innerHTML = '<strong> Impossível contar </strong>'
        //alert("[ERRO] falta dados ")
    } else {
        res.innerHTML= '<p><strong>Contando...</strong></p>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            alert("Passo inválido!Considerando PASSO 1 ")
            p=1
        }

        if (i < f) {
            //CONTAGEM CRESCENTE 
            for( let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c} > `
            }
        }else{
            //CONTAGEM REGRESSIVA
            for( let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c} > `
            }
        }

        res.innerHTML += `<p><strong>Fim</strong></p>`
        document.body.style.background = '#3A5FCD'

      
    }

}
