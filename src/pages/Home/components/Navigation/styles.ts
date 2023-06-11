import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 104px;
  padding: 32px 160px;
  gap: 51.25rem; 
`

export const LocationAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Roboto', sans-serif;

  #location {
    display: flex;
    align-items: center;
    background-color: ${(props)=> props.theme['purple-light']};
    
    border: transparent;
    border-radius: 5px;
    padding: 8px;
  }

  #cart {
    display: flex;
    align-items: center;
    background-color: ${(props)=> props.theme['yellow-light']};
    color: ${(props)=> props.theme['yellow-dark']};
    border: transparent;
    border-radius: 5px;
    padding: 8px; 
  }
`