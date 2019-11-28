import POTTER from './data/potter/potter.js';
import {
  filter, filterPatronus, filterVaritas, order, filtrar,
} from './data.js';

const personajes = document.querySelector('#personajes');
const patronus = document.querySelector('#patronus');
const varitas = document.querySelector('#varitas');
const secInicio = document.querySelector('#secInicio');
const btnEspecie = document.querySelector('#btn-Especie');
const btnCasas = document.querySelector('#btn-Casas');
const btnRoles = document.querySelector('#btn-Roles');
const secEspecie = document.querySelector('#secEspecie');
const secCasas = document.querySelector('#secCasas');
const secRoles = document.querySelector('#secRoles');
const btnHumano = document.querySelector('#btn-Humano');
const btnHalfGiant = document.querySelector('#btn-Half-giant');
const btnWerewolf = document.querySelector('#btn-Werewolf');
const btnCat = document.querySelector('#btn-Cat');
const btnGryffindor = document.querySelector('#btn-Gryffindor');
const btnSlytherin = document.querySelector('#btn-Slytherin');
const btnRavenclaw = document.querySelector('#btn-Ravenclaw');
const btnHufflepuff = document.querySelector('#btn-Hufflepuff');
const btnEstudiantes = document.querySelector('#btn-Estudiantes');
const btnStaff = document.querySelector('#btn-Staff');
const lista = (arr) => {
  let resultado = '';
  for (let i = 0; i < arr.length; i += 1) {
    resultado += `
      <section class = "listPersonaje">
         <img  class = "imagen" src=${arr[i].image} id=${i}>
           <section class="color">${arr[i].name}</section>
       </section>
       `;
  }
  return resultado;
};
const listaPatronus = (pat) => {
  let resultadoPatronus = '';
  for (let i = 0; i < pat.length; i += 1) {
    resultadoPatronus += `
      <section class = "listPersonaje">
       <img  class = "imagen" src=${pat[i].imagen}>
           <section>${pat[i].nombre}</section>
           <section>${pat[i].hechizo}</section>
      </section>
       `;
  }
  return resultadoPatronus;
};
const listaVaritas = (Varitas) => {
  let resultaVaritas = '';
  for (let i = 0; i < Varitas.length; i += 1) {
    resultaVaritas += `
          <section class = "listPersonaje">
              <img  class = "imagen" src=${Varitas[i].imagen}>
               <section >${Varitas[i].nombre}</section>
              <section >madera:  ${Varitas[i].madera}</section>
              <section >nucleo:  ${Varitas[i].centro}</section>
              <section >longitud:  ${Varitas[i].longitud}</section>
          </section>
       `;
  }
  return resultaVaritas;
};
const getPersonaje = (data, idPersonaje) => {
  const personajeHTML = `
  <div id='general'>
    <button id="regresar">Regresar</button>
    <div id='containerImagen'>
      <img src="${data[idPersonaje].image}" alt="imagen">
    </div>
    <div id='containerGetPersonaje'>
      <p>Nombre: ${data[idPersonaje].name}</p>
      <p>Especie: ${data[idPersonaje].species}</p>
      <p>Género: ${data[idPersonaje].gender}</p>
      <p>Casa: ${data[idPersonaje].house}</p>
      <p>Fecha de nacimiento: ${data[idPersonaje].dateOfBirth}</p>
      <p>Año de nacimiento: ${data[idPersonaje].yearOfBirth}</p>
      <p>Ancestro: ${data[idPersonaje].ancestry}</p>
      <p>Color de ojos: ${data[idPersonaje].eyeColour}</p>
      <p>Color de cabello: ${data[idPersonaje].hairColour}</p>
      <p>Madera de varita: ${data[idPersonaje].wand.wood}</p>
      <p>Núcleo de varita: ${data[idPersonaje].wand.core}</p>
      <p>Longitud de varita: ${data[idPersonaje].wand.length}</p>
    </div>
  </div>`;

//const regresar = document.querySelector('#regresar');
//regresar.addEventListener('click', () => {
//  personajes.innerHTML = lista(POTTER);
 // const traerTodosLosPersonajes = document.querySelectorAll('.imagen');
 // for (let i = 0; i < traerTodosLosPersonajes.length; i += 1) {
  //  traerTodosLosPersonajes[i].addEventListener('click', () => {
    //  const idPersonaje = traerTodosLosPersonajes[i].id;
     // personajes.innerHTML = getPersonaje(POTTER, idPersonaje);
   // });
//  }
//});
return personajeHTML;
};

const main = document.getElementById('main');
const opciones = document.getElementById('opciones');
const listfiltrar = document.getElementById('listfiltrar');
const mostrarP = document.querySelector('#opcion1');
const video = document.getElementById('video');
const footer = document.getElementById('footer');
mostrarP.addEventListener('click', () => {
  main.classList.remove('hide');
  opciones.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
  personajes.innerHTML = lista(POTTER);
  const traerTodosLosPersonajes = document.querySelectorAll('.imagen');
  for (let i = 0; i < traerTodosLosPersonajes.length; i += 1) {
    traerTodosLosPersonajes[i].addEventListener('click', () => {
      const idPersonaje = traerTodosLosPersonajes[i].id;
      personajes.innerHTML = getPersonaje(POTTER, idPersonaje);
    });
  }
});

const mostrarHechizos = document.querySelector('#patronus');
mostrarHechizos.addEventListener('click', () => {
  main.classList.remove('hide');
  opciones.classList.add('hide');
  listfiltrar.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
});
const mostrarVaritas = document.querySelector('#varitas');
mostrarVaritas.addEventListener('click', () => {
  main.classList.remove('hide');
  opciones.classList.add('hide');
  listfiltrar.classList.add('hide');
  video.classList.add('hide');
  footer.classList.add('hide');
});
btnEspecie.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secEspecie.classList.remove('hide');
});
btnCasas.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secCasas.classList.remove('hide');
});
btnRoles.addEventListener('click', () => {
  secInicio.classList.add('hide');
  secRoles.classList.remove('hide');
});
btnHumano.addEventListener('click', () => {
  const species = filter(POTTER, 'species', 'human');
  personajes.innerHTML = lista(species);
});
btnHalfGiant.addEventListener('click', () => {
  const halfGiant = filter(POTTER, 'species', 'half-giant');
  personajes.innerHTML = lista(halfGiant);
});
btnWerewolf.addEventListener('click', () => {
  const werewolf = filter(POTTER, 'species', 'werewolf');
  personajes.innerHTML = lista(werewolf);
});
btnCat.addEventListener('click', () => {
  const cat = filter(POTTER, 'species', 'cat');
  personajes.innerHTML = lista(cat);
});
btnGryffindor.addEventListener('click', () => {
  const Gryffindor = filtrar(POTTER, 'Gryffindor');
  personajes.innerHTML = lista(Gryffindor);
});
btnSlytherin.addEventListener('click', () => {
  const Slytherin = filtrar(POTTER, 'Slytherin');
  personajes.innerHTML = lista(Slytherin);
});
btnRavenclaw.addEventListener('click', () => {
  const Ravenclaw = filtrar(POTTER, 'Ravenclaw');
  personajes.innerHTML = lista(Ravenclaw);
});
btnHufflepuff.addEventListener('click', () => {
  const Hufflepuff = filtrar(POTTER, 'Hufflepuff');
  personajes.innerHTML = lista(Hufflepuff);
});
btnEstudiantes.addEventListener('click', () => {
  const Estudiantes = filter(POTTER, 'hogwartsStudent', true);
  personajes.innerHTML = lista(Estudiantes);
});
btnStaff.addEventListener('click', () => {
  const Staff = filter(POTTER, 'hogwartsStaff', true);
  personajes.innerHTML = lista(Staff);
});
patronus.addEventListener('click', () => {
  const Patronus = filterPatronus(POTTER, 'patronus');
  personajes.innerHTML = listaPatronus(Patronus);
});

varitas.addEventListener('click', () => {
  const Varitas = filterVaritas(POTTER, 'wand');
  personajes.innerHTML = listaVaritas(Varitas);
});
const ordeAscendente = document.getElementById('orden-A-Z');
ordeAscendente.addEventListener('click', () => {
  const ordenAlfaAsc = order(POTTER);
  personajes.innerHTML = lista(ordenAlfaAsc);
});
const orderDescendente = document.getElementById('orden-Z-A');
orderDescendente.addEventListener('click', () => {
  const ordenAlfaDes = (order(POTTER).reverse());
  personajes.innerHTML = lista(ordenAlfaDes);
});
