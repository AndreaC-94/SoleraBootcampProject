import "./ButtonGroup.css";

/**
 * 
 * @param {*} props 
 * @returns 
 */
function ButtonGroup(props) {

    return (
      <div className="sideButtonsDiv">
        {props.children}
      </div>
    );
}

export default ButtonGroup