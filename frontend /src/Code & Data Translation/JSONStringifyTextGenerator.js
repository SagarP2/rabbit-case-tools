import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const JSONStringifyTextGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
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

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
    try {
      setOutputText(JSON.stringify(text));
    } catch (error) {
      setOutputText("Invalid input for JSON stringify");
    }
  };

  const handleOutputChange = (e) => {
    const text = e.target.value;
    setOutputText(text);
    try {
      setInputText(JSON.parse(text));
    } catch (error) {
      setInputText("Invalid JSON string");
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "JSONStringifiedText.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - JSON Stringify Text Generator</title>
          <meta
            name="description"
            content="Generate JSON stringified text easily with RabbitCode. Paste your regular text, and instantly get the JSON stringified version for use in your projects."
          />
          <meta
            name="keywords"
            content="JSON stringify, JSON string, text to JSON, online JSON tool, JSON converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - JSON Stringify Text Generator"
          />
          <meta
            property="og:description"
            content="Generate JSON stringified text for your projects. Convert plain text into JSON format with ease using RabbitCode."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - JSON Stringify Text Generator"
          />
          <meta
            name="twitter:description"
            content="Generate JSON stringified text for your projects. Paste your text and get it converted into JSON with RabbitCode."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>JSON Stringify Text Generator</h2>
          <p>
            This tool helps you produce JSON Stringify text. Simply enter your
            normal text in the left panel and then see it generated for you to
            copy and paste in the next panel.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
              value={inputText}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              value={outputText}
              onChange={handleOutputChange}
              readOnly
            />
          </div>
          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>

          <div className="btn1-container">
            <button class="btn-421" onClick={handleDownload}>
              Download Text
            </button>
            <button class="btn-421" onClick={handleCopy}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>JSON Stringify Text</h3>
          <p>
            Created by developers for developers. This JSON Stringly text
            generator aims to save you time when correctly formatting for
            Stringified Text. Simply enter the text as you would normally on the
            left panel.
          </p>
          Then as you do so, you should see the Stringified Text version getting
          generated on the right hand panel then you can simply copy and paste
          that across.
          <p>
            So you should see where there are new lines these get the /n symbols
            generated as well as tabs being converted to /t symbols and the
            whole quote gets wrapped up in speech marks. As always, please do
            let us know if you have any potential questions with regards to the
            JSON Stringify text generator and we will be more than happy to help
            you further and if you have any recommendations of your own on how
            we can improve the tool, we’d love to hear them.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JSONStringifyTextGenerator;
