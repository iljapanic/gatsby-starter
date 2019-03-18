import React from 'react';

const Footer = () => (
  <footer className="ta-center m-2">
    © {new Date().getFullYear()}{' '}
    <a href="https://iljapanic.com" target="_blank">
      a project by Ilja Panic
    </a>
  </footer>
);

export default Footer;
