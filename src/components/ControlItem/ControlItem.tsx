import React, { MouseEventHandler } from 'react';
import { ControlItemStyle } from './Style';

interface ControlItemProps {
  selected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ControlItem: React.FC<ControlItemProps> = ({ selected, onClick }) => {
  return <ControlItemStyle selected={selected} onClick={onClick} />;
};

export default ControlItem;
