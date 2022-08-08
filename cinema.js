let cinema = "CineHouseFlix"

console.log(cinema)

let catalogo = [{
    codigo: 1,
    titulo: "Capitão Fantástico",
    duracao: 118,
    atores: ["Viggo Mortensen", "Samanthe Isler", "George MacKay", "Annalise Basso"],
    anoDeLancamento: 2016,
    emCartaz: true
},
{
    codigo: 2,
    titulo: "Instinto",
    duracao: 126,
    atores: ["Anthony Hopkins", "Cuba Gooding Jr.", "Donald Sutherland", "Maura Tierney"],
    anoDeLancamento: 1999,
    emCartaz: false
}
]

//  **** FUNÇÃO PARA ****
//  Adicionar um filme (Objeto) ao array "catalogo"
function adicionarFilme(codigo,titulo, duracao, atores, anoDeLancamento, emCartaz ){
let novoFilme = {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz
   }
   catalogo.push(novoFilme);
}
//adicionarFilme(3, "Até o Último Homem", 139, ["Andrew Garfield", "Vince Vaughn", "Luke Bracey", "Sam Worthington"],2016, false)

//  **** FUNÇÃO PARA ****
//Buscar um filme dentro do array "catalago" através do número do 'codigo'
function buscarFilmes(codigo){
    return codigo.codigo == 1
}
let filmeEscolhido = catalogo.find(buscarFilmes(1))
console.log(`O filme buscado foi "${filmeEscolhido.titulo}", sua duração é de ${filmeEscolhido.duracao} minutos. Seu ano de lançamento é: ${filmeEscolhido.anoDeLancamento}`)

//   ****FUNÇÃO PARA  ****
// A função deve receber como parâmetro o número identificador do filme
// escolhido, buscar o filme com base no parâmetro recebido e alterar o status
// existente da propriedade emCartaz (se estava como true, alterar para false, e
// vice e versa).
// function alterarStatusEmCartaz(){

// }