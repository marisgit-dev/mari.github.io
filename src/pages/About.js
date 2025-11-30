/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import "../App.css";
import "../css/About.css"
import selfPortrait from "../images/self_portrait.png"

import Skills from "../components/Skills";
import Education from "../components/Education";

export default function About() {
      return (
            <div className="container">
                  <section className="aboutMe">
                        <div>
                              <img 
                                    src={selfPortrait}
                                    alt="Self portrait of Marita Aziga"
                                    className="selfPortrait"
                              />
                        </div>
                        <div>
                              <h1 className="heading">ABOUT ME</h1>
                              <p>
                                    I'm a Software Support student at Mohawk College since 2022. I've been learning about how to make clean and functional applications. 
                                    I started out my journey into front-end development at Mohawk's Graphic Design program with HTML and CSS. Currently, I am studying Javascript and developing my
                                    skills in React.
                              </p>
                              <p>
                                    I am a chill gal that enjoys creating cool sites with a personality. With both my background in the arts and progress through web development,
                                    I like to not only problem-solve but also be creative while doing it.
                              </p>
                        </div>
                  </section>
                  <section>
                        <Skills />
                        <Education />
                  </section>
            </div>
      );
}