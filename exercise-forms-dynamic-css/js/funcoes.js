$(document).ready(function(){
    
    $("#bSalvar").click(function(){

        for(i = 0; i < 7;i++){
            var nome = document.getElementsByName("formulario")[i]
            if(nome.value == ""){
                $(nome).addClass("campo-form-vazio");
            }
            else {
                $(nome).removeClass("campo-form-vazio")
            }
        }

        if(nome.value[5] != nome.value[6]){
            alert("Confirmação de senha incorreta")
        }

    });

});