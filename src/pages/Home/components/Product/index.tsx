import AddToCart from '../../../../assets/AddToCart.svg'
import Expresso from '../../../../assets/Expresso.svg' 
import { AddToCartContainer, ProductContainer } from './styles'

export function Product() {
  return (
      <ProductContainer>
        <img src={Expresso} alt="expresso" />

        {/* FAZER UM FILTRO */}
        <label htmlFor="">TRADICIONAL</label> 

        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        {/* Componente de quantidade e adição ao carrinho */}
        <AddToCartContainer>
          <h4>R$</h4><h2>9,90</h2> 
          <input value=" - 1 + "/>  
          <button><img src={AddToCart} alt="add to cart" /></button>
        </AddToCartContainer>
      </ProductContainer>
  )
}