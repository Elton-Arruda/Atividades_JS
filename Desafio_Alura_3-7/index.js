var name = "";
var area = "";
var tec = "";
var escolha = "";
var tecnologias = [];

var tecnologiasDesc = [];
tecnologiasDesc.push({"tec":"python", "desc":"Ótima linguagem, muito usada em áreas importantes como análise de dados, inteligência artificial e machine learning por se tratar de uma linguagem de facil aprendizagem e ter a possibilidade de se trabalhar com orientação à objeto, além de sua grande comunidade"})
tecnologiasDesc.push({"tec":"lua", "desc":"Ótima linguagem, muito usada por ser leve, rápida, poderosa mas também por sua portabilidade"})
tecnologiasDesc.push({"tec":"go", "desc":"Ótima linguagem, usada por ser fácil de aprender e com uma extensa biblioteca. Possui suporte por parte do google, além disso tem ecossistema crescente com relação à comunidade, parceiros e ferramentas"})

function selectOptionArea() {
  name =  document.getElementById("name-input").value;
  
  if(document.getElementById("frontend-radio").checked){
    area = document.getElementById("frontend-radio").value.toString();
    updateAreaForm()
  }else if(document.getElementById("backend-radio").checked){
    area = document.getElementById("backend-radio").value.toString();
    updateAreaForm()
  }else{
    alert("Escolha uma das opções")
    console.error("Erro! Nenhuma opção foi escolhida")
  }
}

function updateAreaForm(){
  var htmlcode = ""
  
  if (area == "front-end"){
    cleanForm()
    
    htmlcode += "<p>Muito bem, quais destas tecnologias gostaria de aprender primeiro?<br><input type='radio' id='react-radio' name='tec-radio' value='react' checked>React<input type='radio' id='vue-radio' name='tec-radio' value='vue'>Vue</p>"
    htmlcode += "<button onclick='selectOptionTec()'>Continuar</button>"
  }else if(area == "back-end"){
    cleanForm()
    htmlcode += "<p>Muito bem, quais destas tecnologias gostaria de aprender primeiro?<br><input type='radio' id='csharp-radio' name='tec-radio' value='csharp' checked>C#<input type='radio' id='java-radio' name='tec-radio' value='java'>Java</p>"
    htmlcode += "<button onclick='selectOptionTec()'>Continuar</button>"
  }else{
    console.error("Houve um erro e a var area não recebeu o valor esperado. Valor da var area: " + area)
  }
  
  document.getElementById("form").innerHTML = htmlcode;
}

function selectOptionTec(){
  
  if (area === "front-end"){
    
    if (document.getElementById("react-radio").checked){
      tec = document.getElementById("react-radio").value.toString();
      updateTecForm()
    }else if (document.getElementById("vue-radio").checked){
      tec = document.getElementById("vue-radio").value.toString();
      updateTecForm()
    }else{
      console.error("Algo deu errado com o check dos radio buttons react-radio e vue-radio")
    }
    
  }else if(area === "back-end"){
    
    if (document.getElementById("csharp-radio").checked){
      tec = document.getElementById("csharp-radio").value.toString();
      updateTecForm()
    }else if (document.getElementById("java-radio").checked){
      tec = document.getElementById("java-radio").value.toString();
      updateTecForm()
    }else{
      console.error("Algo deu errado com o check dos radio buttons react-radio e vue-radio")
    }
  }else{
    console.error("Houve um erro e a var area não recebeu o valor esperado. Valor da var area: " + area)
  }
  
}

function updateTecForm(){
  var htmlcode = ""
  
  cleanForm();
  
  if (area === "front-end"){
    htmlcode += "<p>Muito Bacana, depois deste passo pretende continuar estudando para se especializar em front-end ou  gostaria de aprender um pouco de back-end para seguir rumo à uma carreira full-stack?<br><input type='radio' id='spec-radio' name='escolha-radio' value='spec' checked>Especialização em front-end<input type='radio' id='fullstack-radio' name='escolha-radio' value='fullstack'>Se tornar full stack</p>"
    htmlcode += "<button onclick='selectOptionEscolha()'>Continuar</button>"
  }else if (area === "back-end"){
    htmlcode += "<p>Muito Bacana, depois deste passo pretende continuar estudando para se especializar em back-end ou  gostaria de aprender um pouco de front-end para seguir rumo à uma carreira full-stack?<br><input type='radio' id='spec-radio' name='escolha-radio' value='spec' checked>Especialização em back-end<input type='radio' id='fullstack-radio' name='escolha-radio' value='fullstack'>Se tornar full stack</p>"
    htmlcode += "<button onclick='selectOptionEscolha()'>Continuar</button>"
  }else{
  console.error("Houve um erro e a var area não recebeu o valor esperado. Valor da var area: " + area)
  }
  
  document.getElementById("form").innerHTML = htmlcode;
}

function selectOptionEscolha(){
  
  if (document.getElementById("spec-radio").checked){
      escolha = document.getElementById("spec-radio").value.toString();
      updateEscoForm()
    }else if (document.getElementById("fullstack-radio").checked){
      escolha = document.getElementById("fullstack-radio").value.toString();
      updateEscoForm()
    }else{
      console.error("Algo deu errado com o check dos radio buttons spec-radio e fullstack-radio")
    }
  
}

function updateEscoForm(){
  
  cleanForm();
  
  var htmlcode = "";
  
  if (escolha == "spec"){
    htmlcode += "<p>Muito bom, vejo que você optou por se especializar em " + area + "</p>"
  }else if (escolha == "fullstack"){
    htmlcode += "<p>Muito bom, vejo que você optou por se tornar um Dev Full Stack.</p>"
  }else{
    console.error("Houve algum problema com a var escolha")
  }
  
  htmlcode += "<p>Agora informe mais tecnologias que você gostaria de aprender: <input type='text' id='tecnologia'></p>"
  htmlcode += "<button onclick='addTecnologias()'>Adicionar Tecnologia</button>"
  htmlcode += "<button onclick='formFinal()'>Finalizar</button>"
  
  document.getElementById("form").innerHTML = htmlcode
}

function addTecnologias(){
  var tecnologia = document.getElementById("tecnologia")
  var mensagem = document.getElementById("mensagem")
  var mensagemAlterada = false;
  
  mensagem.innerHTML = ""
  
  tecnologias.push(tecnologia.value);
  
  console.log(tecnologias)
  for (var i in tecnologiasDesc){
    if (tecnologiasDesc[i].tec == tecnologia.value.toLowerCase()){
      mensagem.innerHTML += tecnologiasDesc[i].desc 
      mensagemAlterada = true
    }
  }
  
  if(mensagemAlterada == false){
    mensagem.innerHTML += "<p>Que pena, não conheço esta tecnologia, mas vou adicionar à lista."
  }
  
  updateEscoForm()

}

function formFinal(){
  cleanForm()
  document.getElementById("mensagem").innerHTML = ""
  
  var htmlcode = ""
  htmlcode += "<p>Muito bem <strong>" + name + "</strong>, vamos recapitular.</p>"
  htmlcode += "<p>Você optou por iniciar com <strong>" + area + "</strong>, mais especificamente com " + tec + ".</p>"
  
  if (escolha == "spec"){
    htmlcode += "<p>Após este passo, você optou por se especializar em <strong>" + area + "</strong>.</p>"
  }else if (escolha == "fullstack"){
    htmlcode += "<p>Após este passo, você optou por se tornar um <strong>Dev Full Stack</strong>.</p>"
  }else{
    console.error("Houve algum problema com a var escolha")
  }
  
  htmlcode += "<h4>Abaixo a lista das tecnologias que foram selecionadas por você para estudo posterior.</h4>"
  htmlcode += "<ul>Tecnologias</ul>"
  
  for(var i in tecnologias){
    htmlcode += "<li>" + tecnologias[i] + "</li>"
  }
  htmlcode += "<br><h5>Anote estas informações e insira em seu planejamento, defina um tempo para estudar cada uma das tecnologias e não desista.</h5>"
  
  document.getElementById("form").innerHTML = htmlcode;
}

function cleanForm(){
  document.getElementById("form").innerHTML = "";
}