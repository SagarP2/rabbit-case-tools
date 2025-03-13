import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const convertToSmallCaps = (text) => {
  const smallCaps = {
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
    Q: "ᵠ",
    R: "ᴿ",
    S: "ˢ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
    X: "ˣ",
    Y: "ʸ",
    Z: "ᶻ",
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᵍ",
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
    q: "q",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    " ": " ",
  };

  return text
    .split("")
    .map((char) => smallCaps[char] || char)
    .join("");
};

const convertToSuperscript = (text) => {
  const superscript = {
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
    Q: "ᵠ",
    R: "ᴿ",
    S: "ˢ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
    X: "ˣ",
    Y: "ʸ",
    Z: "ᶻ",
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᵍ",
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
    q: "q",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    " ": " ",
  };

  return text
    .split("")
    .map((char) => superscript[char] || char)
    .join("");
};

const convertToSubscript = (text) => {
  const subscript = {
    0: "₀",
    1: "₁",
    2: "₂",
    3: "₃",
    4: "₄",
    5: "₅",
    6: "₆",
    7: "₇",
    8: "₈",
    9: "₉",
    A: "ₐ",
    B: "ᵦ",
    C: "ᵢ",
    D: "ᵣ",
    E: "ₑ",
    F: "ᵧ",
    G: "ᵧ",
    H: "ₕ",
    I: "ⁱ",
    J: "ʲ",
    K: "ₖ",
    L: "ₗ",
    M: "ₘ",
    N: "ₙ",
    O: "ₒ",
    P: "ₚ",
    Q: "ᵩ",
    R: "ᵣ",
    S: "ₛ",
    T: "ₜ",
    U: "ᵤ",
    V: "ᵥ",
    W: "ₓ",
    X: "ₓ",
    Y: "ᵧ",
    Z: "ᵦ",
    a: "ₐ",
    b: "ᵦ",
    c: "ᵢ",
    d: "ᵣ",
    e: "ₑ",
    f: "ᵧ",
    g: "ᵧ",
    h: "ₕ",
    i: "ⁱ",
    j: "ʲ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    o: "ₒ",
    p: "ₚ",
    q: "ᵩ",
    r: "ᵣ",
    s: "ₛ",
    t: "ₜ",
    u: "ᵤ",
    v: "ᵥ",
    w: "ₓ",
    x: "ₓ",
    y: "ᵧ",
    z: "ᵦ",
    " ": " ",
  };

  return text
    .split("")
    .map((char) => subscript[char] || char)
    .join("");
};

const SmallTextGenerator = () => {
  const [text, setText] = useState("");
  const [transformation, setTransformation] = useState("smallCaps");

  // Function to handle text input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Determine transformed text based on selected option
  const getTransformedText = () => {
    switch (transformation) {
      case "smallCaps":
        return convertToSmallCaps(text);
      case "superscript":
        return convertToSuperscript(text);
      case "subscript":
        return convertToSubscript(text);
      default:
        return text;
    }
  };

  // Function to handle text download
  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Function to handle copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Function to handle clear text
  const handleClear = () => {
    setText("");
  };

  // Calculate statistics based on the original text
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

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(text);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Small Text Generator</title>
          <meta
            name="description"
            content="Create tiny text with RabbitCode’s Small Text Generator. Convert your regular text into small caps, superscript, or subscript with this simple online tool."
          />
          <meta
            name="keywords"
            content="small text generator, tiny text, superscript, subscript, small caps, text formatting, online tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Small Text Generator"
          />
          <meta
            property="og:description"
            content="Easily convert your text into small text formats like small caps, superscript, or subscript with RabbitCode’s Small Text Generator."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Small Text Generator"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode’s Small Text Generator to convert your text into small caps, superscript, or subscript for creative text formatting."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Small Text Generator</h2>
          <p>
            This small text generator is a handy online tool, where you can
            convert standard text (whether that's capitals, small letters and
            more) into tiny text. The tiny text options are 'small caps',
            'superscript' and 'subscript'. Find out how to use the tiny text
            generator below.
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
              value={getTransformedText()}
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              readOnly
            />
          </div>

          <div className="transformation-options">
            <label>
              <input
                type="radio"
                value="smallCaps"
                checked={transformation === "smallCaps"}
                onChange={() => setTransformation("smallCaps")}
              />
              Small Caps
            </label>
            <label>
              <input
                type="radio"
                value="superscript"
                checked={transformation === "superscript"}
                onChange={() => setTransformation("superscript")}
              />
              Superscript
            </label>
            <label>
              <input
                type="radio"
                value="subscript"
                checked={transformation === "subscript"}
                onChange={() => setTransformation("subscript")}
              />
              Subscript
            </label>
          </div>
          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() =>
                handleDownload(getTransformedText(), "converted_text.txt")
              }
            >
              Download Text
            </button>
            <button
              class="btn-421"
              onClick={() => handleCopy(getTransformedText())}
            >
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Tiny Text Case</h3>
          <p>
            Need to create some small text? Then use our simple and easy to use
            small text generator. This tool is the simplest way for you to turn
            any amount of text into a tiny text style. This simple little
            solution can save you valuable time from having to go through all of
            the text on your own and convert it. If you wish to make things
            easier when it comes to converting text, our small text generator
            makes sure you can quickly manage a process that, manually, could
            take you more than a few hours.
          </p>
          <p>
            That’s why we highly recommend you save yourself time and effort by
            using our easy to work with small text generator. This tool really
            does just need you to input the text that you wish to change from
            normal text into tiny text. Enter the content that you wish to have
            transformed into the box on the left, and it will be adjusted to fit
            in with the small text style that you happen to be looking for.
          </p>
          <p>
            When you want to speed things up with regards to text generation,
            this can be the godsend you need. Instead of wasting valuable time
            and effort manually adjusting all of your text, our small text
            generator makes quick work of what can be an otherwise arduous and
            time-consuming task.
          </p>
          <p>
            So, take the pressure off yourself with the help of a small text
            generator that can make sure the job is done correctly. Avoid typos,
            mistakes, and errors: with a text generator like this, you can
            quickly turn around this task. Regardless of the purpose, our small
            text generator makes generating tiny text a far less time-consuming
            process than ever before!
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Why is the Text Small?</h3>
          <p>
            What the tiny text generator essentially does is transform your
            normal text into a set of subscript characters as well as small
            caps. It looks small as it is using what’s known as a unicode
            alphabet. The small text generator basically allows you the
            capability of copying and pasting it into status updates on
            Facebook, Instagram & Twitter as well as Excel, Word and other
            documents. If the text were actually converted into tiny font -
            unfortunately, you wouldn’t be able to do that.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What are small caps?</h3>
          <p>
            Small Caps: Small caps are uppercase letters set at the same height
            and weight as surrounding lowercase letters. They're smaller than
            standard uppercase letters, creating a stylistic effect.
          </p>
          <p>ᴛʜɪꜱ ɪꜱ ᴀɴ ᴇxᴀᴍᴘʟᴇ ᴏꜷ ꜱᴍᴀʟʟ ᴄᴀᴘꜱ</p>
        </div>
        <br />
        <div className="content1">
          <h3>What is superscript?</h3>
          <p>
            Superscript refers to text that is smaller than the normal text and
            is set slightly above the line of type. It's often used for
            footnotes, mathematical exponents, and ordinal indicators.
          </p>
          <p>ᵗʰᶦˢ ᶦˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ˢᵘᵖᵉʳˢᶜʳᶦᵖᵗ</p>
        </div>
        <br />
        <div className="content1">
          <h3>What is subscript?</h3>
          <p>
            Subscript is similar to superscript but placed below the baseline of
            the text. It's used in chemical formulas, mathematical expressions,
            and footnotes.
          </p>
          <p>ₜₕᵢₛ ᵢₛ ₐₙ ₑₓₐₘₚₗₑ ₒᶠ ₛᵤᵦₛᶜᵣᵢₚₜ</p>
          <p>
            Of course, if you have any questions with regard to the sentence
            case generator, then please don’t hesitate to get in touch with us
            and we will be more than happy to help you further.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How to Create Small Text</h3>
          <ol>
            <li>
              Simply type the words you want to appear in tiny text in the left
              panel.
            </li>
            <li>Then you should see this generated in the right panel.</li>
            <li>You can then simply copy that text.</li>
            <li>
              Then paste it to your favorite social media channel e.g. Facebook
              and Twitter.
            </li>
          </ol>
          <p>
            If you have any questions with regards to the small text generator,
            then please do let us know and we will be more than happy to help
            you.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How does it work?</h3>
          <p>
            It’s a case of copy and paste. Copy the text that you would like to
            be made tiny. Paste it into the left column. Then you will see it
            being generated on the right into small text. Copy that small text
            and paste it to Facebook, Excel and much more.
          </p>
        </div>
        <br />
      </main>
      <Footer />
    </div>
  );
};

export default SmallTextGenerator;
