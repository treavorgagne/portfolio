import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h3 style={{color:"grey"}} className="lead">
              Please use the following information to get in contact with me
              </h3>
            </div>
          </div>
          <div className="row">

          <div className="three columns">

          <h2 style={{color:"white"}}>Contact Details</h2>

          </div>

          <div className="three columns main-col">
            <h2>
              Address:
            </h2>
            <br></br>
            <h2>
              Email:
            </h2>
            <h2>
              Phone:
            </h2>
          </div>
          
          <div className="six columns main-col">
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '2px'}}>
              {resumeData.address1}
            </p>
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '2px'}}>
              {resumeData.address2}
            </p>
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '10px'}}>
              {resumeData.email}
            </p>
            <p style={{'font-size': '26px', 'margin-bottom': '0%', 'margin-top': '12px'}}>
              {resumeData.phone}
            </p>
          </div>

          </div>
        </section>
        );
  }
}