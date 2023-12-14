const TabNavItem = ({title, activeTab, setActiveTab}) => {
  const handleClick = () => {
    setActiveTab(title);
  };

  return (
    <li onClick={handleClick} className={activeTab === title ? 'active' : ''}>
      {title}
    </li>
  );
};

export default TabNavItem;