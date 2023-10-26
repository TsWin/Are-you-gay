import React, { useEffect, useState } from 'react';
import config from '../config';
import Question from '../components/Question';
import { loadQuestions, loadTextUtils } from '../assets/questions/';
import scoreFinder from '../components/scoreFinder';
import Header from '../components/Header';

function Quizz() {
    const [language, setLanguage] = useState(config.defaultLanguage);
    const [textUtils, setTextUtils] = useState(loadTextUtils(config.defaultLanguage));
    const [questions, setQuestions] = useState(loadQuestions(config.defaultLanguage));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [numAnswers, setNumAnswers] = useState(0);
    const [score, setScore] = useState(0);

    function handleAnswer(points, answer, index) {
        const answeredQuestion = {
            id: questions[currentQuestion].id,
            answer: questions[currentQuestion].answers[index],
            answerIndex: index,
            points: questions[currentQuestion].points[index]
        };
        
        const answeredQuestions = JSON.parse(sessionStorage.getItem('answeredQuestions')) || [];
        answeredQuestions[currentQuestion] = answeredQuestion;
        sessionStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));

        setNumAnswers(numAnswers + 1);
        setCurrentQuestion(currentQuestion + 1);
        setScore(score + points);
    }

    function handleLanguageChange(event) {
        setLanguage(event.target.value);
        setQuestions(loadQuestions(event.target.value));
        setTextUtils(loadTextUtils(event.target.value));
    }

    function handleRetry() {
        sessionStorage.removeItem('answeredQuestions');
        setCurrentQuestion(0);
        setNumAnswers(0);
        setScore(0);
    }

    // function handleSaveQuizz() {
    //     // create
    // }

    useEffect(() => {
        const answeredQuestions = JSON.parse(sessionStorage.getItem('answeredQuestions')) || [];
        if (answeredQuestions.length > 0) {
            setCurrentQuestion(answeredQuestions.length);
            setNumAnswers(answeredQuestions.length);
            setScore(answeredQuestions.reduce((total, question) => total + question.points, 0));
        }
    }, []);

    return (
        <>
            <section className="hero is-fullheight has-background-black">
                <Header />
                <div className="hero-body has-text-centered">
                    <div className="container is-centered">
                    <progress className="progress is-small is-linear-gradient-gay" value={numAnswers} max={questions.length}></progress>
                        <div className="box">
                            <h1 className="title is-1">Quizz</h1>
                            {score === 0 && (
                                <div className="field">
                                    <label className="label">{textUtils['LANGUAGE_SELECT']}</label>
                                    <div className="control">
                                        <div className="select">
                                            <select value={language} onChange={handleLanguageChange}>
                                                {config.languages.map((language) => (
                                                    <option key={language} value={language}>
                                                        {config.languagesNames[language]}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentQuestion < questions.length && (
                                <Question key={numAnswers} question={questions[currentQuestion]} onAnswer={handleAnswer} />
                            )}
                            {currentQuestion === questions.length && score !== 0 && (
                                <div className="mb-5">
                                    <h2 className="subtitle is-2">{textUtils['RESULT']}</h2>
                                    <p className="subtitle is-3">{scoreFinder(score, language)}</p>
                                    <div className="buttons is-centered">
                                        <button className="button is-medium is-gay3 is-outlined" disabled>
                                            <span className="icon">
                                                <i className="fas fa-share"></i>
                                            </span>
                                            <span>Share</span>
                                        </button>
                                        <button className="button is-medium is-gay2 is-outlined" onClick={handleRetry}>
                                            <span className="icon">
                                                <i className="fas fa-redo-alt"></i>
                                            </span>
                                            <span>Retry</span>
                                        </button>
                                        <a href="/" className="button is-medium is-gay1 is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-home"></i>
                                            </span>
                                            <span>Home</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Quizz;
