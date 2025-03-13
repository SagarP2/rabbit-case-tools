import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";

const StackedTextGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [stackedText, setStackedText] = useState("");

  // Function to stack text horizontally
  const stackText = () => {
    // Format stacked text with line breaks
    const formattedStackedText = `${topText}\n${bottomText}`;
    setStackedText(formattedStackedText.trim());
  };



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

  // Function to handle text download
  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Function to handle copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Function to handle clear text
  const handleClear = () => {
    setTopText("");
    setBottomText("");
    setStackedText("");
  };

  // Calculate statistics based on the stacked text
  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(stackedText);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Stacked Text Generator</title>
          <meta
            name="description"
            content="Create visually striking stacked text with RabbitCode's Stacked Text Generator. Perfect for designers and content creators looking to add a unique touch to their digital projects."
          />
          <meta
            name="keywords"
            content="stacked text generator, visual text design, text formatting, online tool, design tool, text effects"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Stacked Text Generator"
          />
          <meta
            property="og:description"
            content="Transform ordinary text into visually layered stacked text with RabbitCode's Stacked Text Generator. Add a creative touch to your digital designs."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Stacked Text Generator"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode's Stacked Text Generator to create layered, eye-catching text designs for your digital projects. Perfect for designers and content creators."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Stacked Text Generator</h2>
          <p>
          Transforming ordinary text into multi-layered visual text design.
            Perfect for designers, content creators, and anyone looking to add a
            unique touch to their digital projects. Start creating today and see
            how your text stands out here.
          </p>

          <div className="textarea-container">
            <label>Top Text:</label>

            <textarea
              className="textarea-animated"
              value={topText}
              onChange={(e) => {
                setTopText(e.target.value);
                stackText(); // Update stacked text whenever top text changes
              }}
              placeholder="Start typing your top text here..."
              rows="2"
            />
          </div>

          <div className="textarea-container">
            <label>Bottom Text:</label>
            <textarea
              className="textarea-animated"
              value={bottomText}
              onChange={(e) => {
                setBottomText(e.target.value);
                stackText(); // Update stacked text whenever bottom text changes
              }}
              placeholder="Start typing your bottom text here..."
              rows="2"
            />
          </div>

          <div className="stacked-container-wrapper">
            <div className="stacked-container">
              <p className="top-text">{topText}</p>
              <p className="bottom-text">{bottomText}</p>
            </div>
          </div>

          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              className="btn-421"
              onClick={() => handleDownload(stackedText, "stacked_text.txt")}
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
            text. For example:
          </p>
          <p>eͨxͬpͤrͣeͭsͥsͮiͤon</p>
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

export default StackedTextGenerator;
























