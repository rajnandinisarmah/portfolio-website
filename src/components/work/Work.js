import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react'
import "./work.scss"
import { jobs } from '../../utils/jobs';

const SingleWork = ({ job }) => {
    return (
        <div className='singleWork'>
            <h3 className='singleWork__heading'>{job.designation} <a target="_blank" aria-label={job.title} href={job.link}>@ {job.title}</a></h3>
            <div className='singleWork__time'>{job.time}</div>
            {job.points.map((point, i) => (
                <p key={i} className='singleWork__point'>{point}</p>
            ))}
        </div>
    )
}

const Work = () => {

    const [index, setIndex] = useState(0)

    return (
        <section className='work' id="experience">
            <h3 className='work__heading'>Where I’ve Worked</h3>
            <div className='work__container'>
                <Tabs defaultIndex={0} onSelect={(index) => setIndex(index)}>
                    <TabList>
                        {jobs?.map((job, i) => (
                            <Tab className={i === index && "active"} key={job.id}>{job.title}</Tab>
                        ))}
                    </TabList>
                    {jobs?.map((job) => (
                        <TabPanel key={job.id}><SingleWork job={job} /></TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

export default Work