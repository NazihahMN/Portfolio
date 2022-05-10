import './App.css';
import CertifiedDataAssociate from './pic/CertifiedDataAssociate.png';
import DigitalThinkingInnovation from './pic/DigitalThinkingInnovation.png';
import MicrosoftCertifiedAzureDataFundamentals from './pic/MicrosoftCertifiedAzureDataFundamentals.png';
import LinkedIn from './pic/LinkedIn.png';
import github from './pic/github.png';
import zi_andawan from './pic/zi_andawan.jpeg';
import zi_mydev from './pic/zi_mydev.PNG';
import ziprofile from './pic/ziprofile.png';
import $ from 'jquery';


function App() {
  return (
    <div className="App">
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#">My<span>Portfolio</span></a></div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#certifications" className="menu-btn">Certifications</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#project" className="menu-btn">Project</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    {/* home */}
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, I am</div>
                <div className="text-2">Nazihah Nazri</div>
            </div>
        </div>
    </section>

    {/* about */}

    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className="columnleft">
                    <img src={ziprofile} alt=""/>
                </div>
                <div className="column right">
                    <div className="text"> Aspiring Web Developer | Data Associate</div>
                    <p>A process-oriented Business Administration (Marketing) graduate with knowledge in web development and data management</p>
                    <a href="https://drive.google.com/file/d/1zuGXvUPB7NriWz4lto78pKSa2IGwWV4E/view?usp=sharing">Download Resume</a>
                </div>
            </div>
        </div>
    </section>

    {/* certifications */}

    <section className="certifications" id="certifications">
        <div className="max-width">
            <h2 className="title">Certifications & Badges</h2>
            <div className="cert-content">
                <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/b1b9413f-df54-4152-99a7-eaee3c9da53c" target="blank"><img src={CertifiedDataAssociate} width="150" height="200" alt=""/></a>
                    <div className="text">CDA</div>
                    <p>Data Concepts | Organizational Data</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/88e8411c-278d-4ea2-8f35-f158e4c1dac1" target="blank"><img src={DigitalThinkingInnovation} width="150" height="200" alt=""/></a>
                    <div className="text">DTI</div>
                    <p>Design Thinking | Digital Innovation</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/21cf4a58-10d3-4775-8d32-732be016e103" target="blank"><img src={MicrosoftCertifiedAzureDataFundamentals} width="100" height="150" alt=""/></a>
                    <div className="text">DP-900</div>
                    <p>Core Data Concepts | Relational Data | Non-Relational Data | Data Workloads</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/* skills */}
    
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="columnleft">
                    <div className="text">PROJECT</div>
                    <p>This section will be updated once the project is completed</p>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>60%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>40%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>40%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* project */}

    <section className="project" id="project">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="project-content">
            <div className="box">
            </div>
            <div className="card">
                <div className="box">
                <img src= {zi_andawan} alt=""/>
                    <div className="text">Andawan</div>
                    <p>(Completed)</p>
                    <p>Node/Express, ReactJS, Cloudinary, MySQL</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <img src= {zi_mydev} width="400" height="200" alt=""/>
                    <div className="text">MyDev</div>
                    <p>(On-going)</p>
                    <p>Node/Express, ReactJS, MySQL, Google Map</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/* contact */}

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Good day! Thank you for visiting my profile. Feel free to reach me out via LinkedIn or simply drop your message here, I will get back to you sooner!</p>
                    <div className="icon">
                                <a href ="https://github.com/NazihahMN" target="blank"><img id="icon" src={github} alt=""/></a>
                            
                                <a href ="https://www.linkedin.com/in/nazihah-nazri-747877zee/" target="blank"><img id="icon" src={LinkedIn} alt=""/></a>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message Me</div>
                    <form action="https://formspree.io/f/xzbokjqb" method="POST">
                        <div className="fields">
                        <div className="field name">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        </div>
                        <div className="field email">
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        </div>
                        </div>
                        <div className="field">
                            <input type="subject" name="Subject" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                        <textarea cols="30" rows="10" name="Message" placeholder="Message" required></textarea>
                        </div>
                        <div className="button-area">
                        <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <span><a href="https://github.com/NazihahMN">Nazihah Nazri</a></span><span> | Portfolio website</span>
    </footer>

    </div>
  );
}

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
});


export default App;
