
import { GameDefinition } from '../../types';

export const MEMORIA_GAMES: GameDefinition[] = [
  {
    id: 'wm-i3-luces',
    name: 'Luces de la Ciudad',
    grade: 'Infantil 3 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Recordar qué ventana se iluminó primero.',
    controls: 'Táctil: Tap en la ventana.',
    progression: 'Se iluminan 2 ventanas.',
    feedback: 'Aparece un gatito en la ventana.',
    icon: 'Cpu'
  },
  {
    id: 'wm-i4-sonidos',
    name: 'Melodía Robot',
    grade: 'Infantil 4 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Repetir una secuencia de 2 sonidos (grave-agudo).',
    controls: 'Táctil: Botones grandes.',
    progression: 'Secuencia de 3 sonidos.',
    feedback: 'El robot canta.',
    icon: 'Cpu'
  },
  {
    id: 'wm-i5-objetos',
    name: 'Maleta Espacial',
    grade: 'Infantil 5 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Ver 3 objetos, se tapan, y decir cuál falta.',
    controls: 'Táctil.',
    progression: 'Se muestran 5 objetos.',
    feedback: 'El objeto aparece con destellos.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p1-numeros',
    name: 'Eco Numérico',
    grade: 'Primaria 1º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Escuchar 3 números y repetirlos en el mismo orden.',
    controls: 'Teclado/Táctil.',
    progression: 'Más números en la serie.',
    feedback: 'Holograma del número.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p2-inverso',
    name: 'Espejo Numérico',
    grade: 'Primaria 2º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Escuchar 3 números y repetirlos en orden INVERSO.',
    controls: 'Teclado/Táctil.',
    progression: 'Series más largas.',
    feedback: 'Efecto de rebobinado.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p3-operaciones',
    name: 'Calculadora Mental',
    grade: 'Primaria 3º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Sumar dos números que aparecen y desaparecen rápido.',
    controls: 'Teclado/Táctil.',
    progression: 'Números de dos cifras.',
    feedback: 'Resultado brilla en verde.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p4-matriz',
    name: 'Matriz de Datos',
    grade: 'Primaria 4º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Recordar la posición de 4 celdas iluminadas en una cuadrícula de 4x4.',
    controls: 'Táctil/Ratón.',
    progression: 'Cuadrícula de 5x5.',
    feedback: 'Las celdas se conectan con rayos.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p5-dual',
    name: 'Tarea Dual',
    grade: 'Primaria 5º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Recordar una palabra mientras se resuelve una suma simple.',
    controls: 'Varios.',
    progression: 'Más palabras a recordar.',
    feedback: 'Sincronización de datos.',
    icon: 'Cpu'
  },
  {
    id: 'wm-p6-compleja',
    name: 'Algoritmo Maestro',
    grade: 'Primaria 6º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Ordenar una lista de palabras alfabéticamente mentalmente y decir la tercera.',
    controls: 'Selección múltiple.',
    progression: 'Listas más largas.',
    feedback: 'Procesamiento completado.',
    icon: 'Cpu'
  }
];
