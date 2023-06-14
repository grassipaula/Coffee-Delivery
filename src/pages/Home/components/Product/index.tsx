import { useState } from 'react'
import AddToCart from '../../../../assets/AddToCart.svg'
import { AddToCartContainer, FilterContainer, FilterTags, PriceContainer, ProductContainer } from './styles'
import { AddCoffeeToCart } from '../AddToCart'

{/* Mudar id para obrigatório depois */}
export interface ProductInterface {
  id?: number,
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

export function Product({ image, type, name, description, price }: ProductInterface) {
  const [quantity, setQuantity] = useState(0)

  return (
      <ProductContainer>
        <img src={image} alt="" />
        <FilterContainer>{type?.map((item) => <FilterTags> {item} </FilterTags>)}</FilterContainer> 

        <h3>{name}</h3>
        <p>{description}</p>

        {/* Componente de quantidade e adição ao carrinho */}
        <AddToCartContainer>
          <PriceContainer>
            <h4>R$</h4><h2>{price.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}</h2>
          </PriceContainer> 
          
          <AddCoffeeToCart quantity={quantity} setQuantity={setQuantity} />

          <button><img src={AddToCart} alt="add to cart" /></button>
        </AddToCartContainer>
      </ProductContainer>
  )
}