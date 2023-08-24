const path = "config"

let obtener = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#myJSONSection");
    seleccion.insertAdjacentHTML(
        "beforeEnd",
      /*html*/ `
        <h1 class="display-6 fw-normal text-body-emphasis mb-4">${res.section.titulo
        }</h1>
        <div class="fs-5 text-body-secondary">
            ${res.section.parrafo
            .map(
                (element) => /*html*/ `
                    <p>${element.icono}
                    ${element.texto}</p>
                `
            )
            .join("")}
        </div>
    `
    );
    console.log(res);
}

obtener()