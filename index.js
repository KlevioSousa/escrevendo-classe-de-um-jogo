// Classe genérica para representar o herói
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    // Método para realizar o ataque
    ataque(){
        let ataque

        // Definição do ataque com base no tipo do herói
        switch(this.tipo.toLowerCase()){
            case "mago":
                ataque = "mágia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "ataque básico"
        }

         // Exibir a mensagem de ataque
         console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

   
}

// Criando exemplos de heróis
const mago = new heroi("Gandalf", 150, "mago")
const guerreiro = new heroi("Arangorn", 47, "guerreiro")
const monge = new heroi("Shaolin", 36, "monge")
const ninja = new heroi("Sasuke", 18, "ninja")

// Realizando ataques
mago.ataque()
guerreiro.ataque()
monge.ataque()
ninja.ataque()

