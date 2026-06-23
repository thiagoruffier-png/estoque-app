Estudo sobre useEffect

1. O que é o useEffect e qual o seu papel no ciclo de vida de um componente?

O useEffect é um Hook do React que permite executar ações que acontecem fora do fluxo normal de renderização como atualizar algo na tela depois que ela carrega, ou reagir a mudanças de estado. Ele substitui, em componentes funcionais, o que antes só existia em componentes de classe.

2. Como funciona o array de dependências e o que acontece se o deixarmos vazio []?

O array de dependências é o segundo argumento do useEffect e define quando o efeito deve rodar de novo:

Sem array: o efeito roda depois de toda renderização.
Array vazio []: o efeito roda apenas uma vez, após o componente aparecer na tela pela primeira vez.
Array com valores [variavel]: o efeito roda na primeira renderização e sempre que algum desses valores mudar.

Se deixarmos vazio, o efeito fica preso ao estado inicial.



Controle de Estoque
Feito em React Native  para gerenciar o estoque de produtos. Dá pra cadastrar um item ver a lista de tudo que tá cadastrado e remover o que não precisa mais.
Como rodar
Abrir o vs code na pasta, abrir o terminal e executar os seguintes comandos:
npm install expo
npx expo start

Vai abrir um QR Code no terminal aperta w pra abrir no navegador.
Como usar
Na aba Cadastrar, preenche nome, quantidade, preço e categoria do produto e clica em Salvar.
Na aba Estoque, fica a lista de tudo que já foi cadastrado, com botão de excluir em cada item.
Na aba Sobre, tem um resumo do projeto.

