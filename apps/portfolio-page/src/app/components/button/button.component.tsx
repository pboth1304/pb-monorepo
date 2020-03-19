import React from 'react';
import { PrimaryButton } from './button.styles';

/**
 * Button to link to other Pages.
 * @param path - link
 * @param text - text value
 * @param props - other props
 * @constructor
 */
const Button = ({ path, text, ...props }) => (
  <PrimaryButton href={path} {...props}>
    {text}
  </PrimaryButton>
);

export default Button;
