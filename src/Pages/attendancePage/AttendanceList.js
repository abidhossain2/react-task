import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AttendanceList.css'
import logo from '../../images/logo.png'

const AttendanceList = () => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('access_token'));
        fetch('https://test.nexisltd.com/test', {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])


    return (
        <div className='user_container'>
            <Link to='/' className='logo'>
                <img src={logo} alt="" />
            </Link>
            <div className='heading'>
                <h2>Attendace List</h2>
            </div>
            <div className='user_item'>
                <div className='user_list'>
                    {
                        Object.entries(users).map(([key, value], i) => {
                            return (
                                <div className='name_list'>
                                    <p>{value.name}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='attendance_list'>
                    {
                        Object.entries(users).map(([key, value], i) => {
                            return (
                                <div className='attendance_status_container'>{
                                    Object.entries(value.attendance).map(([key, value], i) => {
                                        return (
                                            <div key={key} className='attendance_status'>
                                                <p>{key}</p>
                                                <p>{value.status}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default AttendanceList;