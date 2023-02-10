import CertCard from "./CertCard.js"
import hr from "../assets/curve-hr.svg"


import cpp from "../assets/certs/cpp.png";
import dsa from "../assets/certs/dsa.png";
import mkt from "../assets/certs/mkt.png";
import yoga from "../assets/certs/yoga.png";
import engg from "../assets/certs/engg.png";

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="DSA: Stacks and Queues" img={dsa} issued="Scaler Academy" date="May 2021" />
                <CertCard name="C++ & Data Structures" img={cpp} issued="Extellon" date="July 2022" />
                <CertCard name="Foundations of Digital Marketing and E-commerce" img={mkt} issued="Coursera" date="Nov 2022" />
                <CertCard name="Yoga At Home" img={yoga} issued="Udemy" date="Oct 2021" />
                <CertCard name="Scientist for a Day" img={engg} issued="NASA" date="Jan 2021" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
