import "./style.scss";
import { sideBarList } from "../../../Utils/Common/sidebarList";
import admin_meds from "../../../Utils/Icons/admin_meds.png";

const SideBar = () => {
  const sideBarComponent = (items, index) => {
    return (
      <div className={`dashboard ${index === 1 ? "assessment" : ""}`} key={index}>
        <img src={items.image} alt="dashboard" />
        <h1>{items.name}</h1>
      </div>
    );
  };
  return (
    <div className="sidebar">
      {sideBarList.map((items, index) => sideBarComponent(items, index))}
      <div class="sideBarFooter">
        <button>Admin</button>
        {sideBarComponent({image: admin_meds, name: 'Round Status'})}
      </div>
    </div>
  );
};

export default SideBar;
