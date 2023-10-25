import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <section className="hero is-fullheight landing-background">
                <Header />
                <div className="hero-body"></div>
            </section>
            <section id="contact" className="hero is-fullheight has-background-black">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1 has-text-centered has-text-white">Contact</h1>
                        <p className="paragraph has-text-centered has-text-white mb-6">
                            Feel free to leave us a comment or to give some feedback about this. If you liked it, don't forget to share ;)
                        </p>
                        <div className="buttons is-centered">
                            <button className="button is-medium is-gay1 is-outlined" disabled>
                                <span className="icon">
                                    <i className="fas fa-share"></i>
                                </span>
                                <span>Share</span>
                            </button>
                            <a href="mailto:why@are-you.gay" className="button is-medium is-gay2 is-outlined">
                                <span className="icon">
                                    <i className="fas fa-paper-plane"></i>
                                </span>
                                <span>Email</span>
                            </a>
                            <a href="https://github.com/TsWin/Are-you-gay" className="button is-medium is-gay3 is-outlined">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span>Github</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Home;
