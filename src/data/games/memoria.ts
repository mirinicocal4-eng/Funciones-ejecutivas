
import { GameDefinition } from '../../types';

export const MEMORIA_GAMES: GameDefinition[] = [
  {
    id: 'wm-i3-bolsillo',
    name: 'El Bolsillo Mágico de Mary Poppins',
    grade: 'Infantil 3 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Mary Poppins saca un objeto de su bolso y lo vuelve a guardar. ¿Qué objeto era?',
    controls: 'Táctil: Tap.',
    progression: 'Saca 2 objetos diferentes.',
    feedback: '¡Supercalifragilístico! El objeto flota de alegría.',
    icon: 'Library'
  },
  {
    id: 'wm-i4-nubes',
    name: 'Construyendo Nubes con el Gigante',
    grade: 'Infantil 4 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'El gigante sopla nubes con formas. Repite la pareja de nubes en el orden que las viste.',
    controls: 'Táctil: Botones.',
    progression: 'Secuencias de hasta 4 nubes.',
    feedback: '¡Lluvia de estrellas sobre el gigante!',
    icon: 'Library'
  },
  {
    id: 'wm-i5-baul',
    name: 'El Baúl de los Secretos de Garfio',
    grade: 'Infantil 5 años',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Tres tesoros aparecen en el baúl. Se cierra y al abrirse falta uno. ¿Cuál es?',
    controls: 'Táctil.',
    progression: 'Aparecen hasta 5 tesoros.',
    feedback: '¡El tesoro brilla y Garfio se sorprende!',
    icon: 'Library'
  },
  {
    id: 'wm-p1-hechizo',
    name: 'Hechizo de Colores de la Bruja',
    grade: 'Primaria 1º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'La bruja dice una frase de colores (Rojo-Verde-Azul). Elige los calderos en ese orden.',
    controls: 'Táctil/Click.',
    progression: 'Frases más largas y rápidas.',
    feedback: '¡Pum! La poción explota en confeti.',
    icon: 'Library'
  },
  {
    id: 'wm-p2-eco',
    name: 'El Eco de la Cueva de los Ecos',
    grade: 'Primaria 2º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Un duende grita una serie de objetos. ¡Repítelos en orden INVERSO como hace el eco!',
    controls: 'Click en pictogramas.',
    progression: 'Series de objetos más largas.',
    feedback: 'El eco te responde con una risa alegre.',
    icon: 'Library'
  },
  {
    id: 'wm-p3-compra',
    name: 'La Cesta de Caperucita',
    grade: 'Primaria 3º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Recuerda los 3 alimentos y el color de su envoltorio antes de que el lobo los esconda.',
    controls: 'Selección múltiple.',
    progression: 'Más alimentos y detalles (tamaño, tipo).',
    feedback: '¡Caperucita llega a casa de la abuelita!',
    icon: 'Library'
  },
  {
    id: 'wm-p4-farolillos',
    name: 'El Código de los Farolillos',
    grade: 'Primaria 4º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Los farolillos del jardín se encienden en un orden. Repítelo para iluminar el camino.',
    controls: 'Click en farolillos.',
    progression: 'Cuadrícula de farolillos más grande (5x5).',
    feedback: '¡El jardín se ilumina por completo!',
    icon: 'Library'
  },
  {
    id: 'wm-p5-testigo',
    name: 'Testigo de un Cuento',
    grade: 'Primaria 5º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Mira una ilustración de un cuento durante 10 segundos. Luego responde preguntas sobre detalles ocultos.',
    controls: 'Selección múltiple.',
    progression: 'Ilustraciones más complejas y preguntas más finas.',
    feedback: '¡Tienes vista de lince para los cuentos!',
    icon: 'Library'
  },
  {
    id: 'wm-p6-codice',
    name: 'El Códice del Archivero Real',
    grade: 'Primaria 6º',
    executiveFunction: 'Memoria de Trabajo',
    gameplay: 'Aparecen símbolos antiguos. Transfórmalos mentalmente según una clave y dinos el resultado final.',
    controls: 'Teclado/Selección.',
    progression: 'Claves de transformación más complejas.',
    feedback: '¡Has descifrado el misterio del reino!',
    icon: 'Library'
  }
];
