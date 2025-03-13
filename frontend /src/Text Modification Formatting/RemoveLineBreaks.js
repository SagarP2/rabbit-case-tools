import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RemoveLineBreaks = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

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
    const lines = text.split("\n");
    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  // Function to remove unnecessary line breaks
  const removeLineBreaks = (text) => {
    return text.replace(/\n{2,}/g, "\n\n").trim();
  };

  // Function to handle text input change
  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setConvertedText(removeLineBreaks(inputText));
  };

  // Function to handle text download
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "cleaned_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Function to handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
  };

  // Function to handle clear text
  const handleClear = () => {
    setText("");
    setConvertedText("");
  };

  // Calculate statistics based on converted text
  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(convertedText);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Remove Line Breaks</title>
          <meta
            name="description"
            content="Easily remove line breaks from your text with RabbitCode’s Remove Line Breaks tool. Clean up your documents and content for a more professional look."
          />
          <meta
            name="keywords"
            content="remove line breaks, text formatting, text cleaner, online tool, remove breaks from text, text editor"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="RabbitCode - Remove Line Breaks" />
          <meta
            property="og:description"
            content="RabbitCode’s Remove Line Breaks tool helps clean up your text by removing unnecessary breaks, ensuring a more streamlined and professional appearance."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Remove Line Breaks"
          />
          <meta
            name="twitter:description"
            content="Remove unnecessary line breaks with RabbitCode's online tool. Streamline your content and make it look more professional."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Remove Line Breaks</h2>
          <p>
            Remove line breaks with this handy tool allows you to quickly and
            easily remove unnecessary line breaks from your text, ensuring a
            cleaner, more professional appearance. Whether you're working with
            website content, documents, or any other text, our tool streamlines
            the process, making your editing tasks simpler and more efficient.
          </p>
          <div className="textarea-container">
            <textarea
              value={text}
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
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
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
          <h3>How the Remove Line Breaks Tool Works</h3>
          <p>
            The Remove Line Breaks Tool is designed to provide a seamless
            experience in text formatting. It works by scanning your input text
            and automatically identifying and removing line breaks that disrupt
            the flow of your content. This is particularly useful for texts
            copied from PDFs or other sources where line breaks are often
            inserted arbitrarily.
          </p>
          <p>
            The tool preserves your text's essential formatting and spacing,
            ensuring that the core structure remains intact while eliminating
            unnecessary breaks. It's an ideal solution for professionals and
            individuals alike who need to maintain the consistency and quality
            of their written content. Easy to use and efficient, this tool saves
            time and effort in preparing texts for publication, presentations,
            or other uses.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RemoveLineBreaks;
