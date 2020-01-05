import React, { FC } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Item from './Item.Interface';

interface Props extends Item {
  depthStep: number;
  depth: number;
}

// eslint-disable-next-line no-empty-pattern
const SidebarItem: FC<Props> = ({
  label,
  subItems,
  depthStep,
  depth,
  ...rest
}: Props) => {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(subItems) && (
        <List disablePadding dense>
          {subItems.map(subItem => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default SidebarItem;
