import React from 'react';

export default function NavbarPaticularSection({ Text, Icon, styles }) {
  return (
    <div className="NavbarPaticularSection" style={styles}>
      <div className="navsection">
      <span className={Icon}></span>
        <span className='Text'>{Text}</span>
      </div>
    </div>
  );
}


