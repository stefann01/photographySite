import React, { useEffect, useRef, useState } from "react";
import "./dropdown.scss";
// @ts-ignore
import ArrowDown from "../../assets/down-arrow-thin.svg";

interface DropdownState {
  isVisible: boolean;
  selectedElement: React.ReactNode | null;
}

interface DropdownProps {
  title: string;
  children: React.ReactNode[];
  onChange(selectedElement: React.ReactNode | null): void;
}

export default function Dropdown({ title, children, onChange }: DropdownProps) {
  const initialDropdownState = { isVisible: false, selectedElement: null };
  const [dropdown, setDropdown] = useState<DropdownState>(initialDropdownState);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const dropdownChildsRef = useRef<HTMLUListElement>(null);

  const openDropdown = () =>
    setDropdown((previousDropdownState) => {
      return {
        ...previousDropdownState,
        isVisible: true,
      };
    });

  const handleItemClick = (child: React.ReactNode) => {
    setDropdown((previousDropdownState) => {
      return {
        ...previousDropdownState,
        selectedElement: child,
        isVisible: false,
      };
    });
    onChange(dropdown.selectedElement);
  };

  function handleClickOutside(e: any) {
    if (dropdownChildsRef.current) {
      if (!dropdownChildsRef.current.contains(e.target)) {
        setDropdown((previousDropdownState) => {
          return {
            ...previousDropdownState,
            isVisible: false,
          };
        });
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={openDropdown} className="dropdownBtn" ref={dropdownRef}>
        <span className="dropdown-title">
          {dropdown.selectedElement || title}

          <img className="dropdown-icon" src={ArrowDown} alt={"downArrow"} />
        </span>
      </button>
      {dropdown.isVisible && (
        <ul className="dropdownChildren" ref={dropdownChildsRef}>
          {children.map((element, index) => {
            return (
              <li key={index} className="dropItem">
                <span onClick={() => handleItemClick(element)}>{element}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
