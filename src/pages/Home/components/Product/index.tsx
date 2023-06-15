import { useContext, useState } from 'react'
import { AddToCartContainer, FilterContainer, FilterTags, PriceContainer, ProductContainer, AddToCart } from './styles'
import { CoffeeQuantity } from '../CoffeeQuantity'
import { CartContentContext } from '../../../../context/CartContext'

import ShoppingCart from '../../../../assets/ShoppingCart.svg'

export interface ProductInterface {
  id: number,
  image: string,
  type?: CoffeeType[],
  name: string,
  description?: string,
  price: number,
}

export enum CoffeeType {
  Tradicional = 'TRADICIONAL',
  Especial = 'ESPECIAL',
  ComLeite = 'COM LEITE',
  Alcoolico = 'ALCOÓLICO',
  Gelado = 'GELADO',
  Default = '',
}

export function Product({ id, image, type, name, description, price }: ProductInterface) {
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useContext(CartContentContext)

   return (
      <ProductContainer>
        <img src={image} alt="" />
        <FilterContainer>{type?.map((item) => <FilterTags> {item} </FilterTags>)}</FilterContainer> 

        <h3>{name}</h3>
        <p>{description}</p>

        <AddToCartContainer>
          <PriceContainer>
            <h4>R$</h4><h2>{price.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}</h2>
          </PriceContainer> 
          
          <CoffeeQuantity quantity={quantity} setQuantity={setQuantity} />

          <AddToCart onClick={() => addItemToCart({ id, name, image, quantity, price })}><img src={ShoppingCart} alt="add to cart" /></AddToCart>
        </AddToCartContainer>
      </ProductContainer>
  )
}