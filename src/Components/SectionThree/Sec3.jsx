import React, { Component } from 'react';
import Sec3Box from './Sec3Box';
import './sec3.css'
export default class Sec3 extends Component {

  constructor(props){
    super(props)

    this.state={
      popularData:[
        {id:1,name:'Flame-boiled dish',price:19.99,img:"image/f3.png"},
        {id:2,name:'Peach Melba dish',price:20.99,img:"image/f2.png"},
        {id:3,name:'Delmonico Steak dish',price:16.95,img:"image/f3.png"},
        {id:4,name:'Flame boiled',price:18,img:"image/f5.png"},

      ]
    }
  }

  render() {
    return (
      <div className='bg-primery pt-[50px] pb-3'>
        <h1 className='text-orange-400 my-12 font-bold text-center text-middle '>Most Popular Items</h1>
        <div className="container">
          <div className="row">
              {this.state.popularData.map(data=>(
            <div className="col-12 col-xs-12 col-md-6 col-lg-3">

              <Sec3Box {...data} key={data.id}/>
            </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
