import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Function to convert text to title case
const toTitleCase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const TitleCaseConverter = () => {
  const [topText, setTopText] = useState("");
  const [titleCaseText, setTitleCaseText] = useState("");
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
    setTitleCaseText("");
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
    const transformedText = toTitleCase(text);
    setTitleCaseText(transformedText);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Title Case Converter Tool</title>
          <meta
            name="description"
            content="Effortlessly convert your standard text into title case with RabbitCode’s Title Case Converter Tool. Perfect for creating professional headlines and titles!"
          />
          <meta
            name="keywords"
            content="title case converter, text formatting, title capitalization, online tool, text converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Title Case Converter Tool"
          />
          <meta
            property="og:description"
            content="Easily convert your text into title case with RabbitCode’s Title Case Converter Tool. Ideal for creating well-formatted titles and headlines."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Title Case Converter Tool"
          />
          <meta
            name="twitter:description"
            content="Transform your text into title case quickly with RabbitCode’s Title Case Converter Tool. Perfect for creating professional titles and headlines."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Title Case Converter Tool</h2>
          <p>
            An easy to use title capitalization tool. Convert your standard text
            into title text with this online title capitalizer. Simply enter
            your standard text into the title case converter on the left and see
            it automatically get generated on the right.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
              value={topText}
              onChange={handleTextChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              value={titleCaseText}
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
                handleDownload(titleCaseText, "title-case-text.txt")
              }
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(titleCaseText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Capitalize Your Title</h3>
          <p>
            When it comes to writing titles on any kind of document, such as a
            website page or an article, you need proper titles. However,
            converting all of your titles on your own can be needlessly time
            consuming. To help you speed up the process, our title case
            converter offers you everything you might need to make the whole
            process swifter, simpler, and less stressful.
          </p>
          <p>
            Why does using title case matter? Because it can help to add a very
            specific design finish that looks great. The Use of Capitals looks
            great, and it can really go a long way to helping make titles stand
            out. You want people to be drawn to titles, so they understand what
            the coming body of text or content is going to actually address. As
            such, using title case is a very important metric in website design
            and formatting.
          </p>
          <p>
            Instead of having to self-edit every title yourself, though, you can
            run your title through our title case converter instead. This will
            quickly and easily make the editing process much simpler for you,
            ensuring that everything can be done in a way that feels easy and
            effective. Remove the pressure and stress of editing titles, then,
            and make the conversion that little bit easier.
          </p>
          <p>
            All that you need to do, as mentioned above, is to enter your
            standardized text into the title case converter that we have listed.
            You can enter your text into the left-hand side, and it will be
            automatically converted on the right-hand side. Then, you can hit
            the ‘Download Text’ or ‘Copy to Clipboard’ button to try and create
            a change ASAP.
          </p>
          <p>
            It really is this simple if you want to go ahead and make some
            adjustments today. So, why not take a look to see if our title case
            converter can save you time?
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Title Case Converter Work?</h3>
          <p>
            To use the title case capitalization tool, you simply need to write
            up the standard text in the left column, then you will see that it
            is automatically getting capitalized on the right. Then you simply
            need to copy and paste that to where you need.
          </p>
          <p>
            Please let us know if you have any questions with regards to the
            Title Case converter.
          </p>
          <p>This is a Capitalized Title Example.</p>
          <p>
            Let us know if you have any questions about the title case converter
            and whether it has helped you as a checker or converter? Get in
            touch with the Convert Case team via the contact page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TitleCaseConverter;
