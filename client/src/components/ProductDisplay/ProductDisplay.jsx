import React, { useContext, useState } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { HomeContext } from "../../context/HomeContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(HomeContext);
  const [qtd, setQtd] = useState(1);

  const addQtd = () => {
    setQtd(qtd + 1);
  }

  const removeQtd = () => {
    if(qtd === 1)
    {
      return null
    }
    setQtd(qtd - 1);
  }

  return (
    <div className="product-display">
      <div className="product-display-container">
        <div className="product-display-left">
          <div className="product-display-img-container">
            <div className="product-display-img-list">
              <img src={product.image} alt="Imagem do produto" />
              <img src={product.image} alt="Imagem do produto" />
              <img src={product.image} alt="Imagem do produto" />
              <img src={product.image} alt="Imagem do produto" />
            </div>
            <div className="product-display-img">
              <img
                className="product-display-main-img"
                src={product.image}
                alt="Imagem do produto"
              />
            </div>
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>
          <div className="product-display-right-stars">
            <img src={star_icon} alt="Star icon" />
            <img src={star_icon} alt="Star icon" />
            <img src={star_icon} alt="Star icon" />
            <img src={star_icon} alt="Star icon" />
            <img src={star_dull_icon} alt="Star dull icon" />
            <p>(122)</p>
          </div>
          <div className="product-display-right-prices">
            <div className="product-display-right-price-old">
              <span>{product.old_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className="product-display-right-price-new">
              {product.new_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </div>
          </div>
          <div className="product-display-right-buy-container">
            <div className="product-display-right-size">
              <h1>Selecione a quantidade:</h1>
              <div className="product-display-right-sizes">
                <button className='btn-qtd' onClick={removeQtd}>-</button>
                <p>{qtd}</p>
                <button className='btn-qtd' onClick={addQtd}>+</button>
              </div>
            </div>
            <button className="btn-buy" onClick={()=>{addToCart(product.id)}}>ADICIONAR AO CARRINHO</button>
          </div>
        </div>
      </div>
      <div className="product-display-informations">
        <div className="product-display-description">
          <h2>Descrição geral:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            nemo maxime quibusdam aperiam, quaerat quas sunt aspernatur suscipit
            pariatur quo repellat molestiae sit laborum unde, perferendis, cum
            facilis laudantium hic!
          </p>
        </div>
        <p className="product-display-category">
          <span>Categoria: </span>Women - T-Shirt, Crop Top
        </p>
        <p className="product-display-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
