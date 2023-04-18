# CalenDog

- [Sobre](#sobre)
- [Tecnologias usadas](#tecnologias-usadas)
- [Pré-Requisitos](#pré-requisitos)
- [Como baixar o projeto](#como-baixar-o-projeto)
- [Rodando Localmente](#rodando-localmente)
- [Build](#build)
- [Deploy](#deploy)
- [Contribuidores](#contribuidores)

# Sobre

<div>
  <h1 align="center">🚧 Projeto em construção 🚧</h1>
 
  **CalenDog é um dos projetos finais para turma 07 do curso de FullStack da Digital College. Nele os alunos irão apresentar seus conhecimentos e aprimorar habilidades para trabalhar, analisar e desenvolver projetos em equipe.**
  
  <p>
    <strong>CalenDog</strong> tem como objetivo desenvolver um formulário para otimizar processos e serviços para petshops.
Ele será vinculado à APIs de calendários e mensagens instantâneas. Desse modo criar uma melhor relação do petshop 
com seu cliente. 📆 
  </p>

![Image](https://user-images.githubusercontent.com/112489062/230792165-150fe0bf-cb3a-4b52-85fd-d48ee38e206f.svg)

</div>

---

# Tecnologias usadas

<div align="center">
<img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" height="30em"/>
<img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" height="30em"/>
<img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" height="30em"/>
<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" height="30em"/>
<img src="https://github.com/storybookjs.png" height="30em"/>
<img src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" height="30em"/>
<img src="https://github.com/mdx-js.png" height="30em"/>
</div>

---

# Pré-Requisitos

### Para reproduzir a aplicação, existem alguns softwares que deverão estar instalados em seu computador

- [![Git](https://img.shields.io/badge/Git-Repository-orange.svg)](https://git-scm.com/)

O Git é amplamente utilizado como um sistema de controle de versão no mundo do desenvolvimento de software. Ele foi criado em 2005 por <a href="https://github.com/torvalds">Linus Torvalds</a>, o criador do kernel do Linux, e é um projeto de código aberto. <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Uma-Breve-Hist%C3%B3ria-do-Git">Saiba mais...</a>

---

- [![Node.js](https://img.shields.io/badge/Node.js-Download-brightgreen)](https://nodejs.org/en/download/)

Node.js é um ambiente de tempo de execução de JavaScript de plataforma cruzada, construído com o mecanismo de JavaScript V8 do Google Chrome. Ele permite que os desenvolvedores usem o <a href="https://github.com/topics/javascript">JavaScript</a> para escrever ferramentas do lado do servidor, scripts de linha de comando e aplicativos da web em tempo real. <a href="https://pt.wikipedia.org/wiki/Node.js">Saiba mais...</a>

---

- [![Visual Studio](https://img.shields.io/badge/Visual%20Studio-Download-blue.svg)](https://visualstudio.microsoft.com/downloads/)

Visual Studio é um ambiente integrado de desenvolvimento (IDE) criado pela Microsoft. Ele suporta várias linguagens de programação, incluindo C#, C++, VB.NET, F#, Python e muitas outras. <a href="https://learn.microsoft.com/pt-br/visualstudio/get-started/visual-studio-ide?view=vs-2022">Saiba mais...</a>

---

Apos instalado será necessário uma extensão para o Visual Studio:

- [![MDX Extension for Visual Studio Code](https://img.shields.io/visual-studio-marketplace/v/silvenon.mdx?label=MDX%20Extension&color=blue)](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)

---

# Como baixar o projeto

Primeiramente será necessário fazer o download do projeto

1. Acesse o github do projeto e clique para baixar o projeto

2. Abra o Visual Studio e selecione a pasta do projeto.

3. Para selecionar o projeto, localize-o onde está armazenado e escolha-o. Se o projeto tiver sido baixado em formato ZIP, será necessário extrair os arquivos antes de fazer a seleção.

<hr>

# Rodando localmente

1. Clone o repositório: 
  Para rodar o projeto localmente, abra o seu ambiente de trabalho local(VsCode, gitpod ou outro editor) e no terminal, no diretório onde você quer armazenar o projeto, digite:  
  ```suggestion
  git clone https://github.com/dcTeam7/calendog.git
  ``` 
2. Após isso, para rodar o projeto seguiremos o passo a passo para rodar projetos [Vite](https://pt.vitejs.dev/guide/#scaffolding-your-first-vite-project). Digite as seguintes linhas de comando no terminal do repositório:
```suggestion
npm install
npm run dev
```

<hr>

# Build

1. Certifique-se de que todas as dependências do projeto estão instaladas e atualizadas.
2. Abra o terminal no diretório raiz do projeto.
3. Execute o seguinte comando para gerar o build do projeto, que criará uma pasta `dist` no diretório raiz do projeto, contendo os arquivos otimizados para produção:

```suggestion
npm run build
```

<br>

# Deploy


1. Crie um repositório no Github para o projeto, se ainda não tiver criado.
2. Em seguida, configure o Vite para que ele use caminhos relativos ao vincular arquivos de recursos em HTML, conforme a [documentação](https://pt.vitejs.dev/config/shared-options.html). Isso é feito para que o GitHub Pages saiba onde encontrar os arquivos. Tudo o que você precisa fazer é abrir `vite.config.js` (ou `vite.config.ts` se seu projeto estiver usando TypeScript) e adicionar a seguinte linha dentro de `defineConfig`:

```suggestion
base: "./"
```

3. Finalmente, vamos configurar o GitHub Actions. Primeiro, dentro do repositório crie uma pasta `.github/workflows`, e dentro dela crie um arquivo chamado `build.yml`. Nele, adicione o seguinte código:

```suggestion
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

Este arquivo de fluxo de trabalho define as etapas necessárias para construir e implantar seu projeto. Ele dispara quando houver um push na branch main.

4. Adicione e confirme as alterações no repositório.
5. Volte ao seu repositório no GitHub e navegue até a aba "Actions". Você verá o seu fluxo de trabalho sendo executado.
6. Quando o fluxo de trabalho for concluído, verifique se seu site foi implantado. O GithubPages já está pré-configurado para servir a branch gh-pages como site.

Pronto! Agora, todas as vezes que você fizer push na branch "main", o GithubActions irá construir e implantar o seu projeto Vite automaticamente.

---

# Contribuidores
<p align="justify">
Um agradecimento especial a todos que estão empenhados em fazer este projeto ganhar vida:
</p>

[![Contributors](https://contributors-img.web.app/image?repo=dcteam7/calendog)](https://github.com/dcteam7/calendog/graphs/contributors) 