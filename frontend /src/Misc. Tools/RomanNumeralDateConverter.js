import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Helper function to convert a number to Roman numerals
const toRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

const RomanNumeralDateConverter = () => {
  const [inputDate, setInputDate] = useState("");
  const [romanDate, setRomanDate] = useState("");

  const convertDateToRoman = (date) => {
    const [day, month, year] = date.split("/").map(Number);
    if (!day || !month || !year) return "";

    return `${toRoman(day)}/${toRoman(month)}/${toRoman(year)}`;
  };

  const handleInputChange = (e) => {
    const date = e.target.value;
    setInputDate(date);
    setRomanDate(convertDateToRoman(date));
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
    setInputDate("");
    setRomanDate("");
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(romanDate);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Roman Numeral Date Converter</title>
          <meta
            name="description"
            content="Convert your normal dates into Roman Numeral format with ease using RabbitCode's Roman Numeral Date Converter."
          />
          <meta
            name="keywords"
            content="Roman numeral, date converter, online tools, date transformation, Roman numerals"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Roman Numeral Date Converter"
          />
          <meta
            property="og:description"
            content="Convert a regular date like 16/5/2023 into Roman Numerals format like XVI/V/MMXXIII with RabbitCode's tool."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Roman Numeral Date Converter"
          />
          <meta
            name="twitter:description"
            content="Convert a normal date into Roman numerals easily with RabbitCode's online Roman Numeral Date Converter."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Roman Numeral Date Converter</h2>
          <p>
            Convert a normal date such as 16/5/2023 into a Roman Numeral date
            such as XVI/V/MMXXIII.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Enter date in DD/MM/YYYY format..."
              rows="6"
              value={inputDate}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Converted Roman Numeral date will appear here..."
              rows="6"
              className="textarea-animated"
              value={romanDate}
              readOnly
            />
          </div>
          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() => handleDownload(romanDate, "roman-date.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(romanDate)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Date to Roman Numeral Converter</h3>
          <p>
            The tool works by entering the regular date on the left panel and
            will automatically generate the Roman Numeral date on the right
            panel. It also works in reverse by changing the value on the right.
          </p>
          <p>Here's how to interpret the actions:</p>
          <p>
            Today is for example October 10th, 2019. Converting this date to
            Roman Numerals would look like this:
          </p>
          <p>10/10/2019 = X/X/MMMCMXCIX</p>
          <p>
            The "X"s represent the numbers in the date that stay the same in
            both systems (10/10), and the Roman Numerals represent the numbers
            that have been converted (2019).
          </p>
          <p>
            To convert a regular number to a Roman Numeral, the process is
            relatively simple. There are only seven different symbols used in
            Roman Numerals, and each symbol represents a specific value.
          </p>
          <p>These are the seven symbols and their respective values:</p>
          <pre>Numeral&nbsp;&nbsp;|&nbsp;&nbsp;Number</pre>
          <pre>I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 1</pre>
          <pre>V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 5</pre>
          <pre>X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 10</pre>
          <pre>L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 50</pre>
          <pre>C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 100</pre>
          <pre>D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 500</pre>
          <pre>M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; 1,000</pre>
        </div>
        <br />
        <div className="content1">
          <h3>How to Convert a Number to Roman Numerals</h3>
          <p>
            To convert a number to Roman Numerals, you simply need to break the
            number down into its component parts and then find the corresponding
            symbols. For example, the number 2019 can be broken down into 2000 +
            10 + 9. Therefore, the Roman Numeral equivalent would be MM + X +
            IX, which is equal to MMXIX.
          </p>
          <p>
            It's important to note that there are some rules that need to be
            followed when using Roman Numerals. First, symbols can only be
            repeated three times in a row. So, while you could technically write
            IIIII to represent the number 5, it's much more common (and correct)
            to use the symbol V instead.
          </p>
          <p>
            Second, certain symbols can only be used if they're followed by
            another specific symbol. For example, the symbol I can only be
            subtracted from the symbols V or X. So, while IV could represent the
            number 4, IIV would be incorrect.
          </p>
          <p>
            Third, only one subtraction can be made per number. So, while XVI
            could represent the number 16 (10 + 5 + 1), XIV would be incorrect
            because it uses two subtractions (10 - 1 + 5).
          </p>
          <p>
            Finally, the largest symbol should always be used first. So, while
            MM could represent the number 2000 (1000 + 1000), MMM would be
            incorrect because it uses three of the same symbols in a row.
          </p>
        </div>
        <br />
        <div className="content1">
          <h>What is the history of Roman Numerals?</h>
          <p>
            Roman numerals are a numeral system originating in ancient Rome and
            were used throughout the Roman Empire. They were based on the use of
            the letters of the alphabet, with certain letters representing
            certain values.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RomanNumeralDateConverter;
