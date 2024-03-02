import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./slider.css";
import { alianzas } from "../../data/infoAlianzas";

const Logo = ({ url }) => {
  return (
    <div
      className="swiper-slide d-flex align-items-center justify-content-center"
      style={{ width: "135.667px", marginRight: "60px" }}
    >
      <img src={url} alt="" className="img-fluid" />
    </div>
  );
};

export const Slider = () => {
  const slideWidth = 135.667 + 60;

  const minPosition = 0;
  const maxPosition = -(alianzas.length * slideWidth);

  const [position, setPosition] = useState(minPosition);
  const transitionRef = useRef(null);

  const handleTransition = () => {
    const speed = 2;

    const newPosition = position - speed;

    if (Math.abs(newPosition) > Math.abs(maxPosition)) {
      setPosition(minPosition);
    } else {
      setPosition(newPosition);
      cancelAnimationFrame(transitionRef.current);
      transitionRef.current = requestAnimationFrame(handleTransition);
    }
  };

  useEffect(() => {
    cancelAnimationFrame(transitionRef.current);
    transitionRef.current = requestAnimationFrame(() => {
      handleTransition();
    });

    return () => cancelAnimationFrame(transitionRef.current);
  }, [position]);

  return (
    <Container className="d-flex">
      <div className="slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
        <div
          className="swiper-wrapper align-items-center"
          id="swiper-wrapper"
          aria-live="off"
          style={{
            transform: `translate3d(${position}px, 0px, 0px)`,
          }}
        >
          {/* Duplicates required for smooth infinite carousel */}
          {alianzas.map((alianza, index) => (
            <Logo url={alianza.url} key={`${index}-${index + 1}`} />
          ))}
          {alianzas.map((alianza, index) => (
            <Logo
              url={alianza.url}
              key={`${index + alianzas.length}-${index + 1 + alianzas.length}`}
            />
          ))}
          {alianzas.map((alianza, index) => (
            <Logo
              url={alianza.url}
              key={`${index + alianzas.length * 2}-${
                index + 1 + alianzas.length * 2
              }`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
