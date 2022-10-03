/*métodos de recuperação de elementos HTML*/

const saveStateForm = document.querySelector("#saveState-form")
const saveStates = []
/*addEventListener serve para ouvir evendos de elementos dentro do HTML*/
saveStateForm.addEventListener("submit", function(evento) {
    evento.preventDefault() //evita o comportmnto padrão de um evento, no caso de um submit, impede o reload.
    evento.stopPropagation()//cancela a propagação, prevenindo que outros eventos sejam emitidos
    const saveStateInput = document.querySelector("#save")
    saveStates.push(saveStateInput.value)
    saveStateInput.value = ""
    renderSave()
}) //indicar um evento e uma função como parâmetros, essa função pode ser anônima escrevendo function() {a função aqui}.

function renderSave() {
    const saveListSection = document.querySelector("#saveState-list")
    saveListSection.innerHTML = ""

    for (let tarefas of saveStates) {
        const divCard = document.createElement("div")
        divCard.classList.add("card", "bg-warning")

        const divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body", "d-flex", "align-items-center")

        const pSaveState = document.createElement("p")
        pSaveState.classList.add("saveState-text", "flex-grow-1", "text-truncate")
        pSaveState.innerText = tarefas

        const btnDelete = document.createElement("button")
        btnDelete.classList.add("btn", "delete-saveState")
        btnDelete.addEventListener("click", () => {
            const indice = saveStates.indexOf(tarefas)
            saveStates.splice(indice, 1)
            renderSave() //elemento, e quantos valores o splice deve excluir
        }) // arrow functions sempre são anônimas

        const spanIcon = document.createElement("span")
        spanIcon.classList.add("material-symbols-outlined")
        spanIcon.innerText = "delete"
        btnDelete.appendChild(spanIcon) //appendChild permite colocar apenas 1 elemento html dentro de outro.
        divCardBody.append(pSaveState, btnDelete) //append permite colocar 1 ou mais elementos html dentro de outro.

        divCard.appendChild(divCardBody)

        saveListSection.appendChild(divCard)

    }
}