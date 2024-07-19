var conjunto_palavras = Array( "abacaxi", "abelha", "abelhinha", "abobora", "abrigo", "absurdo", "acampamento", 
    "academia", "acidente", "acordar", "adocicar", "advogado", "aeromoça", "aeroporto", 
    "agulha", "alegria", "algodão", "alimentar", "almofada", "almoço", "amarelo", 
    "amigo", "amuleto", "andar", "anel", "animais", "aniversário", "antigo", 
    "aparelho", "aplausos", "aprender", "aquário", "aranha", "arco", "arroz", 
    "asa", "aspirador", "astro", "atrasado", "aventura", "avião", "azul", 
    "bacia", "bacalhau", "bala", "balanço", "banco", "banana", "baralho", 
    "barba", "barco", "bateria", "beber", "beijar", "beleza", "berinjela", 
    "bicho", "bicicleta", "bilhete", "biscoito", "bispo", "boca", "bola", 
    "bolacha", "bolo", "boneca", "borboleta", "botão", "braço", "branco", 
    "brincar", "brinquedo", "broche", "bruxa", "búfalo", "buraco", "cabana", 
    "cabelo", "cabra", "caderno", "café", "caminho", "camiseta", "campeonato", 
    "cana", "caneca", "caneta", "canoa", "cantar", "capitão", "caracol", 
    "caranguejo", "caravana", "carne", "carro", "carteira", "casa", "casaco", 
    "casamento", "castelo", "cavalo", "cebola", "cereja", "céu", "chafariz", 
    "chave", "chinelo", "chocolate", "chuva", "ciclista", "cidade", "cinto", 
    "circo", "clarinete", "clima", "cobertor", "cobrir", "coelho", "cofre", 
    "cola", "coleção", "colher", "colina", "colmeia", "comida", "completo", 
    "computador", "comunicação", "confusão", "conta", "contato", "contente", 
    "contrato", "coqueiro", "copo", "cor", "coragem", "coral", "corda", 
    "cordeiro", "correr", "cortina", "coruja", "costela", "cozinha", "criança", 
    "cristal", "crocodilo", "cruz", "cuidar", "cultura", "curioso", "dado", 
    "dança", "dedo", "dentista", "desafio", "descer", "descobrir", "desenho", 
    "deserto", "despertar", "dever", "diamante", "dinheiro", "dinossauro", 
    "discoteca", "diversão", "divertido", "doce", "doença", "dona", "dormir", 
    "dragão", "dureza", "economia", "educação", "elefante", "elevador", "emergência", 
    "emprego", "encontro", "energia", "enfermeira", "engraçado", "ensinar", "entender", 
    "entusiasmo", "enviar", "escola", "escova", "escrever", "esmeralda", "esporte", 
    "esquilo", "estação", "estrela", "estruturar", "estudante", "estudo", "exemplo", 
    "fada", "falar", "famoso", "fantasia", "fazer", "felicidade", "feriado", 
    "festa", "figura", "filme", "filosofia", "floresta", "flor", "foguete", 
    "folha", "força", "formiga", "forte", "fotografia", "fritar", "frozen", 
    "fruta", "futebol", "galo", "garrafa", "gato", "geladeira", "geleia", 
    "girafa", "goleiro", "golfinho", "gorila", "grande", "gravação", "gravata", 
    "guarda", "guarda-chuva", "guitarra", "hambúrguer", "helicóptero", "herói", 
    "história", "hoje", "horta", "hospital", "hotel", "humano", "ilha", 
    "impressora", "incêndio", "independente", "infância", "informação", "inglês", 
    "inseto", "instrumento", "inteligente", "internet", "inverno", "invólucro", 
    "ir", "jardim", "jogar", "joia", "jornal", "jovem", "juiz", 
    "juntar", "kilo", "kit", "koala", "lado", "lago", "lâmpada", 
    "lanche", "laranja", "laser", "lata", "lavar", "leão", "leite", 
    "lembrete", "lenda", "leque", "letra", "levar", "livro", "lobo", 
    "longe", "lousa", "lua", "luta", "mãe", "madeira", "maestro", 
    "maio", "maior", "maçã", "macaco", "mágica", "maior", "mala", 
    "mão", "mar", "maratonista", "maravilha", "martelo", "massa", "matemática", 
    "medalha", "meio", "melancia", "melhor", "menino", "menina", "mercado", 
    "mesa", "metal", "metrô", "microfone", "milho", "militar", "minha", 
    "minúsculo", "miragem", "moeda", "moído", "molho", "montanha", "mora", 
    "morar", "morte", "mosca", "motorista", "mudar", "mudança", "muito", 
    "mulher", "música", "nadar", "natureza", "navio", "necessário", "neve", 
    "ninho", "número", "obrigado", "observação", "ocupar", "oficina", "óleo", 
    "olho", "ônibus", "operário", "operacional", "oportunidade", "oração", "orquestra", 
    "outono", "ovo", "padeiro", "padrão", "pagamento", "paisagem", "palavra", 
    "pão", "papel", "parafuso", "parar", "parque", "partir", "passarinho", 
    "pássaro", "passo", "pasta", "pato", "pato", "pavimento", "paz", 
    "pedra", "peixe", "pelúcia", "pena", "perdão", "perfeito", "perguntar", 
    "perigo", "periquito", "pêssego", "pessoa", "peteca", "piada", "piano", 
    "picada", "picolé", "pijama", "piloto", "pipoca", "pirata", "piscar", 
    "planeta", "planta", "plástico", "pneu", "pobre", "poder", "polícia", 
    "polvo", "ponto", "ponte", "pôr", "porco", "porta", "porto", 
    "possível", "pote", "praia", "prato", "preço", "prefeito", "pregar", 
    "prensa", "presente", "pressa", "pretender", "princípio", "prisão", "problema", 
    "processo", "professor", "programa", "progresso", "projeto", "promessa", "proteção", 
    "prova", "pular", "quadro", "qualidade", "quantidade", "quarto", "quebra", 
    "queda", "queijo", "queimar", "quente", "querer", "quintal", "química", 
    "rádio", "raiz", "rato", "ração", "raquete", "ratoeira", "reação", 
    "real", "receita", "recepção", "reciclagem", "reclamar", "recorde", "recortar", 
    "recreio", "rede", "reforço", "refugiado", "região", "relação", "relógio", 
    "remédio", "repouso", "reprodução", "resposta", "restaurante", "resultado", "retângulo", 
    "retrato", "reunião", "revisão", "revolução", "rica", "rico", "rifa", 
    "rim", "rio", "risada", "roda", "rodeio", "rosa", "rosto", 
    "roupa", "sabor", "sabão", "sacar", "saco", "safra", "salada", 
    "salto", "samba", "sanduíche", "sapato", "sapo", "sardinha", "série", 
    "serviço", "setembro", "silêncio", "sino", "sirene", "sistema", "sítio", 
    "sobe", "sobremesa", "socorro", "sol", "soldado", "solução", "som", 
    "sonho", "sopa", "sorriso", "sorte", "sorvete", "subida", "submarino", 
    "sucesso", "suficiente", "sugerir", "supermercado", "surpresa", "tabela", "talento", 
    "tambor", "tampão", "tangerina", "tarefa", "teatro", "telefone", "telespectador", 
    "televisão", "tema", "tempero", "templo", "tempo", "tenista", "tênis", 
    "teoria", "terapia", "término", "terra", "terremoto", "tesouro", "texto", 
    "tigela", "tigre", "tijolo", "tímido", "tirar", "tobogã", "tocar", 
    "toda", "toda", "todo", "tofu", "toldo", "tomate", "torneira", 
    "torta", "total", "trabalho", "tradição", "tradução", "trânsito", "trapezista", 
    "tratamento", "travessia", "treinamento", "trem", "trigo", "troca", "troféu", 
    "trovoada", "tubarão", "tulipa", "túnel", "turbina", "turista", "uísque", 
    "último", "universo", "urubu", "uruguai", "útil", "uva", "vacina", 
    "vagalume", "vago", "vai", "vaivém", "vale", "valente", "validar", 
    "vapor", "varal", "varanda", "vassoura", "vazamento", "veículo", "velha", 
    "velho", "velocidade", "veludo", "ventania", "verão", "verdade", "verificar", 
    "vermelho", "verso", "veterinário", "vez", "viajar", "viagem", "vidro", 
    "vigilância", "vinho", "violão", "violinista", "virar", "vista", "vitalidade", 
    "vizinho", "volante", "voltar", "vontade", "voto", "vulcão", "vulgar", 
    "xampu", "xadrez", "xerife", "xícara", "zebra", "zero", "zoológico","água de coco", "além mar", "amarelo ouro", 
    "amor perfeito", "bem estar", "bem te vi", "beija flor", "beija mão", "couve flor", "dia a dia", "erva doce", 
    "guarda roupa", "guarda sol", "mal estar", "mal humorado", "meia noite", "meio dia", "mãe de santo", "mão de obra", 
    "pé de moleque", "pequeno almoço", "puxa saco", "queijo de minas", "segunda feira", "terça feira", "quarta feira", 
    "quinta feira", "sexta feira", "sabe tudo", "saco cheio", "saia justa", "sangue frio", "santa ceia", "sem vergonha", 
    "tira dúvidas", "troca troca", "vai vem", "volta redonda", "água benta", "arco íris", "bicho papão", "bem me quer", 
    "café da manhã", "cor de rosa", "copo de leite", "dupla face", "gira gira", "joão de barro", "mato grosso", 
    "olho de sogra", "pão de ló", "pão duro", "pé de meia", "pé de serra","porta voz", "quebra cabeça", "quebra galho", 
    "roda gigante", "salva vidas", "tira gosto", "toca fita", "tomara que caia", "troca tintas", "vice presidente", "xodózinho", 
    "paralelepípedo","interdimensional", "antiepiléptico", "hipercolesterolemia","dicroceliose", "formaldeídico",
    "microssensores","improvisadamente", "invulnerabilidade", "invulneravelmente", "manipulativamente", "manipulativamente",
    "multidimensional", "pluridimensional", "polidimensional", "polissílabos","procrastinador", "termodinâmico", "transdimensionais", "trissilábicos",
    "desigualdade", "desorientado", "desorganizado","abissal", "catacumba", "clepsidra", "deglutir", "empíreo", "flâmula", "gnóstico", "hemeroteca", "inócuo", "jacinto",
    "labirinto", "manufatura", "necromancia", "onomatopeia", "palimpsesto", "quimera", "requisição", "sagacidade", "taciturno", "umbilical",
    "vassalagem", "xilofone", "zeugma", "conjectura", "despótico", "efêmero", "filantropia", "gargalhada", "hipérbole", "ignóbil",
    "justaposição", "lacrimogêneo", "melancolia", "neologismo", "oxímoro", "paradoxo", "quociente", "retórica", "semântica", "tribulação",
    "utopia", "verborragia", "wizened", "xenofobia", "zeugma", "acrônimo", "burocracia", "cosmogonia", "dilema", "enigmático",
    "fortuito", "gentrificação", "hermenêutica", "iconoclasta", "jurisprudência", "kaleidoscópio", "lexicógrafo", "metamorfose", "numismática", "onipotente",
    "pseudônimo", "quintessência", "recalcitrante", "sofisma", "teocracia", "unicórnio", "vaticínio", "whodunit", "xerocópia", "zootecnia",
    "antropocentrismo", "baliza", "cacofonia", "dissonância", "estupefato", "florídeo", "geopolítica", "heráldica", "inefável", "justaposto",
    "lacustre", "mnemônico", "narcisista", "onomatopeico", "prognóstico", "quixotesco", "remissão", "sobressalto", "transeunte", "unilateral", "lodo"
)


var conjunto_palavras_sem_acento = Array()
for(i=0; i < conjunto_palavras.length; i++){
    conjunto_palavras_sem_acento[i] = removerAcentos(conjunto_palavras[i])
}


//Selecionando palavra aleatória
var palavra = conjunto_palavras[Math.floor(Math.random()* conjunto_palavras.length)]
var quantidade_letras = palavra.length


var palavra_sem_acento = removerAcentos(palavra)

var resposta = document.getElementById("resposta")

var analisar_resposta = Array()
var j = 0
var tentativas = document.getElementById('tentativas')

var tempo = 5

var erros = 0
var permitirErro = Array(quantidade_letras)

var anomalia = Array(quantidade_letras)

var teste_vitoria = Array()

var conteudo = document.getElementById("conteudo")


//Laço de repetição para definir a quantidade de inputs que serão preenchidos e colocar seus id's referentes a posição
for(var i = 0; i<quantidade_letras; i++){
    
    var tamanho_palavra = document.createElement('input')
    tamanho_palavra.id = i
    
    tamanho_palavra.classList.add('teste')

    conteudo.appendChild(tamanho_palavra)

    if(palavra.charAt(i) == ' '){
        document.getElementById(i).value = '-'
    }

}


//Pegando valor do usuário e utilizando ele dentro dos inputs
function pegarValor(){
    document.getElementById('proposta').focus()
    var valor = document.getElementById('proposta').value
    var propostaUsuario = valor.toLowerCase().trim()
    propostaUsuario = removerAcentos(propostaUsuario)


    function caractere_especial(){
        const regex = /[!@#$%^&*(),.?":{}|<>`~\[\]\\\/\+=;'-_]/
        return regex.test(propostaUsuario)
    }

    for (var i = 0; i<quantidade_letras; i++){

        permitirErro[i] = 'erro'

        if(propostaUsuario == palavra.charAt(i) ){

            permitirErro[i] = propostaUsuario 
            
        }
    }


    for (var i = 0; i<quantidade_letras; i++){
        anomalia[i] = true

        if(propostaUsuario == 'c' || propostaUsuario == 'o' || propostaUsuario == 'a' || propostaUsuario == 'e' || propostaUsuario == 'i' || propostaUsuario == 'u'  ){

            switch (palavra.charAt(i)){
                case 'ç':
                    if(propostaUsuario == 'c'){
                        document.getElementById(i).value = 'ç'
                        anomalia[i] = false
                
                    }
                break;
    
                case 'ó':
                    if(propostaUsuario == 'o'){
                        document.getElementById(i).value = 'ó'
                        anomalia[i] = false
                    }
                break;
    
                case 'õ':
                    if(propostaUsuario == 'o'){
                          document.getElementById(i).value = 'õ'
                          anomalia[i] = false
                    }
                break;
    
                case 'ô':
                    if(propostaUsuario == 'o'){
                        document.getElementById(i).value = 'ô'
                        anomalia[i] = false
                    }
                break;  

                case 'í':
                    if(propostaUsuario == 'i'){
                        document.getElementById(i).value = 'í'
                        anomalia[i] = false
                    }
                break;
    
                case 'î':
                    if(propostaUsuario == 'i'){
                          document.getElementById(i).value = 'î'
                          anomalia[i] = false
                    }
                break;

                case 'ú':
                    if(propostaUsuario == 'u'){
                        document.getElementById(i).value = 'ú'
                        anomalia[i] = false
                    }
                break;
    
                case 'û':
                    if(propostaUsuario == 'u'){
                          document.getElementById(i).value = 'û'
                          anomalia[i] = false
                    }
                break;
    
                case 'á':
                    if(propostaUsuario == 'a'){
                        document.getElementById(i).value = 'á'
                        anomalia[i] = false
                    }
                break;
                
                case 'ã':
                    if(propostaUsuario == 'a'){
                        document.getElementById(i).value = 'ã'
                        anomalia[i] = false
                    }
                break;    
    
                case 'â':
                    if(propostaUsuario == 'a'){
                        document.getElementById(i).value = 'â'
                        anomalia[i] = false
                    }
                break;  
    
                case 'é':
                    if(propostaUsuario == 'e'){
                        document.getElementById(i).value = 'é'
                        anomalia[i] = false
                    }
                break;  

                case 'ê':
                    if(propostaUsuario == 'e'){
                        document.getElementById(i).value = 'ê'
                        anomalia[i] = false
                    }
                break; 
    
            }
            
        }
        
    }

    if((palavra.length != propostaUsuario.length && (propostaUsuario.length > 1 || propostaUsuario.length < 1) || analisar_resposta.includes(propostaUsuario)) || !isNaN(parseFloat(propostaUsuario)) || caractere_especial() || (!conjunto_palavras_sem_acento.includes(propostaUsuario) && propostaUsuario.length != 1)){

        var paragrafo = document.getElementById('resposta_invalida')

        paragrafo.innerText = 'Por favor, coloque uma tentativa válida ou que não tenha sido utilizada ainda. Caso a palavra possua um hífen, tente escrevê-la sem ele, usando espaço'

       
        var intervalo = setInterval(function(){
                
            if(tempo <= 0){

                paragrafo.innerText = ''
                tempo = 5                    
                clearInterval(intervalo)

                } else{

                tempo -= 1

                }
                
            }, 3000)

    }else{
    
    //Trabalhando com a resposta do usuário    
    //Analisar_resposta é usado para verificar as tentativas do usuário, impedindo que ele repita as mesmas tentativas   
    analisar_resposta[j] = propostaUsuario

    var respostas = document.createElement('input')
    respostas.value = analisar_resposta[j]
    resposta.classList.add('tentativas')

    tentativas.appendChild(respostas)

    j++
    

    for(var i = 0; i<quantidade_letras; i++ ){

        if(propostaUsuario == palavra.charAt(i) ){
        
            document.getElementById(i).value = propostaUsuario
            
        } else if(propostaUsuario == palavra_sem_acento){

            document.getElementById(i).value = palavra.charAt(i)
            if(palavra.charAt(i) == ' '){
                document.getElementById(i).value = '-'
            }

        }else{
             
            if(i==0 && permitirErro.every(erro) && !anomalia.includes(false)){

            erros++

            switch (erros){
                case 1: 
                document.getElementById('forca').src = 'forca1.png'
                break;

                case 2: 
                document.getElementById('forca').src = 'forca2.png'
                break;

                case 3: 
                document.getElementById('forca').src = 'forca3.png'
                break;

                case 4: 
                document.getElementById('forca').src = 'forca4.png'
                break;

                case 5: 
                document.getElementById('forca').src = 'forca5.png'
                break;

                case 6: 
                document.getElementById('forca').src = 'forca6.png'

                document.getElementById('proposta').blur()

                document.getElementById('cabecalho').innerText = 'Que pena!'
                document.getElementById('texto').innerText = 'Você errou a palavra!'
                document.getElementById('palavra').innerText = "Palavra correta: " + palavra
                document.getElementById('caixa-vitoria-derrota').style.display = 'block'
                document.getElementById('proposta').style.pointerEvents = 'none'
                document.getElementById('botao').style.pointerEvents = 'none'

                break;
            }


        }
            
           
        }

    }
        
        
    }


    //Analisar se todos os inputs estão preenchidos
    for(var i = 0; i<quantidade_letras;i++){
        if(document.getElementById(i).value != ''){
            teste_vitoria[i] = document.getElementById(i).value
        } else{
            teste_vitoria[i] = 'vazio'
        }
    }


    //bloco de vitória
    if(teste_vitoria.length == palavra.length && teste_vitoria.every(vitoria) ){

        document.getElementById('proposta').blur()
       

        document.getElementById('cabecalho').innerText = 'Parabéns!'
        document.getElementById('texto').innerText = 'Você acertou a palavra!'
        document.getElementById('erros').innerText = 'Erros: ' + erros + '/6'
        document.getElementById('palavra').innerText = "Palavra correta: " + palavra
        document.getElementById('caixa-vitoria-derrota').style.display = 'block'
        document.getElementById('proposta').style.pointerEvents = 'none'
        document.getElementById('botao').style.pointerEvents = 'none'
    }


    document.getElementById('proposta').value = ''
    

}


//verificar se realmente o usuário errou
function erro(conferirErro){
    return conferirErro == 'erro'        
}

//verificar se o usuário realmente venceu
function vitoria(conferirVitoria){
    return conferirVitoria != 'vazio'     
}

//função para remover acentos da palavra
function removerAcentos(remover) {
    return remover.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function reiniciar(){
    window.location.reload()
}
