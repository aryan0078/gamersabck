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
      <a onClick={() => setOpen(!open)} className={styles.title}>
<<<<<<< HEAD
        Select Category
      </a>
=======
        {props.title}
        </a>
>>>>>>> 94165e6f42cd261a38aca8f3913d7f644704fecb

      {open && props.children}
    </ul>
  );
}
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className={styles.menuitem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
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
<<<<<<< HEAD
    <NavItem>
      <DropdownMenu></DropdownMenu>
=======
    <NavItem title={props.title}>
      <DropdownMenu>

      </DropdownMenu>
>>>>>>> 94165e6f42cd261a38aca8f3913d7f644704fecb
    </NavItem>
  );
}
export default Drop;
