import Americano from '../../../../../assets/Americano.svg';
import Arabe from '../../../../../assets/Arabe.svg';
import CafeComLeite from '../../../../../assets/CafeComLeite.svg';
import Capuccino from '../../../../../assets/Capuccino.svg';
import ChocolateQuente from '../../../../../assets/ChocolateQuente.svg';
import Cubano from '../../../../../assets/Cubano.svg';
import Expresso from '../../../../../assets/Expresso.svg';
import ExpressoCremoso from '../../../../../assets/ExpressoCremoso.svg';
import ExpressoGelado from '../../../../../assets/ExpressoGelado.svg';
import Havaiano from '../../../../../assets/Havaiano.svg';
import Irlandes from '../../../../../assets/Irlandes.svg';
import Latte from '../../../../../assets/Latte.svg';
import Macchiato from '../../../../../assets/Macchiato.svg';
import Mocaccino from '../../../../../assets/Mocaccino.svg';
import { CoffeeType } from '../../Product';

export const coffees = [
  {
    id: 1,
    image: Americano,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional', 
    price: 8.90,
  },
  {
    id: 2,
    image: Arabe,
    type: [CoffeeType.Especial],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias', 
    price: 13.90,
  },
  {
    id: 3,
    image: CafeComLeite,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado', 
    price: 10.90,
  },
    {
    id: 4,
    image: Capuccino,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma', 
    price: 13.90,
  },
  {
    id: 5,
    image: ChocolateQuente,
    type: [CoffeeType.Especial, CoffeeType.ComLeite],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café', 
    price: 13.90,
  },
  {
    id: 6,
    image: Cubano,
    type: [CoffeeType.Especial, CoffeeType.Alcoolico, CoffeeType.Gelado],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', 
    price: 16.90,
  },
  {
    id: 7,
    image: Expresso,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos', 
    price: 9.90,
  },
  {
    id: 8,
    image: ExpressoCremoso,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa', 
    price: 10.90,
  },
  {
    id: 9,
    image: ExpressoGelado,
    type: [CoffeeType.Tradicional, CoffeeType.Gelado],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo', 
    price: 9.90,
  },
  {
    id: 10,
    image: Havaiano,
    type: [CoffeeType.Especial],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco', 
    price: 11.90,
  },
  {
    id: 11,
    image: Irlandes,
    type: [CoffeeType.Especial, CoffeeType.Alcoolico],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', 
    price: 17.90,
  },
  {
    id: 12,
    image: Latte,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', 
    price: 10.90,
  },
  {
    id: 13,
    image: Macchiato,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma', 
    price: 11.90,
  },
  {
    id: 14,
    image: Mocaccino,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma', 
    price: 13.90,
  }
]