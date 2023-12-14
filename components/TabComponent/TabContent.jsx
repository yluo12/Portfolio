const TabContent = ({title, activeTab, skills}) => {

  return (
    activeTab === title ? <ul className="tabContent">{skills[title].map((s) => {
      return <li className="skillItem" key={s}>{s}</li>
    })}</ul> : null
  );
};

export default TabContent;