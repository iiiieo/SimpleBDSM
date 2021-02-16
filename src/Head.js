import React from "react";
import KeyBinding from "react-keybinding-component";
import {
  IoBugOutline,
  IoPlayOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";

export default function Head(props) {
  let iconSize = "80%";
  return (
    <header className="header">
      <h1 className="heading">eduASM</h1>
      <div className="runButtonContainer">
        <KeyBinding
          onKey={(e) => {
            if (e.keyCode === 116) {
              e.preventDefault();
              props.asmrun();
            } else if (e.keyCode === 117) {
              e.preventDefault();
              props.asmdebug();
            }
          }}
          type="keydown"
        />
        <button className="runButton startButton" onClick={props.asmrun}>
          <IoPlayOutline size={iconSize} />
        </button>
        <button className="runButton debugButton" onClick={props.asmdebug}>
          {props.debugModus ? (
            <IoPlayForwardOutline size={iconSize} />
          ) : (
            <IoBugOutline size={iconSize} />
          )}
        </button>
      </div>
    </header>
  );
}
