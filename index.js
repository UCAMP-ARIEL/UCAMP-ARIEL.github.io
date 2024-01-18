let newH1 = document.createElement('h1');

let titulo = document.createTextNode('Esta es una Prueba de commit');

newH1.appendChild(titulo);

document.body.appendChild(newH1);

const boton = document.getElementById('boton');
boton.addEventListener('click', (event) => {
	alert('Probando actualizaciones desde repo');
});
