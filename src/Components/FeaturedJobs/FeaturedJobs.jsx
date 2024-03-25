import { useEffect, useState } from "react";
import SIngleJob from "../SingleJob/SIngleJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl"> Featured Jobs </h1>
                <p>A featured job search allows you to influence your users search results by ranking jobs according to promotional value rather than purely by relevance.</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    jobs.slice(0, dataLength).map(job => <SIngleJob key={job.id} job={job}></SIngleJob>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="card-actions"> 
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary text-xl text-white my-6 mx-auto">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;