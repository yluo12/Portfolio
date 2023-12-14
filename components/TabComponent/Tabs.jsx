"use client";

import TabNavItem from '@components/TabComponent/TabNavItem';
import TabContent from '@components/TabComponent/TabContent';
import {useState} from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Front End');
  const skills = {
    'Front End': ['Javascript', 'HTML5', 'CSS3', 'React', 'React Native', 'jQuery', 'Ajax', 'Sass'],
    'Back End': ['Python', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Restful API'],
    'Development Tools': ['Figma', 'Git', 'NPM', 'Webpack', 'Babel', 'Vim', 'Agile methodology', 'Scrum workflow']
  }

  return (
    <div className="tabs">
      <ul className="tab-nav">
        <TabNavItem title='Front End' id='tab1' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title='Back End' id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title='Development Tools' id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>
      <div className="tab-outlet">
        <TabContent title='Front End' activeTab={activeTab} skills={skills} />
        <TabContent title='Back End' activeTab={activeTab} skills={skills} />
        <TabContent title='Development Tools' activeTab={activeTab} skills={skills} />
      </div>
    </div>
  )
};

export default Tabs;
