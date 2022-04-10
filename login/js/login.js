

function validar(){
    var login = document.getElementById('input-login')
    var password = document.getElementById('input-password');

    if (login.value == "") {
        alert("login não informado");
    
        // Deixa o input com o focus
        nome.focus();
        // retorna a função e não olha as outras linhas
        return;
      }

    if(password.value == "")
    {
        alert("Senha não informada");
    
        // Deixa o input com o focus
        password.focus();
        // retorna a função e não olha as outras linhas
        return;
    }


    if(login.value == "root@email.com" && password.value == "root")
    {
        window.location.replace("http://127.0.0.1:5500/produtos-home/html/produtos-home.html");
       
        
    }
}