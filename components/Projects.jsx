import ProjectCard from '@components/ProjectCard';

const Projects = () => {
  const projectData = [{
    project: 'An E-commerce Webpage and API services',
    url: '/public/images/img-fec.png',
    tech: ['React', 'Express', 'Postgresql', 'Jest', 'AWS EC2', 'Nginx'],
    description: 'This is an E-commerce webpage I created with 3 other teammates. I created reusable frontend components without the utilization of external libraries, and also built out a new restful API with backend system to replace the existing API for the website.'
  },
  {
    project: 'School MarketPlace',
    url: '/public/images/img-mvp.png',
    tech: ['React', 'Express', 'Mongodb', 'Leaflet'],
    description: 'This is a full CRUD web page with front end features including live search, popup modals and interactive map, and express server with mongoDB databases. This is a project I built independently within 3 days during Hack Reactor program. I earned the honor to present my project during graduation ceremony in front of the cohort, staffs, families and friends.'
  },
  {
    project: 'NativEats',
    url: '/public/images/img-mvp.png',
    tech: ['React Native', 'Express', 'Postgresql', 'Yelp Fusion API'],
    description: "I built this social media mobile application in a team of 7 engineers. I was responsible of home page and restaurant detail page. I resolved group conflicts on architecture discussion and pull request reviews."
  }];

  return (
    <section>
      <h2>PROJECTS</h2>
      <ProjectCard projectData={projectData} />
    </section>
  )
};

export default Projects;