# TUTORIAL DE COMO CRIAR SEU GITHUB PAGES E SUBIR SUA WEB-PAGE

## ✅ PARTE 1 — Criar um repositório GitHub Pages (seunomedeusuario.github.io)

### 🌐 **Objetivo**: Hospedar um site pessoal usando GitHub Pages

### 🔧 **Passo a Passo:**

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
   git commit -m "Adiciona site pessoal"
   git push origin main
   ```

6. **Acesse seu site:**
   Depois de alguns segundos, seu site estará disponível em:  
   👉 `https://seunomedeusuario.github.io`

---

## ✅ PARTE 2 — Publicar o site usando os arquivos enviados

Você já tem dois arquivos essenciais:
- `index.html` (estrutura do site)
- `styles.css` (estilos visuais e animações)

### 📁 **Passos para organizar os arquivos localmente:**

1. **Crie uma pasta chamada `seunomeusario.github.io`**
2. **Dentro dela, coloque:**
   - `index.html`
   - `styles.css`

### ✨ Certifique-se de que:
- O `<link rel="stylesheet" href="styles.css">` está correto no `index.html` (e está! ✅).
- Os arquivos estão no mesmo nível (mesma pasta).

---

## 🚀 Resultado Final

Assim que você fizer o `push` para o repositório `victorsilva.github.io`, ele será publicado automaticamente pelo GitHub Pages.

Você poderá acessar o site em:

```
https://victorsilva.github.io
```

