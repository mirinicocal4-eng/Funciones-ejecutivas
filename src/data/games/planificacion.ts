
import { GameDefinition } from '../../types';

export const PLANIFICACION_GAMES: GameDefinition[] = [
  {
    id: 'pl-i3-torre',
    name: 'Torre de Energía',
    grade: 'Infantil 3 años',
    executiveFunction: 'Planificación',
    gameplay: 'Apilar 3 bloques de mayor a menor tamaño.',
    controls: 'Arrastrar.',
    progression: 'Apilar 5 bloques.',
    feedback: 'La torre se ilumina.',
    icon: 'Layers'
  },
  {
    id: 'pl-i4-orden',
    name: 'Día del Robot',
    grade: 'Infantil 4 años',
    executiveFunction: 'Planificación',
    gameplay: 'Ordenar 3 imágenes: el robot se despierta, desayuna y sale a la calle.',
    controls: 'Arrastrar.',
    progression: 'Ordenar 5 imágenes.',
    feedback: 'Animación de la historia.',
    icon: 'Layers'
  },
  {
    id: 'pl-i5-laberinto',
    name: 'Ruta Segura',
    grade: 'Infantil 5 años',
    executiveFunction: 'Planificación',
    gameplay: 'Dibujar el camino antes de que el robot empiece a caminar.',
    controls: 'Dibujo táctil.',
    progression: 'Más obstáculos en el mapa.',
    feedback: 'El robot sigue la línea.',
    icon: 'Layers'
  },
  {
    id: 'pl-p1-mochila',
    name: 'Mochila de Explorador',
    grade: 'Primaria 1º',
    executiveFunction: 'Planificación',
    gameplay: 'Elegir 3 objetos necesarios para una misión específica (ej: linterna para cueva).',
    controls: 'Selección.',
    progression: 'Más objetos y misiones variadas.',
    feedback: 'Misión completada.',
    icon: 'Layers'
  },
  {
    id: 'pl-p2-secuencia',
    name: 'Cadena de Montaje',
    grade: 'Primaria 2º',
    executiveFunction: 'Planificación',
    gameplay: 'Colocar las piezas de un robot en el orden correcto de montaje.',
    controls: 'Arrastrar.',
    progression: 'Robots más complejos.',
    feedback: 'El robot cobra vida.',
    icon: 'Layers'
  },
  {
    id: 'pl-p3-hanoi',
    name: 'Torres de Datos',
    grade: 'Primaria 3º',
    executiveFunction: 'Planificación',
    gameplay: 'Mover discos de una torre a otra siguiendo las reglas (Torre de Hanoi simplificada).',
    controls: 'Arrastrar.',
    progression: 'Más discos.',
    feedback: 'Transferencia de datos exitosa.',
    icon: 'Layers'
  },
  {
    id: 'pl-p4-recursos',
    name: 'Gestor de Baterías',
    grade: 'Primaria 4º',
    executiveFunction: 'Planificación',
    gameplay: 'Distribuir energía limitada entre 3 distritos para que todos funcionen.',
    controls: 'Deslizadores.',
    progression: 'Más distritos y menos energía.',
    feedback: 'Ciudad iluminada.',
    icon: 'Layers'
  },
  {
    id: 'pl-p5-logistica',
    name: 'Ruta de Reparto',
    grade: 'Primaria 5º',
    executiveFunction: 'Planificación',
    gameplay: 'Planificar la ruta más corta para visitar 5 puntos de la ciudad.',
    controls: 'Trazado de ruta.',
    progression: 'Puntos con horarios de apertura.',
    feedback: 'Eficiencia logística A+.',
    icon: 'Layers'
  },
  {
    id: 'pl-p6-mision',
    name: 'Misión Marte',
    grade: 'Primaria 6º',
    executiveFunction: 'Planificación',
    gameplay: 'Gestionar una misión espacial: elegir tripulación, combustible y víveres con presupuesto limitado.',
    controls: 'Gestión/Menús.',
    progression: 'Eventos aleatorios durante la misión.',
    feedback: 'Aterrizaje exitoso.',
    icon: 'Layers'
  }
];
