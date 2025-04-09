document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".ferramenta-de-procura");
    const carros = document.querySelectorAll(".objeto__carros");

    input.addEventListener("input", function () {
        const termo = input.value.toLowerCase();

        carros.forEach((carro) => {
            const nome = carro.querySelector("h3").textContent.toLowerCase();
            if (nome.includes(termo)) {
                carro.style.display = "flex";
            } else {
                carro.style.display = "none";
            }
        });
    });
});
