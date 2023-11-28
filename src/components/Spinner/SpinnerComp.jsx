import React from "react";
import {Spinner} from "@nextui-org/react";
import './SpinnerComp.css'

export default function SpinnerComp() {
  return (
      <div className="containerSpinner">
          <Spinner 
          className="spinnerElement"/>
      </div>
  );
  }
