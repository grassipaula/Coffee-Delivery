import { Navigation } from "../Home/components/Navigation";
import { ConfirmedOrder } from "./ConfirmedOrder";
import Delivery from '../../assets/Delivery.svg'

export function Success() {
  return (
    <>
    <Navigation />
    <ConfirmedOrder />
    <img src={Delivery} alt="delivery" />
    </>
  )
}