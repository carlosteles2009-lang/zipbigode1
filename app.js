document.addEventListener('DOMContentLoaded', () => {

  // --- Módulo 1: Introdução ao DOM ---
  const tituloPrincipal = document.getElementById('titulo-principal');
  const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
  const btnAlterarTexto = document.getElementById('btn-alterar-texto');

  btnAlterarTexto.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
    paragrafoBoasVindas.textContent = 'Este parágrafo foi atualizado com sucesso utilizando a propriedade textContent!';
  });

  // --- Módulo 2: Eventos e Calculadora ---
  const valor1 = document.getElementById('valor1');
  const valor2 = document.getElementById('valor2');
  const btnSomar = document.getElementById('btn-somar');
  const resultadoSoma = document.getElementById('resultado-soma');

  btnSomar.addEventListener('click', () => {
    const num1 = Number(valor1.value) || 0;
    const num2 = Number(valor2.value) || 0;
    resultadoSoma.textContent = num1 + num2;
  });

  // --- Módulo 3: Criação e Remoção Dinâmica ---
  const btnCriarAviso = document.getElementById('btn-criar-aviso');
  const containerAvisos = document.getElementById('container-avisos');

  btnCriarAviso.addEventListener('click', () => {
    const novoAviso = document.createElement('div');
    novoAviso.className = 'aviso-item';
    novoAviso.textContent = `Aviso gerado às ${new Date().toLocaleTimeString()} - (Clique para remover)`;
    
    // Clique no aviso para o remover
    novoAviso.addEventListener('click', () => novoAviso.remove());
    containerAvisos.appendChild(novoAviso);
  });

  // --- Módulo 4: Classes e Estilos ---
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const modulo4Card = document.getElementById('modulo-4');

  btnToggleTema.addEventListener('click', () => {
    modulo4Card.classList.toggle('tema-escuro');
  });

  // --- Módulo 5: Validação de Formulário ---
  const inputNome = document.getElementById('nome-usuario');
  const erroNome = document.getElementById('erro-nome');

  inputNome.addEventListener('input', () => {
    if (inputNome.value.length > 0 && inputNome.value.length < 5) {
      erroNome.style.display = 'block';
    } else {
      erroNome.style.display = 'none';
    }
  });

  // --- Módulo 6: Delegação de Eventos ---
  const painelBotoes = document.getElementById('painel-botoes');
  const logBotao = document.getElementById('log-botao');

  painelBotoes.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      logBotao.textContent = event.target.textContent;
    }
  });

  // --- Módulo 7: Atributos e Dataset ---
  const caixaDestaque = document.getElementById('caixa-destaque');
  const infoAtributo = document.getElementById('info-atributo');

  document.getElementById('btn-prioridade-alta').addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'alta');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  document.getElementById('btn-prioridade-baixa').addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'baixa');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  document.getElementById('btn-limpar-atributo').addEventListener('click', () => {
    caixaDestaque.removeAttribute('data-prioridade');
    infoAtributo.textContent = 'Nenhum';
  });

  // --- Módulo 8: Renderização Dinâmica ---
  const formTarefa = document.getElementById('form-tarefa');
  const inputTarefa = document.getElementById('input-tarefa-titulo');
  const listaTarefas = document.getElementById('lista-tarefas');

  formTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const texto = inputTarefa.value.trim();
    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      listaTarefas.appendChild(li);
      inputTarefa.value = '';
    }
  });

});

// Seleção dos elementos do DOM
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const btnSomar = document.getElementById('btn-somar');
const resultadoSoma = document.getElementById('resultado-soma');

// Associação do evento de clique ao botão
btnSomar.addEventListener('click', () => {
  // Captura os valores e realiza a conversão para ponto flutuante
  const num1 = parseFloat(valor1Input.value);
  const num2 = parseFloat(valor2Input.value);

  // Trata valores nulos/inválidos (caso os campos estejam vazios ou contenham NaN)
  const n1 = isNaN(num1) ? 0 : num1;
  const n2 = isNaN(num2) ? 0 : num2;

  // Realiza a soma e atualiza o DOM
  const soma = n1 + n2;
  resultadoSoma.textContent = soma;
});

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MÓDULO 1: Introdução ao DOM
  // ==========================================
  const tituloPrincipal = document.getElementById('titulo-principal');
  const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
  const btnAlterarTexto = document.getElementById('btn-alterar-texto');

  btnAlterarTexto.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
    paragrafoBoasVindas.textContent = 'Este parágrafo foi atualizado com sucesso utilizando a propriedade textContent!';
  });

  // ==========================================
  // MÓDULO 2: Eventos e Calculadora
  // ==========================================
  const valor1Input = document.getElementById('valor1');
  const valor2Input = document.getElementById('valor2');
  const btnSomar = document.getElementById('btn-somar');
  const resultadoSoma = document.getElementById('resultado-soma');

  btnSomar.addEventListener('click', () => {
    const num1 = parseFloat(valor1Input.value);
    const num2 = parseFloat(valor2Input.value);
    const n1 = isNaN(num1) ? 0 : num1;
    const n2 = isNaN(num2) ? 0 : num2;

    resultadoSoma.textContent = n1 + n2;
  });

  // ==========================================
  // MÓDULO 3: Criação e Remoção Dinâmica
  // ==========================================
  const btnCriarAviso = document.getElementById('btn-criar-aviso');
  const containerAvisos = document.getElementById('container-avisos');

  btnCriarAviso.addEventListener('click', () => {
    const novoAviso = document.createElement('div');
    novoAviso.className = 'aviso-item';

    const textoAviso = document.createElement('span');
    textoAviso.textContent = `Aviso gerado às ${new Date().toLocaleTimeString()} `;

    const btnFechar = document.createElement('button');
    btnFechar.textContent = 'X';
    btnFechar.className = 'btn-fechar-aviso';

    btnFechar.addEventListener('click', () => {
      novoAviso.remove();
    });

    novoAviso.appendChild(textoAviso);
    novoAviso.appendChild(btnFechar);
    containerAvisos.appendChild(novoAviso);
  });

  // ==========================================
  // MÓDULO 4: Classes e Estilos via JS
  // ==========================================
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const modulo4Card = document.getElementById('modulo-4');

  btnToggleTema.addEventListener('click', () => {
    modulo4Card.classList.toggle('tema-escuro');
  });

  // ==========================================
  // MÓDULO 5: Inputs e Validação Simples
  // ==========================================
  const inputNome = document.getElementById('nome-usuario');
  const erroNome = document.getElementById('erro-nome');

  inputNome.addEventListener('input', () => {
    if (inputNome.value.trim().length > 0 && inputNome.value.trim().length < 5) {
      erroNome.style.display = 'block';
    } else {
      erroNome.style.display = 'none';
    }
  });

  // ==========================================
  // MÓDULO 6: Delegação de Eventos
  // ==========================================
  const painelBotoes = document.getElementById('painel-botoes');
  const logBotao = document.getElementById('log-botao');

  painelBotoes.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      logBotao.textContent = event.target.textContent;
    }
  });

  // ==========================================
  // MÓDULO 7: Atributos e Dataset
  // ==========================================
  const caixaDestaque = document.getElementById('caixa-destaque');
  const infoAtributo = document.getElementById('info-atributo');
  const btnAlta = document.getElementById('btn-prioridade-alta');
  const btnBaixa = document.getElementById('btn-prioridade-baixa');
  const btnLimpar = document.getElementById('btn-limpar-atributo');

  btnAlta.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'alta');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnBaixa.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'baixa');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnLimpar.addEventListener('click', () => {
    caixaDestaque.removeAttribute('data-prioridade');
    infoAtributo.textContent = 'Nenhum';
  });

  // ==========================================
  // MÓDULO 8: Renderização Dinâmica
  // ==========================================
  const formTarefa = document.getElementById('form-tarefa');
  const inputTarefa = document.getElementById('input-tarefa-titulo');
  const listaTarefas = document.getElementById('lista-tarefas');

  formTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const texto = inputTarefa.value.trim();

    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      listaTarefas.appendChild(li);
      inputTarefa.value = '';
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MÓDULO 1: Introdução ao DOM
  // ==========================================
  const tituloPrincipal = document.getElementById('titulo-principal');
  const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
  const btnAlterarTexto = document.getElementById('btn-alterar-texto');

  btnAlterarTexto.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
    paragrafoBoasVindas.textContent = 'Este parágrafo foi atualizado com sucesso utilizando a propriedade textContent!';
  });

  // ==========================================
  // MÓDULO 2: Eventos e Calculadora
  // ==========================================
  const valor1Input = document.getElementById('valor1');
  const valor2Input = document.getElementById('valor2');
  const btnSomar = document.getElementById('btn-somar');
  const resultadoSoma = document.getElementById('resultado-soma');

  btnSomar.addEventListener('click', () => {
    const num1 = parseFloat(valor1Input.value);
    const num2 = parseFloat(valor2Input.value);
    
    // Tratamento para garantir valor numérico válido (padrão 0 em caso de NaN)
    const n1 = isNaN(num1) ? 0 : num1;
    const n2 = isNaN(num2) ? 0 : num2;

    resultadoSoma.textContent = n1 + n2;
  });

  // ==========================================
  // MÓDULO 3: Criação e Remoção Dinâmica
  // ==========================================
  const btnCriarAviso = document.getElementById('btn-criar-aviso');
  const containerAvisos = document.getElementById('container-avisos');

  btnCriarAviso.addEventListener('click', () => {
    const novoAviso = document.createElement('div');
    novoAviso.className = 'aviso-item';

    const textoAviso = document.createElement('span');
    textoAviso.textContent = `Aviso gerado às ${new Date().toLocaleTimeString()} `;

    const btnFechar = document.createElement('button');
    btnFechar.textContent = 'X';
    btnFechar.className = 'btn-fechar-aviso';

    // Remove o próprio aviso ao clicar no botão "X"
    btnFechar.addEventListener('click', () => {
      novoAviso.remove();
    });

    novoAviso.appendChild(textoAviso);
    novoAviso.appendChild(btnFechar);
    containerAvisos.appendChild(novoAviso);
  });

  // ==========================================
  // MÓDULO 4: Classes e Estilos via JS
  // ==========================================
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const modulo4Card = document.getElementById('modulo-4');

  btnToggleTema.addEventListener('click', () => {
    // Alterna a classe .dark-theme no card #modulo-4 via classList.toggle
    modulo4Card.classList.toggle('dark-theme');
  });

});

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MÓDULO 1: Introdução ao DOM
  // ==========================================
  const tituloPrincipal = document.getElementById('titulo-principal');
  const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
  const btnAlterarTexto = document.getElementById('btn-alterar-texto');

  btnAlterarTexto.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
    paragrafoBoasVindas.textContent = 'Este parágrafo foi atualizado com sucesso utilizando a propriedade textContent!';
  });

  // ==========================================
  // MÓDULO 2: Eventos e Calculadora
  // ==========================================
  const valor1Input = document.getElementById('valor1');
  const valor2Input = document.getElementById('valor2');
  const btnSomar = document.getElementById('btn-somar');
  const resultadoSoma = document.getElementById('resultado-soma');

  btnSomar.addEventListener('click', () => {
    const num1 = parseFloat(valor1Input.value);
    const num2 = parseFloat(valor2Input.value);

    const n1 = isNaN(num1) ? 0 : num1;
    const n2 = isNaN(num2) ? 0 : num2;

    resultadoSoma.textContent = n1 + n2;
  });

  // ==========================================
  // MÓDULO 3: Criação e Remoção Dinâmica
  // ==========================================
  const btnCriarAviso = document.getElementById('btn-criar-aviso');
  const containerAvisos = document.getElementById('container-avisos');

  btnCriarAviso.addEventListener('click', () => {
    const novoAviso = document.createElement('div');
    novoAviso.className = 'aviso-item';

    const textoAviso = document.createElement('span');
    textoAviso.textContent = `Aviso gerado às ${new Date().toLocaleTimeString()} `;

    const btnFechar = document.createElement('button');
    btnFechar.textContent = 'X';
    btnFechar.className = 'btn-fechar-aviso';

    btnFechar.addEventListener('click', () => {
      novoAviso.remove();
    });

    novoAviso.appendChild(textoAviso);
    novoAviso.appendChild(btnFechar);
    containerAvisos.appendChild(novoAviso);
  });

  // ==========================================
  // MÓDULO 4: Classes e Estilos via JS
  // ==========================================

  // --- Questão 4: Alternar classe .dark-theme usando classList.toggle ---
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const modulo4Card = document.getElementById('modulo-4');

  btnToggleTema.addEventListener('click', () => {
    modulo4Card.classList.toggle('dark-theme');
  });

  // --- Questão 5: getElementsByClassName, for...of e style.color ---
  const celulasSituacao = document.getElementsByClassName('situacao');

  for (const celula of celulasSituacao) {
    const texto = celula.textContent.trim();

    if (texto === 'Concluído') {
      celula.style.color = '#22c55e'; // Verde
    } else if (texto === 'Pendente') {
      celula.style.color = '#ef4444'; // Vermelho
    }
  }

  // ==========================================
  // MÓDULO 5: Inputs e Validação Simples
  // ==========================================
  const inputNome = document.getElementById('nome-usuario');
  const erroNome = document.getElementById('erro-nome');

  inputNome.addEventListener('input', () => {
    const valorDigitado = inputNome.value.trim();

    if (valorDigitado.length > 0 && valorDigitado.length < 5) {
      erroNome.style.display = 'block';
    } else {
      erroNome.style.display = 'none';
    }
  });

  // ==========================================
  // MÓDULO 6: Delegação de Eventos
  // ==========================================
  const painelBotoes = document.getElementById('painel-botoes');
  const logBotao = document.getElementById('log-botao');

  painelBotoes.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      logBotao.textContent = event.target.textContent;
    }
  });

  // ==========================================
  // MÓDULO 7: Atributos e Dataset
  // ==========================================
  const caixaDestaque = document.getElementById('caixa-destaque');
  const infoAtributo = document.getElementById('info-atributo');
  const btnAlta = document.getElementById('btn-prioridade-alta');
  const btnBaixa = document.getElementById('btn-prioridade-baixa');
  const btnLimpar = document.getElementById('btn-limpar-atributo');

  btnAlta.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'alta');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnBaixa.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'baixa');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnLimpar.addEventListener('click', () => {
    caixaDestaque.removeAttribute('data-prioridade');
    infoAtributo.textContent = 'Nenhum';
  });

  // ==========================================
  // MÓDULO 8: Arrays e Renderização Dinâmica
  // ==========================================
  const formTarefa = document.getElementById('form-tarefa');
  const inputTarefa = document.getElementById('input-tarefa-titulo');
  const listaTarefas = document.getElementById('lista-tarefas');

  formTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const texto = inputTarefa.value.trim();

    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      listaTarefas.appendChild(li);
      inputTarefa.value = '';
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MÓDULO 1: Introdução ao DOM
  // ==========================================
  const tituloPrincipal = document.getElementById('titulo-principal');
  const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
  const btnAlterarTexto = document.getElementById('btn-alterar-texto');

  btnAlterarTexto.addEventListener('click', () => {
    tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
    paragrafoBoasVindas.textContent = 'Este parágrafo foi atualizado com sucesso utilizando a propriedade textContent!';
  });

  // ==========================================
  // MÓDULO 2: Eventos e Calculadora
  // ==========================================
  const valor1Input = document.getElementById('valor1');
  const valor2Input = document.getElementById('valor2');
  const btnSomar = document.getElementById('btn-somar');
  const resultadoSoma = document.getElementById('resultado-soma');

  btnSomar.addEventListener('click', () => {
    const num1 = parseFloat(valor1Input.value);
    const num2 = parseFloat(valor2Input.value);

    const n1 = isNaN(num1) ? 0 : num1;
    const n2 = isNaN(num2) ? 0 : num2;

    resultadoSoma.textContent = n1 + n2;
  });

  // ==========================================
  // MÓDULO 3: Criação e Remoção Dinâmica
  // ==========================================
  const btnCriarAviso = document.getElementById('btn-criar-aviso');
  const containerAvisos = document.getElementById('container-avisos');

  btnCriarAviso.addEventListener('click', () => {
    const novoAviso = document.createElement('div');
    novoAviso.className = 'aviso-item';

    const textoAviso = document.createElement('span');
    textoAviso.textContent = `Aviso gerado às ${new Date().toLocaleTimeString()} `;

    const btnFechar = document.createElement('button');
    btnFechar.textContent = 'X';
    btnFechar.className = 'btn-fechar-aviso';

    btnFechar.addEventListener('click', () => {
      novoAviso.remove();
    });

    novoAviso.appendChild(textoAviso);
    novoAviso.appendChild(btnFechar);
    containerAvisos.appendChild(novoAviso);
  });

  // ==========================================
  // MÓDULO 4: Classes e Estilos via JS
  // ==========================================
  const btnToggleTema = document.getElementById('btn-toggle-tema');
  const modulo4Card = document.getElementById('modulo-4');

  btnToggleTema.addEventListener('click', () => {
    modulo4Card.classList.toggle('dark-theme');
  });

  // Estilização condicional da tabela via getElementsByClassName e for...of
  const celulasSituacao = document.getElementsByClassName('situacao');

  for (const celula of celulasSituacao) {
    const texto = celula.textContent.trim();

    if (texto === 'Concluído') {
      celula.style.color = '#22c55e'; // Verde
    } else if (texto === 'Pendente') {
      celula.style.color = '#ef4444'; // Vermelho
    }
  }

  // ==========================================
  // MÓDULO 5: Inputs e Validação Simples
  // ==========================================
  const inputNome = document.getElementById('nome-usuario');
  const erroNome = document.getElementById('erro-nome');

  inputNome.addEventListener('input', () => {
    const valorDigitado = inputNome.value.trim();

    if (valorDigitado.length > 0 && valorDigitado.length < 5) {
      erroNome.style.display = 'block';
    } else {
      erroNome.style.display = 'none';
    }
  });

  // ==========================================
  // MÓDULO 6: Delegação de Eventos
  // ==========================================
  const painelBotoes = document.getElementById('painel-botoes');
  const logBotao = document.getElementById('log-botao');

  painelBotoes.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'BUTTON') {
      logBotao.textContent = e.target.textContent;
    }
  });

  // ==========================================
  // MÓDULO 7: Atributos e Dataset
  // ==========================================
  const caixaDestaque = document.getElementById('caixa-destaque');
  const infoAtributo = document.getElementById('info-atributo');
  const btnAlta = document.getElementById('btn-prioridade-alta');
  const btnBaixa = document.getElementById('btn-prioridade-baixa');
  const btnLimpar = document.getElementById('btn-limpar-atributo');

  btnAlta.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'alta');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnBaixa.addEventListener('click', () => {
    caixaDestaque.setAttribute('data-prioridade', 'baixa');
    infoAtributo.textContent = caixaDestaque.getAttribute('data-prioridade');
  });

  btnLimpar.addEventListener('click', () => {
    caixaDestaque.removeAttribute('data-prioridade');
    infoAtributo.textContent = 'Nenhum';
  });

  // ==========================================
  // MÓDULO 8: Arrays e Renderização Dinâmica
  // ==========================================
  const formTarefa = document.getElementById('form-tarefa');
  const inputTarefa = document.getElementById('input-tarefa-titulo');
  const listaTarefas = document.getElementById('lista-tarefas');

  formTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const texto = inputTarefa.value.trim();

    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      listaTarefas.appendChild(li);
      inputTarefa.value = '';
    }
  });

});