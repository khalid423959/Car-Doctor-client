import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl h-[200px] lg:h-[400px]" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-10 lg:right-[5.5rem] top-1/2 border-8 border-white h-36 lg:h-72" />
                </div>
                <div className='lg:w-1/2 space-y-7'>
                    <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="text-3xl lg:text-5xl font-bold w-96">We are qualified & of experience in this field</h1>
                    <p className='text-[#737373] w-96'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="w-96">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-success bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;