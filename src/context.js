import axios from "axios";
import React, { useState, useContext } from "react";

const API_ENDPOINT = "https://the-trivia-api.com/api/questions?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isInsultModalOpen, setIsInsultModalOpen] = useState(false);
  const [isComplimentModalOpen, setIsComplimentModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    limit: 10,
    categories: "sport_and_leisure",
    difficulty: "hard",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
      console.log(value);
      openComplimentModal();
    } else {
      openInsultModal();
    }
    nextQuestion();
  };

  const compliments = [
    "Expert",
    "Wizard",
    "Smarty Pants",
    "Wise Sage",
    "Nerd",
    "Geek",
    "Braniac",
    "Scholar",
    "Brainbox",
    "Einstein",
    "Rocket Scientist",
    "Intellectualist",
    "Walking Encyclopedia",
    "Academician",
  ];

  const insultNames = [
    "Fuckstick",
    "Cockmuppet",
    "Assclown",
    "Douchemonger",
    "Mouth-breather",
    "Fartbreath",
    "Cockshiner",
    "Cheesedick",
    "Knuckle-dragger",
    "Testicle Taster",
    "Shitstick",
    "Barfbrain",
    "Shitbag",
    "Clueless Cunt",
    "Asshat",
    "Dicknose",
    "Chickenchoker",
    "Pissgargler",
    "Buttmunch",
    "Twatwaffle",
    "Dildo Diddler",
    "Shitstain",
    "Peckerbreath",
    "Cockgobbler",
    "Douchenozzle",
    "Butknuckler",
    "Clitsplitter",
    "Rumpleforeskin",
    "Douchecanoe",
    "Fuckrag",
    "Rumpranger",
    "Nutjuggler",
    "Buttmonkey",
    "LiverLips",
    "MeatWallet",
    "Cumdumpster",
    "Buttjuice",
    "Inbreeder",
    "Fuckwad",
    "Village idiot",
    "Taint Sniffer",
    "Porcupine Porker",
    "Thundercunt",
    "Ass Crouton",
  ];

  const wrongs = [
    "Wrong",
    "Awful",
    "Lousy",
    "Insufficient",
    "Dreadful",
    "Pathetic",
    "Dissatisfactory",
    "Atrocious",
    "Abysmal",
    "Shoddy Work",
    "Horrendous",
    "Reprehensible",
    "Detestable",
    "Egregious",
    "Very Shabby",
    "False",
  ];

  const rights = [
    "Right",
    "Valid",
    "Accurate",
    "Precisely",
    "Exactly",
    "Dead-On",
    "Spot-On",
    "On-Target",
    "True",
    "Good Guess",
    "No Lies Here",
    "Bull's Eye",
  ];

  // Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  // Insult&Compliment Modals
  const openInsultModal = () => {
    setIsInsultModalOpen(true);
    setTimeout(() => setIsInsultModalOpen(false), 2000);
    setTimeout(function () {
      document.getElementById("insult").style.visibility = "hidden";
    }, 1950);
    document.getElementById("insult").style.visibility = "visible";
  };

  const openComplimentModal = () => {
    setIsComplimentModalOpen(true);
    setTimeout(() => setIsComplimentModalOpen(false), 2000);
    setTimeout(function () {
      document.getElementById("compliment").style.visibility = "hidden";
    }, 1950);
    document.getElementById("compliment").style.visibility = "visible";
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { limit, categories, difficulty } = quiz;

    const url = `${API_ENDPOINT}categories=${categories}&limit=${limit}&difficulty=${difficulty}`;
    console.log(url);
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        isInsultModalOpen,
        isComplimentModalOpen,
        quiz,
        handleChange,
        handleSubmit,
        compliments,
        insultNames,
        wrongs,
        rights,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
