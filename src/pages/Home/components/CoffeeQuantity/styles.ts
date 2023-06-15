import styled from "styled-components";

export const AddCoffeeQuantityContainer = styled.div`
  display: flex;
  
`

export const QuantityChange = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    
    color: ${(props) => props.theme['purple']};
    background-color: ${(props) => props.theme['base-button']};

    :hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
    }

    :first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    :last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
`

export const QuantityValue = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 15px;
    height: 38px;
    padding: 8px 0 8px;
    gap: 4px;
   
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
  ` 