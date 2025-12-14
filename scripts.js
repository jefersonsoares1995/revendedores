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

        // Preenche campos ocultos para envio confiável no Chrome
        document.getElementById("logradouro_hidden").value =
          data.logradouro || "";
        document.getElementById("bairro_hidden").value = data.bairro || "";
        document.getElementById("cidade_hidden").value = data.localidade || "";
        document.getElementById("uf_hidden").value = data.uf || "";
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  }
});

// MÁSCARA CEP
const cepInput = document.getElementById("cep");
if (cepInput) {
  cepInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d{0,3}).*/, "$1-$2");
    }

    e.target.value = value;
  });
}

// MÁSCARA CNPJ
const cnpjInput = document.querySelector('input[name="cnpj"]');
if (cnpjInput) {
  cnpjInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 14) value = value.slice(0, 14);

    if (value.length > 12) {
      value = value.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
        "$1.$2.$3/$4-$5"
      );
    } else if (value.length > 8) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, "$1.$2.$3/$4");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,3}).*/, "$1.$2");
    }

    e.target.value = value;
  });
}

// MÁSCARA TELEFONE
const telefoneInput = document.querySelector('input[name="telefone"]');
if (telefoneInput) {
  telefoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5}).*/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }

    e.target.value = value;
  });
}

// ENVIO DO FORMULÁRIO
document
  .getElementById("revendedorForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Estrutura o payload no formato correto que o webhook espera
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
