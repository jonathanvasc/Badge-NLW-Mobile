const linksSocialMidia = {
  github: 'jonathanvasc',
  instagram: 'jonathan.vascon',
  twitter: 'jonathan_vasc'
}
function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    // O controlador vai ser LI e essa LI é referente a cada filho do elemento html, ou seja, socialLinks que é o ID da ul.

    const social = li.getAttribute('class') //Vai guardar a class da li dentro da variavel.

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}` //Mudar o href do elemento HTML.
  }
}
changeSocialMidiaLinks() //Execuntando a função, chamando ela.

function getGitHubProfileInfos() {
  //Função que vai pegar as informações do github em forma de JSON.

  const url = `https://api.github.com/users/${linksSocialMidia.github}`
  //Criamos uma variavel pra guarda a api.

  fetch(url) //o fetch pegou a resposta do servido, mais sem identificar que tipo de dado.
    .then(response => response.json()) // o 1º then, pega a resposta e transforma em JSON

    .then(data => {
      //o 2º then vai ser utilizado para alterar os dados pedido. Sempre o then pega a resposta do anterior.
      userPhoto.src = data.avatar_url
      userName.textContent = data.name
      userGithub.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
      //estão acessando o DOM e mudando os dados pelos do JSON(Github)
    })
}

getGitHubProfileInfos()
