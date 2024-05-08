import { Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>

            <div className="container mx-auto my-6 min-h-[calc(100vh-370px)] ">
                <Outlet />
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Root;