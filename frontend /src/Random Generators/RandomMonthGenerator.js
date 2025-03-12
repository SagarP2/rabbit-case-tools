import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomMonthGenerator = () => {
  const [month, setMonth] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateRandomMonth = () => {
    return months[Math.floor(Math.random() * months.length)];
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
    const randomMonth = generateRandomMonth();
    setMonth(randomMonth);
    const statistics = calculateTextStatistics(randomMonth);
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
    setMonth("");
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
          <title>RabbitCode - Random Month Generator</title>
          <meta
            name="description"
            content="Easily select a random month using RabbitCode's Random Month Generator. Ideal for planning, decision making, or fun activities."
          />
          <meta
            name="keywords"
            content="random month generator, select random month, generate month, month picker tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random Month Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Random Month Generator to pick months at random. Great for event planning, decision making, and more."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random Month Generator"
          />
          <meta
            name="twitter:description"
            content="Generate random months easily with RabbitCode's Random Month Generator. Perfect for decision making, planning, and more."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random Month Generator</h2>
          <p>
            Your go-to tool for selecting months at random. Whether you're
            planning future events, making decisions, or just need a random
            pick, this tool simplifies the process.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Month"
              rows="6"
              readOnly
              value={month}
            />
          </div>
          <br />
          <div className="btn-container">
            <button class="btn-421" onClick={handleRandomise}>
              Randomise
            </button>
            <button class="btn-421" onClick={() => handleCopy(month)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How the Random Month Generator Works</h3>
          <p>
            The random month generator tool selects a month at random from
            January to December. This tool is perfect for a variety of uses,
            from planning projects, assigning tasks with no specific deadlines,
            or even educational purposes. It eliminates bias and ensures a fair
            selection, making decision-making processes smoother and more
            straightforward.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomMonthGenerator;
