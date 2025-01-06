document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')
    const message = document.getElementById('message')

    campoA.classList.remove('error')
    campoB.classList.remove('error')

    const valorA = parseFloat(campoA.value)
    const valorB = parseFloat(campoB.value)

    if(valorB > valorA){
        message.innerHTML = "Formulário Válido!"
        message.style.color = "green"

        campoA.value = ""
        campoB.value = ""
    }else{
        message.innerHTML = "Formulário Inválido."
        message.style.color = "red"
        
        campoA.classList.add('error')
        campoB.classList.add('error')
    }
})