import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34rem;
  gap: 70px;

  h1 {
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    font-size: 48px;
    line-height: 62.4px;
  }

  h3 {
    display: flex;
    align-items: center;

    width:36.75rem;
    height: 3.25rem;

    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 20px;
  }
`
export const HomeDescriptionContainer = styled.div`
  width: 574px;
  height: 360px;

  display: flex;
  flex-direction: column;
  gap: 66px;
  
`

export const TitleStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 36,75rem;
  height: 12rem;
  padding: 0px;
  gap: 16px;
`

export const HighlightsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 84px;
`

export const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  :first-child {
    width: 90%;
  }
  
  width: 100%;
  height: 84px;
  `

export const HighlightStyle = styled.div`
  display: flex;
  align-items: center;
  
  
  gap: 12px;
  width: 100%;
  height: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
  

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 20.8px;
  color: ${(props) => props.theme['base-text']};
`  
