import React, { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="container details">
      <h1>Характеристика</h1>
      <div className="card">
        <p className="title">Цвет</p>
        <p>Жёлтый</p>
      </div>{" "}
      <div className="card2">
        <p className="title">Год</p>
        <p>2016</p>
      </div>
      <div className="card">
        <p className="title">Диаметр колеса</p>
        <p>27.5</p>
      </div>{" "}
      <div className="card2">
        <p className="title">Материал рамы</p>
        <p>Карбон</p>
      </div>
      <div className="card">
        <p className="title">Размер</p>
        <p>L</p>
      </div>{" "}
      <div className="card2">
        <p className="title">Страна</p>
        <p>Швейцария</p>
      </div>
      <div className="card">
        <p className="title">Производитель</p>
        <p>Scott</p>
      </div>{" "}
      <div className="card2">
        <p className="title">Покрышки</p>
        <p>
          Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
          PaceStar compound
        </p>
      </div>{" "}
      <div className="card">
        <p className="title">Рама</p>
        <p>
          Scale Carbon / HMX-технология / технология IMP / Коническая рулевая
          труба / BB92 / Технология SDS / Дропауты IDS SL
        </p>
      </div>{" "}
      <div className="card2">
        <p className="title">Подседельный Штырь</p>
        <p>
          Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
          Carbon 2B SDS / 34.9mm
        </p>
      </div>{" "}
      <div className="card">
        <p className="title">Седло</p>
        <p>Ritchey WCS Streem V3 Titanium rails </p>
      </div>{" "}
      <div className="card2">
        <p className="title">Вилка</p>
        <p>
          Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
          коническая рулевая труба / Удалённая блокировка, регулировка отскока /
          ход 100mm
        </p>
      </div>
    </div>
  );
};

export default Details;
