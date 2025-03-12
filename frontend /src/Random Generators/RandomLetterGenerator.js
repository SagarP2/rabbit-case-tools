import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomLetterGenerator = () => {
  const [latinLetter, setLatinLetter] = useState("");
  const [cyrillicLetter, setCyrillicLetter] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const generateRandomLatinLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  const generateRandomCyrillicLetter = () => {
    const letters =
      "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя";
    return letters.charAt(Math.floor(Math.random() * letters.length));
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

  const handleRandomiseLatin = () => {
    const randomLatinLetter = generateRandomLatinLetter();
    setLatinLetter(randomLatinLetter);
    const statistics = calculateTextStatistics(randomLatinLetter);
    setTextStatistics(statistics);
  };

  const handleRandomiseCyrillic = () => {
    const randomCyrillicLetter = generateRandomCyrillicLetter();
    setCyrillicLetter(randomCyrillicLetter);
    const statistics = calculateTextStatistics(randomCyrillicLetter);
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
    setLatinLetter("");
    setCyrillicLetter("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  useEffect(() => {
    handleRandomiseLatin();
    handleRandomiseCyrillic();
  }, []);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Random Letter Generator</title>
          <meta
            name="description"
            content="Generate random letters instantly with RabbitCode's Random Letter Generator. Ideal for creative tasks, teaching, or simply having fun."
          />
          <meta
            name="keywords"
            content="random letter generator, generate random letter, random character tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random Letter Generator"
          />
          <meta
            property="og:description"
            content="Create random letters instantly with RabbitCode's Random Letter Generator. Perfect for creative, educational, or fun projects."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random Letter Generator"
          />
          <meta
            name="twitter:description"
            content="Generate random letters for creative or educational tasks using RabbitCode's Random Letter Generator."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random Letter Generator</h2>
          <p>
            Welcome to our Random Letter Generator, a simple yet powerful tool
            designed to create random letters instantly. Whether you're looking
            for a creative spark, teaching tools, or just a bit of fun, our
            generator is here to help.
          </p>
          <div className="textarea-container">
            <textarea
              rows="4"
              readOnly
              placeholder="Random Latin Letter"
              className="textarea-animated"
              value={latinLetter}
            />

            <div className="btn-container">
              <button class="btn-421" onClick={handleRandomiseLatin}>
                Randomise Latin
              </button>
              <button class="btn-421" onClick={() => handleCopy(latinLetter)}>
                Copy to Clipboard
              </button>
              <button class="btn-421" onClick={handleClear}>
                Clear
              </button>
            </div>

            <textarea
              rows="4"
              readOnly
              className="textarea-animated"
              placeholder="Random Cyrillic Letter"
              value={cyrillicLetter}
            />
          </div>

          <div className="btn-container">
            <button class="btn-421" onClick={handleRandomiseCyrillic}>
              Randomise Cyrillic
            </button>
            <button class="btn-421" onClick={() => handleCopy(cyrillicLetter)}>
              Copy to Clipboard
            </button>

            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How the Random Letter Generator Works</h3>
          <p>
            Our Random Letter Generator is an easy-to-use online tool that
            produces random letters from the alphabet with the click of a
            button. Ideal for educators, parents, and creatives, this tool
            offers a versatile way to generate letters for a variety of
            purposes. From brainstorming sessions and art projects to
            educational games and learning activities, the Random Letter
            Generator provides an endless stream of letters to inspire and
            engage. Simply select your criteria, and let our tool do the rest,
            delivering random letters directly to your screen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomLetterGenerator;
