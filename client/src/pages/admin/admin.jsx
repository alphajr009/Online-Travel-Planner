import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/admin/navbar/aNavbar';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';

import Places from './places/Place';
import Users from './users/User';
function Admin() {
    const location = useLocation();

    // Extract the active tab from the location pathname
    const initialActiveTab = location.pathname.split('/').pop();

    const [activeTab, setActiveTab] = useState(initialActiveTab || 'places');

    useEffect(() => {
        const handlePopState = () => {
            const newActiveTab = location.pathname.split('/').pop();
            setActiveTab(newActiveTab);
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [location]);

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
        window.history.pushState(null, null, `/admin/${newTab}`);
    };

    return (
        <div>
            <AdminNav setActiveTab={handleTabChange} activeTab={activeTab} />

            <div className="admin">
                <div className="admin__main">
                    <Layout.Content>
                        {activeTab === 'places' && <Places />}
                        {activeTab === 'users' && <Users />}
                    </Layout.Content>
                </div>
            </div>
        </div>
    );
}

export default Admin; 