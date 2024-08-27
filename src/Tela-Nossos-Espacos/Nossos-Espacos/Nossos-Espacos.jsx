import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import images from '../imgs.json';
import './Nossos-Espacos.css';

const ImageEspaco = () => {
  const swiperRef = useRef(null); // Referência para o Swiper

  return (
    <div className="fundo-tela">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        className="meu-carrossel"
        onInit={(swiper) => { swiperRef.current = swiper; }} // Inicializa a referência do Swiper
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="meu-slide">
            <div className="imagem-container">
              <img src={image.src} alt={image.alt} className="imagem" />
              <p className="nome-imagem">{image.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="swiper-button-custom swiper-button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="swiper-button-custom swiper-button-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageEspaco;
