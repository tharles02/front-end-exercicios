// 1. selecionando o livro o cortico pelo seu id
let livro1 = document.getElementById(`o-cortico`);
console.log(typeof livro1);

// 2. selecinando tags <a>
let link = document.getElementsByTagName(`a`);
console.log(`links: `, links);

// 3. selecinando o livro vidas secas com queryselector
let livro2 = document.querySelector(`#vidas-secas`);
console.log(`livro2: `, livro2);

let = document.querySelector(`footer-links .nav-list`);
console.log(`navlistfooter: `,navlistfooter);

let navlistheader = document.querySelector(`header .nav-list`);
console.log(`navlisthesder: `, navlistheader);

// modificando elemento
livro1.style.color = #aa0000;

let paragrafo = livro1.querySelector(`p`);
paragrafo.style.color = `red`;

// modificando className
livro2.className = `card-livro fora-de-estoque`;
console.log(`livro2.className: `; livro2.className);






