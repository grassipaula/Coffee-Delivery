import MapPin from '../../../assets/MapPin.svg'
import Timer from '../../../assets/Timer.svg'
import Currency from '../../../assets/Currency.svg'

export function ConfirmedOrder() {
  return (
    <>
    <h2>Uhu! Pedido confirmado</h2>
    <p>Agora é só aguardar que logo o café chegará até você</p>

    <img src={MapPin} alt="map pin" /> <p>Entrega em Servidão Recanto Verde, 170 Itacorubi - Florianópolis, SC</p>
    <img src={Timer} alt="timer" /> <p>Previsão de entrega <strong>20 min - 30 min</strong></p>
    <img src={Currency} alt="currency" /> <p>Pagamento na entrega <strong>Cartão de Crédito</strong></p>
    </>
  )
}