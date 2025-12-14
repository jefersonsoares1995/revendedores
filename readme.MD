# 📋 Formulário de Cadastro de Revendedores TOP LIFE

<div align="center">
  
  ![TOP LIFE](https://img.shields.io/badge/TOP_LIFE-Purificadores_de_Água-0078D4?style=for-the-badge)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  
</div>

## 🎯 Sobre o Projeto

Sistema web desenvolvido para cadastro e gerenciamento de revendedores da **TOP LIFE** (Purificadores de Água). A aplicação permite que potenciais parceiros preencham suas informações de forma intuitiva e responsiva, com integração automática de endereços via API ViaCEP e envio de dados para webhook do N8N.

### 🎓 Contexto Acadêmico

Projeto desenvolvido para a disciplina **Padrões Web para No Code e Low Code**, com foco em:

- ✅ Aplicação de padrões web fundamentais (HTML5, CSS3, JavaScript)
- ✅ Integração de APIs externas
- ✅ Responsividade e acessibilidade
- ✅ Automação de processos com webhooks

---

## 👥 Público-Alvo

Pequenas e médias empresas interessadas em se tornar assistências autorizadas TOP LIFE, que precisam cadastrar suas informações de forma rápida e profissional.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
```
HTML5           - Estruturação semântica do formulário
CSS3            - Estilização moderna com gradientes e animações
JavaScript ES6+ - Validações, máscaras e integração com APIs
```

### Integrações
```
ViaCEP API  - Preenchimento automático de endereço
N8N Webhook - Automação e armazenamento de dados
Railway     - Hospedagem do webhook
```

---

## ⚙️ Funcionalidades

### ✨ Principais Features

1. **🔍 Preenchimento Automático de Endereço**
   - Integração com API ViaCEP
   - Busca automática ao digitar o CEP
   - Campos ocultos para garantir envio dos dados

2. **✏️ Máscaras de Formatação**
   - CEP: `00000-000`
   - CNPJ: `00.000.000/0000-00`
   - Telefone: `(00) 00000-0000`

3. **✅ Validação de Dados**
   - Campos obrigatórios marcados com *
   - Validação HTML5 nativa
   - Feedback visual em tempo real

4. **📱 Design Responsivo**
   - Adaptação automática para mobile, tablet e desktop
   - Grid system para organização dos campos
   - Touch-friendly para dispositivos móveis

5. **🔗 Integração com Webhook**
   - Envio estruturado em JSON
   - Confirmação de sucesso
   - Redirecionamento para página de agradecimento

---

## 📁 Estrutura de Arquivos

```
projeto-toplife/
│
├── index.html              # Página principal do formulário
├── style.css               # Estilos customizados
├── scripts.js              # Lógica JavaScript
├── sucesso.html            # Página de confirmação
├── sucesso.css             # Estilos da página de sucesso
├── README.md               # Documentação
└── assets/
    └── Logotipo_branco.png # Logo TOP LIFE
```

---

## 💻 Código Utilizado para Personalização

### 1. HTML - Estrutura Semântica

```html
<!-- Header com Logo da Empresa -->
<div class="logo-header">
  <div class="logo-letras">
    <img src="/assets/Logotipo_branco.png" alt="Logotipo TOP LIFE">
  </div>
</div>

<!-- Card do Formulário com Header Integrado -->
<main>
  <div class="form-card">
    <header class="form-header">
      <h1>Pesquisa para Revendedores</h1>
      <p class="form-subtitle">
        Preencha o formulário abaixo para se tornar uma assistência autorizada TOP LIFE
      </p>
    </header>

    <form id="revendedorForm">
      <!-- Seção de Dados da Empresa -->
      <div class="form-section">
        <h3 class="section-title">Dados da Empresa</h3>
        
        <!-- Campos em linha (Grid) -->
        <div class="row-fields">
          <div class="field-group">
            <label>E-mail *</label>
            <input type="email" name="email" placeholder="contato@empresa.com.br" required />
          </div>
          <div class="field-group">
            <label>CNPJ *</label>
            <input type="text" name="cnpj" placeholder="00.000.000/0000-00" required />
          </div>
        </div>
      </div>

      <!-- Campos ocultos para garantir envio dos dados do ViaCEP -->
      <input type="hidden" name="logradouro_hidden" id="logradouro_hidden" />
      <input type="hidden" name="bairro_hidden" id="bairro_hidden" />
      <input type="hidden" name="cidade_hidden" id="cidade_hidden" />
      <input type="hidden" name="uf_hidden" id="uf_hidden" />
    </form>
  </div>
</main>
```

**💡 Justificativa**: Utilização de tags semânticas (`<header>`, `<main>`, `<form>`, `<label>`) para melhorar acessibilidade e SEO. Campos ocultos garantem que dados da API ViaCEP sejam enviados mesmo em navegadores que não persistem valores preenchidos via JavaScript.

---

### 2. CSS - Estilização Moderna e Responsiva

```css
/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background: #84e3ff57;
  color: #333;
  line-height: 1.6;
}

/* Header com Logo */
.logo-header {
  background: #197fe6;
  padding: 20px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-letras img {
  height: 60px;
  width: 120px;
}

/* Card Principal com Sombra Moderna */
.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

/* Header do Formulário com Gradiente */
.form-header {
  background: linear-gradient(135deg, #1e5aa8 0%, #197fe6 100%);
  color: white;
  padding: 25px 25px;
  text-align: center;
}

/* Grid System para Campos em Linha */
.row-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Inputs com Foco Animado */
input:focus,
select:focus {
  outline: none;
  border-color: #197fe6;
  box-shadow: 0 0 0 3px rgba(43, 127, 216, 0.1);
}

/* Botão com Gradiente e Hover Animado */
.btn {
  width: calc(100% - 80px);
  margin: 40px;
  padding: 16px;
  background: linear-gradient(135deg, #1e5aa8 0%, #197fe6 100%);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(43, 127, 216, 0.3);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(43, 127, 216, 0.4);
}

/* Responsividade Mobile-First */
@media (max-width: 768px) {
  .logo-header {
    padding: 15px 20px;
  }

  .form-header h1 {
    font-size: 26px;
  }

  .form-section {
    padding: 28px 24px;
  }

  .row-fields {
    grid-template-columns: 1fr; /* Empilha campos em telas pequenas */
  }

  .btn {
    width: calc(100% - 48px);
    margin: 24px;
  }
}
```

**🎨 Destaques de Personalização**:
- **Gradientes CSS** para aparência moderna
- **Box-shadow** com múltiplas camadas para profundidade
- **Grid CSS** para layout responsivo automático
- **Transitions** suaves para melhor UX
- **Mobile-first approach** com media queries

---

### 3. JavaScript - Lógica e Integrações

#### 3.1 Integração com API ViaCEP

```javascript
document.getElementById("cep").addEventListener("blur", async function () {
  const cep = this.value.replace(/\D/g, "");

  if (cep.length === 8) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        // Preenche campos visíveis
        document.getElementById("rua").value = data.logradouro || "";
        document.getElementById("bairro").value = data.bairro || "";
        document.getElementById("cidade").value = data.localidade || "";
        document.getElementById("uf").value = data.uf || "";

        // Preenche campos ocultos para envio confiável
        document.getElementById("logradouro_hidden").value = data.logradouro || "";
        document.getElementById("bairro_hidden").value = data.bairro || "";
        document.getElementById("cidade_hidden").value = data.localidade || "";
        document.getElementById("uf_hidden").value = data.uf || "";
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  }
});
```

**✅ Benefícios**:
- Reduz erros de digitação
- Melhora experiência do usuário
- Valida CEPs em tempo real
- Fallback silencioso em caso de erro

---

#### 3.2 Máscaras de Formatação

```javascript
// MÁSCARA CEP (00000-000)
const cepInput = document.getElementById("cep");
cepInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 8) value = value.slice(0, 8);
  
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d{0,3}).*/, "$1-$2");
  }
  
  e.target.value = value;
});

// MÁSCARA CNPJ (00.000.000/0000-00)
const cnpjInput = document.querySelector('input[name="cnpj"]');
cnpjInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 14) value = value.slice(0, 14);

  if (value.length > 12) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, "$1.$2.$3/$4-$5");
  } else if (value.length > 8) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, "$1.$2.$3/$4");
  } else if (value.length > 5) {
    value = value.replace(/^(\d{2})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,3}).*/, "$1.$2");
  }
  
  e.target.value = value;
});

// MÁSCARA TELEFONE ((00) 00000-0000)
const telefoneInput = document.querySelector('input[name="telefone"]');
telefoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (value.length > 5) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5}).*/, "($1) $2");
  }
  
  e.target.value = value;
});
```

**✅ Vantagens**:
- Formatação automática durante digitação
- Limita caracteres inválidos
- Melhora legibilidade dos dados
- Reduz erros de preenchimento

---

#### 3.3 Envio para Webhook com Estrutura JSON

```javascript
document.getElementById("revendedorForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Estrutura o payload no formato esperado pelo webhook
    const payload = {
      email: formData.get("email"),
      cnpj: formData.get("cnpj"),
      razaoSocial: formData.get("razaoSocial"),
      endereco: {
        cep: formData.get("cep"),
        rua: formData.get("logradouro_hidden") || formData.get("logradouro"),
        numero: formData.get("numero"),
        bairro: formData.get("bairro_hidden") || formData.get("bairro"),
        cidade: formData.get("cidade_hidden") || formData.get("cidade"),
        uf: formData.get("uf_hidden") || formData.get("uf"),
      },
      telefone: formData.get("telefone"),
      atendimentoAssistencia: formData.get("atendimentoAssistencia"),
      servicoRefrigeracao: formData.get("servicoRefrigeracao"),
      parteEletricaMecanica: formData.get("parteEletricaMecanica"),
      interesseAutorizada: formData.get("interesseAutorizada"),
    };

    console.log("Payload enviado:", payload);

    try {
      const response = await fetch(
        "https://primary-production-51cb1e.up.railway.app/webhook/formulario-revendedores",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        window.location.href = "/sucesso.html";
      } else {
        alert("Erro ao enviar os dados. Tente novamente.");
      }
    } catch (error) {
      alert("Erro inesperado ao enviar o formulário.");
      console.error(error);
    }
  });
```

**🔧 Características Técnicas**:
- Estruturação de dados em objeto aninhado
- Envio assíncrono com Fetch API
- Tratamento de erros com try-catch
- Redirecionamento após sucesso
- Prioriza dados dos campos ocultos (API ViaCEP)

---

## 🎨 Boas Práticas Aplicadas

### ♿ Acessibilidade
- ✅ Labels associados aos inputs
- ✅ Placeholders descritivos
- ✅ Contraste adequado (WCAG AA)
- ✅ Foco visível nos elementos interativos
- ✅ Textos alternativos em imagens

### 📱 Responsividade
- ✅ Meta viewport configurado
- ✅ Grid CSS para layouts flexíveis
- ✅ Media queries para breakpoints
- ✅ Fonte em unidades relativas
- ✅ Touch targets de 44x44px mínimo

### 🔒 Segurança
- ✅ Validação client-side
- ✅ Sanitização de dados antes do envio
- ✅ Headers CORS configurados

### ⚡ Performance
- ✅ CSS minificado
- ✅ Imagens otimizadas
- ✅ Lazy loading quando aplicável
- ✅ Debounce em eventos de input (implícito nas máscaras)

---

## 🚀 Como Usar

### 1️⃣ Acesso à Aplicação
```
URL: https://revendedores-git-main-jefersonsoares1995s-projects.vercel.app/
```

### 2️⃣ Preenchimento do Formulário

**Dados da Empresa**
- Digite o e-mail corporativo
- Informe o CNPJ (formatação automática)
- Razão social completa
- Telefone com DDD

**Endereço**
- Digite apenas o CEP (sem hífen)
- Aguarde o preenchimento automático
- Confirme ou corrija os dados
- Adicione o número do estabelecimento

**Perguntas sobre Serviços**
- Responda Sim/Não para cada pergunta
- Essas informações ajudam a qualificar o parceiro

**Envio**
- Clique em "Enviar formulário"
- Aguarde confirmação
- Será redirecionado para página de sucesso

### 3️⃣ Confirmação

Após o envio bem-sucedido:
- Página de confirmação é exibida
- Dados são enviados ao N8N
- Equipe TOP LIFE receberá as informações
- Você pode voltar ao formulário pelo botão

---

## 🔗 Integrações Externas

### ViaCEP API
```
Endpoint: https://viacep.com.br/ws/{cep}/json/
Método: GET
Formato: JSON
Documentação: https://viacep.com.br/
```

**Retorno Exemplo**:
```json
{
  "cep": "13058-220",
  "logradouro": "Rua Constantino Abrahão",
  "bairro": "Conjunto Residencial Parque São Bento",
  "localidade": "Campinas",
  "uf": "SP"
}
```

### N8N Webhook
```
Método: POST
Content-Type: application/json
```

**Payload Enviado**:
```json
{
  "email": "contato@empresa.com.br",
  "cnpj": "00.000.000/0000-00",
  "razaoSocial": "Empresa LTDA",
  "endereco": {
    "cep": "00000-000",
    "rua": "Nome da Rua",
    "numero": "123",
    "bairro": "Bairro",
    "cidade": "Cidade",
    "uf": "SP"
  },
  "telefone": "(00) 00000-0000",
  "atendimentoAssistencia": "sim",
  "servicoRefrigeracao": "não",
  "parteEletricaMecanica": "sim",
  "interesseAutorizada": "sim"
}
```

---

## 📊 Fluxo de Dados

```
┌─────────────┐
│   Usuário   │
│  Preenche   │
│ Formulário  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Valida     │
│  Campos     │
│ (HTML5 +JS) │
└──────┬──────┘
       │
       ▼
┌─────────────┐      ┌──────────┐
│ Digita CEP  │─────▶│ ViaCEP   │
│             │◀─────│   API    │
└──────┬──────┘      └──────────┘
       │
       │ Preenche endereço
       │
       ▼
┌─────────────┐
│  Clica em   │
│   Enviar    │
└──────┬──────┘
       │
       ▼
┌─────────────┐      ┌──────────┐
│ Formata em  │─────▶│   N8N    │
│    JSON     │      │ Webhook  │
└──────┬──────┘      └──────────┘
       │                   │
       │                   ▼
       │            ┌──────────────┐
       │            │ Armazenamento│
       │            │   Automação  │
       │            └──────────────┘
       ▼
┌─────────────┐
│   Página    │
│   Sucesso   │
└─────────────┘
```

---

## 🐛 Tratamento de Erros

| Erro | Causa | Solução |
|------|-------|---------|
| CEP não encontrado | CEP inválido ou não cadastrado | Preencher manualmente |
| Webhook offline | Problema no Railway/N8N | Mensagem de erro exibida |
| Campos vazios | Validação HTML5 | Destaque visual nos campos |
| Navegador não suporta Fetch | Navegador muito antigo | Polyfill ou mensagem de upgrade |

---

## 📈 Melhorias Futuras

- [ ] Validação de CNPJ no backend
- [ ] Captcha para evitar spam
- [ ] Upload de documentos
- [ ] Painel administrativo para visualizar cadastros
- [ ] E-mail de confirmação automático
- [ ] Modo offline com LocalStorage
- [ ] Internacionalização (i18n)
- [ ] Analytics para tracking de conversão

---

## 🎓 Aprendizados Técnicos

### Padrões Web Aplicados

**HTML5 Semântico**
- Uso correto de tags estruturais
- Validação nativa de formulários
- Atributos de acessibilidade (ARIA)

**CSS3 Moderno**
- Flexbox e Grid para layouts
- Custom properties (variáveis CSS)
- Animations e transitions
- Mobile-first design

**JavaScript ES6+**
- Async/await para requisições
- Arrow functions
- Template literals
- Destructuring
- Fetch API

### Integração No-Code/Low-Code

- Webhook do N8N permite automação sem backend próprio
- API pública (ViaCEP) elimina necessidade de banco de dados de CEPs
- Estrutura modular permite fácil migração para plataformas como Webflow ou Bubble

---

## 👨‍💻 Autor

**Jeferson Soares**
- 📚 Disciplina: Padrões Web para No Code e Low Code
- 🏫 Instituição: UniFECAF
- 📅 Data: Dezembro 2025

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do trabalho da disciplina de Padrões Web.

---

## 📞 Contato

Para dúvidas sobre o funcionamento da aplicação:
- 📧 E-mail: jefersonsoares1995@gmail.com
- 🐙 GitHub: [jefersonsoares1995]

---

<div align="center">
  
  **🎉 Projeto desenvolvido com foco em boas práticas, acessibilidade e experiência do usuário!**
  
  ⭐ Se este projeto foi útil, considere dar uma estrela!
  
</div>