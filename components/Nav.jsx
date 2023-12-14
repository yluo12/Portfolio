import Link from 'next/link';


const Nav = () => {

  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#games">Games</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
