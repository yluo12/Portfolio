import Link from 'next/link';


const Nav = () => {

  return (
    <nav className="navigation">
      <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#games">Games</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  )
};

export default Nav;
