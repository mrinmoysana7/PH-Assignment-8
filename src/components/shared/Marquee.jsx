import Marquee from "react-fast-marquee";


const MarqueePage = () => {
    return (
        <Marquee pauseOnHover={true} speed={100} className="p-5 bg-purple-500 text-white">
<p>New Arrivals: Granite | Ceramic | Stone | Weekly Feature: Modern Geometric Pattern | Join the Community</p>
        </Marquee>
    );
};

export default MarqueePage;