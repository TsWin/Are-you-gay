import * as React from 'react';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://are-you.gay">
                    <h2 className="title is-2 has-text-white">Are you gay ?</h2>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    {/* <div className="navbar-item searchBar">
                        <h3 className="is-3 has-text-white">Let's find out</h3>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" placeholder="Your name" />
                            </div>
                            <div className="control">
                                <button className="button is-info">Search</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="navbar-item">
                        <a href='/quizz' className="button is-outlined is-gay1">
                            Quizz
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a href='#stats' className="button is-outlined is-gay2" disabled>
                            Stats
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a href='#contact' className="button is-outlined is-gay3">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
