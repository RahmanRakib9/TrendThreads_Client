import Image from 'next/image'
import bannerImg from "../../assets/photo-1489987707025-afc232f7ea0f.avif"

//TODO: make this section responsive
const Banner = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image alt='Banner Image' src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Aesthetic Clothes!</h1>
                    <p className="py-6">Check out our collection of aesthetic room decor for your dream room makeover!</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;