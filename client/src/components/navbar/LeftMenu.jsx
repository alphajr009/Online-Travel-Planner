import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const isAdmin = user && user.isAdmin;

    return (
      <Menu mode="horizontal">
        {!isAdmin && (
          <>
            <Menu.Item key="mail">
              <a href="">Home</a>
            </Menu.Item>
            <Menu.Item key="location">
              <a href="">Locations</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="">About us</a>
            </Menu.Item>
            <Menu.Item key="favourites">
              <a href="">Favourites</a>
            </Menu.Item>
            <Menu.Item key="Contact us">
              <a href="">Contact us</a>
            </Menu.Item>
          </>
        )}

        {isAdmin && (
          <>
            <Menu.Item key="place">
              <a href="/admin/places">Place</a>
            </Menu.Item>
            <Menu.Item key="users">
              <a href="/admin/users">Users</a>
            </Menu.Item>
          </>
        )}
      </Menu>
    );
  }
}

export default LeftMenu;
