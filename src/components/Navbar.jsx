import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img
          src="https://horizons-cdn.hostinger.com/1a9ce3a2-790f-4baf-8491-30e20f7afc09/ab00b41ca32929e0da248f48c354b6fb.jpg"
          alt="logo"
          className="logo-img"
        />
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#about"><button className="btn">Get Started</button></a>
    </header>
  );
}