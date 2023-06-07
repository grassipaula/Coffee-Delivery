import AddToCart from '../../../../assets/AddToCart.svg' 

export function Product() {
  return (
    <>
    <div>
      <img src="" alt="" />

      {/* FAZER UM FILTRO */}
      <label htmlFor="">TRADICIONAL</label> 

      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      {/* Componente de quantidade e adição ao carrinho */}
      <p>R$<strong>9,90</strong></p> 
      <p>- 1 +</p>
      <button><img src={AddToCart} alt="add to cart" /></button>
      </div>
    </>
  )
}