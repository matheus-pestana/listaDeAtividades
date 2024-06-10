// <!-- Matheus Arcangelo Pestana -->

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addLinha");
    const tabela = document.getElementById("dynamicTable").getElementsByTagName("tbody")[0];

    btn.addEventListener("click", () => {
        const linha = tabela.insertRow();

        linha.innerHTML = "<td>Novo Jogo</td><td>Nova avaliação</td>";

        tabela.querySelectorAll("tr").forEach((row, index) => {
            row.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f2f2f2";
        });
    });
});
