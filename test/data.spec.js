import {
  order, filter, filtrar, filterPatronus, filterVaritas,
} from '../src/data.js';

describe('order', () => {
  it('debería ser una función', () => {
    expect(typeof order).toBe('function');
  });
  it('deberia retonar los personajes ordenados de la A-Z', () => {
    const input = [
      { name: 'Ron Weasley' },
      { name: 'Draco Malfoy' },
      { name: 'Cedric Diggory' },
    ];
    const output = [
      { name: 'Cedric Diggory' },
      { name: 'Draco Malfoy' },
      { name: 'Ron Weasley' },
    ];
    expect(order(input, 'name', 'Z-A')).toEqual(output);
  });
});
describe('filter', () => {
  it('debería ser una función', () => {
    expect(typeof filter).toBe('function');
  });
  it('deberia filtrar los personajes por especie', () => {
    const inputSpecies = [
      {
        name: 'Ron Weasley',
        image: 'http:hp-api.herokuapp.com/images/ron.jpg',
        species: 'human',
      },
      {
        name: 'Rubeus Hagrid',
        image: 'http:hp-api.herokuapp.com/images/hagrid.png',
        species: 'half-giant',
      },
      {
        name: 'Remus Lupin',
        image: 'http://hp-api.herokuapp.com/images/lupin.jpg',
        species: 'werewolf',
      },
      {
        name: 'Mrs Norris',
        image: 'http://hp-api.herokuapp.com/images/norris.JPG',
        species: 'cat',
      },
    ];
    const outputCat = [
      {
        name: 'Mrs Norris',
        image: 'http://hp-api.herokuapp.com/images/norris.JPG',
      },
    ];
    const outputWerewolf = [
      {
        name: 'Remus Lupin',
        image: 'http://hp-api.herokuapp.com/images/lupin.jpg',
      },
    ];
    const outputHalfGiant = [
      {
        name: 'Rubeus Hagrid',
        image: 'http:hp-api.herokuapp.com/images/hagrid.png',
      },
    ];
    const outputHuman = [
      {
        name: 'Ron Weasley',
        image: 'http:hp-api.herokuapp.com/images/ron.jpg',
      },
    ];
    expect(filter(inputSpecies, 'species', 'human')).toEqual(outputHuman);
    expect(filter(inputSpecies, 'species', 'half-giant')).toEqual(outputHalfGiant);
    expect(filter(inputSpecies, 'species', 'werewolf')).toEqual(outputWerewolf);
    expect(filter(inputSpecies, 'species', 'cat')).toEqual(outputCat);
  });
  it('deberia filtar personajes por rol', () => {
    const inputRol = [
      {
        name: 'Rubeus Hagrid',
        hogwartsStaff: true,
        image: 'http:hp-api.herokuapp.com/images/hagrid.png',
      },
      {
        name: 'Cho Chang',
        hogwartsStudent: true,
        image: 'http:hp-api.herokuapp.com/images/cho.jpg',
      },
    ];
    const outputStaff = [
      {
        name: 'Rubeus Hagrid',
        image: 'http:hp-api.herokuapp.com/images/hagrid.png',
      },
    ];
    const outputEstudiante = [
      {
        name: 'Cho Chang',
        image: 'http:hp-api.herokuapp.com/images/cho.jpg',
      },
    ];
    expect(filter(inputRol, 'hogwartsStaff', true)).toEqual(outputStaff);
    expect(filter(inputRol, 'hogwartsStudent', true)).toEqual(outputEstudiante);
  });
});
describe('filtrar', () => {
  it('debería ser una función', () => {
    expect(typeof filtrar).toBe('function');
  });
  it('deberia filtrar personajes por casa', () => {
    const inputhouse = [
      {
        name: 'Harry Potter',
        house: 'Gryffindor',
      },
      {
        name: 'Severus Snape',
        house: 'Slytherin',
      },
      {
        name: 'Luna Lovegood',
        house: 'Ravenclaw',
      },
      {
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
      },
    ];
    const outputGryffindor = [
      {
        name: 'Harry Potter',
        house: 'Gryffindor',
      },
    ];
    const outputSlytherin = [
      {
        name: 'Severus Snape',
        house: 'Slytherin',
      },
    ];
    const outputRavenclaw = [
      {
        name: 'Luna Lovegood',
        house: 'Ravenclaw',
      },
    ];
    const outputHufflepuff = [
      {
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
      },
    ];
    expect(filtrar(inputhouse, 'Gryffindor')).toEqual(outputGryffindor);
    expect(filtrar(inputhouse, 'Slytherin')).toEqual(outputSlytherin);
    expect(filtrar(inputhouse, 'Ravenclaw')).toEqual(outputRavenclaw);
    expect(filtrar(inputhouse, 'Hufflepuff')).toEqual(outputHufflepuff);
  });
});
describe('filterPatronus', () => {
  it('debería ser una función', () => {
    expect(typeof filterPatronus).toBe('function');
  });
  it('deberia devolver todos los patronus existentes', () => {
    const inputPatronus = [
      {
        name: 'Ron Weasley',
        patronus: 'Jack Russell terrier',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        patronus: '',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];
    const outputPatronus = [
      {
        nombre: 'Ron Weasley',
        hechizo: 'Jack Russell terrier',
        imagen: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
    ];
    expect(filterPatronus(inputPatronus, 'patronus')).toEqual(outputPatronus);
  });
});
describe('filterVaritas', () => {
  it('debería ser una función', () => {
    expect(typeof filterVaritas).toBe('function');
  });
  it('deberia devolver los personajes que poseen varita', () => {
    const inputVaritas = [
      {
        image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
        name: 'Ginny Weasley',
        wand: {
          wood: 'yew',
          core: '',
          length: '',
        },
      },
      {
        image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
        name: 'Arthur Weasley',
        wand: {
          wood: '',
          core: '',
          length: '',
        },
      },
      {
        image: 'http://hp-api.herokuapp.com/images/hagrid.png',
        name: 'Rubeus Hagrid',
        wand: {
          wood: 'oak',
          core: '',
          length: 16,
        },
      },
      {
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
        name: 'Harry Potter',
        wand: {
          wood: 'holly',
          core: 'phoenix feather',
          length: 11,
        },
      },
    ];
    const outputTvaritas = [
      {
        imagen: 'http://hp-api.herokuapp.com/images/ginny.jpg',
        nombre: 'Ginny Weasley',
        madera: 'yew',
        centro: 'no tiene',
        longitud: 'no tiene',
      },
      {
        imagen: 'http://hp-api.herokuapp.com/images/arthur.jpg',
        nombre: 'Arthur Weasley',
        madera: 'no tiene',
        centro: 'no tiene',
        longitud: 'no tiene',
      },
      {
        imagen: 'http://hp-api.herokuapp.com/images/hagrid.png',
        nombre: 'Rubeus Hagrid',
        madera: 'oak',
        centro: 'no tiene',
        longitud: 16,
      },
      {
        imagen: 'http://hp-api.herokuapp.com/images/harry.jpg',
        nombre: 'Harry Potter',
        madera: 'holly',
        centro: 'phoenix feather',
        longitud: 11,
      },
    ];
    expect(filterVaritas(inputVaritas, 'wand')).toEqual(outputTvaritas);
  });
});
