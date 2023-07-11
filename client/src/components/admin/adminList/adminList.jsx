import React from 'react';
import './adminList.css';
import { faHotel, faUsers, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function adminList({ setActiveTab, activeTab }) {
    return (
        <div className='list_container'>
            <div className="listitem">

                <div
                    className={`adminlistItem ${activeTab === 'places' ? 'active' : ''}`}
                    onClick={() => setActiveTab('places')}
                >
                    <FontAwesomeIcon icon={faHotel} />
                    <h1>Places</h1>
                </div>

                <div
                    className={`adminlistItem ${activeTab === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveTab('users')}
                >
                    <FontAwesomeIcon icon={faUsers} />
                    <h1>Users</h1>
                </div>


            </div>
        </div>
    );
}

export default adminList;
