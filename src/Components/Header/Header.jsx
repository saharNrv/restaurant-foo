import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'

export default class Header extends Component {
    render() {
        return (
            < >
                <div className='w-full bg-primery '>

                    <div className='container  py-5 mx-auto flex items-center justify-between px-4'>
                       <div className='flex items-center'>
                        <img src="image/icon.png" alt=""className='w-[100%]'/>
                        <span className='ml-2 text-xl font-bold'>FOO</span>
                       </div>
                       <div>
                        <ul className='flex items-center gap-10' id='heder-list'>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Contact</li>
                            <li>Shop</li>
                        </ul>
                        <div className='w-10 h-10 hidden justify-center flex-col gap-3 ' id='header-menu'>
                           <p className='w-9 h-[2px] bg-black'></p>
                           <p className='w-9 h-[2px] bg-black'></p>
                           <p className='w-9 h-[2px] bg-black'></p>
                        </div>
                       </div>
                       <div className='shadow-gray-400 shadow-sm rounded-2xl px-8 py-2'>
                       <p  className=' text-blue-400 flex items-center gap-3'>
                        search
                        <FiSearch/>
                       </p>
                       </div>

                    </div>

                </div>


            </>
        );
    }
}
