import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

function TooltipText (props) {

    let [ tooltipDomRect, setTooltipDomRect] = useState();
    let [showTooltip, setShowTooltip] = useState(false);

    let spanElement = useRef();

    function handMouseOver(){
        let domData = spanElement.current.getBoundingClientRect();
        setTooltipDomRect(domData);
        setShowTooltip(true);
    }
    return (<div>
        <span className="tooltip-text" ref={spanElement} onMouseLeave={ev => setShowTooltip(false) } onMouseOver={ ev => handMouseOver(ev) }>
        {props.children}
        </span>
        {
        showTooltip && <Tooltip domRect={tooltipDomRect} text={props.tooltip}/>
        }
    </div>)
}

export default TooltipText;