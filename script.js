const foto = document.querySelector("#foto");
const nome = document.querySelector("#nome");
const profissao = document.querySelector("#profissao");
const comentario = document.querySelector("#comentario");
const esquerda = document.querySelector("#esquerda");
const direita = document.querySelector("#direita");
const random = document.querySelector("#random");

pessoas = [["IGOR", "MESTRE DE ARTES MARCIAIS", "Produtos de qualidade impecável! Comprei um conjunto de cerâmicas e fiquei impressionado com a atenção aos detalhes. Entrega rápida e serviço profissional. Recomendado!"], 
["MARIANA", "MARCENEIRA", "Obra de arte em madeira! Encontrei esculturas incríveis para decorar meu estúdio. Qualidade excepcional e seleção de madeiras deslumbrante. Voltarei com certeza!"], 
["JUNIOR", "MILITAR", "Kit de sobrevivência perfeito! Material tático de alta qualidade e funcionalidade excelente. Entrega rápida e eficiente. Recomendo aos colegas militares!"], 
["MELANCÓLICO", "ARTISTA DE RUA", "Inspiração pura! Variedade incrível de materiais de arte de alta qualidade. Atendimento atencioso e conhecedor. Mal posso esperar para voltar!"],
["PABLO", "ESTUDANTE", "Essa loja é o máximo! Comprei minha capa de super-herói e meu cinto de utilidades aqui. Agora me sinto pronto para salvar o mundo! A equipe foi superlegal. Mal posso esperar para voltar!"],
["SARA", "ENFERMEIRA", "Esta loja é um oásis de conforto! Comprei velas aromáticas e produtos de cuidado pessoal, uma verdadeira indulgência. A variedade é incrível e a equipe, gentil e prestativa. Mal posso esperar para voltar e me mimar após o trabalho!"],
["CAROL", "YOUTUBER", "Esta loja é um achado para criadores de conteúdo! Encontrei acessórios incríveis para deixar meus vídeos mais divertidos. A equipe foi super amigável e me deu dicas úteis. Mal posso esperar para voltar e explorar mais opções!"]]; 
//Lista com dados das pessoas index 0 = nome, 1 = profissão, 2 = comentario da pessoa.
//Aqui utilizei lista, mas o mais certo seria um dicionário ou arquivo json

cont_min = 0; 
cont_max = 6; //Inserir número total de pessoas listadas acima menos 1
contador = cont_min;

nome.innerHTML = pessoas[contador][0];
profissao.innerHTML = pessoas[contador][1];
comentario.innerHTML = pessoas[contador][2];
foto.src = "fotos/foto" + contador + ".png";

function ir_esquerda(){
    if (contador === cont_min){
        contador = cont_max;
        nome.innerHTML = pessoas[contador][0];
        profissao.innerHTML = pessoas[contador][1];
        comentario.innerHTML = pessoas[contador][2];
        foto.src = "fotos/foto" + contador + ".png";
    } else {
        contador--;
        nome.innerHTML = pessoas[contador][0];
        profissao.innerHTML = pessoas[contador][1];
        comentario.innerHTML = pessoas[contador][2];
        foto.src = "fotos/foto" + contador + ".png";
    }
}

function ir_direita(){
    if (contador === cont_max){
        contador = cont_min;
        nome.innerHTML = pessoas[contador][0];
        profissao.innerHTML = pessoas[contador][1];
        comentario.innerHTML = pessoas[contador][2];
        foto.src = "fotos/foto" + contador + ".png";
    } else {
        contador++;
        nome.innerHTML = pessoas[contador][0];
        profissao.innerHTML = pessoas[contador][1];
        comentario.innerHTML = pessoas[contador][2];
        foto.src = "fotos/foto" + contador + ".png";
    }
}

let aleatorio = 0

function ir_random(){
    aleatorio = Math.floor(Math.random() * pessoas.length);
    while (aleatorio === contador) {
        aleatorio = Math.floor(Math.random() * pessoas.length);
    }
    contador = aleatorio;
    nome.innerHTML = pessoas[contador][0];
    profissao.innerHTML = pessoas[contador][1];
    comentario.innerHTML = pessoas[contador][2];
    foto.src = "fotos/foto" + contador + ".png";
}