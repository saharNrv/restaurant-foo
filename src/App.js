import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Sec1 from './Components/SectionOne/Sec1';
import Sec2 from './Components/SectionTwo/Sec2';
import Sec3 from './Components/SectionThree/Sec3';


export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Sec1/>
        <Sec2/>
        <Sec3/>
      </>
    );
  }
}
