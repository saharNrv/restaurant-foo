import React, { Component } from 'react';

export default class Sec2Box extends Component {
  render() {
    return (
      <div className=''>
        
          <div className="">
            <div className="sec2-box shadow bg-orange-50 flex flex-col justify-center items-center p-5">
              <img src={this.props.img} alt="" className='w-[30%]'/>
              <h2 className='font-bold text-middle'>{this.props.name}</h2>
              <p className='text-center my-4'>{this.props.text}</p>
            </div>
          </div>
        
          </div>
        
      
    );
  }
}
