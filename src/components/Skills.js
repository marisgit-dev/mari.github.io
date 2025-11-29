import "../App.css"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Skills() {
    return (
        <div className="bodyContainer">
            <h2>Skills</h2>
            <div>
                <TerminalIcon />
                <h3>Technical Skills</h3>
                <h4>Programs</h4>
                <ul></ul>
                <h4>Languages</h4>
                <ul></ul>
            </div>
            <div>
                <Diversity1Icon />
                <h3>Soft Skills</h3>
            </div>
        </div>
    );
}