
import { GameDefinition } from '../../types';

export const INHIBICION_GAMES: GameDefinition[] = [
  {
    id: 'ci-i3-estatua',
    name: '¡Silencio en la Corte Real!',
    grade: 'Infantil 3 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Baila con el juglar mientras suene su mandolina. Cuando el Rey aparezca en el balcón, ¡quédate quieto como una estatua!',
    controls: 'Táctil: Mantener pulsado para bailar.',
    progression: 'El Rey aparece de improviso y por tiempos variables.',
    feedback: '¡El Rey te lanza una moneda de oro por tu buen comportamiento!',
    icon: 'Shield'
  },
  {
    id: 'ci-i4-reves',
    name: 'El Sombrerero Loco y el Mundo al Revés',
    grade: 'Infantil 4 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'En el país de las maravillas, el sol significa "Luna" y la luna significa "Sol". Toca el botón contrario al que indique el Sombrerero.',
    controls: 'Táctil: Botones Sol/Luna.',
    progression: 'El Sombrerero se vuelve más loco y cambia de dibujo más rápido.',
    feedback: '¡Feliz no-cumpleaños! Has engañado al Sombrerero.',
    icon: 'Shield'
  },
  {
    id: 'ci-i5-tesoro',
    name: 'El Guardián del Tesoro Dormido',
    grade: 'Infantil 5 años',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Espera a que el dragón cierre sus tres ojos completamente antes de tocar el cofre del tesoro.',
    controls: 'Táctil.',
    progression: 'El dragón amaga con dormirse pero abre un ojo de repente.',
    feedback: '¡Cofre abierto! Te llevas un diamante mágico.',
    icon: 'Shield'
  },
  {
    id: 'ci-p1-semaforo',
    name: 'El Semáforo de Pinocho',
    grade: 'Primaria 1º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Ayuda a Pinocho a llegar al colegio. Si Pepito Grillo brilla en verde, camina. Si brilla en rojo, ¡alto!',
    controls: 'Táctil/Click continuo.',
    progression: 'Pepito cambia de color más a menudo y rápido.',
    feedback: '¡Has llegado al colegio sin que te crezca la nariz!',
    icon: 'Shield'
  },
  {
    id: 'ci-p2-tinta',
    name: 'La Tinta Invisible del Mago',
    grade: 'Primaria 2º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Un mago ha hechizado las palabras. Di de qué color es la tinta brillante, ignorando lo que la palabra dice.',
    controls: 'Selección de color.',
    progression: 'Colores más exóticos y palabras más largas.',
    feedback: '¡El hechizo se rompe y la palabra es libre!',
    icon: 'Palette'
  },
  {
    id: 'ci-p3-trasgo',
    name: '¡Cuidado con el Trasgo Bromista!',
    grade: 'Primaria 3º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Toca todos los personajes del cuento de Peter Pan, pero si aparece el Capitán Garfio, ¡no lo toques!',
    controls: 'Click/Tap.',
    progression: 'Garfio aparece con mucha frecuencia y rapidez.',
    feedback: '¡Garfio ha caído al agua con el cocodrilo!',
    icon: 'Shield'
  },
  {
    id: 'ci-p4-flauta',
    name: 'El Ritmo de la Flauta Mágica',
    grade: 'Primaria 4º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Sigue la melodía: pulsa cuando suene la nota aguda, pero quédate quieto si suena la nota sorda del sótano.',
    controls: 'Tap/Click.',
    progression: 'Melodías más complejas y rápidas.',
    feedback: '¡La música aleja a las ratas de la ciudad!',
    icon: 'Shield'
  },
  {
    id: 'ci-p5-paciencia',
    name: 'La Prueba de Paciencia del Sabio',
    grade: 'Primaria 5º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Debes atrapar el rayo de luz solo cuando pase por el centro exacto del reloj de arena mágico.',
    controls: 'Click preciso.',
    progression: 'El rayo de luz se mueve con patrones erráticos.',
    feedback: '¡Has capturado la luz de la sabiduría!',
    icon: 'Shield'
  },
  {
    id: 'ci-p6-archivo',
    name: 'El Gran Archivo Real de los Secretos',
    grade: 'Primaria 6º',
    executiveFunction: 'Control Inhibitorio',
    gameplay: 'Clasifica pergaminos reales. Ignora los que tengan el sello del traidor, a menos que lleven la cinta azul de perdón.',
    controls: 'Arrastrar.',
    progression: 'Muchos tipos de sellos, cintas y excepciones de reglas.',
    feedback: '¡Has salvado los secretos del Reino para siempre!',
    icon: 'Shield'
  }
];
