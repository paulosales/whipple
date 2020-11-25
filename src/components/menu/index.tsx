import React from 'react'
import { HamburgerMeat, HamburgerMenuContainer } from "./styles"

const HamburgerMenu: React.FC = () => {
  return (
    <HamburgerMenuContainer viewBox="0 0 100 100" width="60" className="">
      <HamburgerMeat
            className="top"
            d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429" />
      <HamburgerMeat
            className="middle"
            d="m 70,50 h -40" />
      <HamburgerMeat
            className="bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429" />
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu