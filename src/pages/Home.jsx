import { AboutSection } from "../componets/AboutMe";
import { ContactSection } from "../componets/ContactSection";
import { Footer } from "../componets/Footer";
import { HeroSection } from "../componets/HeroSection";
import { Navbar } from "../componets/Navbar"; // FIXED: Changed components to componets
import { ProjectsSection } from "../componets/ProjectSection";
import { SkillsSection } from "../componets/SkillSection";
import { StarBackground } from "../componets/StarBackground";
import { ThemeToggle } from "../componets/ThemeToggle";

export const Home = () =>{
    return(
        // The background/text color classes were removed earlier to prevent the 500 error
        <div className = "min-h-screen overflow-x-hidden"> 
        
        {/*Theam Toggle */}
            <ThemeToggle />
        {/*BackGraound Effect*/}
            <StarBackground />
        {/*Navbar*/}
            <Navbar />
        {/* Main Content*/ }
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        {/*Footer*/}
        <Footer />
        </div>

    );
};