/* RESUABLE DROPDOWN COMPONENT
 *
 * Functional Component
 *
 * Takes 4 props:
 *   multiSelect: boolean => to make dropdown select more than one options.
 *   title: string => the value to be displayed initially before anything is selected.
 *   options: array => contains an array of object with the following keys:
 *                             id: number => the unique id of drop down option.
 *                             option: string => the text content of option.
 *
 * Uses one user-defined Hook, useOutsideAlerter to perform action incase
 * there is a click outside the dropdown menu.
 */

import React, { useState, useEffect } from "react";
import cx from "classnames";

import * as styles from "./dropdown.module.css";
import { useOutsideAlerter } from "../Hooks/useOutsideAlerter";

// main React Component function
const DropDown = props => {
  const [title, setTitle] = useState(props.title);
  const { visible, setVisible, ref } = useOutsideAlerter(false);
  const [selected, setSelected] = useState([]);

  //function to check if the user has selcted the particular drop down Option
  const isItemSelected = item => {
    if (selected.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  };

  // function to handle click on drop down option
  // keeps pushing to the "selcted" state variable if multiselect
  // replaces "selected" state variable if multiselect === false
  //removes the item if it's already selected
  const handleDdClick = option => {
    if (props.multiSelect) {
      if (!selected.some(current => current.id === option.id)) {
        setSelected([...selected, option]);
      } else {
        let selectionAfterRemoval = selected;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          current => current.id !== option.id
        );
        setSelected([...selectionAfterRemoval]);
      }
    } else {
      setSelected([option]);
      setTitle(option.option);
      setVisible(false);
    }
  };

  //function to render drop down menu & it's items.
  const dropDownMenu = () => {
    return (
      <div className={styles.dropdown}>
        {props.options.map(option => {
          return (
            <div
              key={option.id}
              className={
                isItemSelected(option)
                  ? cx(styles.selectedDdMenuItem, styles.menuitem)
                  : styles.menuitem
              }
              onClick={() => handleDdClick(option)}>
              {option.option}
            </div>
          );
        })}
      </div>
    );
  };

  //renders the drop down menu based on the "visible" state variable.
  return (
    <div>
      <div onClick={() => setVisible(!visible)} className={styles.title}>
        {title}
      </div>

      <div ref={ref}>{visible && dropDownMenu()}</div>
    </div>
  );
};

export default DropDown;
