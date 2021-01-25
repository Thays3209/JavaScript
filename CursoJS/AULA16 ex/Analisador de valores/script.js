let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inLista(n, L) {
    if(L.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false 
    }
}

function adicionar() {
     if ( isNumero(num.value)  &&  !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = '' //limpar a caixinha
    num.focus() // deixar o mouser piscando 
}

function finalizar() {
    if(valores.length == 0 ) {
        window.alert('Adicione valores,por favor!')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor ) {
                menor = valores[pos]
            }
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> O menor valor informado foi: ${menor} </p>`
        res.innerHTML += `<p> O maior valor informado foi: ${maior} </p>`
        res.innerHTML += `<p> A soma de todos os valores é : ${soma} </p>`
        res.innerHTML += `<p> A media de todos os valores é : ${media} </p>`
        
    }
}




