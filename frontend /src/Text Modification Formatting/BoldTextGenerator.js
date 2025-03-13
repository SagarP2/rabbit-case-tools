import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const BoldTextGenerator = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [boldText, setBoldText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const handleChange = (event) => {
    const text = event.target.value;
    setTextareaValue(text);
    setBoldText(convertToBold(text));
    setTextStatistics(calculateTextStatistics(text));
  };

  const convertToBold = (text) => {
    const boldMap = {
      a: "𝗮",
      b: "𝗯",
      c: "𝗰",
      d: "𝗱",
      e: "𝗲",
      f: "𝗳",
      g: "𝗴",
      h: "𝗵",
      i: "𝗶",
      j: "𝗷",
      k: "𝗸",
      l: "𝗹",
      m: "𝗺",
      n: "𝗻",
      o: "𝗼",
      p: "𝗽",
      q: "𝗾",
      r: "𝗿",
      s: "𝘀",
      t: "𝘁",
      u: "𝘂",
      v: "𝘃",
      w: "𝘄",
      x: "𝘅",
      y: "𝘆",
      z: "𝘇",
      A: "𝗔",
      B: "𝗕",
      C: "𝗖",
      D: "𝗗",
      E: "𝗘",
      F: "𝗙",
      G: "𝗚",
      H: "𝗛",
      I: "𝗜",
      J: "𝗝",
      K: "𝗞",
      L: "𝗟",
      M: "𝗠",
      N: "𝗡",
      O: "𝗢",
      P: "𝗣",
      Q: "𝗤",
      R: "𝗥",
      S: "𝗦",
      T: "𝗧",
      U: "𝗨",
      V: "𝗩",
      W: "𝗪",
      X: "𝗫",
      Y: "𝗬",
      Z: "𝗭",
      0: "𝟬",
      1: "𝟭",
      2: "𝟮",
      3: "𝟯",
      4: "𝟰",
      5: "𝟱",
      6: "𝟲",
      7: "𝟳",
      8: "𝟴",
      9: "𝟵",
    };

    return text
      .split("")
      .map((char) => boldMap[char] || char)
      .join("");
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
    const blob = new Blob([boldText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bold-text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    setTextareaValue("");
    setBoldText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(boldText);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Bold Text Generator</title>
          <meta
            name="description"
            content="Convert your regular text into bold font with RabbitCode's Bold Text Generator. Easily copy and paste bold text for use in your content."
          />
          <meta
            name="keywords"
            content="bold text generator, text formatting, font generator, text converter, online bold text"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Bold Text Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Bold Text Generator to quickly convert your regular text into bold font and easily copy it for use in your content."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Bold Text Generator"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode's Bold Text Generator to quickly convert your regular text into bold font and easily copy it for use in your content."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Bold Text Generator</h2>
          <p>
            Make use of this convenient bold text generator. Simply type or
            paste your text into the input field on the left. As you enter your
            text, it will automatically be transformed into bold in the output
            field on the right. Once you're satisfied, copy the bold text and
            use it wherever you need!
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
              value={boldText}
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
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
          <br />
        </div>
        <br />
        <div className="content1">
          <h3>Bold Font Text Converter</h3>
          <p>
            When you need to make text stand out quickly, few options are more
            striking than bold text. However, manually converting all your text
            into bold can be a tedious task. Unless you're highly skilled with
            keyboard shortcuts, using our bold text converter can save you time.
            This quick and easy solution allows you to instantly create bold
            text, ensuring your content grabs attention for all the right
            reasons and with style.
          </p>
          <p>
            Bold text has become a widely used tool to capture the audience's
            attention and highlight key points. It’s an excellent stylistic
            choice for making important information stand out. For example,
            emphasizing a key statistic or fact in bold can help it stand out
            and be easily understood. Bold text provides a significant visual
            change that quickly makes an impact, ensuring your message grabs
            attention and piques interest in what you have to say.
          </p>
          <p>
            It's often the small things that leave the biggest impact, and the
            same goes for our bold text converter. This tool allows you to
            quickly and effortlessly complete a task that, if done manually,
            could be time-consuming and require considerable effort.
          </p>
          <p>
            If you're looking to save time on any particular task, this is an
            efficient solution. Tools like this allow you to quickly enter or
            paste as much text as needed into the left-hand box. Then, simply
            take the converted text from the right-hand box. You can copy it
            using the 'Copy to Clipboard' button or download it with the
            'Download Text' option.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Bold Case Converter Work?</h3>
          <p>
            To generate your bold text, simply type your content as usual in the
            left column. As you do, you'll see the text automatically transform
            into bold in the right column.
          </p>
          <p>
            Once you have finished writing out the text that you want to get
            bolded. You will see that all the text you want in bold is available
            to you for copying and pasting wherever you’d like. Simply highlight
            the text on the right, ‘copy’ it and then click paste into your
            desired text editor.
          </p>
          <p>
            If you're looking for an example of bolded text, please see below:
          </p>
          <p>𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁.</p>
          <p>
            We'd love to hear your thoughts on how we can improve the bold text
            generator! If you have any ideas or suggestions, please feel free to
            reach out to us through the contact page. We look forward to hearing
            from you!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BoldTextGenerator;
