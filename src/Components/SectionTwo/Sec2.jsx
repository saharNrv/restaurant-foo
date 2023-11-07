import React, { Component } from 'react';
import './sec2.css'
import Sec2Box from './Sec2Box';

export default class Sec2 extends Component {
    constructor(props){
        super(props)
        this.state={

            foodData:[
                {id:1,name:"Quality Food",img:"image/food.png" ,text:"Keep healthy food readily available. When you get hungry, you’re more likely to "},
                {id:2,name:"Super Taste",img:"image/mouth.png" ,text:"Keep healthy food readily available. When you get hungry, you’re more likely to "},
                {id:3,name:"Fast Delivery",img:"image/truck.png" ,text:"Keep healthy food readily available. When you get hungry, you’re more likely to "}
            ]
        }
    }
  render() {
    return (
      <div className='pt-10 pb-10 bg-primery sec2-bg'>
        <h1 className='text-center text-3xl font-bold text-orange-400 mb-10'>Our Awesome Services</h1>

        <div className="container">
          <div className="row">
            {this.state.foodData.map(data=>(
              

            <div className="col-12 col-xs-12 col-lg-4">

               <Sec2Box key={data.id} {...data}/>
              
             </div>
            ))}
          </div>
        </div>

        
      </div>
    );
  }
}
