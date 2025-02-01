const form = document.getElementById('form-atividade')
let linhas = ''
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji Celebrando"/>'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji Celebrando"/>'

const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = pardeFloat(prompt("Digite uma nota mínima:"))


form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserido.`)
    } else {
    
    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'
    
    linhas += linha
    
    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
}}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado
}
    

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let x = 0; x < notas.length; x++){
        somaDasNotas += notas[x]
    }

    return somaDasNotas / notas.length
}