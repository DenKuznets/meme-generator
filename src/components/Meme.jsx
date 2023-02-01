import "./Meme.css";
import memesData from "../../memesData";

export default function Meme() {
  function handleClick() {
    // console.log(memesData.data.memes[0].url);
    let item =
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ].url;
    // console.log(item);
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
    </div>
  );
}
