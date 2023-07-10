import * as React from "react";

import {Pillion} from "@technarts/pillion";

type TooltipProps = {
  anchorEl: Element | null,
  text: string,
  direction: "N" | "S" | "W" | "E" | "NE" | "NW" | "SE" | "SW"; //todo  take this options from pillion.
  ms?: number,
}

const Tooltip = (props: TooltipProps) => {
  const timer = React.useRef<number>(0);
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.ms && props.anchorEl === null) {
      clearTimeout(timer.current);
      timer.current = 0;
      setShow(false);
    } else if (props.ms && props.anchorEl !== null) {
      timer.current = window.setTimeout(() => setShow(true), props.ms);
    }
  }, [props.anchorEl])

  return (
    <Pillion
      anchorEl={props.ms ? (show ? props.anchorEl : null) : props.anchorEl}
      direction={props.direction}
      style={{
        marginTop: props.direction.includes("S") ? "5px" : 0,
        marginRight: props.direction.includes("W") ? "5px": 0,
        marginBottom: props.direction.includes("N") ? "5px" : 0,
        marginLeft: props.direction.includes("E") ? "5px" : 0,
        padding: "5px 10px",
        borderRadius: "3px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      }}
      asTooltip
    >
      <p>{props.text}</p>
    </Pillion>
  )
}

export default Tooltip;


