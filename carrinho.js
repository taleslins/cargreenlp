document.addEventListener("DOMContentLoaded", () => {
    const metodoSelect = document.querySelector(".metodo");
    const parcelasDiv = document.getElementById("parcelas__carro");
    const parcelasSelect = document.getElementById("parcelas");
    const finalizarCompra = document.querySelector(".metodo__finalizar__compra");
    
    const valorCarroElemento = document.getElementById("compra__valor__carro");
    const jurosMensal = 0.015; 

    parcelasDiv.style.display = "none";

    metodoSelect.addEventListener("change", () => {
        if (metodoSelect.value === "credito") {
            parcelasDiv.style.display = "block";
        } else {
            parcelasDiv.style.display = "none";
        }
    });

    finalizarCompra.addEventListener("click", () => {
        const metodo = metodoSelect.value;
        const valorBase = parseFloat(valorCarroElemento.textContent.replace("R$", "").replace(".", "").replace(",", "."));

        let mensagem = "Você finalizou sua compra!";

        if (metodo === "credito") {
            const numParcelas = parseInt(parcelasSelect.value);
            let valorTotalComJuros = valorBase;

            if (numParcelas >= 7) {
               valorTotalComJuros = valorBase * Math.pow(1 + jurosMensal, numParcelas - 6); 
            }

            const valorParcela = valorTotalComJuros / numParcelas;
            const parcelaTexto = parcelasSelect.options[parcelasSelect.selectedIndex].text;

            mensagem += `\nMétodo de pagamento: Cartão de Crédito`;
            mensagem += `\nPagamento em: ${parcelaTexto}`;
            mensagem += `\nValor de cada parcela: R$ ${valorParcela.toFixed(2)}`;
            mensagem += `\nValor total com${numParcelas >= 7 ? '' : ' sem'} juros: R$ ${valorTotalComJuros.toFixed(2)}`;
        } else if (metodo === "pix") {
            mensagem += `\nMétodo de pagamento: PIX\nValor total: R$ ${valorBase.toFixed(2)}`;
        } else if (metodo === "boleto") {
            mensagem += `\nMétodo de pagamento: Boleto Bancário\nValor total: R$ ${valorBase.toFixed(2)}`;
        }

        alert(mensagem);
    });
});
