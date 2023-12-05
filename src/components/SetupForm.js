import React from "react";
import { useGlobalContext } from "../context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <div className="quiz-title-div">
        <h1>
          <span className="quiz-span">Uncivil </span>Trivia
        </h1>
        <section className="quiz quiz-small">
          <form className="setup-form">
            <h2>Start here, jerk</h2>
            {/* limit */}
            <div className="form-control">
              <label htmlFor="amount">number of questions</label>
              <select
                name="amount"
                id="amount"
                className="form-input"
                value={quiz.amount}
                onChange={handleChange}
              >
                <option value="10">10 (attention span of a housefly)</option>
                <option value="15">15 (too much thinkin' hurts)</option>
                <option value="20">20 (cocky bastard)</option>
              </select>
            </div>
            {/* category */}
            <div className="form-control">
              <label htmlFor="categories">category</label>
              <select
                name="categories"
                id="categories"
                className="form-input"
                value={quiz.categories}
                onChange={handleChange}
              >
                <option value="sport_and_leisure">Sports & Leisure</option>
                <option value="art_and_literature">Arts & Literature</option>
                <option value="film_and_tv">Film & TV</option>
                <option value="food_and_drink">Eats & Drinks</option>
                <option value="general_knowledge">General Knowledge</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
                <option value="music">Music</option>
                <option value="science">Science</option>
                <option value="society_and_culture">Society & Culture</option>
              </select>
            </div>
            {/* Difficulty */}
            <div className="form-control">
              <label htmlFor="difficulty">difficulty</label>
              <select
                name="difficulty"
                id="difficulty"
                className="form-input"
                value={quiz.difficulty}
                onChange={handleChange}
              >
                <option value="medium">Blowhard</option>
                <option value="hard">Arrogant Know-it-all</option>
              </select>
            </div>
            {error && (
              <p className="error">
                Can't generate questions. you must've fucked up.
              </p>
            )}
            <button type="submit" onClick={handleSubmit} className="submit-btn">
              start
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SetupForm;
