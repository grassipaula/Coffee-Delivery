import AddToCart from '../../../../assets/AddToCart.svg'
import { AddToCartContainer, FilterContainer, FilterTags, ProductContainer } from './styles'

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
  return (
      <ProductContainer>
        <img src={image} alt="" />
        <FilterContainer>{type?.map((item) => <FilterTags> {item} </FilterTags>)}</FilterContainer> 

        <h3>{name}</h3>
        <p>{description}</p>

        {/* Componente de quantidade e adição ao carrinho */}
        <AddToCartContainer>
          <h4>R$</h4><h2>{price}</h2> 
          <input value=" - 1 + "/>  
          <button><img src={AddToCart} alt="add to cart" /></button>
        </AddToCartContainer>
      </ProductContainer>
  )
}