
import { ATENCION_GAMES } from './data/games/atencion';
import { MEMORIA_GAMES } from './data/games/memoria';
import { INHIBICION_GAMES } from './data/games/inhibicion';
import { FLEXIBILIDAD_GAMES } from './data/games/flexibilidad';
import { PLANIFICACION_GAMES } from './data/games/planificacion';
import { Metric } from './types';

export const GAMES = [
  ...ATENCION_GAMES,
  ...MEMORIA_GAMES,
  ...INHIBICION_GAMES,
  ...FLEXIBILIDAD_GAMES,
  ...PLANIFICACION_GAMES
];

export const GRADES = [
  'Infantil 3 años', 'Infantil 4 años', 'Infantil 5 años',
  'Primaria 1º', 'Primaria 2º', 'Primaria 3º',
  'Primaria 4º', 'Primaria 5º', 'Primaria 6º'
] as const;

export const METRICS: Metric[] = [
  { label: 'Tiempo de Reacción (TR)', description: 'Rapidez en detectar pistas y responder a los monstruos (clave en Atención e Inhibición).' },
  { label: 'Precisión del Investigador', description: 'Porcentaje de aciertos al identificar objetos mágicos o pistas reales.' },
  { label: 'Capacidad de la Mochila', description: 'Número máximo de elementos recordados en las secuencias de las historias.' },
  { label: 'Agilidad Mental', description: 'Capacidad para cambiar de estrategia cuando la historia da un giro (Flexibilidad).' },
  { label: 'Planificación de Aventuras', description: 'Eficacia en el orden de pasos para completar misiones con los mínimos movimientos.' }
];
