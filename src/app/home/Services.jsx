import { IoCubeOutline } from "react-icons/io5";
import { FiAperture } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";



const Services = () => {
    return (
       <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-4 container mx-auto">
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <IoCubeOutline fontSize={44} className="icon-rotate duration-700 hover:text-[#0c8cd9]"
/>
                    <h2 className="text-lg font-medium">Free installation</h2>
                    <p className="text-sm text-gray-500">Expert setup at no cost</p>
                </div>
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <FiAperture fontSize={44} className="icon-rotate duration-700 hover:text-[#0c8cd9]" />
                    <h2 className="text-lg font-medium">HD camera quality</h2>
                    <p className="text-sm text-gray-500">Crystaclear day & night view</p>
                </div>
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <IoShieldOutline fontSize={44} className="icon-rotate duration-700 hover:text-[#0c8cd9]" />
                    <h2 className="text-lg font-medium">Secure payments</h2>
                    <p className="text-sm text-gray-500">100% Protected checkout</p>
                </div>
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <LuHeadphones fontSize={44} className=" hover:text-[#0c8cd9] icon-rotate duration-700"/>
                    <h2 className="text-lg font-medium">24/7</h2>
                    <p className="text-sm text-gray-500">We are always to help</p>
                </div>
            </div>
       </>
    );
};

export default Services;