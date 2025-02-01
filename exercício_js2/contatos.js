const form = document.getElementById('form-contato');
        let linhas = '';
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            adicionaLinha();
            atualizaTabela();
        });

        function adicionaLinha() {
            const inputNomeContato = document.getElementById('nome-contato');
            const inputTelefoneContato = document.getElementById('telefone-contato');

            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputTelefoneContato.value}</td>`;
            linha += '</tr>';

            linhas += linha;
            
            inputNomeContato.value = "";
            inputTelefoneContato.value = "";
        }

        function atualizaTabela() {
            const corpoTabela = document.querySelector('tbody');
            corpoTabela.innerHTML = linhas;
        }