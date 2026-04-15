
export type ExecutiveFunction = 'Atención' | 'Memoria de Trabajo' | 'Control Inhibitorio' | 'Flexibilidad Cognitiva' | 'Planificación';

export type Grade = 
  | 'Infantil 3 años' 
  | 'Infantil 4 años' 
  | 'Infantil 5 años' 
  | 'Primaria 1º' 
  | 'Primaria 2º' 
  | 'Primaria 3º' 
  | 'Primaria 4º' 
  | 'Primaria 5º' 
  | 'Primaria 6º';

export interface GameDefinition {
  id: string;
  name: string;
  grade: Grade;
  executiveFunction: ExecutiveFunction;
  gameplay: string;
  controls: string;
  progression: string;
  feedback: string;
  icon: string;
}

export interface Metric {
  label: string;
  description: string;
}
