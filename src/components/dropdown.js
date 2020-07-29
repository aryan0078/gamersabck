import React from "react";
import styles from "./dropdown.module.css";
import { useState } from "react";
import {
  UserOutlined,
  DownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <ul className="navitem">
      <div onClick={() => setOpen(!open)} className={styles.title}>
        {props.title}
      </div>

      {open && props.children}
    </ul>
  );
}
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <div
        className={styles.menuitem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      <DropdownItem>Foo</DropdownItem>
      <DropdownItem>Bar</DropdownItem>
      <DropdownItem>Bar</DropdownItem>
      <DropdownItem>Bar</DropdownItem>
      <DropdownItem>Bar</DropdownItem>
    </div>
  );
}
function Drop(props) {
  return (
    <NavItem title={props.title}>
      <DropdownMenu />
    </NavItem>
  );
}
export default Drop;
