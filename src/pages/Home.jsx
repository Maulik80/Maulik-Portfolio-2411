import { AboutSection } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar"; // FIXED: Changed components to components
import { ProjectsSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

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