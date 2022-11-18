import React, { useEffect } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadFlashCards, makeFlashCardKnown } from "../store/flashCard";
import FlippedCard from "../components/FlippedCard";
import { getCurrentUser } from "../store/user";
import GameScreen from "./GameScreen";
import FlashCardScreen from "./FlashCardScreen";
import WordListScreen from "./WordListScreen";

function ContentScreen() {
  // const [flashCards, setFlashCards] = useState([]);
  // const [knownFlashCards, setKnownFlashCards] = useState([]);
  // const [notKnownFlashCards, setNotKnownFlashCards] = useState([]);
  // const [notSureFlashCards, setNotSureFlashCards] = useState([]);

  const dispatch = useDispatch();
  const { user, entities } = useSelector((state) => state);

  const flashCards = entities.flashCards.list.flashCards?.filter(
    (flashCard) => flashCard.status === "selected"
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user.currentUser && user.currentUser?._id)
      dispatch(loadFlashCards(user.currentUser._id));
  }, [dispatch, user]);

  const handleKnownFlashCard = () => {
    const id = flashCards[flashCards.length - 1]._id;
    dispatch(makeFlashCardKnown(id, "known"));
  };

  const activeClassName = "text-black font-semibold";

  return (
    <>
      {!flashCards ? (
        "loading..."
      ) : (
        <div className="bg-bg-gray2 w-screen h-screen flex flex-col">
          <div className="w-full h-20 bg-white flex flex-row justify-center align-middle sticky shadow-md px-5">
            <Link to="/" className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
            <h2 className="self-center mx-auto">Video Title</h2>
          </div>
          <nav className="flex flex-row justify-between w-full h-12 bg-white">
            <ul className="px-6 self-center">
              <li className="text-text-gray1">
                <NavLink
                  to="flashcard"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Flashcards
                </NavLink>
              </li>
            </ul>
            <ul className="px-6 self-center">
              <li className="text-text-gray1">
                <NavLink
                  to="games"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Games
                </NavLink>
              </li>
            </ul>
            <ul className="px-6 self-center">
              <li className="text-text-gray1">
                <NavLink
                  to="wordlist"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Word List
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/games" element={<GameScreen />} />
            <Route path="/flashcard" element={<FlashCardScreen />} />
            <Route path="/wordlist" element={<WordListScreen />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default ContentScreen;
