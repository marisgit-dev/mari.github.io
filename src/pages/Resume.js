/**
 * I Marita Aziga, 000368577 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.  
 */
import "../App.css"

export default function Resume() {
      return (
            <div className="container">
                  <h1 className="heading">WORK EXPERIENCE</h1>
                  <section className="bodyContainer">
                        <h2>Customer Service Rep.</h2>
                        <p>Missions Thrift Store | BFM Foundation</p>
                        <p>{`(Sep 2022 - Mar 2023)`}</p>
                        <p>Hamilton, Ontario</p>
                        <ul>
                              <li>
                                    Sorted incoming clothing donations and organized merchandise on the sales floor. 
                                    Placed items with mold or stains in recycling.
                              </li>
                              <li>
                                    Assisted customers with inquiries and provided information about the store.
                              </li>
                              <li>
                                    Maintained store cleanliness and organization before and after closing.
                              </li>
                        </ul>
                        <h2>Customer Service Rep.</h2>
                        <p>Best Buy Canada Contract | Alorica Ltd </p>
                        <p>{`(Oct 2021 - Jan 2022)`}</p>
                        <p>Hamilton, Ontario</p>
                        <ul>
                              <li>
                                    Conducted inbound calls to households and individuals across Canada.
                              </li>
                              <li>
                                    Resolved customer issues and concerns promptly and effectively.                                          </li>
                              <li>
                                    Logged calls and directed customers to the appropriate department.
                              </li>
                        </ul>
                  </section>
                  <h1 className="heading">CERTIFICATIONS</h1>
                  <section className="bodyContainer">   
                        <p>Excellence in Customer Service Training</p>
                  </section>
            </div>
      );
}