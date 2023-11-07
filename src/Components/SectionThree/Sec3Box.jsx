import React, { Component } from 'react';


export default class Sec3Box extends Component {
  render() {
    return (
      
        <div className="bg-white">
            <div className=" shadow  flex flex-col justify-center items-center p-5">
              <img src={this.props.img} alt="" className='w-[100%]'/>
              <h3 className='font-bold my-2'>{this.props.name}</h3>
              <p className='text-center my-4'>${this.props.price}</p>
              <a href="#" className='bg-orange-400 px-5 py-2 font-bold text-white hover:bg-inherit hover:text-orange-400 border-orange-400 border-2 transition rounded-[20px]'>Add To Cart</a>
            </div>
          </div>
      
    );
  }
}
