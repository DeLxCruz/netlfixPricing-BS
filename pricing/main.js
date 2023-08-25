const path = "config";

let obtener = async () => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#myJSONSection");
  seleccion.insertAdjacentHTML(
    "beforeEnd",
    /*html*/ `
        <h1 class="display-6 fw-normal text-body-emphasis mb-4">${
          res.section.titulo
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
    ${res.cardSection
      .map(
        (value) => /*html*/ `
        <div class="col">
        <div class="card mb-4 rounded-0 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">
                    ${value.tipo}
                </h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${
                  value.precio
                }<small class="text-body-secondary fw-light">/mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    ${value.beneficios
                      .map(
                        (element) => /*html*/ `
                            <li>${element}</li>
                        `
                      )
                      .join("")}
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Next</button>
            </div>
        </div>
    </div>`
      )
      .join("")}
        `
  );

  let textSectionTable = document.querySelector("#textSectionTable");
  textSectionTable.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <p class="link-secondary">
                ${res.textSectionTable}
            </p>
    `
  );
};

obtener();
