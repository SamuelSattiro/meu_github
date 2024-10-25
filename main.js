document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar')
    const nome = document.getElementById('nome')
    const nomeUsuario = document.getElementById('nomeUsuario')
    const repositorio = document.getElementById('repositorio')
    const seguidores = document.getElementById('seguidores')
    const seguido = document.getElementById('seguido')

    fetch("https://api.github.com/users/samuelsattiro")

        .then(function(resposta){
            return resposta.json()
        })

        .then(function(json){
            avatar.src = json.avatar_url;
            nome.innerText = json.name;
            nomeUsuario.innerText = json.login;
            repositorio.innerText = json.public_repos;
            seguidores.innerText = json.following;
            seguido.innerText = json.followers;
        })

        .catch(function(erro){
            alert('Ocorreu um erro na busta das informações, tente novamente mais tarde.')
        })
        
        .finally(function(){
            console.log('concluido')
        })
})