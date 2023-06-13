import { CoffeeType, Product } from "../Product";
import { useState } from 'react'
import { coffees } from "./CoffeesList";

import { CatalogContainer, CatalogHeader, CatalogTitle, FilterBarContainer, ProductsGrid } from "./styles";

export function Catalog() {
const [activeFilter, setActiveFilter] = useState<CoffeeType>();
const filteredCoffees = coffees.filter((coffee) => activeFilter ? coffee.type?.includes(activeFilter) : true)

  return (
    <CatalogContainer>
      <CatalogHeader>
        <CatalogTitle>Nossos cafés</CatalogTitle>

        <FilterBarContainer>
          <button className={activeFilter === CoffeeType.Tradicional ? 'active' : ''} onClick={() => setActiveFilter(activeFilter === CoffeeType.Tradicional ? undefined : CoffeeType.Tradicional)}>TRADICIONAL</button>
          <button className={activeFilter === CoffeeType.ComLeite ? 'active' : ''} onClick={() => setActiveFilter(activeFilter === CoffeeType.ComLeite ? undefined : CoffeeType.ComLeite)}>COM LEITE</button>
          <button className={activeFilter === CoffeeType.Gelado ? 'active' : ''} onClick={() => setActiveFilter(activeFilter === CoffeeType.Gelado ? undefined : CoffeeType.Gelado)}>GELADO</button>
          <button className={activeFilter === CoffeeType.Especial ? 'active' : ''} onClick={() => setActiveFilter(activeFilter === CoffeeType.Especial ? undefined : CoffeeType.Especial)}>ESPECIAL</button>
          <button className={activeFilter === CoffeeType.Alcoolico ? 'active' : ''} onClick={() => setActiveFilter(activeFilter === CoffeeType.Alcoolico ? undefined : CoffeeType.Alcoolico)}>ALCOÓLICO</button>
        </FilterBarContainer>  
      </CatalogHeader>  

      <ProductsGrid>
        {filteredCoffees.map((coffeeItem) => <Product {...coffeeItem}/>)}
      </ProductsGrid>
    </CatalogContainer>
  )
}