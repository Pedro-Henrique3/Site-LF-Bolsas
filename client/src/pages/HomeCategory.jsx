import React, { useContext } from 'react';
import { HomeContext } from "../context/HomeContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import "./CSS/HomeCategory.css";

const HomeCategory = (props) => {
  const {all_product} = useContext(HomeContext);

  return (
    <div className='home-category'>
      <img className='homecategory-banner' src={props.banner} alt="Banner" />
      <div className="homecategory-indexSort">
        <p><span>Exibindo 1-12</span> de 36 produtos.</p>
        <div className="homecategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown icon" />
        </div>
      </div>
      <div className='homecategory-products'>
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return (
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="homecategory-loadmore">
        Ver mais
      </div>
    </div>
  )
}

export default HomeCategory