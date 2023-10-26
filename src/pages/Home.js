import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import QuizzImage from '../assets/images/quizz-image.jpg';

function Home() {
  return (
    <>
      <section className="hero is-fullheight landing-background">
        <Header />
      </section>
      <section id="quizz" className="hero is-fullheight has-background-black">
        <div className="hero-body">
          <div className="container">
            <div className="tile is-ancestor is-flex-mobile is-flex-tablet">
              {/* Text or buttons section */}
              <div className="tile is-parent is-3 is-vertical">
                <div className="tile is-child">
                  <h1 className="title is-1 has-text-white">Try our quizz</h1>
                  <p className="paragraph has-text-white">
                    Check out our quizz to find out who you really are. It's free and it will only take a few minutes.
                  </p>
                </div>
                <div className="tile is-child">
                  <div className="buttons">
                    <a href="/quizz" className="button is-medium is-gay1 is-outlined">
                      <span className="icon">
                        <i className="fas fa-question-circle"></i>
                      </span>
                      <span>Quizz</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Image section */}
              <div className="tile is-parent">
                <div className="tile is-child homeImage">
                    {/* <img className='image' src={QuizzImage} alt="Quizz" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="hero is-fullheight has-background-black">
        <div className="hero-body">
          <div className="container">
            <div className="tile is-ancestor is-flex-mobile is-flex-tablet">
              {/* Image section */}
              <div className="tile is-parent">
                <div className="tile is-child">
                  {/* <img src="contact-image.jpg" alt="Contact" /> */}
                </div>
              </div>
              {/* Text or buttons section */}
              <div className="tile is-parent is-3 is-vertical">
                <div className="tile is-child">
                  <h1 className="title is-1 has-text-white">Contact</h1>
                  <p className="paragraph has-text-white">
                    Feel free to leave us a comment or to give some feedback about this. If you liked it, don't forget to share ;)
                  </p>
                </div>
                <div className="tile is-child">
                  <div className="buttons">
                    <button className="button is-medium is-gay1 is-outlined" disabled>
                      <span className="icon">
                        <i className="fas fa-share"></i>
                      </span>
                      <span>Share</span>
                    </button>
                    <a href="mailto:why@are-you.gay" className="button is-medium is-gay2 is-outlined">
                      <span className="icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span>Contact us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;