import './Header.css'

export default function Header() {
  return (
    <header>
      <img
        className="header-logo"
        src="./assets/troll-face.png"
        alt="troll-face"
      />
      <h1 className="header-title">Meme Generator</h1>
      <h2 className='header-project'>React Course - Project 3</h2>
    </header>
  );
}