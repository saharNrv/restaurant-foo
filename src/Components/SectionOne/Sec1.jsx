import React, { Component } from 'react';

import './sec1.css'

export default class Sec1 extends Component {
  render() {
    return (
        <div className='bg-primery'>
        <div className='container py-10 '>
            <div className="row">
                <div className="col-12 col-xs-12 col-md-6 box">
                    <img src="image/sec1.png" className='sec1-img' />
                </div>
                <div className="col-12 col-xs-12 col-md-6 box2 flex items-center justify-center flex-col px-12">
                    <h1 className='text-8xl text-orange-400 flex items-center font-bold'>
                        Fast
                        <div className='flex flex-col'>
                            <span className='text-3xl text-black'>Food</span>
                            <span className='text-3xl text-black'>Delivery</span>
                        </div>

                    </h1>
                    <p className='mt-5 text-gray-400'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, veniam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, veniam.
                    </p>
                    <a href="#" className='block bg-black px-4 py-2 mt-5 rounded-[20px] text-white hover:bg-orange-400'>Order Now</a>

                </div>
            </div>

       
       
      </div>
      </div>
    );
  }
}
