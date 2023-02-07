import React, { Component} from 'react';
import '../App.css';
import Home from './home';
import Approach from './Approach';
import Mission from './Mission';
import Cause from './Contact';
import logo from '../images/logo.png';
import Donate from './Donate';



class home1 extends Component {

  render() {


    return (
      <div>
        <div className="App">
          <ul>
            <img src={logo} alt="savefarmers" href='#home' />
          
            {/* <li><h2>name</h2></li> */}
            <li><a href="#home" className="rounded">Home</a></li>
            <li><a href="#mission" className="rounded">Mission</a></li>
            <li><a href="#approach" className="rounded">Approach</a></li>
            <li><a href="#contactus" className="rounded">Cause</a></li>
            <li><a href="#donate" className="rounded bg-[#006400] text-white w-40 mt-8 mr-3 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#00BFFF] rounded-full cursor-pointer">Donate</a></li>


          </ul>
          <div className="content">
            <section id="home">
              <Home />
            </section>
            <section id="mission">
              <Mission />
            </section>
            <section id="approach">
              <Approach />
            </section>
            <section id="contactus">
              <Cause />
            </section>
            <section id="donate" >
              <Donate />
            </section>
          </div>
        </div>
        

        {/* <Link to="/">signup</Link> */}
      </div>
    );
  }
}

export default home1;