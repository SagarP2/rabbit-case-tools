import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RepeatTextGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [repeatedText, setRepeatedText] = useState("");

  // Update the repeated text dynamically whenever inputText changes
  useEffect(() => {
    if (inputText.trim() === "") {
      setRepeatedText("");
    } else {
      // Generate the repeated text with a fixed count of 5, displayed in a single line
      setRepeatedText(Array(5).fill(inputText).join(" "));
    }
  }, [inputText]);

  // Function to calculate text statistics
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

  // Function to download text as a file
  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Function to copy text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Function to clear the text areas
  const handleClear = () => {
    setInputText("");
    setRepeatedText("");
  };

  // Calculate text statistics for the repeated text
  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(repeatedText);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Repeat Text Tool</title>
          <meta
            name="description"
            content="Use RabbitCode's Repeat Text tool to generate text repeated a specified number of times. It's a fast and simple way to repeat your text."
          />
          <meta
            name="keywords"
            content="repeat text, text generator, text repeater, online tools, text manipulation"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="RabbitCode - Repeat Text Tool" />
          <meta
            property="og:description"
            content="Generate repeated text quickly with RabbitCode's online Repeat Text tool. Customize the number of repetitions and get your result instantly."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="RabbitCode - Repeat Text Tool" />
          <meta
            name="twitter:description"
            content="Generate repeated text quickly with RabbitCode's online Repeat Text tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Repeat Text</h2>
          <p>
            This tool allows you to generate text repeated multiple times.
            Simply type in the text you want to repeat, and it will be displayed
            with a fixed number of repetitions.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Type your text here..."
              rows="8"
              className="textarea-animated"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <textarea
              placeholder="Repeated text will appear here..."
              rows="8"
              className="textarea-animated"
              value={repeatedText}
              readOnly
            />
          </div>

          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() => handleDownload(repeatedText, "repeated-text.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(repeatedText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Repeating Text Generator</h3>
          <p>
            Whether you want to input into a database, want a quick way of
            dispatching a lot of the same text, this online tool can prove very
            useful. The text repeater allows you to type your specific text you
            want repeating and then simply amend the settings so you can get as
            many 'repeated' instances of that text as you want.
          </p>
          <p>
            Once, you’re happy with the output then you can simply copy and
            paste the text where you need it. If you need this repeating for
            several words or phrases, this can prove to be a very time efficient
            way of doing so. Let us know if you have any questions and
            recommendations on how we can improve the repeat text generator
            further as well.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RepeatTextGenerator;
