import React from 'react';
import './adminNavbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import AdminList from '../adminList/adminList';


function AdminNavbar({ setActiveTab, activeTab }) {
    return (
        <div className="admin_nav">
            <div className="admin_navbar">
                <div className='admin_navContainer'>
                    <div className="admin_navbar-logo-container">
                        <div className="admin_navbar-logo-and-text">
                            <div className="admin_navbar-text">
                                <h1>Admin Terminal</h1>
                            </div>
                            <div className="user_icon">
                                <FontAwesomeIcon icon={faCircleUser} className='user' />
                            </div>
                        </div >
                        <AdminList setActiveTab={setActiveTab} activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;
