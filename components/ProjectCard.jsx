import Image from 'next/image';

import fecImg from '/public/images/img-fec.png';

const ProjectCard = ({projectData}) => {
  // const url = projectData[0].url;
  // console.log(url)
  return (
    <div>
      <div>
        <Image src={fecImg} alt="NativEats project screenshot" width="450" height="450"/>
      </div>
      <div>
        <span>{projectData[0].project}</span>
        <p>{projectData[0].description}</p>
      </div>
    </div>
  )
};

export default ProjectCard;