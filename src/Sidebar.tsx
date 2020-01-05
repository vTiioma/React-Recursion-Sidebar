import React, { FC } from 'react';
import List from '@material-ui/core/List';
import Item from './Item.Interface';
import SidebarItem from './SidebarItem';

interface Props {
  items: Item[];
  depthStep?: number;
  depth?: number;
}

// eslint-disable-next-line no-empty-pattern
const Sidebar: FC<Props> = ({ items, depthStep = 10, depth = 0 }: Props) => {
  return (
    <div className='sidebar'>
      <List disablePadding dense>
        {items.map((sidebarItem: Item, index: number) => (
          <SidebarItem
            key={`${sidebarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
