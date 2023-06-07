import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export function Form() {
  return (
    <>
    <h2>Complete seu pedido</h2>
    <MapPinLine size={24} />
    <h2>Endereço de Entrega</h2>
    <p>Informe o endereço onde deseja receber seu pedido</p>

    <input type="text" placeholder="CEP"/>
    <input type="text" placeholder="Rua"/>
    <input type="text" placeholder="Número"/>
    <input type="text" placeholder="Complemento Opcional"/>
    <input type="text" placeholder="Bairro"/>
    <input type="text" placeholder="Cidade"/>
    <input type="text" placeholder="UF"/>

    <CurrencyDollar size={24} /> 
    <h2>Pagamento</h2>
    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

    <button> <CreditCard size={16} /> CARTÃO DE CRÉDITO</button>
    <button> <Bank size={16} /> CARTÃO DE DÉBITO</button>
    <button> <Money size={16} /> DINHEIRO</button>
    </>
  )
}