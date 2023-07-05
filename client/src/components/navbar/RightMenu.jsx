import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
         <SubMenu title={<span>Profile</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="setting:1">Sign Out</Menu.Item>
            <Menu.Item key="setting:2">Sign In</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default RightMenu;