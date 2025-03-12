import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomChoiceGenerator = () => {
  const [topText, setTopText] = useState("");
  const [randomChoice, setRandomChoice] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const calculateTextStatistics = (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n").length;
    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines,
    };
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTopText(text);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  const handleRandomise = () => {
    const choices = topText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (choices.length > 0) {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setRandomChoice(randomChoice);
    } else {
      setRandomChoice("");
    }
  };

  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setTopText("");
    setRandomChoice("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Random Choice Generator</title>
          <meta
            name="description"
            content="Easily make quick decisions with RabbitCode's Random Choice Generator. Enter your options and let the tool pick a random choice for you."
          />
          <meta
            name="keywords"
            content="random choice generator, decision maker, random draw picker, pick a random option, online decision tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random Choice Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Random Choice Generator to quickly decide between options. Enter your choices and let the generator make the decision."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random Choice Generator"
          />
          <meta
            name="twitter:description"
            content="Quickly make decisions with RabbitCode's Random Choice Generator. Enter options and let the tool pick one for you."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random Choice Generator</h2>
          <p>
            Our Random Draw Picker, a quick tool for swift decision-making.
            Whether you're choosing a restaurant, selecting a movie, or deciding
            on a project direction, our tool simplifies it all. Eliminate
            indecision by letting our generator make the choice for you.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Enter your choices here..."
              rows="8"
              value={topText}
              onChange={handleTextChange}
              className="textarea-animated"
            />
            <textarea
              placeholder="Randomly chosen option will appear here..."
              rows="8"
              value={randomChoice}
              readOnly
              className="textarea-animated"
            />
          </div>

          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <br />
          <div className="btn1-container">
            <button class="btn-421" onClick={handleRandomise}>
              Randomise
            </button>
            <button class="btn-421" onClick={() => handleCopy(randomChoice)}>
              Copy to Clipboard
            </button>
            <button
              class="btn-421"
              onClick={() => handleDownload(randomChoice, "random-choice.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How does the Random Choice Generator Works?</h3>
          <p>
            The Random Choice Generator is a versatile tool designed to help you
            make decisions quickly and fairly. Simply input your list of
            options, and the generator uses a sophisticated algorithm to select
            a random choice. It's perfect for both personal and professional
            use, ensuring that every decision is impartial and made without
            delays. From settling debates to picking your next book to read, our
            generator is the efficient solution to indecision.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use this tool for draws or raffles?</h3>
          <p>
            Yes, absolutely! Our random choice generator is perfect for draws,
            raffles, giveaways, and any other random selection needs you may
            have. Whether you're picking a winner for a contest, selecting
            teams, or making any other random choice, our tool ensures fairness
            and impartiality in the selection process. Simply input your
            options, and let the generator do the rest, providing you with a
            random and unbiased outcome every time. Enjoy hassle-free draws and
            raffles with our easy-to-use random picker.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomChoiceGenerator;
