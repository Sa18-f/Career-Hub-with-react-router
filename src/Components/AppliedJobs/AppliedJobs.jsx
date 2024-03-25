import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJob(jobsApplied);
            setDisplayJob(jobsApplied);
            // console.log(jobs, storedJobsIds, jobsApplied)
        }
    }, [jobs]);
    
    const showTheFilteredJobs = filter =>{
        if(filter === 'all'){
            setDisplayJob(appliedJob);
        }
        else if(filter === 'remote'){
            const remoteJob = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJob);
        }
        else if(filter === 'onsite'){
            const onsiteJob = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJob);
        }
    }

    return (
        <section>
            <h1 className="text-5xl font-bold text-center">Applied Jobs : {appliedJob.length}</h1>
            <div>
                <details className="dropdown ">
                    <summary className="m-1 btn">Filter by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => showTheFilteredJobs('all')}><a>All</a></li>
                        <li onClick={() => showTheFilteredJobs('remote')}><a>Remote</a></li>
                        <li onClick={() => showTheFilteredJobs('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayJob.map(job => <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>)
                }
            </div>
        </section>
    );
};

export default AppliedJobs;