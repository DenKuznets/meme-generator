import "./Meme.css";

export default function Meme() {

  function handleClick() {
    console.log('click');
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
        <input onClick={handleClick} className="btn" type="button" value="Get a new meme image 🖼" />
      </div>
    </div>
  );
}
