
import { GameDefinition } from '../../types';

export const ATENCION_GAMES: GameDefinition[] = [
  {
    id: 'at-i3-radar',
    name: 'Radar de Colores',
    grade: 'Infantil 3 años',
    executiveFunction: 'Atención',
    gameplay: 'Tocar solo los globos de color azul que flotan por la ciudad.',
    controls: 'Táctil: Tap.',
    progression: 'Aumenta la velocidad de los globos.',
    feedback: 'Sonido de burbuja al acertar.',
    icon: 'Target'
  },
  {
    id: 'at-i4-formas',
    name: 'Caza-Formas',
    grade: 'Infantil 4 años',
    executiveFunction: 'Atención',
    gameplay: 'Tocar solo los círculos, ignorando los cuadrados.',
    controls: 'Táctil: Tap.',
    progression: 'Aparecen más formas geométricas.',
    feedback: 'Luz de neón circular.',
    icon: 'Target'
  },
  {
    id: 'at-i5-parejas',
    name: 'Parejas de Robots',
    grade: 'Infantil 5 años',
    executiveFunction: 'Atención',
    gameplay: 'Encontrar dos robots idénticos entre un grupo de 6.',
    controls: 'Táctil: Tap en ambos.',
    progression: 'Más robots con diferencias sutiles (antenas, color ojos).',
    feedback: 'Los robots saludan.',
    icon: 'Target'
  },
  {
    id: 'at-p1-escaner',
    name: 'Escáner de Números',
    grade: 'Primaria 1º',
    executiveFunction: 'Atención',
    gameplay: 'Pulsar cuando aparezca el número 5 en una secuencia rápida.',
    controls: 'Botón en pantalla.',
    progression: 'Secuencia más rápida.',
    feedback: 'Holograma de "OK".',
    icon: 'Search'
  },
  {
    id: 'at-p2-letras',
    name: 'Buscador de Vocales',
    grade: 'Primaria 2º',
    executiveFunction: 'Atención',
    gameplay: 'Identificar vocales en palabras que pasan volando.',
    controls: 'Táctil: Tap.',
    progression: 'Palabras más largas y rápidas.',
    feedback: 'La vocal brilla.',
    icon: 'Search'
  },
  {
    id: 'at-p3-detalles',
    name: 'Inspector de Robots',
    grade: 'Primaria 3º',
    executiveFunction: 'Atención',
    gameplay: 'Encontrar el robot que tiene un error en su diseño (ej: falta una rueda).',
    controls: 'Táctil/Ratón.',
    progression: 'Errores más difíciles de ver.',
    feedback: 'Herramienta de reparación aparece.',
    icon: 'Search'
  },
  {
    id: 'at-p4-simbolos',
    name: 'Código de Símbolos',
    grade: 'Primaria 4º',
    executiveFunction: 'Atención',
    gameplay: 'Asociar números a símbolos según una clave y detectar errores.',
    controls: 'Teclado numérico/Táctil.',
    progression: 'Más símbolos en la clave.',
    feedback: 'Sonido de procesamiento de datos.',
    icon: 'Search'
  },
  {
    id: 'at-p5-sostenida',
    name: 'Vigilante del Reactor',
    grade: 'Primaria 5º',
    executiveFunction: 'Atención',
    gameplay: 'Mantener la atención en un dial y pulsar cuando la aguja entre en la zona roja.',
    controls: 'Espacio/Tap.',
    progression: 'La aguja se mueve de forma errática.',
    feedback: 'Luz de advertencia.',
    icon: 'Search'
  },
  {
    id: 'at-p6-selectiva',
    name: 'Filtro de Datos',
    grade: 'Primaria 6º',
    executiveFunction: 'Atención',
    gameplay: 'Escuchar una secuencia de números y pulsar solo cuando el número sea mayor que el anterior.',
    controls: 'Ratón/Táctil.',
    progression: 'Velocidad de audio aumenta.',
    feedback: 'Gráfico de eficiencia sube.',
    icon: 'Search'
  }
];
