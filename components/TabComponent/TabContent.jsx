const TabContent = ({title, activeTab, skills}) => {

  return (
    activeTab === title ? <ul className="TabContent">{skills[title].map((s) => {
      return <li className="skillItem" key={s}>{s}</li>
    })}</ul> : null
  );
};

export default TabContent;