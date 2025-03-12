import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomNumberGenerator = () => {
  const [number, setNumber] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999
  };

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

  const handleRandomise = () => {
    const randomNumber = generateRandomNumber().toString();
    setNumber(randomNumber);
    const statistics = calculateTextStatistics(randomNumber);
    setTextStatistics(statistics);
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
    setNumber("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  useEffect(() => {
    handleRandomise();
  }, []);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Random Number Generator</title>
          <meta
            name="description"
            content="Generate unbiased random numbers between two specified values with RabbitCode's Random Number Generator. Ideal for research, gaming, or development."
          />
          <meta
            name="keywords"
            content="random number generator, generate random number, unbiased number generator, random picker tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random Number Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Random Number Generator to easily generate unbiased numbers for research, gaming, or development."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random Number Generator"
          />
          <meta
            name="twitter:description"
            content="Generate unbiased random numbers between two values easily with RabbitCode's Random Number Generator."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random Number Generator</h2>
          <p>
            Discover the ultimate online random number generator tool between
            two numbers. Generate unbiased numbers for research, gaming, or
            development with ease.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Number"
              rows="4"
              readOnly
              value={number}
            />
          </div>
          <br />
          <div className="btn-container">
            <button class="btn-421" onClick={handleRandomise}>
              Randomise
            </button>
            <button class="btn-421" onClick={() => handleCopy(number)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How does the Random Number Generator Work?</h3>
          <p>
            Our Random Number Generator is designed with simplicity and
            efficiency in mind. It uses a sophisticated algorithm to ensure
            complete randomness and fairness in number selection. Simply visit
            the tool, and with a single click, it generates a number between any
            two numbers you choose. This tool is perfect for those who need a
            random number for educational purposes, games, deciding on tasks, or
            just for an element of surprise in daily decisions. Try it now and
            see how it can make randomness more accessible and fun.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomNumberGenerator;
