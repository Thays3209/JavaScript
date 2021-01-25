function tabuada() {
    let num = document.querySelector('input#number')
    let tab = document.getElementById('sel')

if (num.value.length == 0)  {   
    // length é o comprimento(quantidade de letras(string)) for igual a 0.
    document.body.style.background ='#B22222'
    window.alert('Por favor, digite um número')
}else{
    let N = Number(num.value)
    let C = 1
    tab.innerHTML = ''
    while(C <= 10) {
        let item = document.createElement('option')
        item.text = `${N} x ${C} = ${N*C}`
        item.value = `tab${C}`
        tab.appendChild(item)
        C++
    }
}
}