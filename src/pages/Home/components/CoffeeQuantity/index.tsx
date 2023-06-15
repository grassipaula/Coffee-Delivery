import { Minus, Plus } from "phosphor-react";
import { AddCoffeeQuantityContainer, QuantityChange, QuantityValue } from "./styles";

interface AddCoffeeToCartProps {
  setQuantity: (value: number) => void;
  quantity: number;
}

export function CoffeeQuantity({ quantity, setQuantity }: AddCoffeeToCartProps) {
  const handleChange = (number: number) => {
    if (number < 0) return;

    setQuantity(number);
  }

  return (
    <AddCoffeeQuantityContainer>
    <QuantityChange onClick={() => handleChange(quantity - 1)}>{<Minus size={14} />}</QuantityChange><QuantityValue>{quantity}</QuantityValue><QuantityChange onClick={() => handleChange(quantity + 1)}>{<Plus size={14} />}</QuantityChange> 
    </AddCoffeeQuantityContainer>
  )
}