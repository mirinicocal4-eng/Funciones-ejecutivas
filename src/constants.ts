
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

export const METRICS: Metric[] = [
  { label: 'Tiempo de Reacción (TR)', description: 'Milisegundos desde la aparición del estímulo hasta la respuesta (clave en Atención y Control Inhibitorio).' },
  { label: 'Tasa de Aciertos/Errores', description: 'Porcentaje de respuestas correctas frente a omisiones o falsas alarmas.' },
  { label: 'Span de Memoria', description: 'Número máximo de elementos recordados correctamente en secuencias.' },
  { label: 'Costo de Cambio', description: 'Tiempo extra que tarda el niño en responder tras un cambio de regla (Flexibilidad Cognitiva).' },
  { label: 'Eficiencia de Ruta', description: 'Número de movimientos usados vs. movimientos mínimos necesarios (Planificación).' }
];
