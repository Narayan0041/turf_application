import React from 'react';

export default function NavbarPaticularSection({ Text, Icon, styles ,handleClick}) {
  return (
    <div className="NavbarPaticularSection" style={styles}>
      <div className="navsection" onClick={handleClick}>
      <span className={Icon}></span>
        <span className='Text'>{Text}</span>
      </div>
    </div>
  );
}


