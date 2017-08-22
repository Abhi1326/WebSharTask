/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './profile.css'

class Profile extends Component{
    render(){
        return(
            <div>

                <section className="aboutus section_padding">
                <h3 className="heading_h3">Profile</h3>
                <p className="text_paragraphs">

                    Hey,<br />

                    I'm Abhishek,a front end developer currently working with Tixdo Media pvt ltd.I have worked across dekstop(web applications)and native web apps(PWA)<br />
                    and love to take an idea through design iterations and code it up for others to enjoy elegantly solving some complex web problems along the way .<br />

                    I think Kayako is a fantastic company with an amazing spirit.And i definitely have the skills you are looking for.<br />
                </p>
                    <p className="text_paragraphs">
                        <h3> Responsibilities<br /></h3>

                        Developing new user-facing features using React.js<br />
                        Building reusable components for future use.<br />
                        Translating designs and wireframes into high quality code<br />
                        Optimizing components for maximum performance across a vast array of web-capable devices and browsers<br />

                    </p>
                    <p className="text_paragraphs">
                        <h3> Skills<br /></h3>

                        Experience with popular React.js workflows (Redux)<br />
                        Familiarity with newer specifications of EcmaScript<br />
                        Experience with data structure libraries (e.g., Immutable.js)<br />
                        Knowledge of isomorphic React<br />
                        Familiarity with RESTful APIs<br />
                        Knowledge of modern authorization mechanisms, such as JSON Web Token<br />
                        Familiarity with modern front-end build pipelines and tools<br />
                        Experience with common front-end development tools such as Babel, Webpack, NPM, etc.<br />
                        Ability to understand business requirements and translate them into technical requirements<br />
                        A knack for benchmarking and optimization<br />
                        Familiarity with code versioning tools  as Git, Git Flow<br />

                    </p>
            </section>

            </div>
        )
    }
}
export default Profile

