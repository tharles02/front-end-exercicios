/*
array...
0-1 horas por dia = verde
1-3 horas por dia = amarelo 
3 horas ou mais por dia = vermelho

let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; //domingo,segunda...
let diasDaSemana = [
    'domingo', 
    'segunda-feira',
    'terça-feira', 
    'quarta-feira', 
    'quinta-feira', 
    'sexta-feira', 
    'sabádo'
];

// determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return '🟢';
    } else if ( numeroDeHoras <= 3 ) {
        return '🟡';
    } else {
        return '🔴';
    }      
}

//console.log( 'domingo' + indicadorDeUso(usoDiasDaSemana[0]) );
//console.log( 'segunda-feira' + indicadorDeUso(usoDiasDaSemana[1]) );
//console.log( 'terça-feira' + indicadorDeUso(usoDiasDaSemana[2]) );
//console.log( 'quarta-feira' + indicadorDeUso(usoDiasDaSemana[3]) );
//console.log( 'quinta-feira' + indicadorDeUso(usoDiasDaSemana[4]) );
//console.log( 'sexta-feira' + indicadorDeUso(usoDiasDaSemana[5]) );
//console.log( 'sabádo' + indicadorDeUso(usoDiasDaSemana[6]) );

for(let contador = 0; contador < usoDiasDaSemana.length ; contador++) {
    let farol = indicadorDeUso(usoDiasDaSemana[contador]);
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];
   //let mensagem = 'horas de uso';

    //if ( horas > 1 ) {
        //let mensagem = 'horas de uso';
    //}else {
        //let mensagem = 'horas de uso'
    //}

    let mensagem = (horas > 1 ) ? 'horas de uso' : 'horas de uso'; // operador ternário

    console.log(`${farol} 📆 ${dia} | ${horas.toFixed(2)} ${mensagem}`);
}

//console.log(typeof usoDiasDaSemana); //
//console.log(typeof usoDiasDaSemana[0]); //number
//console.log(typeof indicadorDeUso); // function
*/

/*
object...
*/

let livro = {
    titulo: 'Memória do escravão ISAÍAS Caminha',
    autor: 'Lima Barreto',
    ano: 1909,
    ISBN: '9786599536953',
    emprestar: () => {
        console.log('Você pegou emprestado o livro Memória do escravão ISAÍAS Caminha' )
    }
}

console.log(typeof livro.emprestar);
livro.emprestar(livro.titulo);

