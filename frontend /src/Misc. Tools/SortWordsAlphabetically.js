import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const SortWordsAlphabetically = () => {
  const [inputText, setInputText] = useState("");
  const [sortedText, setSortedText] = useState("");

  // Function to sort words alphabetically
  const sortWords = (text) => {
    return text
      .split(/\s+/) // Split by whitespace
      .filter((word) => word.length > 0) // Filter out empty words
      .sort((a, b) => a.localeCompare(b)) // Sort alphabetically
      .join(" "); // Join sorted words with a space
  };

  // Function to handle input changes and update sorted text
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setSortedText(sortWords(text));
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

  // Handle file download
  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Copy text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Clear the input and output text areas
  const handleClear = () => {
    setInputText("");
    setSortedText("");
  };

  // Get statistics for sorted text
  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(sortedText);

  return (
    <div className="container">
      <main>
      <Helmet>
        <title>RabbitCode - Alphabetical Word Sorter</title>
        <meta
          name="description"
          content="Quickly arrange words in alphabetical order with RabbitCode's Alphabetical Order Tool. Ideal for organizing lists and enhancing productivity."
        />
        <meta
          name="keywords"
          content="alphabetical order, word sorter, list organizer, online tool, sorting tool, text organization"
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="RabbitCode - Alphabetical Word Sorter" />
        <meta
          property="og:description"
          content="Use RabbitCode's Alphabetical Order Tool to quickly sort and arrange words alphabetically. Simplify organizing your text!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rabbitcode.agency" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="RabbitCode - Alphabetical Word Sorter"
        />
        <meta
          name="twitter:description"
          content="Sort words alphabetically with RabbitCode's easy-to-use online tool. Perfect for organizing your text and creating efficient lists."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        {/* Additional SEO Meta Tags */}
        <link rel="canonical" href="https://rabbitcode.agency" />
        <meta name="robots" content="index, follow" />
      </Helmet>


        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Put Words in Alphabetical Order</h2>
          <p>
            Effortlessly alphabetize any list of words with our user-friendly
            tool. Ideal for students, professionals, and anyone needing quick
            and accurate word arrangement.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="6"
              value={inputText}
              className="textarea-animated"
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Sorted text will appear here..."
              rows="6"
              value={sortedText}
              readOnly
              className="textarea-animated"
            />
          </div>

          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() => handleDownload(sortedText, "sorted-words.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(sortedText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How to Alphabetize Words Quickly and Accurately</h3>
          <p>
            Our 'Put Words in Alphabetical Order' tool is designed to simplify
            your workflow by automatically sorting any list of words you input.
            Here's how it works:
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>First Panel - Input Your Words or List</h3>
          <p>
            To start, simply paste or type your list of words into the first
            panel, each on a separate line. Our tool is versatile, accommodating
            words from various sources, be it a document, an email, or a simple
            note. There's no need for any specific formatting - the tool is
            programmed to recognize and separate individual words effectively.
            It'll also work with sorting numbers and any language.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Automatic Sorting - Watch the Magic Happen</h3>
          <p>
            Once your words are entered, our tool immediately gets to work. It
            employs a sophisticated algorithm that meticulously sorts the words
            in alphabetical order. This process is instant, ensuring that you
            don't waste any precious time waiting.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Second Panel - Sorted Results</h3>
          <p>
            After the sorting is done, the alphabetized list appears in the
            second panel. This streamlined display allows for an easy comparison
            between your original list and the sorted one. You can review and
            ensure that every word is perfectly placed in its alphabetical
            position.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Efficiency and Accuracy</h3>
          <p>
            Our tool is not just about speed; it's also incredibly accurate. It
            eliminates the risk of human error, ensuring that your lists are
            always correctly organized. This accuracy is particularly beneficial
            for professional documents or presentations where precision is
            paramount.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Ease of Use</h3>
          <p>
            With its user-friendly interface, our tool is accessible to
            everyone, regardless of technical skill level. Whether you're a
            student organizing research, a professional sorting business terms,
            or just someone who loves to keep things in order, this tool is made
            for you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SortWordsAlphabetically;
