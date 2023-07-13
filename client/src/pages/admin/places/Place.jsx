import React, { useEffect, useState } from 'react'
import './places.css'
import axios from 'axios';
import { Table, Modal, Form, Input } from 'antd';
import CreateBlog from './CreatePlace';
import Swal from 'sweetalert2'

function Place() {

    const [activeTab, setActiveTab] = useState('create blog');
    const [blogs, setblogs] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [rooms, setRooms] = useState([]);

    const [title, settitle] = useState('')
    const [description1, setdescription1] = useState('')
    const [description2, setdescription2] = useState('')
    const [description3, setdescription3] = useState('')
    const [description4, setdescription4] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [blogToEdit, setBlogToEdit] = useState(null);
    const [form] = Form.useForm();
    const [updatedBlogTitle, setUpdatedBlogTitle] = useState('');

    const openEditModal = (blog) => {
        setBlogToEdit(blog);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);

    };

    async function updateBlog(blog) {
        openEditModal(blog);
    }

    const handleEditSubmit = async () => {
        await editBlog(blogToEdit._id, updatedBlogTitle, description1, description2, description3, description4);
        closeModal();
    };



    const columns = [
        {
            title: 'Place Title',
            dataIndex: 'title',
            key: 'blogtitle',
        },
        ,
        {
            title: 'Place Name',
            dataIndex: 'roomid',
            key: 'roomname',
            render: (roomId) => {
                const room = rooms.find((r) => r._id === roomId);
                return room ? room.title : '';
            },
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            width: '9%',
            key: 'x',
            render: (_, blogs) => {
                return (
                    <button
                        className="btn-edit-blogs-by-seller"
                        onClick={() => updateBlog(blogs)}
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
            render: (_, rooms) => (
                <button className='btn-delete-blogs-by-seller' onClick={() => {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do you want to delete the blog",
                        icon: 'warning',
                        showCancelButton: true,
                        cancelButtonText: 'Cancel',
                        confirmButtonColor: '#4444AA',
                        cancelButtonColor: '#B8252A',
                        confirmButtonText: 'Yes, Blog is Deleted!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            deleteBlog(rooms._id)
                            Swal.fire(
                                'Deleted!',
                                'Blog has been deleted.',
                                'success'
                            ).then(result => {
                                window.location.href = 'http://localhost:3000/seller/blog';
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
                const data = (await axios.get("/api/users/getallblogs")).data
                setblogs(data.blogs)

                setloading(false)


            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }
        })();
    }, []);


    async function editBlog(_id, updatedTitle, updatedDescription1, updatedDescription2, updatedDescription3, updatedDescription4) {
        try {
            await axios.patch('/api/blogs/editblog', {
                _id,
                title: updatedTitle,
                description1: updatedDescription1,
                description2: updatedDescription2,
                description3: updatedDescription3,
                description4: updatedDescription4
            });
            console.log("Blog Updated Successfully");

            const data = (await axios.get("/api/blogs/getallblogs")).data;
            setblogs(data.blogs);
        } catch (error) {
            console.log(error);
        }
    }



    async function deleteBlog(_id) {
        try {
            const res = (await axios.patch('/api/blogs/deleteblog', { _id })).data;
            console.log("Blog Deleted Successfully");
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        (async () => {

            try {

                setloading(true)
                const data = (await axios.get("/api/rooms/getallrooms")).data
                setRooms(data.rooms)
                setloading(false)


            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }
        })();
    }, []);
    return (
        <div className='seller-central-blogs'>
            <div className='seller-central-blogs-container'>

                <div className="seller-central-blogs-tab">

                    <div
                        className={`seller-central-create-blog-tab-container ${activeTab === 'create blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('create blog')}
                    >
                        <span className='seller-central-tab-text-create-blog'>Create Place</span>
                    </div>

                    <div
                        className={`seller-central-blogs-tab-container ${activeTab === 'blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blog')}
                    >
                        <span className='seller-central-tab--text-blogs'>Places</span>
                    </div>
                </div>
                {activeTab === 'create blog' && (
                    <div className='seller-central-create-blogs-sellers'>
                        <CreateBlog />
                    </div>
                )}
                {activeTab === 'blog' && (
                    <div className='seller-central-table-blogs-sellers'>
                        <Table
                            columns={columns}
                            dataSource={blogs}
                            className='seller-cental-table-for-blog'
                            rowKey="_id"
                            footer={() => <div className="no-of-blogs">{`Total  ${blogs.length} blogs `}</div>} />
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
                        initialValue={blogToEdit ? blogToEdit.title : ''}
                    >
                        <Input
                            onChange={(e) => setUpdatedBlogTitle(e.target.value)}
                            placeholder="Enter blog title"
                        />
                    </Form.Item>

                    <Form.Item
                        className='userp-help-namebox-conatiner-p'
                        label="Discription 1:"
                        name="description1"
                        initialValue={blogToEdit ? blogToEdit.description1 : ''}
                    >
                        <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={1200} className="userp-helpmsg-custom-input"
                            value={description1}
                            onChange={(e) => { setdescription1(e.target.value) }}
                        />
                    </Form.Item>

                    <Form.Item
                        className='userp-help-namebox-conatiner-p'
                        label="Discription 2:"
                        name="description2"
                        initialValue={blogToEdit ? blogToEdit.description2 : ''}
                    >
                        <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={1200} className="userp-helpmsg-custom-input"
                            value={description2}
                            onChange={(e) => { setdescription2(e.target.value) }}
                        />
                    </Form.Item>

                    <Form.Item
                        className='userp-help-namebox-conatiner-p'
                        label="Discription 3:"
                        name="description3"
                        initialValue={blogToEdit ? blogToEdit.description3 : ''}
                    >
                        <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={1200} className="userp-helpmsg-custom-input"
                            value={description3}
                            onChange={(e) => { setdescription3(e.target.value) }}
                        />
                    </Form.Item>


                    <Form.Item
                        className='userp-help-namebox-conatiner-p'
                        label="Discription 4:"
                        name="description4"
                        initialValue={blogToEdit ? blogToEdit.description4 : ''}
                    >
                        <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={1200} className="userp-helpmsg-custom-input"
                            value={description4}
                            onChange={(e) => { setdescription4(e.target.value) }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Place
