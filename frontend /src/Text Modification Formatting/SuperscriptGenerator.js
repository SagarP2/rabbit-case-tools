import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Superscript mapping
const superscriptMap = {
  a: "ᵃ",
  b: "ᵇ",
  c: "ᶜ",
  d: "ᵈ",
  e: "ᵉ",
  f: "ᶠ",
  g: "ᵍ",
  h: "ʰ",
  i: "ⁱ",
  j: "ʲ",
  k: "ᵏ",
  l: "ˡ",
  m: "ᵐ",
  n: "ⁿ",
  o: "ᵒ",
  p: "ᵖ",
  q: "ᑫ",
  r: "ʳ",
  s: "ˢ",
  t: "ᵗ",
  u: "ᵘ",
  v: "ᵛ",
  w: "ʷ",
  x: "ˣ",
  y: "ʸ",
  z: "ᶻ",
  A: "ᴬ",
  B: "ᴮ",
  C: "ᶜ",
  D: "ᴰ",
  E: "ᴱ",
  F: "ᶠ",
  G: "ᴳ",
  H: "ᴴ",
  I: "ᴵ",
  J: "ᴶ",
  K: "ᴷ",
  L: "ᴸ",
  M: "ᴹ",
  N: "ᴺ",
  O: "ᴼ",
  P: "ᴾ",
  Q: "ᑫ",
  R: "ᴿ",
  S: "ˢ",
  T: "ᵀ",
  U: "ᵁ",
  V: "ⱽ",
  W: "ᵂ",
  X: "ˣ",
  Y: "ʸ",
  Z: "ᶻ",
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
};

const SuperscriptGenerator = () => {
  const [topText, setTopText] = useState("");
  const [superscriptText, setSuperscriptText] = useState("");
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
    setSuperscriptText("");
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
    const transformedText = text
      .split("")
      .map((char) => superscriptMap[char] || char)
      .join("");
    setSuperscriptText(transformedText);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Superscript Generator</title>
          <meta
            name="description"
            content="Transform your text into superscript format with RabbitCode’s Superscript Generator. Perfect for mathematical notations, footnotes, and more!"
          />
          <meta
            name="keywords"
            content="superscript text, text formatting, online tool, superscript generator, text converter, formatting tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Superscript Generator"
          />
          <meta
            property="og:description"
            content="Easily convert your regular text into superscript with RabbitCode’s Superscript Generator. Ideal for creating footnotes and mathematical notations."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Superscript Generator"
          />
          <meta
            name="twitter:description"
            content="Convert your regular text into superscript with ease using RabbitCode’s Superscript Generator. Great for footnotes, powers, and more!"
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Superscript Generator</h2>
          <p>
            Elevate your text with the nuanced touch of superscript formatting?
            Look no further; you've landed on the perfect platform to
            effortlessly transform your text into superscript form.
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
              value={superscriptText}
              readOnly
            />
          </div>

          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() =>
                handleDownload(superscriptText, "superscript-text.txt")
              }
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(superscriptText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Superscript Generator Work?</h3>
          <p>
            Superscript text is a format where characters are set slightly above
            the normal line of type. This is commonly used for citing footnotes,
            mathematical expressions, or denoting special characters in chemical
            formulas (for example, "E=mc²"). Superscript also doubles up quite
            nicely for writing small text, offering you multiple ways to enhance
            your content.
          </p>
          <p>
            Using our Superscript Generator is straightforward. Simply input
            your normal text into the designated panel, and it will
            automatically be converted into superscript format for you in the
            panel next to it. Once converted, just copy and paste the text into
            your desired document or application. It's as easy as that!
          </p>
          <p>For example:- ᵗʰⁱˢ ⁱˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ᵗⁱⁿʸ ᵗᵉˣᵗ ᶜᵃˢᵉ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuperscriptGenerator;
