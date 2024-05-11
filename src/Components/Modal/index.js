import React, { useState } from 'react';
import Modal from './Modal';
import { convertDate } from '../functions/convertDate';
import ImageSlider from '../ImageSlider';

const ModalWindow = ({date, title, content, author, image}) => {
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
      <ImageSlider srcUrl={author.avatar}/>
      <div onClick={openModal}><h2>{title}</h2>
        <p>{content}</p>
        <p>{author.name}</p>
        <p>{author.role}</p>
        <p>{date}</p></div>
      <Modal isOpen={isOpen} onClose={closeModal}>
      <ImageSlider srcUrl={author.avatar}/>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{author.name}</p>
        <p>{author.role}</p>
        <p>{date}</p>

      </Modal>
    </div>
  );
};

export default ModalWindow;
