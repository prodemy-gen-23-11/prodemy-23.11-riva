import React, { useState } from "react";

export default function ProductPictures(props) {
  const { picture } = props;

  const [image, setImage] = useState(picture[0]);

  function handleClick(productPicture) {
    setImage(productPicture);
  }

  return (
    <div className="flex flex-col pt-20">
      <img src={image} />

      <div className="flex my-5 gap-7 ">
        {picture.map((productPicture, index) => {
          // Tambahkan parameter indeks di sini
          return (
            <div className="hover:scale-75" key={index}>
              <img
                className={productPicture === image ? "clicked" : ""}
                src={productPicture}
                onClick={() => handleClick(productPicture)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
