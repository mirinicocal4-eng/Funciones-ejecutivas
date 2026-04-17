import { 
  Target, Search, Apple, Cookie, Cake, IceCream, Pizza, Plane, Car, Train, Bike, Sun, Moon, Cloud, Wind, Gem, Crown,
  Smile, Frown, Shirt, Flower, BookOpen, Dog, Trees, School, Ghost, Egg, Palette, Bot, Star, Footprints, RefreshCw, 
  Shield, Mail, Library, Zap, Coffee, Music, Music2, Volume2, GitBranch, Target as Ball, Heart, Gift, Map as MapIcon, 
  Sword, Shield as ShieldIcon, Clock, Timer, Scroll, Pen, Anchor, Compass, Rabbit, Ship, Key, Lightbulb, MapPin, Eye, Layers, 
  Castle, Mountain, MountainSnow, Waves, Wand, Pipette as PipetteIcon, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat,
  CircleDollarSign
} from 'lucide-react';

export const TERM_ICON_MAP: Record<string, any> = {
  apple: Apple, 'manzana-roja': Apple, 'manzana-verde': Apple,
  cookie: Cookie, cake: Cake, icecream: IceCream, pizza: Pizza,
  plane: Plane, car: Car, train: Train, bike: Bike, sun: Sun, 
  moon: Moon, cloud: Cloud, wind: Wind, gem: Gem, crown: Crown,
  smile: Smile, frown: Frown, shirt: Shirt, flower: Flower, book: BookOpen,
  dog: Dog, tree: Trees, school: School, ghost: Ghost, egg: Egg, 
  palette: Palette, clue: Search, bot: Bot, star: Star, socks: Footprints,
  rainbow: RefreshCw, storm: Wind, cloak: Shield, letter: Mail, castle: Library,
  potion: Zap, cauldron: Coffee, flute: Music, drum: Music2, whistle: Volume2,
  broom: GitBranch, shoe: Footprints, ball: Target, gift: Gift, heart: Heart,
  map: MapIcon, sword: Sword, shield: ShieldIcon, clock: Clock, glass: Timer,
  dragon: Ghost, letter_ancient: Scroll, parchment: Scroll, quill: Pen, anchor: Anchor, compass: Compass,
  rabbit: Rabbit, boat: Ship, ship: Ship, key: Key, lock: Shield, crown_gold: Crown, potion_green: Zap,
  lamp: Lightbulb, map_pin: MapPin, eye: Eye, box: Layers, ink_pot: Coffee, scroll: Scroll,
  coin: CircleDollarSign, toy: ToyBrick, bird: Bird, flame: Flame, sparkle: Sparkles, light: Sun, flash: Zap,
  magic: Wand, ink: PipetteIcon, magnify: Search, crumb: Dot, bread: Wheat, forest: Trees,
  tower: Castle, mountain: Mountain, cave: MountainSnow, river: Waves
};

// Handle missing CircleDollarSign if it was a typo in previous turns (it should be CircleDollarSign in latest lucide)
// Actually I see CircleDollarSign in imports above.

export default function Pictogram({ term, color, size = 48, className = "" }: { term: string, color?: string, size?: number, className?: string }) {
  const Icon = TERM_ICON_MAP[term.toLowerCase()] || Target;
  
  const mainColor = color === 'blue' ? '#3B82F6' : 
                   color === 'red' ? '#ef4444' : 
                   color === 'teal' ? '#2DD4BF' : 
                   color === 'gold' ? '#D4AF37' : '#FF6321';

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.8} style={{ color: mainColor }} strokeWidth={2.5} />
    </div>
  );
}
