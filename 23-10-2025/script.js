var iniciarSesion = true;
var restaurantes = ["San Jóse", "Motes de la Magdalena", "Pollo Stav"];

function cerrarSesion()
{   
    //console.log("Cerrando sesión...");
    const cerrarSesion = document.getElementById("btnCerrarsesion");
    console.log(cerrarSesion);

    if(iniciarSesion) {
        cerrarSesion.textContent = "Cerrar sesión";
    }else{
        cerrarSesion.textContent = "Abrir sesión";
    }

    iniciarSesion = !iniciarSesion;
}

function agregarRestaurantes()
{
    const titulo = document.createElement("h2");
    titulo.textContent = "ÑanEC";
    const divMain = document.getElementById("main");
    divMain.appendChild(titulo);

    for(var i=0; i<restaurantes.length; i++)
        {
            const p = document.createElement("p");
            p.textContent = restaurantes[i];
            divMain.appendChild(p);
        }
}

agregarRestaurantes();
