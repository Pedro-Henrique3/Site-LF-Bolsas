import React from 'react';
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Descrição detalhada</div>
            <div className="descriptionbox-nav-box fade">Comentários</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim fugiat accusantium quis! Iure dolores eaque voluptatem temporibus vitae praesentium, aut dolorum odio magni eos omnis, magnam exercitationem error commodi?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit nemo est tempora! Autem eum blanditiis quidem possimus dolor, voluptas expedita distinctio error, quibusdam debitis laborum nihil consequatur, fugiat nam!</p>
        </div>
    </div>
  )
}

export default DescriptionBox