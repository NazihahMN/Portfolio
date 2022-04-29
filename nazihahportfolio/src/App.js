import './App.css';

function App() {
  return (
    <div className="App">
      <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#certifications" class="menu-btn">Certifications</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    {/* home */}
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, My Name is</div>
                <div class="text-2">Nazihah Nazri</div>
            </div>
        </div>
    </section>

    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/profile-1.jpg" alt=""/>
                </div>
                <div class="column right">
                    <p>insert text here</p>
                    <a href="https://drive.google.com/file/d/19msMQTUWFDBZJrSDB8sIUKv5neSMqWNf/view?usp=sharing">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
    
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">INTERNSHIP & PROJECT</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus qui laudantium, voluptas non corporis, expedita quas enim architecto officiis sint reprehenderit eaque aliquid vel. Veritatis repellendus nam omnis! Qui?</p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>60%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>40%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>40%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="certifications" id="certifications">
        <div class="max-width">
            <h2 class="title">Certifications</h2>
            <div class="card">
                <div class="box">
                    <i class="fas fa-laptop-code"></i>
                    <div class="text">Full Stack Development</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Data Management</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Nazihah Nazri</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Taiping, Perak</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">nazihahmohdnazri@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
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
