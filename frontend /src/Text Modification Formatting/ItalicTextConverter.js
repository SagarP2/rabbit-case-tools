import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const ItalicTextGenerator = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setTextareaValue(text);
    setConvertedText(convertToItalic(text));
  };

  const convertToItalic = (text) => {
    const italicMap = {
      a: "𝘢",
      b: "𝘣",
      c: "𝘤",
      d: "𝘥",
      e: "𝘦",
      f: "𝘧",
      g: "𝘨",
      h: "𝘩",
      i: "𝘪",
      j: "𝘫",
      k: "𝘬",
      l: "𝘭",
      m: "𝘮",
      n: "𝘯",
      o: "𝘰",
      p: "𝘱",
      q: "𝘲",
      r: "𝘳",
      s: "𝘴",
      t: "𝘵",
      u: "𝘶",
      v: "𝘷",
      w: "𝘸",
      x: "𝘹",
      y: "𝘺",
      z: "𝘻",
      A: "𝘈",
      B: "𝘉",
      C: "𝘊",
      D: "𝘋",
      E: "𝘌",
      F: "𝘍",
      G: "𝘎",
      H: "𝘏",
      I: "𝘐",
      J: "𝘑",
      K: "𝘒",
      L: "𝘓",
      M: "𝘔",
      N: "𝘕",
      O: "𝘖",
      P: "𝘗",
      Q: "𝘘",
      R: "𝘙",
      S: "𝘚",
      T: "𝘛",
      U: "𝘜",
      V: "𝘝",
      W: "𝘞",
      X: "𝘟",
      Y: "𝘠",
      Z: "𝘡",
    };
    return text
      .split("")
      .map((char) => italicMap[char] || char)
      .join("");
  };

  const calculateTextStatistics = () => {
    const text = textareaValue;

    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n");

    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "italic_text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
  };

  const handleClear = () => {
    setTextareaValue("");
    setConvertedText("");
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Italic Text Generator</title>
          <meta
            name="description"
            content="Transform your regular text into italics with RabbitCode's Italic Text Generator. Easily copy and paste italicized text for your content."
          />
          <meta
            name="keywords"
            content="italic text generator, text formatting, online tool, text converter, italic font generator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Italic Text Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Italic Text Generator to quickly convert your regular text into italic font and easily copy it for use in your content."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Italic Text Generator"
          />
          <meta
            name="twitter:description"
            content="Transform your regular text into italics with RabbitCode's Italic Text Generator. Easily copy and paste italicized text for your content."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Italic Text Generator</h2>
          <p>
            If you want to transform your text into an italicized font, you can
            use this simple and free online italic text converter. Just type the
            words you wish to convert into italics in the input field on the
            left, and as you type, the text will automatically be displayed in
            italics on the right. When you're finished, you can easily copy the
            italicized text and paste it wherever you need.
          </p>
          <div className="textarea-container">
            <textarea
              value={textareaValue}
              onChange={handleChange}
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
            />
            <textarea
              value={convertedText}
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              readOnly
            />
          </div>
          <div className="stats-text">
            Words: {calculateTextStatistics().wordCount} | Letters:{" "}
            {calculateTextStatistics().letterCount} | Sentences:{" "}
            {calculateTextStatistics().sentenceCount} | Lines:{" "}
            {calculateTextStatistics().lineCount}
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
          <h3>Italics Font Text Converter</h3>
          <p>
            When you want to highlight something specific for your audience,
            using distinctive text styles can be a smart move. For instance,
            have you considered using italic text to emphasize your content?
            It’s a fantastic idea. Italic text is a powerful tool that helps
            emphasize key points or signals importance. When applied
            effectively, it can transform your text, adding an extra layer of
            style while making a lasting impression.
          </p>
          <p>
            With our italic text converter, you can quickly transform large
            amounts of text in just a few seconds. Simply paste the text you
            want to modify into the left box, and an italicized version will
            appear in the right box. This helps you save time, effort, and
            frustration. Rather than manually editing with the functions of a
            word processor, this tool automatically adjusts everything to suit
            your needs.
          </p>
          <p>
            Time is a precious resource, and finding ways to save time during
            the editing process is essential. That’s why we strongly encourage
            you to explore the various options available through our text
            converter.
          </p>
          <p>
            An italic text converter can quickly transform an entire block of
            text, giving it a cleaner and more polished appearance. It's perfect
            for adding emphasis, highlighting key points, or making certain
            parts of your text stand out to your intended audience.
          </p>
          <p>
            If you want to streamline the process and keep things simple, our
            italic text converter provides the perfect solution to transform
            your text without any manual adjustments.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Italic Case Converter Work?</h3>
          <p>
            Here’s a revised version: Just follow the steps provided here. Type
            out your content (or, if you already have it, copy and paste it)
            into the left field, where your regular text will appear. Then, in
            the right field, you’ll see the text automatically transformed into
            its italicized version.
          </p>
          <p>
            After that, just go to the right-hand column, select all the text,
            copy it, and then paste it wherever you need.
          </p>
          <p>
            If you are looking for an example of italic text then please see
            below:
          </p>
          <p>𝘛𝘩𝘪𝘴 𝘪𝘴 𝘢𝘯 𝘦𝘹𝘢𝘮𝘱𝘭𝘦 𝘰𝘧 𝘪𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵.</p>
          <p>
            If you have any suggestions for improving the italic text tool, feel
            free to reach out. We’d love to hear any ideas you may have!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItalicTextGenerator;
