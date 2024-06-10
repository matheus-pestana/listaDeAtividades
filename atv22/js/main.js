function paga() {
    var formPagamento = document.getElementById('formPagamento');

    // Verifica se um ouvinte de evento já foi adicionado
    if (formPagamento.hasEventListener) {
        return;
    }

    var campoCartao = document.getElementById('cartao');
    var campoValidade = document.getElementById('validade');
    var campoCvv = document.getElementById('cvv');

    formPagamento.addEventListener('submit', function(e) {
        e.preventDefault();

        var nome = document.getElementById('nome').value;
        var cartao = campoCartao.value;
        var validade = campoValidade.value;
        var cvv = campoCvv.value;

                var regexValidade = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!regexValidade.test(validade)) {
            alert('A data de validade deve estar no formato mm/aa.');
            return;
        }

        if (!nome || !cartao || !validade || !cvv) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verifica se o CVV tem exatamente 3 caracteres
        if (cvv.length !== 3) {
            alert('O campo CVV deve ter exatamente 3 dígitos.');
            return;
        }

        // Verifica se a data de validade é válida
        var partesData = validade.split('/');
        var mesValidade = parseInt(partesData[0], 10);
        var anoValidade = parseInt(partesData[1], 10);
        var dataAtual = new Date();
        var mesAtual = dataAtual.getMonth() + 1; // getMonth() retorna um valor de 0 a 11
        var anoAtual = dataAtual.getFullYear() % 100; // getFullYear() retorna o ano com 4 dígitos

        if (anoValidade < anoAtual || (anoValidade === anoAtual && mesValidade < mesAtual)) {
            alert('A data de validade do cartão não é válida.');
            return;
        }

        // Aqui você pode adicionar mais validações, como verificar se o número do cartão tem 16 dígitos, etc.

        alert('Pagamento realizado com sucesso!');
    });

    // Indica que um ouvinte de evento foi adicionado
    formPagamento.hasEventListener = true;
}