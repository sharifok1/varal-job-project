import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import "./PostJob.css"

const PostedJobsList = () => {
    const mocPostJob = [
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        },
        {
        "jobName":"Software Engineer",
        "date":"02/03/2023",
        "status":"Active",
        "jobDes":"Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.Software engineer with extensive knowledge about react js, c++, node js.",
        "Proposals":"200",
        "People Hired":"13",
        "Message":"150",
        }
]
    return (
        <div>
            <Appbar/>
            <Container>
                <div>
                    <h3 className='fw-bold'>Posted Jobs (10)</h3>
                    <button>All jobs</button>
                    <button>Status</button>
                    <button>Completed jobs</button>
                    <button>Pending Jobs</button>
                </div>
                <div>
                    <input type="text" placeholder='Search job' />
                    <select type="text">
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                        <option value="">15,Jan 23 - 15 Feb 23</option>
                    </select>
                </div>
                {
                  mocPostJob?.map((postedJob,index)=><Row key={index} className="m-0 my-4">
                    <Col sm={12} md={7}>
                        <Card className='text-start p-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                               <p className='fs-3 fw-bold'> {postedJob.jobName}</p> 
                              <p> 
                               <small>{postedJob.date}</small>
                               <small className='post-job-status'>{postedJob.status}</small>
                               </p>
                            </div>
                            <p>
                                {postedJob.jobDes}
                            </p>
                            <div>
                                <button className='view-posted-job'>View job</button>
                                <button className='promote-posted-job'>Promote job</button>
                            </div>
                        </Card>
                    </Col>
                    <Col  sm={12} md={5}>
                        <div>
                            <Card>
                            <h6>Proposals</h6>
                            <h6>{postedJob.Proposals}</h6>
                            <a href="#d">Viw all -{">"}</a>
                            </Card>
                        </div>
                        
                    </Col>
                  </Row>)
                }
                <Row>
                    <Col></Col>
                </Row>
            </Container>
            <Footer/>
            <FooterMobileNav/>
        </div>
    );
};

export default PostedJobsList;