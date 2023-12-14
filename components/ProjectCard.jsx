import Image from 'next/image';

import fecImg from '/public/images/img-fec.png';
import mvpImg from '/public/images/img-mvp.png';
// import nativImg from '/public/images/img-nativ.png';

const ProjectCard = ({project}) => {
  let img;
  if (project.project === 'An E-commerce Webpage') {
    img = fecImg;
  } else if (project.project === 'School MarketPlace') {
    img = mvpImg;
  } else if (project.project === 'NativEats') {
    img = mvpImg;
  }
  return (
    <div className="project-card">
      <div>
        <Image src={img} alt={project.project + " screenshot"} className="project-img" />
      </div>
      <div>
        <span className="project-name">{project.project}</span>
        <ul className="project-tech">
          <li>Tech:</li>
          {project.tech.map((t) => {
            return <li key={t}>{t}</li>
          })}
        </ul>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  )
};

export default ProjectCard;
// width="450" height="450"