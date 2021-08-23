//-------------------inicio login--------------------
function enviar() {
    var user = document.form.email.value;
    var senha = document.form.senha.value;
    if (user == 'admin@admin' && senha == '123') {
        window.open('arquivo.html');
    }else{
        alert("Usuário ou senha incorreto");
    }
}
//-------------------fim login--------------------