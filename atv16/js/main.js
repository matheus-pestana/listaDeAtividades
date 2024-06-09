document.addEventListener('DOMContentLoaded', (event) => {
    var novaTarefa = document.getElementById("novaTarefa");
    var adicionarTarefa = document.getElementById("adicionarTarefa");
    var tarefas = document.getElementById("tarefas");

    // Carrega as tarefas do Local Storage
    var listaTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    function atualizarTarefas() {
        // Limpa a lista de tarefas
        tarefas.innerHTML = "";

        // Adiciona cada tarefa à lista
        for (let i = 0; i < listaTarefas.length; i++) {
            var tarefa = document.createElement("li");
            tarefa.textContent = listaTarefas[i].texto;

            // Se a tarefa estiver concluída, adiciona a classe .concluida
            if (listaTarefas[i].concluida) {
                tarefa.classList.add("concluida");
            }

            // Adiciona um botão para marcar a tarefa como concluída
            var concluir = document.createElement("button");
            concluir.textContent = "Concluir";
            concluir.onclick = function() {
                listaTarefas[i].concluida = !listaTarefas[i].concluida;
                atualizarTarefas();
            }
            tarefa.appendChild(concluir);

            // Adiciona um botão para remover a tarefa
            var remover = document.createElement("button");
            remover.textContent = "Remover";
            remover.onclick = function() {
                listaTarefas.splice(i, 1);
                atualizarTarefas();
            }
            tarefa.appendChild(remover);

            tarefas.appendChild(tarefa);
        }

        // Salva as tarefas no Local Storage
        localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
    }

    // Adiciona um evento de clique ao botão para adicionar uma nova tarefa
    adicionarTarefa.onclick = function() {
        listaTarefas.push({texto: novaTarefa.value, concluida: false});
        novaTarefa.value = "";
        atualizarTarefas();
    }

    // Atualiza a lista de tarefas inicialmente
    atualizarTarefas();
});