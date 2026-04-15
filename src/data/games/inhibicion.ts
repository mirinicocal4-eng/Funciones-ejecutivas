
import { GameDefinition } from '../../types';

export const INHIBICION_GAMES: GameDefinition[] = [
  {
    id: 'ci-i3-parar',
    name: 'Estatua de Neón',
    grade: 'Infantil 3 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Bailar (tocar la pantalla) mientras suena la música, parar cuando se detenga.',
    controls: 'Táctil: Pulsación continua.',
    progression: 'Silencios más cortos.',
    feedback: 'Luz de discoteca.',
    icon: 'Rocket'
  },
  {
    id: 'ci-i4-contrario',
    name: 'Mundo al Revés',
    grade: 'Infantil 4 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Tocar el sol cuando el robot diga "noche" y la luna cuando diga "día".',
    controls: 'Táctil.',
    progression: 'Cambios más rápidos.',
    feedback: 'Cambio de cielo instantáneo.',
    icon: 'Rocket'
  },
  {
    id: 'ci-i5-espera',
    name: 'Carga de Batería',
    grade: 'Infantil 5 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Esperar a que la batería esté al 100% (verde) antes de pulsar el botón.',
    controls: 'Táctil.',
    progression: 'La carga se detiene o retrocede.',
    feedback: 'Explosión de energía positiva.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p1-flechas',
    name: 'Flechas Locas',
    grade: 'Primaria 1º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Pulsar la dirección de la flecha central, ignorando las flechas de los lados.',
    controls: 'Flechas teclado/Táctil.',
    progression: 'Flechas laterales apuntan al lado contrario.',
    feedback: 'Flecha brilla.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p2-stroop',
    name: 'Colores Mentirosos',
    grade: 'Primaria 2º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Decir el color de la tinta, no la palabra escrita (ej: palabra "ROJO" escrita en azul).',
    controls: 'Selección de color.',
    progression: 'Palabras aparecen más rápido.',
    feedback: 'Pincelada de color.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p3-nogo',
    name: 'Alerta de Intrusos',
    grade: 'Primaria 3º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Tocar todos los robots excepto el que tiene una X roja.',
    controls: 'Táctil/Ratón.',
    progression: 'Más robots en pantalla.',
    feedback: 'Desintegración del intruso.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p4-ritmo',
    name: 'Ritmo Binario',
    grade: 'Primaria 4º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Seguir un ritmo: 1 golpe si suena un tono, 2 si suenan dos, pero NADA si suena un silbato.',
    controls: 'Espacio/Tap.',
    progression: 'Ritmo más complejo.',
    feedback: 'Onda sonora visual.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p5-interferencia',
    name: 'Escudo de Frecuencia',
    grade: 'Primaria 5º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Resolver una operación matemática mientras aparecen mensajes distractores en pantalla.',
    controls: 'Teclado.',
    progression: 'Distractores más llamativos.',
    feedback: 'Escudo se mantiene azul.',
    icon: 'Rocket'
  },
  {
    id: 'ci-p6-parada',
    name: 'Freno de Emergencia',
    grade: 'Primaria 6º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Iniciar una acción y detenerla justo antes de completarla si suena una señal.',
    controls: 'Mantener y soltar.',
    progression: 'Señal de parada más tardía.',
    feedback: 'Frenado perfecto.',
    icon: 'Rocket'
  }
];
