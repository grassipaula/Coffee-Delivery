import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 256px;
  height: 310px;
  margin: 12px 12px 20px 12px;
  padding: 20px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

    img {
     width: 120px;
     height: 120px;
  }

    h2 {
      font-family: 'Baloo 2', monospace;
      font-size: 24px;
      font-weight: 800;
      line-height: 31.2px;
      color: ${(props) => props.theme['base-text']};
    }

    h3 {
      margin: 8px;

      font-family: 'Baloo 2', monospace;
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
      color: ${(props) => props.theme['base-subtitle']};
    }

    h4 {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.2px;
      color: ${(props) => props.theme['base-text']};
    }

    p {
      margin-bottom: 33px;

      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.2px;
      color: ${(props) => props.theme['base-label']};
    }

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 72px;
      height: 38px;
      border-radius: 6px;
      border: 0;

      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['purple']};
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
    }  
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: first baseline;

  width: 67px;
  height: 31px;
  gap: 4px; 
  margin-right: 15px;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 4px;
`

export const FilterTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 21px;
  padding: 8px;
  margin-top: 12px;
  margin-bottom: 8px;
  gap: 4px;
  border-radius: 20px;
  white-space: nowrap;

  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 130%;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};    
`

export const AddToCartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 208px;
    height: 38px;
    gap: 8px;
    margin-bottom: 40px;

      img {
        max-width: 38px;
        max-height: 38px;
      }

      button {
        border: 1px solid transparent;
        background-color: transparent;
      }
`