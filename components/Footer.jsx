import Image from 'next/image';

import linkedinImg from '/public/images/img-linkedin.png';
import githubImg from '/public/images/img-github.png';


const Footer = () => {
  return (
    <section>
      <div>
        <span>Made with by Elena Luo 2023 &copy;</span>
        <div><span className="material-symbols-outlined">location_on</span>San Francisco Bay Area</div>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yantingluo/">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
          </a>
        <a href="https://github.com/yluo12">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </a>
      </div>
    </section>
  )
};

export default Footer;