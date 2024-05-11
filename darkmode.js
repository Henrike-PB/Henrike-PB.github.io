const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

// Função para aplicar o modo escuro ao site
function applyDarkMode() {
    body.classList.add('dark-mode');
    // Atualiza o estado do botão de alternância
    toggleBtn.checked = true;
}

// Função para remover o modo escuro do site
function removeDarkMode() {
    body.classList.remove('dark-mode');
    // Atualiza o estado do botão de alternância
    toggleBtn.checked = false;
}

// Verifica se o navegador do usuário está no modo escuro
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplica automaticamente o modo escuro se o navegador estiver no modo escuro
if (isDarkMode) {
    applyDarkMode();
}

// Adiciona um ouvinte de eventos para o botão de alternar modo
toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});


