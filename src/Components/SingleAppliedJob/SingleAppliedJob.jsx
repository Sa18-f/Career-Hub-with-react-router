import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const SingleAppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-10">
                <div className="w-60 h-[300px] bg-slate-200 rounded-lg p-2">
                    <figure><img className="py-24 px-6" src={logo} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-xl font-medium">{company_name}</p>
                    <div>
                        <button className="border border-[#af99afb4] px-4 py-2 text-purple-500 font-medium mr-6">{remote_or_onsite}</button>
                        <button className="border border-[#af99afb4] px-4 py-2 text-purple-500 font-medium">{job_type}</button>
                    </div>
                    <div className="flex my-4">
                        <p className="flex gap-1"><IoLocationSharp className="text-xl" />{location} </p>
                        <p className="flex gap-1"><CiDollar className="text-xl" /> Salary: {salary}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${id}`}><button className="btn btn-primary text-xl text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleAppliedJob.propTypes ={
    job : PropTypes.object.isRequired,
}

export default SingleAppliedJob;