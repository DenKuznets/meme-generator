import "./Meme.css";
import memesData from "../../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleClick() {
    let item =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ].url;
    setMeme(prev => { 
      return {
        ...prev,
        randomImage: item,
      }
    });
  }

  return (
    <div className="container">
      <div className="form">
        <div className="text-input-container">
          <input
            className="frase1"
            type="text"
            name="frase1"
            placeholder="Shut up"
          />
          <input
            className="frase2"
            type="text"
            name="frase2"
            placeholder="and take my money"
          />
        </div>
        <input
          onClick={handleClick}
          className="btn"
          type="button"
          value="Get a new meme image 🖼"
        />
      </div>
      <div className="memeImg-container">
        <img className="memeImg" src={meme.randomImage} alt="" />
      </div>
    </div>
  );
}
