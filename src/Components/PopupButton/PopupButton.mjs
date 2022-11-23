import "./PopupButton.css";
import useToggle from "../CustomHooks/useToggle.mjs";

/**
 * 
 * @param {boolean} isVisible - Starting visibility
 * @param {string} buttonName
 * @param {*} props
 * @returns A conditionally visible popup
 */
function PopupButton(props) {
  const [isContentVisible, toggleIsVisible] =
        useToggle(props.isVisible);

  return (
    <>
      {isContentVisible ? (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn"
                    onClick={toggleIsVisible}>
              Close
            </button>
            {props.children}
          </div>
        </div>
      ) : ""}
      <button className="sideButtons" onClick={toggleIsVisible}>
        {props.buttonName}
      </button>
    </>
  );
}

export default PopupButton
