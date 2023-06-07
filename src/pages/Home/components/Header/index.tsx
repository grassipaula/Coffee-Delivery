import Cart from '../../../../assets/Cart.svg'
import Timer from '../../../../assets/Timer.svg'
import Box from '../../../../assets/Box.svg'
import Coffee from '../../../../assets/Coffee.svg'
import CoffeeHomePage from '../../../../assets/CoffeeHomePage.svg'

export function Header() {
  return (
    <>
    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

    <p><img src={Cart} alt="shopping cart" /> Compra simples e segura</p>
    <p><img src={Timer} alt="timer" /> Entrega rápida e rastreada</p>
    <p><img src={Box} alt="box" /> Embalagem mantém o café intacto</p>
    <p><img src={Coffee} alt="coffee" /> O café chega fresquinho até você</p>
    <img src={CoffeeHomePage} />
    </>
  )
}