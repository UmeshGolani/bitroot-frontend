import React, { useState } from 'react';
import Modal from './Modal';
import { convertDate } from '../functions/convertDate';
import ImageSlider from '../ImageSlider';
import './style.css'
const ModalWindow = ({date, title, content, author, url}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  date = convertDate(date);

  return (
    <div className='modal-window'>
      
      <div onClick={openModal}>
      <ImageSlider srcUrl={url.large}/>
      <div class="dots-container">
        <span class="dot cyan"></span>
        <span class="dot orange"></span>
      </div>

        <h2>{title}</h2>
        <p>{content}</p>
        <div className="bottom">
          <div className="author">
        <p>{author.name}</p>
        <p>-</p>
        <p>{author.role}</p>
        </div>
        <p>{date}</p></div>
        </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
      <img src={url.small} alt="" className='modal-img'/>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="bottom">
          <div className="author">
        <p>{author.name}</p>
        <p>-</p>
        <p>{author.role}</p>
        </div>
        <p>{date}</p>
        </div>

      </Modal>
    </div>
  );
};

export default ModalWindow;
