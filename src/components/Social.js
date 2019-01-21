import React from "react";
import styled from "styled-components";

const AElement = styled.a`
  display: block;
  height: 30px;
`;

const Icon = styled.svg`
  display: inline-block;
  transition: fill 0.25s;
  width: 30px;
  enable-background: new 0 0 67 67;
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: ${props => props.inputColor};

  ${AElement}:hover & {
    fill: #507cbe;
  }
`;

export default function Social(props) {
  const classes = `col-md-3 ${props.classes}`;
  return (
    <div className={classes}>
      <AElement href="#" title="Facebook">
        <Icon viewBox="0 0 67 67" inputColor={props.inputColor}>
          <path d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" />
        </Icon>
      </AElement>
    </div>
  );
}