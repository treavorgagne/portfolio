import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Courses Taken</span></h1>
            </div>

            <div className="nine columns main-col">
                {
                  resumeData.courses && resumeData.courses.map((item)=>{
                    return(
                      <div className="row item">
                        <div className="twelve columns">
                            <h5>{item.class}</h5>
                            <p className="info" style={{'font-size': '14px'}}>
                              <em className="date">{item.outcome} </em> Grade: {item.grade} 
                            </p>
                            
                        </div>
                      </div>
                    )
                  })
                }
              </div>
         </div>
        
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.start} {item.end}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              <h1>
                {resumeData.technical}
                </h1>
               <br></br>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skillstech && resumeData.skillstech.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em style={{color: "grey"}} >{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

           

   			</div>

         <div className="nine columns main-col">

               <h1>
               {resumeData.workplace}
               </h1>
               <br></br>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skillswork && resumeData.skillswork.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em  style={{color: "grey"}} >{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

           

   			</div>

         </div>

      </section>
    );
  }
}