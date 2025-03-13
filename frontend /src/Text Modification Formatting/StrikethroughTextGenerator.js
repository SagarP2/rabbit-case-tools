import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const StrikethroughTextGenerator = () => {
  const [topText, setTopText] = useState("");
  const [stackedText, setStackedText] = useState("");
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
    setStackedText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTopText(text);
    const strikethroughText = text
      .split("")
      .map((char) => (char !== " " ? char + "\u0336" : " "))
      .join("");
    setStackedText(strikethroughText);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Strikethrough Text Generator</title>
          <meta
            name="description"
            content="Create strikethrough text with RabbitCode’s Strikethrough Text Generator. Convert your standard text into crossed-out text easily with this online tool."
          />
          <meta
            name="keywords"
            content="strikethrough text, crossed-out text, text generator, online tool, strikeout text, text formatting"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Strikethrough Text Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode’s Strikethrough Text Generator to convert normal text into crossed-out text. Perfect for making text visually stand out in your designs."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Strikethrough Text Generator"
          />
          <meta
            name="twitter:description"
            content="Create striking, crossed-out text with RabbitCode’s Strikethrough Text Generator. Easily convert standard text into strikeout text for creative purposes."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Strikethrough Text Generator</h2>
          <p>
            Simple and easy to use strikethrough text generator. Convert
            standard text into crossed out text with this online strike text
            generator. Type normal text on the left and have the content come
            out with crossed out font through the strikeout generator.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Start typing your notes here..."
              rows="8"
              value={topText}
              onChange={handleTextChange}
            />
            <textarea
              className="textarea-animated"
              placeholder="Converted text will appear here..."
              rows="8"
              value={stackedText}
              readOnly
            />
          </div>
          <br />
          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() =>
                handleDownload(stackedText, "strikethrough-text.txt")
              }
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(stackedText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How the Stacked Text Generator Works?</h3>
          <p>
            The Stacked Text Generator allows users to create multi-level text
            layouts, where words or phrases are visually layered or stacked atop
            each other. This tool is ideal for crafting eye-catching titles,
            emphasising key messages, or adding a modern twist to traditional
            text.
          </p>
          <p>For example:- eͨxͬpͤrͣeͭsͥsͮiͤon</p>
          <p>
            Add text to the two fields, and you will be able to customise your
            text stack to fit your specific design needs. It may require some
            adjusting but the two text fields should overlay over the top of one
            another. Add extra spaces in the top text box to move characters
            along.
          </p>
          <p>
            There are some limitations to this tool as it only works with these
            letters: aeioucdhmrtvx. If you use any other letters, they will be
            displayed next to the bottom characters instead using superscript as
            our small text generator tool uses. This is a limitation of unicode
            and the characters that are available to use.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrikethroughTextGenerator;
