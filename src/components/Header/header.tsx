import "./header.scss";

import Dropdown from "../Dropdown/dropdown";
import Moon from "../../assets/moon.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-dropdown">
        <Dropdown title={"My Magic"} onChange={() => {}}>
          {"Portraits"}
          {"Landscape"}
        </Dropdown>
      </div>
      <p className="page-title">Stefan</p>

      <span className="theming-icon-container">
        <img className="theming-icon" src={Moon} alt="Theming Icon" />
      </span>
    </div>
  );
}
