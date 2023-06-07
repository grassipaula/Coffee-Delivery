import { ShoppingCart } from 'phosphor-react'
import CoffeeLogo  from '../../../../assets/CoffeeLogo.svg'

export function Navigation() {
  return (
    <div>
      <img src={CoffeeLogo} 
      />
      Florianópolis, SC
      <ShoppingCart size={24} />
      </div>
  )
}