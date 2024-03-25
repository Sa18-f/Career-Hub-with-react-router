const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto mt-12 lg:mt-24 bg-[#131318] p-4">
            <div className="lg:p-28 flex lg:justify-between gap-3 flex-col lg:flex-row">
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <h1 className="text-2xl font-extrabold text-white">Get In Touch</h1>
                    <p className="text-[#FFFFFF99] font-medium my-4 text-center lg:text-start"> We are Here to Help!” and “Reach out to us <br /> anytime and well happily answer your question.</p>
                    <div className="flex gap-2 my-3">
                        <img src="./Images/Frame (3).png" alt="" />
                        <p className="text-[#FFFFFF99]">sisazid182713@gmail.com</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="./Images/Frame (4).png" alt="" />
                        <p className="text-[#FFFFFF99]">01810313991</p>
                    </div>
                </div>
                {/* 2nd and 3rd */}
                <div className="flex gap-28 justify-center text-center lg:text-start lg:gap-40">
                    <div>
                        <nav>
                            <h3 className="text-white text-2xl font-extrabold mb-4">Company</h3>
                            <ul className="text-[#FFFFFF99]">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Leadership</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">News & Article</a></li>
                                <li><a href="">Legal Notice</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* 3rd */}
                    <div>
                        <nav>
                            <h3 className="text-white text-2xl font-extrabold mb-4">Support</h3>
                            <ul className="text-[#FFFFFF99]">
                                <li><a href="">Help Center</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Ticket Support</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* 4th */}
                <div className="text-center lg:text-start">
                    <nav>
                        <h3 className="text-white text-2xl font-extrabold mb-4">Services</h3>
                        <ul className="text-[#FFFFFF99]">
                            <li><a href="">Academy</a></li>
                            <li><a href="">Group Lesson</a></li>
                            <li><a href="">Private Lesson</a></li>
                            <li><a href="">Hockeys for kids</a></li>
                            <li><a href="">Hockeys for adult</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;