import React, { Component } from 'react';
import { Menu } from 'antd';

class AdminMenu extends Component {
    render() {


        return (
            <Menu mode="horizontal">

                <Menu.Item mode="horizontal" key="place">
                    <a href="/admin/places">Place</a>
                </Menu.Item>

                <Menu.Item mode="horizontal" key="users">
                    <a href="/admin/users">Users</a>
                </Menu.Item>

            </Menu>
        );
    }
}

export default AdminMenu;
