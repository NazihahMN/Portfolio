import './App.css';

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
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#certifications" className="menu-btn">Certifications</a></li>
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
                <div className="text-1">Hello, My Name is</div>
                <div className="text-2">Nazihah Nazri</div>
            </div>
        </div>
    </section>

    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="images/profile-1.jpg" alt=""/>
                </div>
                <div className="column right">
                    <p>insert text here</p>
                    <a href="https://drive.google.com/file/d/19msMQTUWFDBZJrSDB8sIUKv5neSMqWNf/view?usp=sharing">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
    
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
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
            <h2 className="title">Certifications</h2>
            <div className="card">
                <div className="box">
                    <i className="fas fa-laptop-code"></i>
                    <div className="text">Full Stack Development</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <i className="fas fa-code"></i>
                    <div className="text">Data Management</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </section>

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Nazihah Nazri</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Taiping, Perak</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">nazihahmohdnazri@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="https://formspree.io/f/xzbokjqb" method="POST">
                        <div className="fields">
                        <div className="field name">
                        <input type="text" name="Name" placeholder="Name" required/>
                        </div>
                        <div className="field email">
                        <input type="email" name="Email" placeholder="Email" required/>
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
