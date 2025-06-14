const main =document.getElementById('main');

main.remove();

const newHeader =document.createElement('h1');

newHeader.id ='victory';

newHeader.textContent ='Moses is the champion';

document.body.appendChild(newHeader);

