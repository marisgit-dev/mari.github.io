/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import "../App.css"
import "../css/Skills.css"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Skills() {
    return (
        <div className="bodyContainer">
            <h2>Skills</h2>
            <section className="skillsContainer">
                <div>
                    <div className="skillHeading">
                        <TerminalIcon fontSize="large"/>
                        <h3>Technical Skills</h3>
                    </div>
                    <h4>Programming & Markup Languages</h4>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>C#</li>
                    </ul>
                    <h4>Tools</h4>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Bash</li>
                    </ul>
                    <h4>Libraries</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <div className="skillHeading">
                        <Diversity1Icon />
                        <h3>Soft Skills</h3>
                    </div>
                    <p>
                        When I'm not learning a linux and web developement, I volunteer for the Hamilton Literacy Council as Literacy Tutor; helping adults learn how to read.
                        I enjoy taking short walks in nature and taking care of my house plants. I sometimes watch K-Dramas and C-Dramas with my family.
                        But my long time favorite hobby is painting with watercolors or digitally in Krita. 
                    </p>
                </div>
            </section>
        </div>
    );
}