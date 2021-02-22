import "./About.css";
import "../Components/Cofounders";
import IMG from "../assets/logo.jpg";
import Cofounders from "../Components/Cofounders";

function About() {
    return (
        <div>

            <h1>About us</h1>

            <div className="description">
                <p id="desc">Sigmatic is committed to providing quality cable harnesses and Assemblies. We ensure precision assembly for every lot we manufacture. 
                With a combined 15 years of experience we strive to maintain and build trust with our partners and 
                customers, and take the lead bringing manufacturing back to America. 
                </p>
            </div>
            <div class="Cofounders">
                <h1>Co-Founders</h1>
                <Cofounders name="Jeramey Wilson" image={IMG} description="Our Co-Founder Jeramey has 10 years experience in manufacturing of Electronic assemblies and 
                    Cable harness for the Aerospace and Automotive industry working for companies like SpaceX. 
                    He holds a Certifications for Six Sigma and is a Certified IPC Trainer for J-Standard."/>
            
                <Cofounders name="Daniel Zatarain" image={IMG} description="Our Co-Founder Daniel 5 years experience manufacturing Electronic Assemblies 
                    and Cable Harnesses working in the Defense contracting industry. He holds Certifications for 
                    Six Sigma, and is a Certified IPC Specialist. " />
            </div>
        </div>
    )
}

export default About
