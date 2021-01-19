import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="three columns">

            <h2 style={{color:"white"}}>Contact Details</h2>

            </div>
            <div className="nine columns">
              <h3 style={{color:"grey", 'margin-top': '4px' }} className="lead">
              Please use the following information to get in contact with me
              </h3>
            </div>
          </div>
          <div className="row">

          <div className="three columns main-col">
  
            
          </div>

          <div className="two columns main-col">
  
            <h2 style={{color:"grey"}} >Email:</h2>
            <h2 style={{color:"grey"}} >Phone:</h2>
          </div>
          
          <div className="seven columns main-col">
            
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '2px'}}>
              {resumeData.email}
            </p>
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '10px'}}>
              {resumeData.phone}
            </p>
          </div>

          </div>
        </section>
        );
  }
}