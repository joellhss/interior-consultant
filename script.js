function modal() {
    const modal = document.getElementById("modal")
    const container = document.querySelector("div.container")
    modal.style.display = "flex"
    container.style.display = "none"
}

function closex() {
    const modal = document.getElementById("modal")
    const container = document.querySelector("div.container")
    modal.style.display = "none"
    container.style.display = "flex"
}