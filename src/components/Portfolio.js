import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
         <div className="row portfolio">
              <div className="three columns header-col">
                <h1><span>Projects</span></h1>
              </div>
              <div className="nine columns">
                <p style={{'font-size': '28px'}} > {resumeData.projects} <a href="https://github.com/treavorgagne" target="_blank">GitHub.</a> </p>
              </div>
        </div>

        <br></br>

        {  
          resumeData.portfolio && resumeData.portfolio.map((item)=>{
            return(
            <div className="row portfolio">
              <div className="three columns">

                  <img className="profile-pic"  src={item.imgurl} alt="" />

              </div>

              <div className="nine columns main-col">

                  <h2>{item.name}</h2>
                  <p>
                  {
                    item.description
                  }
                  </p>

              </div>
            </div>
            )
          })
        }
      </section>
    );
  }
}