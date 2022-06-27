var listadoTareas = [];
leerTareasLocalStorage()
listadoTareas.map(t => addTareaHtml(t))

document.addEventListener("submit", function(event){
    event.preventDefault();
    var tarea = event.target[0].value
    if(tarea == ""){
    return alert("Por favor completar el campo tarea")
    }
    escribirTareaLocalStorage(tarea)
    event.target[0].value = ""
})

function addTareaHtml(tarea){
    var listadoHTML = document.getElementById("listado-tareas")
        listadoHTML.innerHTML += `<li class="list-group-item">${tarea}</li>`
}

function leerTareasLocalStorage(){
    var listadoTareasLS = JSON.parse(localStorage.getItem('tareas'))
    
    if(listadoTareasLS?.length > 0){
      this.listadoTareas = listadoTareasLS
      console.log(`se cargaron ${listadoTareasLS.length} tareas desde el localStorage`)
      $.notify(`se cargaron ${listadoTareasLS.length} tareas desde el localStorage`,"success");
    }else{
        $.notify(`no se encontraron tares en el localStorage`,"info");
        console.log("no se encontraron tares en el localStorage")
 
    }
    
}
function escribirTareaLocalStorage(tarea){
    var listadoTareasLS = JSON.parse(localStorage.getItem('tareas'))
    if(!listadoTareasLS){
        localStorage.setItem('tareas',JSON.stringify([tarea]))
        leerTareasLocalStorage()
        addTareaHtml(tarea)
        $.notify(`Tarea cargada`,"success");
        return console.log("Tarea cargada")

    }
    listadoTareasLS.push(tarea)   
    localStorage.setItem('tareas',JSON.stringify(listadoTareasLS))
    leerTareasLocalStorage()
    addTareaHtml(tarea)
    $.notify(`Tarea cargada`,"success");
    console.log("Tarea cargada")
}

