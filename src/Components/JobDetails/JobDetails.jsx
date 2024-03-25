import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const handleApplyBtn = () =>{
        saveJobApplications(idInt);
        toast("You've applied successfully!");
    }
    return (
        <section>
            <h2 className="text-center text-4xl font-bold">Job Details</h2>
            <div className="grid grid-cols-3 gap-10 my-10">
                <div className="col-span-2 p-3 font-bold text-2xl space-y-4">
                    <p>Job Description : <span className="text-[#757575] font-normal">{job.job_description}</span> </p>
                    <p>Job Responsibility : <span className="text-[#757575] font-normal">{job.job_responsibility}</span></p>
                    <p>Educational Requirements : <span className="text-[#757575] font-normal">{job.educational_requirements}</span></p>
                    <p>Experiences : <span className="text-[#757575] font-normal">{job.experiences}</span></p>
                </div>
                <div>
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mt-4 p-2">
                        <h3 className="text-xl font-medium border-b border-black p-3">Job details</h3>
                        <div className="p-3 font-medium text-lg">
                            <p className="my-2">Salary : <span className="text-[#757575]">{job.salary}</span> </p>
                            <p className="my-2">Job Title : <span className="text-[#757575]">{job.job_title}</span> </p>
                        </div>
                        <h3 className="text-xl font-medium border-b border-black p-3">Contact Information</h3>
                        <div className="p-3 font-medium text-lg space-y-2">
                            <p>Phone : <span className="text-[#757575]">{job.contact_information.phone} </span></p>
                            <p>Email : <span className="text-[#757575]">{job.contact_information.email}</span> </p>
                            <p>Address : <span className="text-[#757575]">{job.contact_information.address}</span> </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button onClick={handleApplyBtn} className="bg-purple-500 rounded-lg w-full py-3 text-white font-bold">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default JobDetails;