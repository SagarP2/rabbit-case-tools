import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const TextReplacementTool = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleReplaceText = () => {
    const regex = new RegExp(searchText, "g");
    setText(text.replace(regex, replaceText));
  };

  const calculateTextStatistics = (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "");
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n");
    return {
      wordCount: words.length,
      letterCount: letters.length,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(text);

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
    setSearchText("");
    setReplaceText("");
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Text Replacer Tool</title>
          <meta
            name="description"
            content="Easily find and replace text in a document using RabbitCode's Text Replacer Tool. Quickly analyze and edit your text."
          />
          <meta
            name="keywords"
            content="text replacer, find and replace text, text tool, online text editor, text manipulation"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="RabbitCode - Text Replacer Tool" />
          <meta
            property="og:description"
            content="Use RabbitCode's Text Replacer Tool to quickly find and replace text in any document. Ideal for text editing and manipulation."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Text Replacer Tool"
          />
          <meta
            name="twitter:description"
            content="Easily find and replace text in a document using RabbitCode's Text Replacer Tool. Ideal for text editing and manipulation."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Text Replacer</h2>
          <p>
            Use this tool to find and replace text within a single text area.
            Enter the text you want to analyze, the text you want to find, and
            the text you want to replace it with.
          </p>
          <br />
          <div className="form-container">
            <label>Text to Find: </label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <br />
          <div className="form-container">
            <label>Text to Replace With: </label>
            <input
              type="text"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
          </div>
          <br />
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Enter your text here..."
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>

          <div className="btn1-container">
            <button class="btn-421" onClick={handleReplaceText}>
              Replace Text
            </button>
            <button
              class="btn-421"
              onClick={() => handleDownload(text, "replaced-text.txt")}
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
          <h3>Find & Replace Text Online</h3>
          <p>
            The text replacer tool is a find and replace tool that allows you to
            replace one portion of text with another.
          </p>
          <p>
            Firstly, paste the text that you're wanting to analyse, and then opt
            to look for the search text options for the text pattern that you're
            looking to replace. Then make sure to provide the new content you
            want that to be replaced with (you should be able to see that within
            the replacement text field).
          </p>
          <p>
            So now you have found the text you want to replace (and where it is
            in the original content) and what you want to replace that text
            with. Then when you're happy with the option, hit 'replace text' -
            saving you time and effort - going through it all manually.
          </p>
          <p>
            If you have any questions about the text replacer tool or any
            suggestions on how we can improve the text replacement tool,
            further, then please do let us know and we will be more than happy
            to help you further.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TextReplacementTool;
