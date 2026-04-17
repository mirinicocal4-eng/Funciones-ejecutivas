
import { GameDefinition } from '../../types';

export const ATENCION_GAMES: GameDefinition[] = [
  {
    id: 'at-i3-bosque',
    name: 'El Bosque de las Sombras',
    grade: 'Infantil 3 años',
    executiveFunction: 'Atención',
    gameplay: 'El Grúfalo se ha escondido tras los pinos. ¡Vigila bien y toca cuando asome la cabeza!',
    controls: 'Táctil: Tap.',
    progression: 'El bosque se vuelve más oscuro y hay más árboles donde esconderse.',
    feedback: '¡Te vi! El Grúfalo saluda y se ríe.',
    icon: 'Search'
  },
  {
    id: 'at-i4-manzanas',
    name: 'La Cesta de Blancanieves',
    grade: 'Infantil 4 años',
    executiveFunction: 'Atención',
    gameplay: 'Ayuda a Blancanieves a recoger las manzanas rojas deliciosas, pero ¡cuidado con las verdes que están ácidas!',
    controls: 'Táctil: Tap sobre manzanas rojas.',
    progression: 'Aparecen más frutas distractoras como peras o uvas.',
    feedback: '¡Ñam! La manzana va directa al pastel.',
    icon: 'Target'
  },
  {
    id: 'at-i5-hadas',
    name: 'El Camino de Polvo de Estrellas',
    grade: 'Infantil 5 años',
    executiveFunction: 'Atención',
    gameplay: 'Sigue con el dedo el rastro brillante que dejan las hadas al volar para que no se pierdan en la noche.',
    controls: 'Táctil: Deslizar.',
    progression: 'El rastro es más largo y tiene más curvas.',
    feedback: '¡Llegamos al castillo de cristal!',
    icon: 'Zap'
  },
  {
    id: 'at-p1-desvan',
    name: 'Misterio en el Desván',
    grade: 'Primaria 1º',
    executiveFunction: 'Atención',
    gameplay: 'Encuentra los 3 objetos perdidos de Alicia (una llave, un conejo y un reloj) en el desván desordenado.',
    controls: 'Click/Tap sobre objetos.',
    progression: 'El desván tiene más objetos y está más oscuro.',
    feedback: '¡Alicia ya puede volver al País de las Maravillas!',
    icon: 'Search'
  },
  {
    id: 'at-p2-piratas',
    name: 'El Catalejo del Capitán',
    grade: 'Primaria 2º',
    executiveFunction: 'Atención',
    gameplay: 'Mira por el catalejo y pulsa solo cuando veas un barco con bandera pirata. ¡Ignora los barcos mercantes!',
    controls: 'Táctil/Click.',
    progression: 'Hay niebla y los barcos pasan más rápido.',
    feedback: '¡Al abordaje! Hemos encontrado el tesoro.',
    icon: 'Target'
  },
  {
    id: 'at-p3-cartas',
    name: 'Correo para el Gigante',
    grade: 'Primaria 3º',
    executiveFunction: 'Atención',
    gameplay: 'Clasifica las cartas: solo las que tengan el sello real llegan al gigante. Las demás van a la papelera.',
    controls: 'Arrastrar.',
    progression: 'Hay muchos tipos de sellos parecidos.',
    feedback: '¡El gigante lee sus noticias feliz!',
    icon: 'Search'
  },
  {
    id: 'at-p4-mapa',
    name: 'El Cartógrafo de Narnia',
    grade: 'Primaria 4º',
    executiveFunction: 'Atención',
    gameplay: 'Encuentra los 5 errores entre el mapa antiguo de Narnia y el mapa nuevo que ha dibujado el castor.',
    controls: 'Click en diferencias.',
    progression: 'Mapas con relieves y detalles minúsculos.',
    feedback: '¡Mapa actualizado! El León Aslan está orgulloso.',
    icon: 'Map'
  },
  {
    id: 'at-p5-escritor',
    name: 'El Taller de Sherlock',
    grade: 'Primaria 5º',
    executiveFunction: 'Atención',
    gameplay: 'Escucha la declaración del sospechoso mientras buscas huellas dactilares azules en la escena.',
    controls: 'Audio + Click.',
    progression: 'Más huellas y la declaración es más larga y confusa.',
    feedback: '¡Caso cerrado, elemental querido Watson!',
    icon: 'Zap'
  },
  {
    id: 'at-p6-cronista',
    name: 'La Crónica de los Siglos',
    grade: 'Primaria 6º',
    executiveFunction: 'Atención',
    gameplay: 'Detecta palabras intrusas que no pertenecen al siglo XVII en un manuscrito antiguo en movimiento.',
    controls: 'Click rápido.',
    progression: 'El pergamino se mueve más rápido y la letra es más difícil.',
    feedback: '¡Has preservado la historia del reino!',
    icon: 'Rocket'
  }
];
