import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const SentenceCaseConverter = () => {
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

  // Function to convert text to title case
  const toTitleCase = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Function to handle text input change
  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setConvertedText(toTitleCase(inputText));
  };

  // Function to handle text download
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "title_case_text.txt";
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
          <title>RabbitCode - Title Case Converter</title>
          <meta
            name="description"
            content="Easily convert your standard text into title case with RabbitCode’s Title Case Converter. A simple tool to make your text look professional and polished."
          />
          <meta
            name="keywords"
            content="title case converter, text capitalization, online tool, title text, title case generator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Title Case Converter"
          />
          <meta
            property="og:description"
            content="RabbitCode’s Title Case Converter tool allows you to easily capitalize your text, giving it a polished and professional look."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Title Case Converter"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode’s Title Case Converter to easily convert your text into title case for professional-looking headings and titles."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Title Case Converter</h2>
          <p>
            An easy to use title capitalization tool. Convert your standard text
            into title text with this online title capitalizer. Simply enter
            your standard text into the title case converter on the left and see
            it automatically get generated on the right.
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
          <h3>Sentence Case</h3>
          <p>
            We have all been there. When writing content, you know you have
            produced something awesome. However, you get so into the flow of
            writing that you don’t look up at the screen. When you finish, you
            notice one problem – the writing is all in uppercase!
          </p>
          <p>
            Instead of having to write it all again from scratch, though, you
            have a simple solution: our sentence case converter. This can be
            used to quickly and easily turn any content that is not in the
            traditional sentence case into this exact style. Sentence case
            content looks great because it follows a natural flow. If you are
            interested, then this exact sentence has been written in sentence
            case. It keeps the initial word with a Capital Letter, but then
            keeps the rest of the sentence in natural case as it should be.
          </p>
          <p>
            Instead of noticing a great piece of writing has been put in the
            wrong case, our tool offers a swift and simple solution to transform
            it back around on your own. Don’t allow the challenge of writing
            everything out again become something you fall victim to. Instead,
            pick up your content from the document and paste the content into
            the left-hand side box.
          </p>
          <p>
            Then, you will be given an automatically adjusted version on the
            right-hand side box. All that you need to do then is hit the
            ‘Download Text’ or ‘Copy to Clipboard’ button and it will quickly
            and effectively translate the sentence into the right, standard
            case.
          </p>
          <p>
            Instead of messing around with sentence casing and trying to
            self-edit, run your content through our platform. This simple to use
            sentence case converter can make what is often a draining and time
            consuming experience become something that is going to look
            absolutely fantastic with one simple copy and paste feature.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Title Case Converter Work?</h3>
          <p>
            Type out or copy and paste your content into the left panel. As you
            do this, you should see that the right panel automatically converts
            that specific text into your title case format. You can then copy
            and paste that title case content wherever you need to.
          </p>
          <p>This is an example of Title Case Sentence.</p>
          <p>
            Of course, if you have any questions with regard to the title case
            generator, then please don’t hesitate to get in touch with us and we
            will be more than happy to help you further.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SentenceCaseConverter;
