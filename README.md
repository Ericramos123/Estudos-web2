# Estudos-web2
*temporario


O que é prompt()?
O prompt() é uma função do JavaScript no navegador.
Ele serve para abrir uma janelinha de entrada de texto, onde o usuário pode digitar alguma coisa.
O que o usuário digita é retornado como texto (string).

let-declara variaveis
print (em Python, por exemplo) → mostra o resultado no console/terminal (onde o programador vê).
*alert (em JavaScript) → mostra o resultado em uma janelinha pop-up no navegador (onde o usuário vê).*


Beleza! Vou escrever os **passos em português**, de forma bem clara, para criar um projeto JavaScript no VS Code:

---

## Passo a passo para criar um projeto JS no VS Code

### 1️⃣ Criar a pasta do projeto

1. Abra o VS Code.
2. Clique em **Arquivo → Abrir Pasta**.
3. Escolha ou crie uma pasta para o seu projeto, por exemplo: `meu-projeto`.

---

### 2️⃣ Criar a pasta do JavaScript

1. No **Explorer** (barra lateral esquerda), clique com **botão direito** sobre a pasta do projeto.
2. Selecione **Nova Pasta**.
3. Digite o nome: `js`.

---

### 3️⃣ Criar o arquivo JavaScript

1. Clique com **botão direito** sobre a pasta `js`.
2. Selecione **Novo Arquivo**.
3. Digite o nome: `script.js`.

---

### 4️⃣ Criar o arquivo HTML

1. Clique com **botão direito** sobre a pasta do projeto.
2. Selecione **Novo Arquivo**.
3. Digite o nome: `index.html`.

---

### 5️⃣ Ligar o JS ao HTML

No `index.html`, coloque este código mínimo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Meu Projeto JS</title>
</head>
<body>
  <h1>Teste de JavaScript</h1>

  <!-- Link para o arquivo JS -->
  <script src="js/script.js"></script>
</body>
</html>
```

---

### 6️⃣ Escrever código no `script.js`

Exemplo de soma de dois números:

```javascript
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma = num1 + num2;

alert("A soma dos dois números é: " + soma);
```

---

✅ Agora é só **abrir o `index.html` no navegador** e testar.

---

"Doc"---> comando para escrever sozinho
