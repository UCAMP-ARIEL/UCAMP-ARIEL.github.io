let newH1 = document.createElement('h1');

let titulo = document.createTextNode('Soy Un H1');

newH1.appendChild(titulo);

document.body.appendChild(newH1);

const boton = document.getElementById('boton');
boton.addEventListener('click', (event) => {
	alert('soy un evento');
});
