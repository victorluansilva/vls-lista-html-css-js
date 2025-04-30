## TUTORIAL: CRIANDO A WEB PAGE PESSOAL PARTINDO DO README DO PERFIL GITHUB**

### 🎯 Objetivo:
Transformar o conteúdo do seu `README.md` em uma página web pessoal bonita, usando HTML e CSS puro.

---

### 📁 Etapa 1 — Estrutura dos Arquivos

Crie uma **pasta com seu nome**, por exemplo:  

`seunomeusuario.github.io`


Dentro dela, crie **dois arquivos**:
- `index.html` – estrutura da página
- `styles.css` – estilo da página

Para facilitar, cole o script abaixo no seu cmd:

```cmd

mkdir %USERPROFILE%\workspace\seunomeusuario.github.io

cd %USERPROFILE%\workspace\seunomeusuario.github.io

echo "<!-- HTML AQUI -->" > index.html
echo "/* CSS AQUI */ >" styles.css

code %USERPROFILE%\workspace\seunomeusuario.github.io

```

---

### 🧱 Etapa 2 — Criar o arquivo `index.html`

Copie o modelo abaixo e substitua os dados conforme seu README:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Seu Nome</title>
  <link rel="stylesheet" href="styles.css" />
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

### 🎨 Etapa 3 — Criar o arquivo `styles.css`

Copie o conteúdo abaixo para criar um estilo moderno e animado para sua página:

📌 **Use exatamente este conteúdo** (é o mesmo que está no modelo `styles.css`):

<details>
<summary>Clique para ver o CSS completo</summary>

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

</details>

---

### 🌐 Etapa 4 — Testar no Navegador

1. Abra a pasta onde estão os arquivos.
2. Dê **dois cliques em `index.html`**.
3. Veja sua página pessoal carregando com estilo e animações.

---

### 🚀 Etapa 5 — Publicar no GitHub Pages

1. Faça `git add .` de para realizar o stage de suas mudanças
2. Depois `git commit -m "deploy do meu website"` para commitar suas alterações
3. E, por fim, `git push` para subir suas mudanças no servidor.

E pronto. Espere um pouco, acesse seu link seunomeusuario.github.io e vai atualizando até funcionar. 🤞😉
