const draggables = document.querySelectorAll('.case')
let dragged

for(const draggable of draggables){
    draggable.ondragstart = (e) => {
        console.log(draggable.innerHTML)
        console.log(e.target)
        dragged = draggable
        e.dataTransfer.setData("text/plain", e.target.innerHTML)
    }

    draggable.ondragover = (e) => {
        e.preventDefault()
    }

    draggable.ondrop = (e) => {
        dragged.innerHTML = draggable.innerHTML
        draggable.innerHTML = e.dataTransfer.getData("text/plain")
    }
}