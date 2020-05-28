import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGeXIBZdfAgqQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=DwSRfp2Z2rPNzsf_J60Wprnjopim-4OsEB3i3X1Hji0"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>M.S. in Computer Science</h1>
                            <h2>B.S. in Computer Science</h2>
                            <hr/>
                            <p>Python | Java | R | SQL | JavaScript</p>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/robin-wu/" rel="noopener noreferrer" targets="_blanks">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            <a href="https://github.com/RobinfWu" rel="noopener noreferrer" targets="_blanks">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;