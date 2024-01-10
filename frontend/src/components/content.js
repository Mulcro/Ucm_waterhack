import React, { useState } from 'react';
import img1 from '../images/linreg.PNG';
import img2 from '../images/polyreg.PNG';
import img3 from '../images/rforestreg.PNG';


import figmalogo from '../images/Figma-logo.svg';
import reactLogo from '../images/React-icon.svg';
import nodeLogo from '../images/Node.js_logo.svg';
import numpyLogo from '../images/NumPy_logo_2020.svg';
import pandasLogo from '../images/Pandas_logo.svg';
import pythonLogo from '../images/Python-logo-notext.png';
import scikitLogo from '../images/pngegg.png';
import CodeSnippet from './codeSnipet';

const Content = () => {
const [viewCode, setViewCode] = useState(false);
  return (
    <div className='content'>
        <section className="goals">
            <h2>Our Goal</h2>
            <p>Based on past precipitation, stage height, and streamflow data from Bear Creek, we strive to come up with a model that is able to predict future floods. This will allow us to better prepare residents for events similar to the ones this year. 
            </p>
        </section>

        <section className="projectProcess">
            <h2 className='approach'>Our Approach</h2>

            <div className="processContent">

                <div className="cleanUpContent">
                    <h3>Data Cleanup</h3>
                    <p>In order to create accurate models and predictions we first needed to make sure all data lined up. This meant removing information from some files, like removing anything that came before Jan 1, 2023 and removing dates that came after 2060.</p>
                </div>

                <div className="regressionContent">
                    <div className="regressionText">
                        <h3>Regression Models</h3>
                        <ul className='regressionItems'>
                            <li>
                                <div className="rgItemChilc">
                                                                                          <h4>Linear Regression</h4>
                                <p>The linear regression model was the most forward approach we initially had but early on we realized that the r-squared value was extremely low making our model inaccurate for predicting what we wanted.</p>
                                </div>

                                <img src={img1} alt="" />

                            </li>
                            <li>
                            <img id="two" src={img2} alt="" /> 
                              <div className="rgItemChilc">
                                                                                         <h4>Polynomial Regression</h4>
                                <p>Similar to the linear model, it adds polynomial terms to the input variables to model nonlinear relationships between the input and output variables. This increased our accuracy but the r_square value was still extremely low, also making our model inaccurate for predictions.</p>
                                </div>

                                
                            </li>
                            <li>
                                <div className="rgItemChilc">
                                                                                          <h4>Random Forest Tree Regression</h4>
                                <p>It gave us the most accurate prediction. For instance, the r-squared was found to be the closest to 1 (≅ 0.81) and the mean squared error (MSE) turned out to be low enough to prove accuracy. </p>
                                </div>

                                <img src={img3} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='regressionImages'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="development">
                    <h3>Challenges</h3>
                    <p>No experience in the related topics: machine learning, data science
                    Learned how to read and take in data that we were given 
                    Learned how to analyze the data using machine learning algorithms in order to make more accurate predictions for the future
                    Since all of out first time learning about Random Forest, we had to learn how to implement it using our given data
                    </p>

                    <div className='techStack'>
                        <p><strong>Tech Stack:</strong> </p>
                        <div>
                            <ul>
                                <li><img src={pythonLogo} alt="" /></li>
                                <li>
                                    <img src={reactLogo} alt="" />
                                    </li>
                                <li>
                                    <img src={nodeLogo} alt="" />
                                    </li>
                                <li>
                                    <img src={figmalogo} alt="" />
                                    </li>
                                <li>
                                    <img className="sciKit" src={numpyLogo} alt="" />
                                    </li>
                                <li>
                                    <img className="sciKit"src={pandasLogo} alt="" />
                                    </li>
                                <li>
                                    <img className="sciKit" src={scikitLogo} alt="" />
                                    </li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
                <button onClick={() => setViewCode(!viewCode)}>Toggle Python Code view</button>
                {viewCode &&
                
                    <>
                        <CodeSnippet/>
                    </>
                }
            </div>
        </section>
    </div>
  )
}
export default Content;