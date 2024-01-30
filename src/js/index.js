/*
    
    Objetivo 1 - qunado o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
        Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar

        Passo 2 - pegar o elemento  do conteudo que precisa ser mostrado

        Passo 3 - pegar o clique do usuário no JS

        Passo 4 - when user click, add the class "ativo" na listagem de plataformas dentro do botão para qeu o conteúdo apareceça

    Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botao, o conteúdo deve ser escondido

*/

// Objetivo 1 - qunado o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

// Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar
const botao = document.querySelector(".btn-plataformas");

// Passo 2 - pegar o elemento  do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas")

// Passo 3 - Pegar o clique do user no JS
botao.addEventListener("click", () => {})