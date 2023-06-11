import styled from 'styled-components'

export const CatalogTitle = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
 
    h2 {
      font-family: 'Baloo 2', monospace;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 32px;
      font-weight: 800;
    }
  `

   export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    width: auto;
    height: 25px;
    padding: 0px;
    gap: 8px;

    button {
     height: 25px;
     padding: 6px 12px;

     font-family: 'Roboto', sans-serif;
     font-size: 10px;
     font-weight: 700;
     color: ${(props) => props.theme['yellow']};
     background-color: transparent;
     border: 1px solid ${(props) => props.theme['yellow-dark']};
     border-radius: 100px;

      &:hover {
        background-color: ${(props) => props.theme['yellow-light']};
      }

      &:active {
       background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  `

  export const CatalogHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 42px;
    gap: 32rem;
  `

  export const CatalogContainer = styled.div`
    width: 100%;
    height: auto;
  `

  export const ProductsGrid = styled.div`
    width: 1120px;
    margin: auto;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `