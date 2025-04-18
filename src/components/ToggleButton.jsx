import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const ToggleButton = ({ onclick, classes }) => {
  return (
    <Button
      variant='outline'
      onClick={onclick}
      className={`${classes ? `${classes}` : 'md:hidden block shadow-md'}`}
    >
      <Menu />
    </Button>
  );
};

export default ToggleButton;
