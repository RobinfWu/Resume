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
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQGYKlDvdLT1cQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=Khm9qTK2JDjBdKFpPazgfqTYU78FExQgQ_E8bwW9HuM"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Robin Wu</h2>
                        <h4 style={{color: 'grey'}}>Computer Science</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>I am a recent graduate with a masters in computer science. I have interned at Intralinks as a Data Scientist, creating an automation pipeline to ingest documents, detect sensitive information, and redact the contents. I have also worked on projects that partners up with other companies such as Outlier Detection with American Institute for Research and a Web-based Visualization Platform for Hewlett Packard Enterprise.</p>
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
                            courses={'Neural Networks, NLP, Computer Vision, Database Design, Mobile & Ubiquitous Computing'}
                        />
                        <Education
                            startYear={2015}
                            endYear={2018}
                            schoolName={'University of Massachusetts Amherst'}
                            schoolDescription={'B.S. in Computer Science'}
                            courses={'Software Engineering, Web Programming, Data Visualization, Machine Learning'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={'May 2019'}
                            endYear={'August 2019'}
                            jobName={'Data Science Intern | Intralinks'}
                            jobDescription={'I engineered an end-to-end pipeline to automate document operations - scanning, processing, and redacting on thousands of documents of various types - mostly PDFs. I developed a proof of concept to scan M&A documents and redact sensitive information such as SNN, names, emails, phone numbers, and addresses. I implemented microservices, RESTful API, backend services, and frontend.'}
                        />
                        <Experience
                            startYear={'September 2019'}
                            endYear={'December 2019'}
                            jobName={'Grader (CS 589 - Machine Learning)'}
                            jobDescription={'Graded assignments for a graduate level machine learning course of 150+ students'}
                        />
                        <Experience
                            startYear={'September 2019'}
                            endYear={'December 2019'}
                            jobName={'Seminar Instructor - (CICS 191 - What Makes a “Good” Computer Scientist?)'}
                            jobDescription={'Instructed a class of computer science students on ethics and acclimating to the university'}
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