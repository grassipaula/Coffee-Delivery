import Expresso from '../../../../assets/Expresso.svg'
import Latte from '../../../../assets/Latte.svg'
import { Trash } from 'phosphor-react'

export function Cart() {
  return (
    <>
    <img src={Expresso} alt="Expresso" />
    <h2>Expresso Tradicional</h2>
    <p>- 1 +</p>
    <button><Trash size={16} /> REMOVER</button>
    <span><strong>R$ 9,90</strong></span>

    <br /><br />

    <img src={Latte} alt="Latte" />
    <h2>Expresso Tradicional</h2>
    <p>- 1 +</p>
    <button><Trash size={16} /> REMOVER</button>
    <span><strong>R$ 19,80</strong></span>

    <p>--------------------------------------</p>

    <p>Total de itens </p>
    <p>R$29,70</p>
    <p>Entrega</p>
    <p>R$3,50</p>
    <h2><strong>Total</strong></h2>
    <h2><strong>R$33,20</strong></h2>

    <button>CONFIRMAR PEDIDO</button>
    </>
  )
}