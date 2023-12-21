import React from 'react';
import NavbarPaticularSection from './NavbarPaticularSection';

export default function Navbar() {
  const customStyles = {
    backgroundColor: 'var(--primay-color)',
    height: '4rem',
    width: '4rem',
    borderRadius: '50%',
    display: 'flex',
    position:"relative",
    bottom:".5rem",
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem', 
  };

  const containerStyles = {
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  return (
    <div className="NavbarContainer" style={containerStyles}>
      <NavbarPaticularSection Text={"Home"} Icon={"fa-solid fa-house"}  />
      <NavbarPaticularSection Text={"Tourn"} Icon={"fa-solid fa-trophy"}  />
      <NavbarPaticularSection Text={"Book"} Icon={"fa-solid fa-plus"} styles={customStyles} />
      <NavbarPaticularSection Text={"Player"} Icon={"fa-solid fa-bell"} />
      <NavbarPaticularSection Text={"History"} Icon={"fa-solid fa-clock-rotate-left"}  />
    </div>
  );
}



