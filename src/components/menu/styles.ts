import styled from "styled-components";

export const HamburgerMenuContainer = styled.svg`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;
  transform: rotate(180deg);

  .top {
    stroke-dasharray: 40 82;
  }

  .bottom {
    stroke-dasharray: 40 82;
  }

  &.active .top {
    stroke-dasharray: 14 82;
    stroke-dashoffset: -72px;
  }

  &.active .bottom {
    stroke-dasharray: 14 82;
    stroke-dashoffset: -72px;
  }
`

export const HamburgerMeat = styled.path`
  fill:none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--white);
  stroke-width:5.5;
  stroke-linecap:round;
`
