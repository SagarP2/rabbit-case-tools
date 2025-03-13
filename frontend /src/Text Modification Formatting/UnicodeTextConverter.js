import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Conversion functions for different font styles
const convertToUnicodeStyles = (text) => {
  const styles = {
    script: "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    scriptBold: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
    fraktur: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
    frakturBold: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖭𝖔𝖕𝖟𝖟",
    circled: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    circledInverted: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    squared: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    squaredInverted: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
    capitalized: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    fullWidth: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
    monospace: "𝚊𝚋𝚌𝚍𝚎𝚋𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
    sansSerif: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",
    sansSerifItalic: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘂𝘷𝘸𝘹𝘺𝘻",
    sansSerifBold: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘷𝘄𝘅𝘺𝘇",
    sansSerifBoldItalic: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
  };

  const convert = (text, style) => {
    const aCharCode = "a".charCodeAt(0);
    return text
      .split("")
      .map((char) => {
        if (char >= "a" && char <= "z") {
          return styles[style][char.charCodeAt(0) - aCharCode];
        }
        return char;
      })
      .join("");
  };

  const convertedText = Object.keys(styles).map((style) => ({
    style,
    text: convert(text, style),
  }));

  return convertedText;
};

const UnicodeTextConverter = () => {
  const [topText, setTopText] = useState("");
  const [convertedText, setConvertedText] = useState([]);
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
    setConvertedText([]);
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
    const transformedText = convertToUnicodeStyles(text);
    setConvertedText(transformedText);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Unicode Text Converter</title>
          <meta
            name="description"
            content="Convert your text into a variety of fonts with RabbitCode’s Unicode Text Converter. Easily explore and copy unique fonts for your text."
          />
          <meta
            name="keywords"
            content="unicode text converter, font generator, text formatting, online tool, Unicode fonts, text converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Unicode Text Converter"
          />
          <meta
            property="og:description"
            content="Explore a wide range of fonts for your text using RabbitCode’s Unicode Text Converter. Copy and paste any font you like."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Unicode Text Converter"
          />
          <meta
            name="twitter:description"
            content="Easily convert your text into a variety of Unicode fonts with RabbitCode’s tool. Copy and paste the fonts you like."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Unicode Text Converter</h2>
          <p>
            Looking for an easy way to search through a wide range of fonts for
            the same text? Use this practical unicode converter to do just that.
            Simply type in the text in the panel on the left and see all the
            range of fonts available. Simply pick the one you like from the
            unitext converter. Copy it and paste it to where you need it.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Start typing your notes here..."
              rows="10"
              value={topText}
              onChange={handleTextChange}
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
                handleDownload(
                  convertedText
                    .map((ct) => `${ct.style}: ${ct.text}`)
                    .join("\n\n"),
                  "convertedText.txt"
                )
              }
            >
              Download
            </button>
            <button
              class="btn-421"
              onClick={() =>
                handleCopy(
                  convertedText
                    .map((ct) => `${ct.style}: ${ct.text}`)
                    .join("\n\n")
                )
              }
            >
              Copy All
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="converted-text">
            {convertedText.map((ct, index) => (
              <div key={index} className="converted-text-item">
                <h3>Converted Text Styles</h3>
                <p>
                  <b>{ct.style}:</b> {ct.text}
                  <button onClick={() => handleCopy(ct.text)}>Copy</button>
                </p>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Unicode Text Converter Tool</h3>
          <p>
            Trying to quickly and easily adjust your text to find the right
            style? Then our Unicode text converter could be just what you are
            looking for. Today, a Unicode text converter can take any form of
            plain text – such as letters, numbers, and punctuation – and
            transform it into the obscure characters that make up common
            Unicode. This is used to help you quickly cut-and-paste the content
            from our page to wherever you need it.
          </p>
          <p>
            When you need to quickly turn some content into Unicode, you need to
            have a clear and defined idea of what to do. This tool can quickly
            allow you to convert any ASCII character into its Unicode
            equivalent. Now, you can avoid yourself having to spend hours going
            through the transformation alone. Unless you know how to convert
            into Unicode manually, you could save yourself many hours of hard
            work, effort, and stress!
          </p>
          <p>
            Take the time out of the process and ensure you can quickly and
            easily convert your text into Unicode with some simple, stress-free
            solution. Our content removes the challenge almost entirely so that
            you can spend less time fretting and spend more time having fun.
            Really, while Unicode is highly useful, spending your entire working
            day translating from ASCII to Unicode is not a wise use of your
            time.
          </p>
          <p>
            Instead, let us show you an easier way to spend your time by
            providing you with simple access to a Unicode text converter that
            can easily adjust everything. When you need to keep things moving
            and flowing along carefully, you should take a quick look at this
            editor to ensure you can spend more time on challenging tasks.
          </p>
          <p>
            Why waste valuable time and effort when our Unicode text converter
            can do the task for you?
          </p>{" "}
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Unicode Text Generator Work?</h3>
          <p>
            All you have to do is type the word into the initial font section,
            then you can see it in real time get generated on the right in a
            range of different fonts. Then you can select from fonts which is
            the most ideal font for you to pick and suits your needs. Once you
            have explored all the options available, go through and copy that
            specific font and then you can paste it to where you need it.
          </p>
          <p>
            Get in touch with us if you think you have any ideas on how to
            improve the unicode text generator further, simply head over to the
            contact us page and shoot us a message - we’d love to hear what you
            have to say.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Where can I use the converted Unicode text?</h3>
          <p>
            Once your text has been converted into Unicode, you can use it in a
            variety of places. This includes web pages, emails, social media
            posts, and any other digital platform that supports Unicode. This is
            particularly useful for ensuring that your text is displayed
            correctly across different platforms and devices.
          </p>
        </div>

        <br />
        <div className="content1">
          <h3>
            Can I convert large amounts of text with the Unicode Text Converter?
          </h3>
          <p>
            The Unicode Text Converter is designed to handle large amounts of
            text. This makes it a useful tool for large-scale projects, such as
            converting a whole document or website into Unicode. However, keep
            in mind that the conversion process may take longer for larger
            amounts of text.{" "}
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>
            Do I need any special skills to use the Unicode Text Converter?
          </h3>
          <p>
            No, the Unicode Text Converter is designed to be user-friendly and
            easy to use. You don't need any special skills or knowledge to use
            it. All you need to do is input your text and the tool will do the
            rest.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>
            What types of text can I convert with the Unicode Text Converter?
          </h3>
          <p>
            The Unicode Text Converter can handle any form of plain text. This
            includes letters, numbers, punctuation, and even special characters.
            This makes it a versatile tool that can be used for a wide range of
            text conversion needs.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use the Unicode Text Converter on any device?</h3>
          <p>
            As an online tool, the Unicode Text Converter can be used on any
            device with an internet connection. This includes computers,
            tablets, and smartphones. This makes it a convenient tool that you
            can use wherever you are.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnicodeTextConverter;
