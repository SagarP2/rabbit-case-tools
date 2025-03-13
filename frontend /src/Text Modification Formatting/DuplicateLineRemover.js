import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const DuplicateLineRemover = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [nonDuplicateText, setNonDuplicateText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const handleChange = (event) => {
    const text = event.target.value;
    setTextareaValue(text);
    const uniqueLines = removeDuplicateLines(text);
    setNonDuplicateText(uniqueLines);
    setTextStatistics(calculateTextStatistics(uniqueLines));
  };

  const removeDuplicateLines = (text) => {
    const lines = text.split("\n");
    const uniqueLines = [...new Set(lines)];
    return uniqueLines.join("\n");
  };

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

  const handleDownload = () => {
    const blob = new Blob([nonDuplicateText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "non-duplicate-text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    setTextareaValue("");
    setNonDuplicateText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(nonDuplicateText);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Online Duplicate Line Remover</title>
          <meta
            name="description"
            content="Easily remove duplicate lines from your text with RabbitCode's Duplicate Line Remover. Perfect for cleaning up lists and large data sets."
          />
          <meta
            name="keywords"
            content="duplicate line remover, text cleaner, online tool, data set cleaning, remove redundancy, text formatting tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Online Duplicate Line Remover"
          />
          <meta
            property="og:description"
            content="Remove duplicate lines from your text effortlessly with RabbitCode's Duplicate Line Remover tool. Clean up your lists and data sets in a few clicks."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Online Duplicate Line Remover"
          />
          <meta
            name="twitter:description"
            content="Easily remove duplicate lines from your text with RabbitCode's Duplicate Line Remover. Perfect for cleaning up lists and large data sets."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Online Duplicate Line Remover</h2>
          <p>
            Whether you're working with large data sets, cleaning up lists, or
            just need to remove redundant information, our tool is here to make
            the process easier. Simply paste your text, and let our tool handle
            the rest!
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={textareaValue}
              onChange={handleChange}
              placeholder="Start typing your notes here..."
              rows="8"
            />
            <textarea
              className="textarea-animated"
              value={nonDuplicateText}
              placeholder="Converted text will appear here..."
              rows="8"
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
          <h3>Effortless Duplicate Line Removal</h3>
          <p>
            We recognize the challenges of handling duplicate lines in your
            text. That's why we've created this simple online tool to help you
            clean up your data. Whether you're a professional managing large
            data sets, a student working on research projects, or anyone needing
            quick and efficient duplicate line removal, our tool is the perfect
            solution.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is the Online Duplicate Line Remover?</h3>
          <p>
            The Online Duplicate Line Remover is a free tool designed to help
            you quickly remove duplicate lines from your text. It's perfect for
            managing large data sets, cleaning up lists, and eliminating
            redundant information with ease.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How do I use the Online Duplicate Line Remover?</h3>
          <p>
            To use the tool, simply paste your text into the provided field. The
            tool will automatically process your text and display a version free
            of any duplicate lines on the right.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Is there a limit to the size of text I can process? </h3>
          <p>
            The Online Duplicate Line Remover can handle large data sets
            efficiently. However, for optimal performance, we recommend
            processing text with fewer than 50,000 lines at a time.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use this tool for my research project?</h3>
          <p>
            Yes, the tool is ideal for anyone, including students working on
            research projects. It helps remove duplicate entries, making your
            data more accurate and easier to analyze.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Is there a cost to use the Online Duplicate Line Remover?</h3>
          <p>
            No, the Online Duplicate Line Remover is a free tool provided by
            Convertcase.net.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>
            How does the Online Duplicate Line Remover identify duplicates?
          </h3>
          <p>
            The tool identifies duplicates by comparing each line of text with
            every other line. If a line is repeated, it is flagged as a
            duplicate and removed from the final output.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I save the output from the tool?</h3>
          <p>
            Yes, once the tool has removed the duplicate lines, you can download
            the cleaned text as a text file or copy it directly to your
            clipboard for immediate use.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use this tool to clean up my mailing list?</h3>
          <p>
            Yes, the Online Duplicate Line Remover tool is ideal for cleaning up
            data like mailing lists. It helps remove duplicate entries, ensuring
            that each individual or address appears only once.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DuplicateLineRemover;
