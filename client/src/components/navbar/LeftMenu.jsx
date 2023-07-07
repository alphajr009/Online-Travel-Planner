import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item key="location">
          <a href="">Locations</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="">About us</a>
        </Menu.Item>
        <Menu.Item key="favourites" >
          <a href="">Favourites</a>
        </Menu.Item>
        <Menu.Item key="Contact us" >
          <a href="">Contact us</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;