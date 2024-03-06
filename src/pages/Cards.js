import React from 'react';
import Navbar from "../components/Navbar";
import {useSelector} from "react-redux";

const Cards = () => {
    const users = useSelector((state) => state.addUser.users)
    console.log(users)
    return (
        <div className='snow-blocks' >
            <Navbar/>
            <div>
                {
                    users?.map((user) => (
                        <div style={{border:'3px solid black'}}>
                            <h2>Имя:{user.name}</h2>
                            <h2>Дата рождения:{user.birthDate}</h2>
                            <strong>Пол:{user.gender}</strong>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;