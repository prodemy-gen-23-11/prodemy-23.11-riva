import React, { useState } from "react";

export default function ProductPictures() {
  const productPictures = [
    {
      id: 1,
      value:
        "//notebooktherapy.com/cdn/shop/files/01-Komorebi-set-carousel.jpg?v=1683042940",
    },

    {
      id: 2,
      value:
        "//notebooktherapy.com/cdn/shop/files/04-Komorebi-set-carousel_af76de4b-a9a2-4409-855d-6e05f850bff2.jpg?v=1683042937",
    },

    {
      id: 3,
      value:
        "//notebooktherapy.com/cdn/shop/files/12-Komorebi-set-carousel.jpg?v=1683042953",
    },

    {
      id: 4,
      value:
        "//notebooktherapy.com/cdn/shop/files/05-Komorebi-set-carousel_060ff002-1dae-4fe8-af2d-c233773c7b60.jpg?v=1683042951",
    },
  ];

  const [picture, setPicture] = useState(productPictures[0]);
  const handleClick = (index) => {
    console.log(index);
    const pic = productPictures[index];
    setPicture(pic);
  };

  return (
    <div className="flex flex-col pt-20">
      <img src={picture.value} />

      <div className="flex my-5 gap-7 ">
        {productPictures.map((productPicture, i) => {
          return (
            <div className="hover:scale-75">
              <img
                className={picture.id == i ? "clicked" : ""}
                src={productPicture.value}
                key={productPicture.id}
                onClick={() => handleClick(i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
