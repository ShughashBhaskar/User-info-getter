const form = document.getElementById("userform")
const table = document.getElementById("usertable").getElementsByTagName("tbody")[0]
const edi = document.getElementById("edi")
const savebt = document.getElementById("btn")


let editIdx = null

const deleteRow = (idx) => {
    table.deleteRow(idx)
}



const editRow = (idx) => {
    savebt.style.display = "none"
    edi.style.display = "inline"
    const SelectedCell = table.rows[idx]
    document.getElementById("name").value = SelectedCell.cells[0].textContent
    document.getElementById("age").value = SelectedCell.cells[1].textContent
    document.getElementById("dob").value = SelectedCell.cells[2].textContent
    document.getElementById("mail").value = SelectedCell.cells[3].textContent
    document.getElementById("gender").value = SelectedCell.cells[4].textContent
    editIdx = idx
}

const addRow = (name, age, dob, email, gender) => {
    const newRow = table.insertRow()
    newRow.insertCell(0).textContent = name
    newRow.insertCell(1).textContent = age
    newRow.insertCell(2).textContent = dob
    newRow.insertCell(3).textContent = email
    newRow.insertCell(4).textContent = gender

    const actionCells = newRow.insertCell(5)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => deleteRow(newRow.rowIndex - 1)
    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.onclick = () => editRow(newRow.rowIndex - 1)



    actionCells.appendChild(editBtn)
    actionCells.appendChild(deleteBtn)
}





const updateRow = (name, age, dob, email, gender) => {
    const editCell = table.rows[editIdx]
    editCell.cells[0].textContent = name
    editCell.cells[1].textContent = age
    editCell.cells[2].textContent = dob
    editCell.cells[3].textContent = email
    editCell.cells[4].textContent = gender

    editIdx = null
}


savebt.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const dob = document.getElementById("dob").value
    const email = document.getElementById("mail").value
    const gender = document.getElementById("gender").value

    addRow(name, age, dob, email, gender)

    form.reset()


})

edi.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value

    const age = document.getElementById("age").value
    const dob = document.getElementById("dob").value
    const email = document.getElementById("mail").value
    const gender = document.getElementById("gender").value




    if (editIdx != null) {
        updateRow(name, age, dob, email, gender)
    } else {
        addRow(name, age, dob, email, gender)
    }

    form.reset()

})
edi.addEventListener("click", () => {
    edi.style.display = "none"
    savebt.style.display = "inline"
})
