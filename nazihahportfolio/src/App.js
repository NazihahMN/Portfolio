import './App.css';
import CertifiedDataAssociate from './pic/CertifiedDataAssociate.png';
import DigitalThinkingInnovation from './pic/DigitalThinkingInnovation.png';
import MicrosoftCertifiedAzureDataFundamentals from './pic/MicrosoftCertifiedAzureDataFundamentals.png';
import LinkedIn from './pic/LinkedIn.png';
import github from './pic/github.png';
import zi_andawan from './pic/zi_andawan.jpeg';
import zi_mydev from './pic/zi_mydev.PNG';
import ziprofile from './pic/ziprofile.png';
import moon from './pic/moon.jpg';


function App() {
  return (
    <div className="App">
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"></div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#project" className="menu-btn">Project</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#certifications" className="menu-btn">Certifications</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            {/* <img src={moon} width="50" id="mode"/> */}
        </div>
    </nav>

    {/* home */}
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, My Name is</div>
                <div className="text-2">Nazihah Nazri</div>
            </div>
        </div>
    </section>

    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className="column-left">
                    <img src={ziprofile} alt=""/>
                </div>
                <div className="column right">
                <div className="text">Web Developer | Data Associate</div>
                    <p>A process-oriented Business Administration (Marketing) graduate with knowledge in web development and data management.</p>
                    <a href="https://drive.google.com/file/d/1zuGXvUPB7NriWz4lto78pKSa2IGwWV4E/view?usp=sharing">Download Resume</a>
                </div>
            </div>
        </div>
    </section>

    <section className="project" id="project">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="project-content">
            <div className="box">
            </div>
            <div className="card">
                <div className="box">
                <img src= {zi_andawan} width="400" height="200" alt=""/>
                    <div className="text">Andawan App</div>
                    <p>(Completed)</p>
                    <p>Node/Express, ReactJS, Cloudinary, MySQL</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <img src= {zi_mydev} width="400" height="200" alt=""/>
                    <div className="text">MyDev App</div>
                    <p>(On-going)</p>
                    <p>Node/Express, ReactJS, MySQL</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">INTERNSHIP & PROJECT</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus qui laudantium, voluptas non corporis, expedita quas enim architecto officiis sint reprehenderit eaque aliquid vel. Veritatis repellendus nam omnis! Qui?</p>
                    <a href="#">Read more</a>
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

    <section className="certifications" id="certifications">
        <div className="max-width">
            <h2 className="title">Certifications & Badges</h2>
            <div className="cert-content">
            <div className="box">
            </div>
            <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/b1b9413f-df54-4152-99a7-eaee3c9da53c" target="blank"><img src={CertifiedDataAssociate} width="200" height="200" alt=""/></a>
                    <div className="text">CDA</div>
                    <p>Data Concepts | Organizational Data</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/88e8411c-278d-4ea2-8f35-f158e4c1dac1" target="blank"><img src={DigitalThinkingInnovation} width="200" height="200" alt=""/></a>
                    <div className="text">DTI</div>
                    <p>Design Thinking | Digital Innovation</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                <a href ="https://www.credly.com/badges/21cf4a58-10d3-4775-8d32-732be016e103" target="blank"><img src={MicrosoftCertifiedAzureDataFundamentals} width="200" height="180" alt=""/></a>
                    <div className="text">DP-900</div>
                    <p>Core Data Concepts | Relational Data | Non-Relational Data | Data Workloads</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div className="icon">
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="icon">
                                <a href ="https://github.com/NazihahMN" target="blank"><img id="icon" src={github} width="55" height="55" alt=""/></a>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="icon">
                                <a href ="https://www.linkedin.com/in/nazihah-nazri-747877zee/" target="blank"><img id="icon" src={LinkedIn} width="50" height="50" alt=""/></a>
                            </div>
                        </div>
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
        <span><a href="https://github.com/NazihahMN">Nazihah Nazri</a> | <span class="far fa-copyright"></span> All Rights Reserved. Privacy Policy</span>
    </footer>

    </div>
  );
}

export default App;
