const path = "config";

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
    let cardSelection = document.querySelector("#cardJSONSection");
    cardSelection.insertAdjacentHTML(
        "beforeend",
    /*html*/ `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">
                        ${res.cardSection[0].tipo}
                    </h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${res.cardSection[0].precio}<small class="text-body-secondary fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        ${res.cardSection[0].beneficios.forEach(
                            (element) => {
                                const li = document.createElement('li')
                                li.textContent = element
                                console.log(element)
                            })}
                    </ul>
                </div>
            </div>
        </div>
        `
    );
};

obtener();
