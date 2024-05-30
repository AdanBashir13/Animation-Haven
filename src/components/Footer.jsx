import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col'>
                        <h4>Socials</h4>
                        <ul className="list-unstyled">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col'>
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li>Guides</li>
                            <li>Research</li>
                            <li>Experts</li>
                            <li>Agencies</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='rowsm'>
                        &copy;{new Date().getFullYear()} ANIMATION HAVEN INC | All rights reserved | Terms of service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
