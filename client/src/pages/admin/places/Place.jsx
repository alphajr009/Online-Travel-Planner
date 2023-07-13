import React, { useEffect, useState } from 'react'
import './places.css'
import axios from 'axios';
import { Table, Modal, Form, Input } from 'antd';
import CreatePlace from './CreatePlace';
import Swal from 'sweetalert2'

function Place() {

    const [activeTab, setActiveTab] = useState('create blog');
    const [places, setplaces] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [rooms, setRooms] = useState([]);


    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [description1, setdescription1] = useState('')
    const [description2, setdescription2] = useState('')
    const [description3, setdescription3] = useState('')
    const [description4, setdescription4] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [PlaceToEdit, setPlaceToEdit] = useState(null);
    const [form] = Form.useForm();
    const [updatedBlogTitle, setUpdatedBlogTitle] = useState('');

    const openEditModal = (place) => {
        setPlaceToEdit(place);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);

    };

    async function updatePlace(place) {
        openEditModal(place);
    }

    const handleEditSubmit = async () => {
        await editPlace(PlaceToEdit._id, updatedBlogTitle, description1, description2, description3, description4);
        closeModal();
    };



    const columns = [


        {
            title: ' ID',
            dataIndex: '_id',
            key: '_id',
        },

        {
            title: 'Place Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Location',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            width: '9%',
            key: 'x',
            render: (_, places) => {
                return (
                    <button
                        className="btn-edit-places-by-seller"
                        onClick={() => updatePlace(places)}
                    >
                        Edit
                    </button>
                );
            }



        },
        {
            title: 'Delete',
            dataIndex: ' ',
            width: '9%',
            key: 'x',
            render: (_, places) => (
                <button className='btn-delete-places-by-seller' onClick={() => {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do you want to delete the place",
                        icon: 'warning',
                        showCancelButton: true,
                        cancelButtonText: 'Cancel',
                        confirmButtonColor: '#4444AA',
                        cancelButtonColor: '#B8252A',
                        confirmButtonText: 'Yes, Place is Deleted!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            deletePlace(places._id)
                            Swal.fire(
                                'Deleted!',
                                'Place has been deleted.',
                                'success'
                            ).then(result => {
                                window.location.href = 'http://localhost:3000/admin/places';
                            })
                        }
                    })
                }}>Delete</button>
            )

        }

    ];


    useEffect(() => {
        (async () => {

            try {

                setloading(true)
                const data = (await axios.get("/api/places/getallplaces")).data
                setplaces(data.places)

                setloading(false)


            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }
        })();
    }, []);


    async function editPlace(_id, updatedTitle, updatedDescription, phonenumber, city, address, googlemaplink, openingtime, closingtime) {
        try {
            await axios.patch('/api/places/editblog', {
                _id,
                title: updatedTitle,
                description: updatedDescription,
                phonenumber: phonenumber,
                city: city,
                address: address,
                googlemaplink: googlemaplink,
                openingtime: openingtime,
                closingtime: closingtime


            });
            console.log("Place Updated Successfully");

            const data = (await axios.get("/api/places/getallplaces")).data;
            setplaces(data.places);
        } catch (error) {
            console.log(error);
        }
    }



    async function deletePlace(_id) {
        try {
            const res = (await axios.patch('/api/places/deleteplace', { _id })).data;
            console.log("Place Deleted Successfully");
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        (async () => {

            try {

                setloading(true)
                const data = (await axios.get("/api/places/getallplaces")).data
                setplaces(data.places)
                setloading(false)


            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }
        })();
    }, []);
    return (
        <div className='seller-central-places'>
            <div className='seller-central-places-container'>

                <div className="seller-central-places-tab">

                    <div
                        className={`seller-central-create-blog-tab-container ${activeTab === 'create blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('create blog')}
                    >
                        <span className='seller-central-tab-text-create-blog'>Create Place</span>
                    </div>

                    <div
                        className={`seller-central-places-tab-container ${activeTab === 'blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blog')}
                    >
                        <span className='seller-central-tab--text-places'>Places</span>
                    </div>
                </div>
                {activeTab === 'create blog' && (
                    <div className='seller-central-create-places-sellers'>
                        <CreatePlace />
                    </div>
                )}
                {activeTab === 'blog' && (
                    <div className='seller-central-table-places-sellers'>
                        <Table
                            columns={columns}
                            dataSource={places}
                            className='seller-cental-table-for-blog'
                            rowKey="_id"
                            footer={() => <div className="no-of-places">{`Total  ${places.length} places `}</div>} />
                    </div>
                )}
            </div>
            <Modal
                title="Edit Blog"
                visible={isModalVisible}
                onCancel={closeModal}
                onOk={handleEditSubmit}
                wrapClassName='editblogmodal'
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Blog Title"
                        name="blogTitle"
                        initialValue={PlaceToEdit ? PlaceToEdit.name : ''}
                    >
                        <Input
                            onChange={(e) => setUpdatedBlogTitle(e.target.value)}
                            placeholder="Enter Place title"
                        />
                    </Form.Item>

                    <Form.Item
                        className='userp-help-namebox-conatiner-p'
                        label="Discription:"
                        name="description"
                        initialValue={PlaceToEdit ? PlaceToEdit.description : ''}
                    >
                        <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={1200} className="userp-helpmsg-custom-input"
                            value={description}
                            onChange={(e) => { setdescription(e.target.value) }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Blog Title"
                        name="blogTitle"
                        initialValue={PlaceToEdit ? PlaceToEdit.name : ''}
                    >
                        <Input
                            onChange={(e) => setUpdatedBlogTitle(e.target.value)}
                            placeholder="Enter Place title"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Blog Title"
                        name="blogTitle"
                        initialValue={PlaceToEdit ? PlaceToEdit.name : ''}
                    >
                        <Input
                            onChange={(e) => setUpdatedBlogTitle(e.target.value)}
                            placeholder="Enter Place title"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Blog Title"
                        name="blogTitle"
                        initialValue={PlaceToEdit ? PlaceToEdit.name : ''}
                    >
                        <Input
                            onChange={(e) => setUpdatedBlogTitle(e.target.value)}
                            placeholder="Enter Place title"
                        />
                    </Form.Item>


                </Form>
            </Modal>
        </div>
    )
}

export default Place
