import "./Meme.css";
import memesData from "../../memesData";
import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(object => {
        // console.log(object.data.memes);
        setAllMemes(object.data.memes);
      });
    }, [])
    
  // console.log(allMemes);
  
  function handleClick() {
    let item =
      allMemes[
        Math.floor(Math.random() * allMemes.length)
      ].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: item,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container">
      <div className="form">
        <div className="text-input-container">
          <input
            className="frase1"
            type="text"
            name="topText"
            placeholder="Shut up"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            className="frase2"
            type="text"
            name="bottomText"
            placeholder="and take my money"
            onChange={handleChange}
            value={meme.bottomText}
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
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
