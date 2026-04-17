
import { GameDefinition } from '../../types';

export const PLANIFICACION_GAMES: GameDefinition[] = [
  {
    id: 'pl-i3-torre',
    name: 'La Torre de Libros del Gigante',
    grade: 'Infantil 3 años',
    executiveFunction: 'Planificación',
    gameplay: 'Ayuda al gigante a ordenar sus 3 libros favoritos de más grande a más pequeño para que no se caigan.',
    controls: 'Arrastrar.',
    progression: 'La torre crece hasta los 5 libros.',
    feedback: '¡La torre se mantiene en equilibrio!',
    icon: 'Layers'
  },
  {
    id: 'pl-i4-maleta',
    name: 'El Viaje de la Maleta Mágica',
    grade: 'Infantil 4 años',
    executiveFunction: 'Planificación',
    gameplay: 'Prepara la maleta en orden: primero la ropa, luego el mapa y al final cierra con la llave.',
    controls: 'Arrastrar.',
    progression: 'Misiones con 5 pasos logísticos.',
    feedback: '¡Buen viaje a la Luna!',
    icon: 'Layers'
  },
  {
    id: 'pl-i5-migas',
    name: 'El Laberinto de las Migas de Pan',
    grade: 'Infantil 5 años',
    executiveFunction: 'Planificación',
    gameplay: 'Marca el camino de migas de pan para que Hansel y Gretel no se pierdan en el bosque oscuro.',
    controls: 'Dibujo táctil.',
    progression: 'Caminos más enrevesados y con lobos.',
    feedback: '¡Vuelven a casa a salvo!',
    icon: 'Layers'
  },
  {
    id: 'pl-p1-picnic',
    name: 'El Picnic de los Siete Enanitos',
    grade: 'Primaria 1º',
    executiveFunction: 'Planificación',
    gameplay: 'Reparte exactamente 7 manzanas entre los 7 enanitos para que todos tengan su merienda.',
    controls: 'Reparto táctil.',
    progression: 'Más objetos a repartir (tenedores, vasos).',
    feedback: '¡Cena de celebración en la mina!',
    icon: 'Layers'
  },
  {
    id: 'pl-p2-leyenda',
    name: 'El Orden de la Leyenda Perdida',
    grade: 'Primaria 2º',
    executiveFunction: 'Planificación',
    gameplay: 'Ordena las 4 páginas de la leyenda antigua para que la historia tenga sentido cronológico.',
    controls: 'Arrastrar.',
    progression: 'Cuentos con tramas de 6 páginas.',
    feedback: '¡La leyenda brilla y se guarda en el archivo!',
    icon: 'Layers'
  },
  {
    id: 'pl-p3-mudanza',
    name: 'La Mudanza del Mago Merlín',
    grade: 'Primaria 3º',
    executiveFunction: 'Planificación',
    gameplay: 'Mueve los baúles mágicos de una torre a otra siguiendo las reglas del Sabio de Oxford.',
    controls: 'Arrastrar (Torre de Hanoi).',
    progression: 'Más baúles apilados (hasta 5).',
    feedback: '¡Taller del mago organizado!',
    icon: 'Layers'
  },
  {
    id: 'pl-p4-banquete',
    name: 'El Banquete Real de los Personajes',
    grade: 'Primaria 4º',
    executiveFunction: 'Planificación',
    gameplay: 'Asigna la comida limitada entre los personajes según su hambre y rango para que todos estén contentos.',
    controls: 'Gestión de recursos.',
    progression: 'Más personajes y menos suministros.',
    feedback: '¡Banquete real sin incidentes!',
    icon: 'Layers'
  },
  {
    id: 'pl-p5-ruta',
    name: 'La Ruta de Sherlock Holmes',
    grade: 'Primaria 5º',
    executiveFunction: 'Planificación',
    gameplay: 'Traza el camino más eficiente para visitar todas las escenas del crimen en Londres.',
    controls: 'Trazado de ruta.',
    progression: 'Calles cortadas y pistas con tiempo límite.',
    feedback: '¡Crimen resuelto en una mañana!',
    icon: 'Layers'
  },
  {
    id: 'pl-p6-archivo',
    name: 'El Archivo de las Paradojas Finales',
    grade: 'Primaria 6º',
    executiveFunction: 'Planificación',
    gameplay: 'Resuelve un misterio narrativo tomando decisiones secuenciales que afectan al futuro del Reino.',
    controls: 'Toma de decisiones múltiple.',
    progression: 'Los efectos de las decisiones son más impredecibles.',
    feedback: '¡Has salvado el Reino de una paradoja eterna!',
    icon: 'Layers'
  }
];
