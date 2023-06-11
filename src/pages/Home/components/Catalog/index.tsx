import { Product } from "../Product";
import { CatalogContainer, CatalogHeader, CatalogTitle, FilterContainer, ProductsGrid } from "./styles";

export function Catalog() {
  return (
    <CatalogContainer>
      <CatalogHeader>
        <CatalogTitle><h2>Nossos cafés</h2></CatalogTitle>

        {/* Criar e estilizar o filtro */}
        <FilterContainer>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </FilterContainer>  
      </CatalogHeader>  

      {/* Criar e estilizar produtos */}

      <ProductsGrid>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsGrid>
    </CatalogContainer>
  )
}