import React from 'react';

import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">JAXONS</h1>
      <div className="header-announce">
        30% Discount on all products till 31st of december
      </div>
    </header>
  );
}
