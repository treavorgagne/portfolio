(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(7),s=t.n(l),r=(t(13),t(1)),i=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"},o.a.createElement("li",{className:"current"},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Wisdom")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),o.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank"},o.a.createElement("i",{className:e.className})))})))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:"images/Treavor.jpg",alt:""})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",null,e.aboutme),o.a.createElement("h2",null,"My Current Goal"),o.a.createElement("p",null,e.goals))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"resume"},o.a.createElement("div",{className:"row education"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Education"))),o.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return o.a.createElement("div",{className:"row item"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h3",null,e.UniversityName),o.a.createElement("p",{className:"info"},e.specialization,o.a.createElement("span",null,"\u2022")," ",o.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),o.a.createElement("p",null,e.Achievements)))}))),o.a.createElement("div",{className:"row work"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Courses Taken"))),o.a.createElement("div",{className:"nine columns main-col"},e.courses&&e.courses.map(function(e){return o.a.createElement("div",{className:"row item"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h5",null,e.class),o.a.createElement("p",{className:"info",style:{"font-size":"14px"}},o.a.createElement("em",{className:"date"},e.outcome," ")," Grade: ",e.grade)))}))),o.a.createElement("div",{className:"row work"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Work"))),o.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return o.a.createElement("div",{className:"row item"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h3",null,e.CompanyName),o.a.createElement("p",{className:"info"},e.specialization,o.a.createElement("span",null,"\u2022")," ",o.a.createElement("em",{className:"date"},e.start," ",e.end)),o.a.createElement("p",null,e.Achievements)))}))),o.a.createElement("div",{className:"row skill"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Skills"))),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h1",null,e.technical),o.a.createElement("br",null),o.a.createElement("div",{className:"bars"},o.a.createElement("ul",{className:"skills"},e.skillstech&&e.skillstech.map(function(e){return o.a.createElement("li",null,o.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),o.a.createElement("em",{style:{color:"grey"}},e.skillname))})))),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h1",null,e.workplace),o.a.createElement("br",null),o.a.createElement("div",{className:"bars"},o.a.createElement("ul",{className:"skills"},e.skillswork&&e.skillswork.map(function(e){return o.a.createElement("li",null,o.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),o.a.createElement("em",{style:{color:"grey"}},e.skillname))}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row portfolio"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Projects"))),o.a.createElement("div",{className:"nine columns"},o.a.createElement("p",{style:{"font-size":"28px"}}," ",e.projects," ",o.a.createElement("a",{href:"https://github.com/treavorgagne",target:"_blank"},"GitHub.")," "))),o.a.createElement("br",null),e.portfolio&&e.portfolio.map(function(e){return o.a.createElement("div",{className:"row portfolio"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:e.imgurl,alt:""})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.description)))}))}}]),a}(n.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"testimonials"},o.a.createElement("div",{className:"text-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"two columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Client Testimonials"))),o.a.createElement("div",{className:"ten columns flex-container"},o.a.createElement("div",{className:"flexslider"},o.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return o.a.createElement("li",null,o.a.createElement("blockquote",null,o.a.createElement("p",null,e.description),o.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"contact"},o.a.createElement("div",{className:"row section-head"},o.a.createElement("div",{className:"three columns"},o.a.createElement("h2",{style:{color:"white"}},"Contact Details")),o.a.createElement("div",{className:"nine columns"},o.a.createElement("h3",{style:{color:"grey","margin-top":"4px"},className:"lead"},"Please use the following information to get in contact with me"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns main-col"}),o.a.createElement("div",{className:"two columns main-col"},o.a.createElement("h2",{style:{color:"grey"}},"Email:"),o.a.createElement("h2",{style:{color:"grey"}},"Phone:")),o.a.createElement("div",{className:"seven columns main-col"},o.a.createElement("p",{style:{"font-size":"26px","margin-bottom":"0%","margin-top":"2px"}},e.email),o.a.createElement("p",{style:{"font-size":"26px","margin-bottom":"0%","margin-top":"10px"}},e.phone))))}}]),a}(n.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))}))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),y={name:"Treavor Gagne",role:"Software Engineering Student at the University of Victoria",roleDescription:" I am a jack of all trades developer wanting learn anything and everything that interests me.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/treavor-gagne-265463187/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/treavorgagne",className:"fa fa-github"}],aboutme:"I am currently in my fourth year of study at the University of Victoria. I am a experienced Full Stack Web Developer learning machine learning and AI practices. I hope is to be able to find a postion where I can apply the total sum of all my knowledge into a meaningful project.",goals:"My current goal is to get a 4 or 8 month co-op at a company where I can apply my skill set and grow as a developer and person.",address1:"1870 McKenzie Ave. Unit 206",address2:"Victoria, BC, V8N 4X3",email:"gagne.16@hotmail.com",phone:"(250) 617-1273",website:"https://treavorgagne.github.io",education:[{UniversityName:"University of Victoria",specialization:"4th Year Software Engineering w/ Co-op",MonthOfPassing:"Sept",YearOfPassing:"2017 - Present",Achievements:"Currently, I have 12 course and 2 co-ops remaining in my degree. I am also taking courses to specialization in machine learning and AI upon graduation."}],courses:[{class:"CSC 111/115 - Fundamental Programming 1&2",grade:"A/A",outcome:"Learnt various fundamental programming skills in C and Java."},{class:"CSC 225/226 - Algoritms & Data Structure 1&2",grade:"A+/A-",outcome:"Learnt various sorting algoritms and data structures."},{class:"CSC 360 - Operating Systems",grade:"A+",outcome:"Learnt major concepts of modern operating systems and the relationship between the OS and the architecture of computer systems."},{class:"CSC 370 - Database Systems",grade:"A+",outcome:"Learnt major topics of database systems including  database design, query languages, query optimization, concurrency control, and recovery from failures. Included project where a database design was created to accommodate an airport flight scenario using prepared statement."},{class:"CSC 421 - Introduction to Artificial Intelligence",grade:"A+",outcome:"Comprehensize introduced to main areas of artificial intelligence such as, how to represent search problems, perform statistical methods, and artifical learning networks."},{class:"SENG 265 - Software Development Methods ",grade:"A",outcome:"Comprehensize introduced the techniques and tools needed for every software development. Topics included GIT version control, software lifecycle methodologies, and how to use various development tools among other topics."},{class:"SENG 275 - Software Testing",grade:"A+",outcome:"Learnt the fundamental to software testings. Topics included manual testing, writing unit tests, and learning about edge cases."},{class:"SENG 310 - Human Computer Interaction",grade:"A",outcome:"Comprehensize introduction to the field of the human computer interaction. Learnt about the design and evaluation practices in how to find the best possible design UI/UX for any project."},{class:"SENG 350 - Software Architecture & Design",grade:"A",outcome:"Comprehensize introduction in designing and analyzing software architecture models using Unified Modelling Language. Course included a major design project where a multiplayer game architecture needed to be designed, developed, and documented"},{class:"SENG 360 - Security Engineering",grade:"A+",outcome:"Comprehensize introduction into a wide range of security topics. Courses adopted the hands on approach to learning security topics by recreating exploits in a virtual environment using VirtualBox. Topics included buffer overflows attacks, breaking cryptography algorithms, and faking or breaking authentication among others."},{class:"ECE 260 - Continous-Time Signals & Systems",grade:"A-",outcome:"Comprehensize introduction to continous-time signals and systems. Topics included different properties of LTI systems, identifying types of filters, and designing and analyzing systems."},{class:"ECE 310 - Digital Signal Processing 1",grade:"B+",outcome:"Comprehensize introduction to digitial signal processing building upon ECE 260. Topics included relation between continous-time and discrete-time systems and designing discrete-time filters."},{class:"ECE 355 - Microprocessor-Based Systems",grade:"A+",outcome:"Learnt topics about the hardware components of a computer and of an embedded systems. Course included a major project to develop a system to observe and control a pulse modulated signal using a microprocessor and variout periferals."},{class:"ECE 360 - Control Theory & Systems 1",grade:"A+",outcome:"Courses built upon topics included in ECE 260. Topcis included characterics of a systems, general feedback theory, and analyzing and design stable systems using Nyquist and root locus methods."}],work:[{CompanyName:"Inventu Research Inc.",specialization:"Consulting Developer",start:"May 2020",end:" - Dec 2020",Achievements:"Worked for parent company overseeing various projects of various different child companies. This included full-stack web developement and front-end web consulting assisting the UX lead."},{CompanyName:"Ergonomyx Technology Canada Inc.",specialization:"Full-Stack Web Developer",start:"Sept 2019",end:" - Apr 2020",Achievements:"Full-stack development of an e-commerce website using HTML, CSS, Node.js, Flask, and PostgreSQL. Started initial development of the mobile version of the site existing framework."},{CompanyName:"Hospitality Industry",specialization:"Server & Bartender",start:"Sept 2016",end:" - Sept 2020",Achievements:"Worked in a various fast pace environments where meeting goals in a fast team environment. Learnt excellent workplace skills from working in the hospitality industry."}],technical:"Technical Skills",workplace:"Workplace Skills",skillstech:[{skillname:"Git Version Control - Proficient"},{skillname:"C Development - Competent"},{skillname:"C++ Development - Competent"},{skillname:"Python Development - Intermediate"},{skillname:"Java Development - Intermediate"},{skillname:"PostgreSQL Query Writing - Competent"},{skillname:"MongoDB Query Writing - Intermediate"},{skillname:"Embedded Microprocessor Development- Competent"},{skillname:"Linux OS Familiarity - Competent"},{skillname:"Microsoft OS Familiarity - Competent"},{skillname:"HTML5 Templating - Competent"},{skillname:"CSS Editting - Competent"},{skillname:"Reactjs Framing - Beginner"},{skillname:"Technical Documenation Writing - Competent"}],skillswork:[{skillname:"Teamwork and Collaboration - Expert"},{skillname:"Critical and Analytic Problem Solving - Competent"},{skillname:"Self-learning - Competent"},{skillname:"Productivity - Competent"},{skillname:"Detail Orientated - Competent "},{skillname:"Microsoft Office Suite - Expert"},{skillname:"Time Management - Competent"}],projects:"Here is a list of all my completed projects. All code and related documents can be found on my ",portfolio:[{name:"Top-Down Royale",description:"Top-down royale is a 2 or more player C++ multiplayer battle royale game using the SFML game library. TDR architecture was designed with extensibility in mind to add more content in the future. Furthermore, TDR code uses classes and objects, so movements speeds and others game options can be changed easily. TDR uses multiple threads to handle hand both player movements and shooting. TDR uses MAKE files to compile both client and a hosted server where the host can specify the player to be in the game. I had a huge contribution in coding the game's mechanics like shooting, collision detections, spawning, and player movement among other things.",imgurl:"images/tdr.png  "},{name:"Pulse Modulator",description:"This project was to observe and manipulate a pulse width modulated (PWM) signal using the STM32F051R8T6 microcontroller with some external circuitry on a STM32F0 Discovery board. The PWM signal was produced by an external 555 timer (NE555 Timer) and the frequency of the signal was manipulated by the external optocoupler (4N35 Optocoupler) attached to the microcontroller. Voltage was measured across a potentiometer attached to the microcontroller in order to calculate the resistance. Then a built-in analogue-to-digital converter (ADC) was used to read an analogue voltage value from the potentiometer continuously. This value was then relayed to the octopolar from the microcontroller to form the signal which was to be measured by the microcontroller. Specifically, a digital-to-analog converter (DAC) was used to relay the analogue voltage value to the external circuitry containing the 555 timers to manipulate the frequency. In addition, the frequency of the PWM signal was measured using EXIT and TIM2 interrupts to monitor falling and rising edges of the signal. Overall, the goal of the system was to measure the voltage of the system while displaying the frequency and resistance on to a LCD screen. Data was transmited to the LCD by a 8-bit parallel interface using different output controller signals.",imgurl:"images/pulse.png"},{name:"Postgres Database Project",description:"This completed project is a final part of a database system course. The purpose of the project was to create a schema of tables to accomadate flights of different people and avoid various conditions, such as having the same person on the same flight or the flights at the same time etc. Overall, this project demostrated my ability on how to design a database schema, and how to write and constrain queries using PostgreSQL. This project also uses preapred statements to secure database from SQL injection attacks.",imgurl:"images/sql.png"},{name:"Portfolio Website",description:"This is the current website you are viewing. The goal of this project is to learn and try new web development techniques, as well as show cases myself. This site uses CSS, HTML5, React.js, and Node.js packages to bring the site to life.",imgurl:"images/header-background-pg.jpg"}],testimonials:[{description:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",name:"Patrick McKenzie"},{description:"What we fear doing most is usually what we need to do.",name:"Ralph Waldo Emerson"},{description:"Personal growth is not a matter of learning new information but of unlearning old limits.",name:"Alan Cohen"}]},b=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,{resumeData:y}),o.a.createElement(p,{resumeData:y}),o.a.createElement(f,{resumeData:y}),o.a.createElement(h,{resumeData:y}),o.a.createElement(g,{resumeData:y}),o.a.createElement(E,{resumeData:y}),o.a.createElement(v,{resumeData:y}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.23a212f1.chunk.js.map