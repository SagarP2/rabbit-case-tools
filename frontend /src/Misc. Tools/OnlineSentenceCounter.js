import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const OnlineSentenceCounter = () => {
  const [text, setText] = useState("");

  const calculateTextStatistics = () => {
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
    setText("");
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics();

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Online Sentence Counter</title>
          <meta
            name="description"
            content="Quickly count the number of sentences, words, and characters in your text using RabbitCode's online sentence counter tool."
          />
          <meta
            name="keywords"
            content="sentence counter, word counter, character counter, online text tools, text analyzer"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Online Sentence Counter"
          />
          <meta
            property="og:description"
            content="Easily count the sentences, words, and characters in your text with RabbitCode's online sentence counter."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Online Sentence Counter"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode's free online sentence counter tool to analyze the number of sentences, words, and characters in your text."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Online Sentence Counter</h2>
          <p>
            Whether you're working on a short story, an extensive article, or
            even a book, our tool provides fast and accurate sentence counts,
            along with essential information on word and character counts.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder=""
              rows="10"
            />
          </div>
          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() =>
                handleDownload(text, "sentence-counter-content.txt")
              }
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(text)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <p>
            Our Online Sentence Counter is designed to handle texts of any
            length and complexity. From a single sentence to thousands of words
            spread across multiple paragraphs, our tool efficiently calculates
            the total number of sentences. This is particularly useful for
            editing, summarizing, or adhering to specific writing guidelines.
          </p>
          <p>
            The tool is incredibly user-friendly. Simply paste your text into
            the box, and the tool will automatically detect the number of
            sentences, you'll have an accurate sentence count. It's an ideal
            solution for those dealing with poorly formatted texts or texts
            without clear sentence demarcations.
          </p>
          <p>
            Convert Case's Sentence Counter is more than just a counting tool.
            It's a part of our suite of text tools designed to enhance your
            writing and editing process. From word counters to random word
            generators, our tools are crafted to assist in every aspect of your
            writing journey.
          </p>
        </div>
        <br />
      </main>
      <Footer />
    </div>
  );
};

export default OnlineSentenceCounter;
