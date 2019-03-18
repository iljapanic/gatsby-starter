import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import css from '../css/components/Header.module.css';

const Header = () => (
  <header className={css.header}>
    <div className={css.logo}>
      <Link to="/">homepage</Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
