import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cs3.livemaster.ru/zhurnalfoto/d/7/0/160117220128d7019e4d379c24d8635211467381fad7.jpeg"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Robin Wu</h2>
                        <h4 style={{color: 'grey'}}>Computer Science</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>...</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5 style={{color: 'grey'}}>Email</h5>
                        <p>robinfwu@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}> 
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName={'University of Massachusetts Amherst'}
                            schoolDescription={'M.S. in Computer Science'}
                        />
                        <Education
                            startYear={2015}
                            endYear={2018}
                            schoolName={'University of Massachusetts Amherst'}
                            schoolDescription={'B.S. in Computer Science'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={'May 2019'}
                            endYear={'August 2019'}
                            jobName={'Data Science Intern | Intralinks'}
                            jobDescription={'Intralinks'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill='Python'
                            progress={100}
                         />
                         <Skills
                            skill='Java'
                            progress={85}
                         />
                         <Skills
                            skill='JavaScript'
                            progress={50}
                         />
                         <Skills
                            skill='PostgresSQL'
                            progress={70}
                         />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;