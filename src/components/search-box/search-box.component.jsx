import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input type="search" className="search" {...{placeholder, onChange: handleChange}} />
);

SearchBox.defaultProps = {
  placeholder: 'search monsters',
};
