function HiddenShow() {
    console.log("Acción ocultar/mostrar");

    var contenido = document.getElementById('HiddenContent')
    console.log('Contenido valor tiene ' + contenido.hidden)
    if (contenido.hidden) {
        contenido.hidden = false;
    } else {
        contenido.hidden = true;
    }
}

