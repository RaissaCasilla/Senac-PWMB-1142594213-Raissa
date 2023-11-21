// função para abrir e adicionar informações na tabela cronograma //
function carregarCronogramaSalvo() {
  var dadosSalvos = localStorage.getItem('cronograma');
  if (dadosSalvos) {
      document.getElementById("tabelaCrono").getElementsByTagName('tbody')[0].innerHTML = dadosSalvos;
  }
}

function salvarCronograma() {
  var tabela = document.getElementById("tabelaCrono").getElementsByTagName('tbody')[0];
  localStorage.setItem('cronograma', tabela.innerHTML);
}

window.onload = carregarCronogramaSalvo;

function cronograma() {
  var tabelaCronograma = document.getElementById("tabelaCronograma");
  tabelaCronograma.style.display = "block";
}

function adicionarCronograma() {
  var tabela = document.getElementById("tabelaCrono").getElementsByTagName('tbody')[0];

  var semana = document.getElementById("semana").value;
  var objetivo = document.getElementById("objetivo").value;
  var status = document.getElementById("status").value;

  if (semana !== "" && objetivo !== "" && status !== "status") {
      var novaLinha = tabela.insertRow(tabela.rows.length);
      var celulaSemana = novaLinha.insertCell(0);
      var celulaObjetivo = novaLinha.insertCell(1);
      var celulaStatus = novaLinha.insertCell(2);
      var celulaEditar = novaLinha.insertCell(3);
      var celulaExcluir = novaLinha.insertCell(4);

      celulaSemana.innerHTML = semana;
      celulaObjetivo.innerHTML = objetivo;
      celulaStatus.innerHTML = status;
      celulaEditar.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';
      celulaExcluir.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinha(this)" style="width: 20px; height: 20px; cursor: pointer">';

      document.getElementById("semana").value = "";
      document.getElementById("objetivo").value = "";
      document.getElementById("status").value = "status";

      salvarCronograma();
  } else {
      alert("Preencha todos os campos antes de adicionar!");
  }
}

function editarLinha(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaCrono');
  var index = linha.rowIndex;

  document.getElementById('semana').value = tabela.rows[index].cells[0].innerHTML;
  document.getElementById('objetivo').value = tabela.rows[index].cells[1].innerHTML;
  document.getElementById('status').value = tabela.rows[index].cells[2].innerHTML;

  tabela.deleteRow(index);
  salvarCronograma(); 
}

function excluirLinha(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaCrono');
  var index = linha.rowIndex;

  tabela.deleteRow(index);
  salvarCronograma(); 
}

// função 2: abrir tabela recursos 
function carregarRecursosSalvos() {
  var dadosSalvos = localStorage.getItem('recursos');
  if (dadosSalvos) {
    document.getElementById("tabelaRecur").getElementsByTagName('tbody')[0].innerHTML = dadosSalvos;
  }
}

function salvarRecursos() {
  var tabela = document.getElementById("tabelaRecur").getElementsByTagName('tbody')[0];
  localStorage.setItem('recursos', tabela.innerHTML);
}

function adicionarRecursos() {
    var tabela = document.getElementById("tabelaRecur").getElementsByTagName('tbody')[0];
  
    var objeto = document.getElementById("objeto").value;
    var quantidade = document.getElementById("quantidade").value;
    var valor = document.getElementById("valor").value;
  
    if (objeto !== "" && quantidade !== "" && valor !== "") {
      var novaLinha = tabela.insertRow(tabela.rows.length);
      var celulaObjeto = novaLinha.insertCell(0);
      var celulaQuantidade = novaLinha.insertCell(1);
      var celulaValor = novaLinha.insertCell(2);
      var celulaEditar = novaLinha.insertCell(3);
      var celulaExcluir = novaLinha.insertCell(4);
  
      celulaObjeto.innerHTML = objeto;
      celulaQuantidade.innerHTML = quantidade;
  
      // Adicionar o símbolo de dinheiro à célula de valor
      celulaValor.innerHTML = 'R$ ' + valor;
  
      celulaEditar.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinhaRecursos(this)" style="width: 20px; height: 20px; cursor: pointer">';
      celulaExcluir.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinhaRecursos(this)" style="width: 20px; height: 20px; cursor: pointer">';
  
      // Limpar os campos de entrada após adicionar
      document.getElementById("objeto").value = "";
      document.getElementById("quantidade").value = "";
      document.getElementById("valor").value = "";
  
      // Salvar os dados no armazenamento local
      salvarRecursos();
    } else {
      alert("Preencha todos os campos antes de adicionar!");
    }
  }

function editarLinhaRecursos(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaRecur');
  var index = linha.rowIndex;

  document.getElementById('objeto').value = tabela.rows[index].cells[0].innerHTML;
  document.getElementById('quantidade').value = tabela.rows[index].cells[1].innerHTML;
  document.getElementById('valor').value = tabela.rows[index].cells[2].innerHTML;

  tabela.deleteRow(index);
  salvarRecursos();
}

function excluirLinhaRecursos(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaRecur');
  var index = linha.rowIndex;

  tabela.deleteRow(index);
  salvarRecursos();
}

function recursos() {
  var tabelaRecursos = document.getElementById("tabelaRecursos");
  tabelaRecursos.style.display = "block";
  var tabelaCronograma = document.getElementById("tabelaCronograma");
  tabelaCronograma.style.display = "none";
}

window.onload = function () {
  carregarRecursosSalvos();
};

// -------------------------------------------função 3: abrir tabela orçamento 
function carregarOrcamentoSalvo() {
  var dadosSalvos = localStorage.getItem('orcamento');
  if (dadosSalvos) {
    document.getElementById("tabelaOrca").getElementsByTagName('tbody')[0].innerHTML = dadosSalvos;
  }
}

function salvarOrcamento() {
  var tabela = document.getElementById("tabelaOrca").getElementsByTagName('tbody')[0];
  localStorage.setItem('orcamento', tabela.innerHTML);
}

function adicionarOrcamento() {
  var tabela = document.getElementById("tabelaOrca").getElementsByTagName('tbody')[0];

  var materiais = document.getElementById("MateriaisDeConstrucao").value;
  var maoDeObra = document.getElementById("MaoDeObra").value;
  var equipamentos = document.getElementById("equipamentos").value;

  if (materiais !== "" && maoDeObra !== "" && equipamentos !== "") {
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaMateriais = novaLinha.insertCell(0);
    var celulaMaoDeObra = novaLinha.insertCell(1);
    var celulaEquipamentos = novaLinha.insertCell(2);
    var celulaEditar = novaLinha.insertCell(3);
    var celulaExcluir = novaLinha.insertCell(4);

    celulaMateriais.innerHTML = materiais;
    celulaMaoDeObra.innerHTML = maoDeObra;
    celulaEquipamentos.innerHTML = equipamentos;
    celulaEditar.innerHTML = '<img src="Imagens/editar.png" alt="Editar" onclick="editarLinhaOrcamento(this)" style="width: 20px; height: 20px; cursor: pointer">';
    celulaExcluir.innerHTML = '<img src="Imagens/excluir.png" alt="Excluir" onclick="excluirLinhaOrcamento(this)" style="width: 20px; height: 20px; cursor: pointer">';

    document.getElementById("MateriaisDeConstrucao").value = "";
    document.getElementById("MaoDeObra").value = "";
    document.getElementById("equipamentos").value = "";

    salvarOrcamento();
  } else {
    alert("Preencha todos os campos antes de adicionar!");
  }
}

function editarLinhaOrcamento(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaOrca');
  var index = linha.rowIndex;

  document.getElementById('MateriaisDeConstrucao').value = tabela.rows[index].cells[0].innerHTML;
  document.getElementById('MaoDeObra').value = tabela.rows[index].cells[1].innerHTML;
  document.getElementById('equipamentos').value = tabela.rows[index].cells[2].innerHTML;

  tabela.deleteRow(index);
  salvarOrcamento();
}

function excluirLinhaOrcamento(elemento) {
  var linha = elemento.parentNode.parentNode;
  var tabela = document.getElementById('tabelaOrca');
  var index = linha.rowIndex;

  tabela.deleteRow(index);
  salvarOrcamento();
}
window.onload = function () {
  carregarRecursosSalvos();
};


function foto() {
  var fotoContainer = document.getElementById('fotoContainer');
  var tabelaRecursos = document.getElementById('tabelaRecursos');
  var tabelaCronograma = document.getElementById('tabelaCronograma');
  var tabelaOrca = document.getElementById('tabelaOrca');

  fotoContainer.style.display = fotoContainer.style.display === 'none' ? 'block' : 'none';

  tabelaRecursos.style.display = 'none';
  tabelaCronograma.style.display = 'none';
  tabelaOrca.style.display = 'none';
}

