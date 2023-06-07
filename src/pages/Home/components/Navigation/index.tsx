import { ShoppingCart, MapPin } from 'phosphor-react'
import CoffeeLogo  from '../../../../assets/CoffeeLogo.svg'
import { NavLink } from 'react-router-dom'
import { LocationAndCart, NavigationContainer } from './styles'

export function Navigation() {
  return (
    <div>
      <NavigationContainer>
      <NavLink to="/" title="Home"> 
      <img src={CoffeeLogo} />
      </NavLink>

      <LocationAndCart>
      <NavLink to="/Checkout" title="Checkout">
      <p id='location'> <MapPin size={24} weight='fill' />Florianópolis, SC</p>
      </NavLink>

      <NavLink to="/Checkout" title="Checkout">
      <p id='cart'><ShoppingCart size={24} weight='fill' /></p>
      </NavLink>
      </LocationAndCart>
      </NavigationContainer>
      </div>
  )
}