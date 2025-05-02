#  TUTORIAL - PARTE 1: DE COMO CRIAR SEU GITHUB PAGES E SUBIR SUA WEB-PAGE

## 🌐 Criando um repositório GitHub Pages (seunomedeusuario.github.io)


1. **Acesse o GitHub**:  
   Vá para [github.com](https://github.com) e entre com sua conta.

2. **Crie um novo repositório**:
   - Clique em **“New”** (ou “Novo Repositório”).
   - Nomeie exatamente assim:  
     👉 `seunomedeusuario.github.io` (exemplo: `victorsilva.github.io`).
   - Marque a opção **“Public”**.
   - Marque a opção **“Add a README file”** (opcional).
   - Clique em **“Create repository”**.

3. **Clone o repositório em sua máquina:**
   ```bash
   git clone https://github.com/seu-usuario/seunomedeusuario.github.io
   ```

4. **Adicione os arquivos do seu site:**
   Copie os arquivos `index.html` e `styles.css` que você já criou para dentro da pasta clonada.

5. **Suba os arquivos para o GitHub:**
   ```bash
   cd seunomedeusuario.github.io
   git add .
   git commit -m "Adicionando site pessoal"
   git push origin main
   ```

6. **Acesse seu site:**
   Depois de alguns segundos, seu site estará disponível em:  
   👉 `https://seunomedeusuario.github.io`

---
<!-- pagebreak -->
<div style="page-break-after: always;"></div>	

# TUTORIAL - PARTE 2: CRIANDO A **WEB PAGE** PESSOAL PARTINDO DO README DO PERFIL **GITHUB**

## 📁 Etapa 1 — Estrutura dos Arquivos

No seu computador, entre na pasta do seu projeto github.io, de nome: `seunomeusuario.github.io`

- **Se não houver nem a pasta e arquivo**, volte para o primeiro arquivo do tutorial.

crie **dois arquivos**:
- `index.html` – estrutura da página
- `style.css` – estilo da página

Recomendo fazer isso pelo VS Code.

Para abrir a pasta `seunomeusuario.github.io` com o VS code:

- Clique com botão direito na pasta -> "Opção abrir com" -> escolha "VS Code"

---

## 🧱 Etapa 2 — Criar o arquivo `index.html`

Copie e cole o modelo abaixo dentro do arquivo `index.html`. Substitua o conteúdo textual os já preenchido em seu README.md do seu perfil github:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Seu Nome</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <header>
    <h1>Olá, eu sou [Seu Nome]</h1>
  </header>

  <main>
    <section>
      <p>
        Sou estudante de <strong>Desenvolvimento Web com PHP</strong> e estou aprendendo a construir aplicações web modernas.
        Este repositório serve como meu portfólio de projetos e exercícios do curso. 🚀
      </p>
    </section>

    <section>
      <div class="topico">
        <h2>🛠️ Tecnologias e Ferramentas</h2>
        <ul>
          <li><b>Linguagens:</b> PHP, HTML, CSS, JavaScript</li>
          <li><b>Banco de Dados:</b> MySQL</li>
          <li><b>Frameworks:</b> Laravel, Bootstrap</li>
          <li><b>Ferramentas:</b> Git, GitHub, VS Code, XAMPP</li>
        </ul>
      </div>

      <div class="topico">
        <h2>📌 Projetos e Exercícios</h2>
        <p>Aqui estão alguns dos meus projetos e exercícios desenvolvidos ao longo do curso:</p>
        <ul>
          <li>🔹 <a href="https://github.com/seu-usuario/projeto-1">Projeto 1 - Breve descrição do projeto</a></li>
          <!-- Adicione mais projetos se quiser -->
        </ul>
      </div>

      <div class="topico">
        <h2>📖 O que estou aprendendo</h2>
        <ul>
          <li>✔️ Fundamentos do PHP e MySQL</li>
          <li>✔️ Estruturação de projetos web</li>
          <li>✔️ Controle de versão com Git e GitHub</li>
          <li>✔️ Desenvolvimento de aplicações dinâmicas</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>📬 Contato</h2>
      <ul>
        <li>📧 Email: seuemail@email.com</li>
        <li>🔗 GitHub: <a href="https://github.com/seu-usuario">github.com/seu-usuario</a></li>
        <li>🔗 LinkedIn: <a href="https://linkedin.com/in/seuusuario">linkedin.com/in/seuusuario</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Seu Nome</p>
    <p>"Aprender a programar é abrir portas para um novo mundo de possibilidades!"</p>
  </footer>
</body>

</html>
```

---

## 🎨 Etapa 3 — Criar o arquivo `style.css`

Copie o e cole o conteúdo abaixo no arquivo `style.css` para criar um estilo moderno e com efeitos em webpage:

📌 **Use exatamente este conteúdo** (é o mesmo que está no modelo `style.css`):

```css
:root {
    --fundo: #0f2027;
    --gradiente: linear-gradient(135deg, #2c5364, #203a43, #0f2027);
    --cor-primaria: #00bcd4;
    --cor-texto: #ecf0f1;
    --cor-titulo: #ffffff;
    --fundo-section: rgba(255, 255, 255, 0.05);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--gradiente);
    color: var(--cor-texto);
    line-height: 1.6;
}

header {
    text-align: center;
    padding: 3rem 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    animation: slideDown 1s ease-out;
}

header h1 {
    font-size: 2.8rem;
    color: var(--cor-titulo);
}

main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
    animation: fadeIn 1.2s ease-out;
}

section {
    background: var(--fundo-section);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

section:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.08);
}

h2 {
    margin-bottom: 1rem;
    color: var(--cor-primaria);
    font-size: 1.6rem;
    border-bottom: 1px solid var(--cor-primaria);
    padding-bottom: 0.3rem;
}

p {
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding-left: 1rem;
}

ul li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.2rem;
}

ul li::before {
    content: "✔️";
    position: absolute;
    left: 0;
    color: var(--cor-primaria);
}

a {
    color: var(--cor-primaria);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    padding: 2rem 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--cor-texto);
    font-size: 0.9rem;
    animation: fadeIn 2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 🌐 Etapa 4 — Testar no Navegador

Se houver liveserver no seu VS code, clique com botão direito no seu arquivo html e e clique em 'Open with liveserver'

Caso não tenha o liveserver, abra o arquivo manualmente:

1. Abra a pasta onde estão os arquivos.
2. Dê **dois cliques em `index.html`**.

---

## 🚀 Etapa 5 — Publicar no GitHub Pages

1. Faça `git add .` de para realizar o stage de suas mudanças
2. Depois `git commit -m "deploy do meu website"` para commitar suas alterações
3. E, por fim, `git push` para subir suas mudanças no servidor.

E pronto. Espere um pouco, acesse seu link seunomeusuario.github.io e fique atualizando a página (tecla F5)até seu deploy carregar. 🤞😉

---

## 💡 Referênci teórica: A estrutura HTML e CSS contidos neste projeto.

## Explicação - **Entendendo a Estrutura HTML e CSS do projeto**

```html
<!DOCTYPE html>
<html lang="pt-br">
```
- Define que este é um documento HTML5.
- O atributo `lang="pt-br"` informa que o conteúdo está em português do Brasil.

---

### `<head>...</head>`
Contém **informações da página** que não são exibidas diretamente na tela:

```html
<meta charset="UTF-8" />
```
- Define o conjunto de caracteres como UTF-8 (compatível com acentuação).

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- Faz a página se ajustar corretamente em dispositivos móveis (responsividade).

```html
<title>Seu Nome</title>
```
- Define o título da aba do navegador.

```html
<link rel="stylesheet" href="style.css" />
```
- Importa o arquivo externo de CSS para aplicar o estilo visual à página.

---

### `<body>...</body>`

#### `<header>`
```html
<header>
  <h1>Olá, eu sou [Seu Nome]</h1>
</header>
```
- Cabeçalho do site com título de destaque (geralmente o nome ou saudação).

#### `<main>`
```html
<main> ... </main>
```
- Área principal do conteúdo. Contém todas as seções da página.

##### `<section>` - Sobre mim
- Breve parágrafo de apresentação pessoal com destaque para os estudos e objetivo do site.

##### `<section>` - Experiências e projetos
- Contém 3 blocos (`div class="topico"`) com subtítulos e listas:
  - Tecnologias e ferramentas usadas.
  - Projetos pessoais hospedados no GitHub.
  - Tópicos que o aluno está aprendendo.

##### `<section>` - Contato
- Lista com e-mail, GitHub e LinkedIn para facilitar a conexão.

#### `<footer>`
```html
<footer>
  <p>&copy; 2025 Seu Nome</p>
  <p>"Frase motivacional"</p>
</footer>
```
- Rodapé com crédito do autor e uma citação ou mensagem.

---

### 🎨 **Explicação da Estrutura CSS**

O CSS define **cores, tamanhos, posições, animações e interações** visuais.

---

### `:root` — Variáveis globais
```css
:root {
    --cor-primaria: #00bcd4;
    --cor-titulo: #ffffff;
    ...
}
```
- Define valores reutilizáveis para facilitar manutenção (cores, gradiente, etc.).

---

### Reset e comportamento global
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
```
- Remove margens/paddings padrão dos navegadores.
- Define uma rolagem suave entre seções.

---

### Corpo da página
```css
body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: var(--gradiente);
    color: var(--cor-texto);
}
```
- Fonte moderna.
- Cor do texto clara.
- Fundo com gradiente azul escuro para moderno visual profissional.

---

### Cabeçalho
```css
header {
    text-align: center;
    padding: 3rem 1rem;
    animation: slideDown 1s ease-out;
}
```
- Centraliza o conteúdo e aplica a animação `slideDown`.

---

### Título principal
```css
header h1 {
    font-size: 2.8rem;
    color: var(--cor-titulo);
}
```
- Título grande e branco.

---

### Conteúdo principal
```css
main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
    animation: fadeIn 1.2s ease-out;
}
```
- Define largura máxima centralizada, com margens e animação `fadeIn`.

---

### Seções
```css
section {
    background: var(--fundo-section);
    border-radius: 12px;
    transition: transform 0.3s;
}
```
- Visual com caixa levemente transparente e bordas arredondadas.
- Ao passar o mouse (`hover`), levanta levemente a seção:
```css
section:hover {
    transform: translateY(-5px);
}
```

---

### Títulos das seções
```css
h2 {
    color: var(--cor-primaria);
    border-bottom: 1px solid;
}
```
- Destaca os subtítulos com cor azul e uma linha abaixo.

---

### Listas e marcadores personalizados
```css
ul {
    list-style: none;
    padding-left: 1rem;
}
ul li::before {
    content: "✔️";
    position: absolute;
    color: var(--cor-primaria);
}
```
- Remove os pontos padrão.
- Adiciona ícones personalizados (✔️) antes de cada item.

---

### Links
```css
a {
    color: var(--cor-primaria);
}
a:hover {
    text-decoration: underline;
}
```
- Cor azul com sublinhado ao passar o mouse.

---

### Rodapé
```css
footer {
    text-align: center;
    font-size: 0.9rem;
    animation: fadeIn 2s ease-out;
}
```
- Informações finais com animação suave de entrada.

---

### Animações
```css
@keyframes fadeIn { ... }
@keyframes slideDown { ... }
```
- `fadeIn`: aparece suavemente de baixo.
- `slideDown`: aparece suavemente de cima.

---

### ✅ Resumo

Com essa estrutura do WEBSITE, temos os conceitos de:
- **HTML semântico** moderno;
- Separação entre **estrutura (HTML)** de **estilo (CSS)**;
- Desenvolvimento das noções de **responsividade básica**, **variáveis CSS**, **hover effects** e **animações com keyframes**;
- Deploy (publicação) de uma **página pessoal funcional**.
