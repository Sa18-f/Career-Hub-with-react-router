import { IoLocationSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const SIngleJob = ({ job }) => {
      const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="h-20"><img className="w-32" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{job_title}</h2>
                <p className="text-xl font-medium my-4">{company_name}</p>
                <div className="flex gap-4">
                    <button className="border border-[#af99afb4] px-4 py-2 text-purple-500 font-medium">{remote_or_onsite}</button>
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
    );
};

export default SIngleJob;