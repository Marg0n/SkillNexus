import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Helmet } from 'react-helmet-async';
import Slider from "../components/Slider";
import TabCategories from "../components/TabCategories";
// import logo from '/SkillNexus_logo.png';



const Home = () => {

    // loader
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="my-4">
            <Helmet>
                <title>SkillNexus | Home</title>
            </Helmet>
            <div className='h-[calc(dvh-240px)] my-4'>
                <Slider />
            </div>

            <div className="my-16">
                <div className="text-center my-6 space-y-4">
                    <h3 className="text-3xl font-serif text-center">
                    Browse Job Categories
                    </h3>
                    <p className="text-base">Choose you choice from our available categories!</p>
                </div>
                
                <TabCategories/>
            </div>
        </div>
    );
};

export default Home;