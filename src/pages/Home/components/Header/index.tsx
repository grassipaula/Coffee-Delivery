import Cart from '../../../../assets/Cart.svg'
import Timer from '../../../../assets/Timer.svg'
import Box from '../../../../assets/Box.svg'
import Coffee from '../../../../assets/Coffee.svg'
import CoffeeHomePage from '../../../../assets/CoffeeHomePage.svg'
import { HighlightStyle, HeaderContainer, TitleStyles, HomeDescriptionContainer, HighlightsWrapper, HighlightsContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HomeDescriptionContainer>

        <TitleStyles>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        </TitleStyles>
    
        <HighlightsWrapper>
          <HighlightsContainer>
            <HighlightStyle><img src={Cart} alt="shopping cart" /> <p>Compra simples e segura</p></HighlightStyle>
            <HighlightStyle><img src={Timer} alt="timer" /> <p>Entrega rápida e rastreada</p></HighlightStyle>
          </HighlightsContainer>

          <HighlightsContainer>
            <HighlightStyle><img src={Box} alt="box" /> <p>Embalagem mantém o café intacto</p></HighlightStyle>
            <HighlightStyle><img src={Coffee} alt="coffee" /> <p>O café chega fresquinho até você</p></HighlightStyle>
          </HighlightsContainer>
        </HighlightsWrapper>

      </HomeDescriptionContainer>
    
      <img src={CoffeeHomePage} />
    </HeaderContainer>
  )
}