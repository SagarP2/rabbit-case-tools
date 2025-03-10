import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
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

const hexToText = (hex) => {
  let text = "";
  hex.split(" ").forEach((hexChar) => {
    text += String.fromCharCode(parseInt(hexChar, 16));
  });
  return text;
};

const textToHex = (text) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
    .join(" ");
};

const HextoTextConverter = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const handleTopTextChange = (e) => {
    const text = e.target.value;
    setTopText(text);
    setBottomText(textToHex(text));
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  const handleBottomTextChange = (e) => {
    const hex = e.target.value;
    setBottomText(hex);
    setTopText(hexToText(hex));
    const statistics = calculateTextStatistics(hexToText(hex));
    setTextStatistics(statistics);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([bottomText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted_text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(bottomText);
  };

  const handleClear = () => {
    setTopText("");
    setBottomText("");
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
          <title>RabbitCode - Hex to Text Converter</title>
          <meta
            name="description"
            content="Convert hexadecimal strings to text with RabbitCode's free online Hex to Text Converter. Just enter your hex string and get the readable text instantly."
          />
          <meta
            name="keywords"
            content="Hex to Text, Hexadecimal to Text, convert hex to text, online hex converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Hex to Text Converter"
          />
          <meta
            property="og:description"
            content="Convert hexadecimal strings to text with RabbitCode's free Hex to Text Converter. Simple and easy to use."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Hex to Text Converter"
          />
          <meta
            name="twitter:description"
            content="Convert hexadecimal strings to text with RabbitCode's Hex to Text Converter. Fast and easy conversion."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Hex to Text Converter</h2>
          <p>
            This online converter allows you to convert hexadecimal strings to
            text. Simply enter the hex string into the input field and see the
            result on the right.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              className="textarea-animated"
              rows="8"
              value={topText}
              onChange={handleTopTextChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              className="textarea-animated"
              rows="8"
              value={bottomText}
              onChange={handleBottomTextChange}
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
            <button class="btn-421" onClick={handleCopyToClipboard}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Text to Hex and Hex to Text</h3>
          <p>
            This online tool allows you to convert hexadecimal codes into text
            and vice versa. This is a great way to ensure that the code you are
            entering is correct and to avoid any potential errors.
          </p>
          <p>
            To use the converter, simply enter the hex code in the text box
            provided and see the result on the right. You can then copy and
            paste this text into your project.
          </p>
          <p>
            The converter can handle both upper and lowercase letters, as well
            as numbers. It also supports symbols such as !$%&*()+.
          </p>
          <p>
            If you need to convert a large string of hex codes, you can do so by
            separating the codes with spaces. For example, if you wanted to
            convert the string "A1 B2 C3" into text, you would enter "A1 B2 C3"
            into the text box and "41 31 20 42 32 20 43 33" would be displayed
            in the box beside it.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is the purpose of this online converter?</h3>
          <p>
            This online converter allows you to convert hexadecimal strings to
            text and vice versa. It's a useful tool to ensure the code you're
            entering is correct and to avoid potential errors.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How do I use the converter?</h3>
          <p>
            To use the converter, simply enter the hex code in the text box
            provided and see the result on the right. You can then copy and
            paste this text into your project.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What types of characters can the converter handle?</h3>
          <p>
            The converter can handle both upper and lowercase letters, as well
            as numbers. It also supports symbols such as !$%&*()+.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How do I convert a large string of hex codes?</h3>
          <p>
            If you need to convert a large string of hex codes, you can do so by
            separating the codes with spaces. For example, if you wanted to
            convert the string "A1 B2 C3" into text, you would enter "A1 B2 C3"
            into the text box and "41 31 20 42 32 20 43 33" would be displayed
            in the box beside it.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HextoTextConverter;
