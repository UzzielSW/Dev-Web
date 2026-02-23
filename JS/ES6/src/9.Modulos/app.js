// ARCHIVO BASE DONDE IMPORTAREMOS ARCHIVOS EXTERNOS
// a la hora de importar se puede importar funciones, clases, variables[arreglos,etc] de la manera [export name = valor], luego importarlo en el archivo que desea


// IMPORTANDO ELEMENTO POR DEFAULT: clase Persona
// como se importa por default un solo elemento se puede por un alias o nombre diferente y no se hace entre llaves

import Persona from './modules/default'

const prs1 = new Persona('Jr', 19, 'm');
console.log(prs1.toString());


// IMPORTANDO VARIOS ELEMENTOS

import {Estudiante, Trabajador} from './modules/others';
import {Est, Tra} from './modules/objs';

const est = new Estudiante(Est);
const tra = new Trabajador(Tra);

console.log(est.toString())
console.log(tra.toString())