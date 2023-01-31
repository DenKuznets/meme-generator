import "./Meme.css";

export default function Meme() {
  return (
    <div className="container">
      <form>
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
        <input className="btn" type="button" value="Get a new meme image 🖼" />
      </form>
    </div>
  );
}
