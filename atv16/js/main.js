// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', (event) => {
    var novaTarefa = document.getElementById("novaTarefa");
    var adicionarTarefa = document.getElementById("adicionarTarefa");
    var tarefas = document.getElementById("tarefas");

    var listaTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    function atualizarTarefas() {
        tarefas.innerHTML = "";

        for (let i = 0; i < listaTarefas.length; i++) {
            var tarefa = document.createElement("li");

            var tarefaTexto = document.createElement("p");
            tarefaTexto.textContent = listaTarefas[i].texto;
            tarefa.appendChild(tarefaTexto);

            if (listaTarefas[i].concluida) {
                tarefa.classList.add("concluida");
            }

            var concluir = document.createElement("button");
            concluir.textContent = "Concluir";
            concluir.onclick = function() {
                listaTarefas[i].concluida = !listaTarefas[i].concluida;
                atualizarTarefas();
            }
            tarefa.appendChild(concluir);

            var remover = document.createElement("button");
            remover.textContent = "Remover";
            remover.onclick = function() {
                listaTarefas.splice(i, 1);
                atualizarTarefas();
            }
            tarefa.appendChild(remover);

            tarefas.appendChild(tarefa);
        }

        localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
    }

    adicionarTarefa.onclick = function() {
        listaTarefas.push({texto: novaTarefa.value, concluida: false});
        novaTarefa.value = "";
        atualizarTarefas();
    }

    atualizarTarefas();
});