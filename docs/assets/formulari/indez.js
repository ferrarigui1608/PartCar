
let value_cpf = document.querySelector('#campo_cpf');
value_cpf.addEventListener("keydown",
  function (e) {
    if (e.key > "a" && e.key < "z") {
      e.preventDefault();
    }
  }
);


value_cpf.addEventListener("blur",
  function (e) {
    //Remove tudo o que não é dígito
    let validar_cpf = this.value.replace(/\D/g, "");

    //verificação da quantidade números
    if (validar_cpf.length == 11) {
      validacao_receita(validar_cpf);
      //formatação final
      cpf_final = validar_cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d)/, "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      document.getElementById('campo_cpf').value = cpf_final;
    } else {
      alert("CPF Inválido! É esperado 11 dígitos numéricos.")
    }
  }
);


function getCep (cep){
 var request = new XMLHttpRequest();
 request.open("GET", "https://viacep.com.br/ws/"+cep+"/json/", true);
 request.onload = function(){
   if(this.status >= 200 && this.status < 400){
     
     var retorno = JSON.parse(this.responseText);
     if(retorno.erro){
      var cep = document.getElementById("cep");
      var classError = document.getElementById("message"); 
      classError.classList.add("error-message");
      cep.classList.add("error");
    }else{
      console.log(this.responseText);
      console.log(this);
      document.getElementById("rua").value = retorno.logradouro;
      document.getElementById("bairro").value = retorno.bairro;
      document.getElementById("cidade").value = retorno.cidade;
      document.getElementById("uf").value = retorno.uf;
      document.getElementById("ibge").value = retorno.ibge;
      document.getElementById("ddd").value = retorno.ddd;
      document.getElementsByTagName("cep").classList.add("success");
    }
     
   } else {
     alert('Página fora do ar')
   }
 }
 request.send(); 
}

function validateCep(){
  var cep = document.getElementById("cep");
  var classError = document.getElementById("message");
  var cepValue = cep.value;
  if(cepValue.length == 8){
    getCep(cepValue);
    classError.classList.remove("error-message");
    cep.classList.remove("error");
  } else if(cepValue.length > 8){
    classError.classList.add("error-message");
    cep.classList.add("error");
  }
}

