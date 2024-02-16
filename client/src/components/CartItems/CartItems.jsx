import React, { useContext } from "react";
import "./CartItems.css";
import { HomeContext } from "../../context/HomeContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(HomeContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produtos</p>
        <p>Título</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          let i=0;
          return (
            <div key={i++}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt="Item image"
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>R${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>R${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Total do carrinho</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>R${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Taxa de envio / Frete</p>
                    <p>Grátis</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>R${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>FINALIZAR COMPRA</button>
        </div>
        <div className="cartitems-promocode">
            <p>Se você possui um código promocional, insira-o aqui.</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Código promocional" />
                <button>Enviar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
