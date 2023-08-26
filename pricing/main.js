const path = "config";

let obtener = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#myJSONSection");
    seleccion.insertAdjacentHTML("beforeEnd",/*html*/ `
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
    cardSelection.insertAdjacentHTML("beforeend",/*html*/ `
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
                <h1 class="card-title pricing-card-title">${value.precio
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
            ).join("")}
    `);

    let textSectionTable = document.querySelector("#textSectionTable");
    textSectionTable.insertAdjacentHTML("beforeend", /*html*/ `
    <h2 class="display-6 text-center mb-4">${res.table.titulo}</h2>
    <table class="table text-center">
      <thead>
        <tr>
          <th style="width: 34%;"></th>
          ${res.table.head.map((value) => /*HTML*/`
            <th style="width: 22%;">${value.text}</th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        ${res.table.body.map((valores) => /*HTML*/`
        <tr>
          <th scope="row" class="text-start">${valores.titulo2}</th>
          <td>${valores.feature1}</td>
          <td>${valores.feature2}</td>
          <td>${valores.feature3}</td>
        </tr>
        `)}
      </tbody>
      <tbody>
        <tr>
          <th scope="row" class="text-start">${res.table.titulo3}</th>
          ${res.table.check.map((valor3) => /*HTML*/ `
            <td>${valor3.okay}</td>
          `).join("")}
        </tr>
      </tbody>
    </table>
    <p class="link-secondary">
        ${res.textSectionTable}
    </p>
    `);

    let divFooter = document.querySelector("#divFooter");
    divFooter.insertAdjacentHTML("beforeend", /*html*/ `
        <div class="col-12 col-md">
            <img class="mb-2" src="${res.footer[0].footerCopyright.img}" alt="" width="24" height="38">
            <small class="d-block mb-3 text-body-secondary">${res.footer[0].footerCopyright.text}</small>
        </div>
        ${res.footer[1].footerLinks.map((element) => /*html*/ `
            <div class="col-6 col-md">
                <ul class="list-unstyled text-small">
                ${element.map((element) => /*html*/ `
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${element}</a></li>
                `).join("")}
                </ul>
            </div>
        `).join("")}
    `)
};

obtener();
