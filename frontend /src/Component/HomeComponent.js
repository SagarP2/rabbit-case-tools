import React, { useState } from "react";
// Import Header component
import Footer from "./Footer";
import "./css/HomeComponent.css";
import { Helmet } from "react-helmet";
const HomeComponent = () => {
  const [text, setText] = useState("");

  const handleSentenceCase = () => {
    const lines = text.split("\n");
    const transformedLines = lines.map((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length === 0) return line; // Keep empty lines as they are
      // Capitalize the first letter of the line and convert the rest to lowercase
      return (
        trimmedLine.charAt(0).toUpperCase() + trimmedLine.slice(1).toLowerCase()
      );
    });
    setText(transformedLines.join("\n"));
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  function toCapitalizedCase(text) {
    return text
      .toLowerCase() // First, convert the entire text to lowercase
      .split(" ") // Split the text by spaces to get each word
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back with spaces
  }

  // Usage in HomeComponent
  const handleCapitalizedCase = () => {
    setText(toCapitalizedCase(text));
  };

  const handleAlternatingCase = () => {
    const transformedText = text
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) return char.toLowerCase();
        return char.toUpperCase();
      })
      .join("");
    setText(transformedText);
  };

  const handleInverseCase = () => {
    const transformedText = text
      .split("")
      .map((char) => {
        if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
    setText(transformedText);
  };

  const handleDownloadText = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "textfile.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Handle copying text to clipboard
  const handleCopyToClipboard = async () => {
    const messageElement = document.getElementById("message"); // Element to display the message
    try {
      await navigator.clipboard.writeText(text); // Assuming `text` is defined
      messageElement.textContent = "Text copied to clipboard!";
    } catch (err) {
      messageElement.textContent = "Failed to copy text: " + err;
    }
  
    // Remove the message after 2 seconds
    setTimeout(() => {
      messageElement.textContent = "";
    }, 2000); // 2000ms = 2 seconds
  };

  // Handle clearing the textarea
  const handleClear = () => {
    setText("");
  };

  // Calculate text statistics
  const calculateTextStatistics = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "");
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n");
    return {
      wordCount: words.length,
      letterCount: letters.length,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics();

  return (
    <div className="home-container">
      <main>
        <Helmet>
          <title>RabbitCase - Text Case Converter</title>
          <meta
            name="description"
            content="Transform your text case easily. Convert between uppercase, lowercase, title case, and sentence case with our free text converter tool."
          />
          <meta
            name="keywords"
            content="text case converter, text transformer, case changer, text formatting"
          />
          <meta
            property="og:title"
            content="RabbitCode - Text Case Converter"
          />
          <meta
            property="og:description"
            content="Transform your text case easily. Free online text case converter tool."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://rabbitcode.agency/tools/case-converter"
          />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Text Case Converter"
          />
          <meta
            name="twitter:description"
            content="Transform your text case easily. Free online text case converter tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          <link
            rel="canonical"
            href="https://rabbitcode.agency/tools/case-converter"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content-box">
          <h2>
            Accidentally hit caps lock while typing and now don’t feel like
            starting over? Don’t worry, it happens!
          </h2>
          <p>
            All you need to do is enter your text into the field, then choose
            the specific case you’d like to convert it to. This tool makes it
            quick and easy to adjust text to your preferred formatting style.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Start typing your notes here..."
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <br />
          <div id="message"></div>
          <br />
          <div className="btn-container">
            <button class="btn-422" onClick={handleSentenceCase}>
              Sentence case
            </button>
            <button class="btn-422" onClick={handleLowerCase}>
              lower case
            </button>
            <button class="btn-422" onClick={handleUpperCase}>
              UPPER CASE
            </button>
            <button class="btn-422" onClick={handleCapitalizedCase}>
              Capitalized Case
            </button>
            <button class="btn-422" onClick={handleAlternatingCase}>
              aLtErNaTiNg cAsE
            </button>
            <button class="btn-422" onClick={handleInverseCase}>
              InVeRsE CaSe
            </button>
            <button class="btn-422" onClick={handleDownloadText}>
              Download Text
            </button>

            <button class="btn-422" onClick={handleCopyToClipboard}>
              Copy to Clipboard
            </button>
            <button class="btn-422" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Introducing the Rabbit Case Text Generator</h3>
          <p>
            A convenient online tool that allows you to easily switch between
            lowercase and uppercase letters, capitalize or uncapitalize text,
            convert to mixed case, and transform your text in various ways.
            Explore the options below:
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Sentence Case</h3>
          <p>
            The sentence case converter allows you to paste any text,
            automatically transforming it into a properly structured sentence
            with correct capitalization.
          </p>
          <p>
            It functions by capitalizing the first letter of each sentence and
            converting the rest of the text into lowercase, including changing
            'i' to 'I'. Every letter following a period will be automatically
            changed to uppercase
          </p>
          <p>Note: However, it will not capitalize names or places.</p>
          <p>This is an example of sentence case formatting.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Lower Case</h3>
          <p>
            If you're looking to uncapitalize text, the lowercase text converter
            is exactly what you need. It transforms all the letters in your text
            to lowercase. Simply copy the text you want to convert and paste it
            into the box above, then select the 'lower case' tab.
          </p>
          <p>this is an example of lowercase text.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Upper Case</h3>
          <p>
            The uppercase converter will take any text you provide and change
            all letters to uppercase. It will convert all lowercase letters to
            CAPITALS, while keeping any uppercase letters unchanged.
          </p>
          <p>
            "To do this, simply copy the text you want to change, paste it into
            the box above, and then select the 'UPPER CASE' tab.
          </p>
          <p>THIS IS AN EXAMPLE OF UPPERCASE TEXT.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Capitalized Case</h3>
          <p>
            The capitalized case converter will automatically change the first
            letter of each word to uppercase, while keeping the rest of the
            letters in lowercase.
          </p>
          <p>
            Simply copy the content you want to convert into this format, paste
            it into the box above, and select the 'Capitalized Case' tab.
          </p>
          <p>This Is An Example Of Capitalized Case.</p>{" "}
        </div>

        <br />
        <div className="content1">
          <h3>Alternating Case</h3>
          <p>
            The alternating case converter allows you to transform any text into
            a format where the letters alternate between uppercase and
            lowercase. It will generate a capital letter followed by a lowercase
            letter within the same word.
          </p>
          <p>tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Title Case</h3>
          <p>
            The title case converter is ideal for those unsure of how to format
            a title for an essay. It ensures that the correct words are
            capitalized within the context of a title. Minor words like 'an'
            will remain in lowercase, while important words, such as 'Title',
            will be capitalized.
          </p>
          <p>This Is an Example of Title Case.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Small Text Generator</h3>
          <p>
            The small text generator takes regular text and converts it into
            smaller text, including 'small caps' and 'superscript' styles.
            Simply type your text, and watch it transform into the small text
            font.
          </p>
          <p>Tʜɪꜱ ɪꜱ ᴀɴ ᴇxᴀᴍᴘʟᴇ ᴏꜰ ᴛɪɴʏ ᴛᴇxᴛ ᴄᴀꜱᴇ ꜱᴍᴀʟʟ ᴄᴀᴘꜱ</p>
          <p>ᵗʰⁱˢ ⁱˢ ᵃⁿ ᵉˣᵃᵐᵖˡᵉ ᵒᶠ ᵗⁱⁿʸ ᵗᵉˣᵗ ᶜᵃˢᵉ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ</p>
        </div>
        <br />
        <div className="content1">
          <h3>Wide Text Generator</h3>
          <p>
            If you want to broaden the appearance of your text, the text
            widening generator, also referred to as the Aesthetic Font and text
            generator, is perfect for this. Just type your regular text and
            watch it expand progressively.
          </p>
          <p>
            Ｔｈｉｓ ｉｓ ａｎ ｅｘａｍｐｌｅ ｏｆ ｗｉｄｅ ａｅｓｔｈｅｔｉｃ ｔｅｘｔ。
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Strikethrough Text Generator</h3>
          <p>
            If you're looking for a fast method to strike through your text,
            this tool is ideal. Simply type the regular text you want to be
            crossed out, and it will be automatically generated, ready for you
            to copy and paste.
          </p>
          <p>T̶h̶i̶s̶ ̶i̶s̶ ̶a̶n̶ ̶e̶x̶a̶m̶p̶l̶e̶ ̶o̶f̶ ̶s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶t̶e̶x̶t̶.̶</p>
        </div>
        <br />
        <div className="content1">
          <h3>Reverse Text Generator</h3>
          <p>
            If you're looking for a quick and easy way to reverse your text, the
            reverse text generator is perfect. Simply write your text as usual,
            and watch it get flipped.
          </p>
          <p>.txet sdrawkcab fo ecnetnes elpmaxe na si sihT</p>
        </div>
        <br />
        <div className="content1">
          <h3>Upside down Text Generator</h3>
          <p>
            Similar to the mirror text generator and the reverse text generator,
            the upside down text generator allows you to flip your text both
            upside down and backwards.
          </p>
          <p>˙ʇxǝʇ uʍop ǝpᴉsdn ɟo ǝldɯɐxǝ uɐ sᴉ sᴉɥ┴</p>
        </div>
        <br />
        <div className="content1">
          <h3>Morse Code Translator</h3>
          <p>
            Whether you need to convert Morse code messages into plain English
            or vice versa, this online translation generator can do exactly
            that. It also features an audio player so you can listen to the
            translation.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Underline Text Generator</h3>
          <p>
            Underline your text online with this underliner tool. Simply write
            or paste the content you want underlined, and it will be
            automatically generated with an underline, ready for you to copy and
            paste wherever you need.
          </p>
          <p>T̲h̲i̲s̲ ̲i̲s̲ ̲a̲n̲ ̲e̲x̲a̲m̲p̲l̲e̲ ̲o̲f̲ ̲u̲n̲d̲e̲r̲l̲i̲n̲e̲ ̲t̲e̲x̲t̲.̲</p>
        </div>
        <br />
        <div className="content1">
          <h3>Mirror Text Generator</h3>
          <p>
            Mirror text is essentially the same as the text you would see when
            looking at it in a mirror. Print the text out, hold it up to a
            mirror, and it should appear the correct way.
          </p>
          <p>.ƚxɘƚ ɿoɿɿim ʇo ɘlqmɒxɘ nɒ ƨi ƨiʜT</p>
        </div>
        <br />
        <div className="content1">
          <h3>Unicode Text Converter</h3>
          <p>
            Explore our Unicode text generator for a variety of different fonts.
            Simply type your regular text and then select the style you want to
            use.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Zalgo Glitch Text Generator</h3>
          <p>
            Want to create funky and glitchy text? The Zalgo text generator will
            do just that. Type out your regular text, and watch it transform
            into the Zalgo font.
          </p>
          <p>T̵̡̧̨̖̪̗̠͔̰̓̈́̕͜ẖ̷̙̪̮̭̖̮̯̘͋͐̃̅͌̈́̆̕ͅȉ̶̛̫̟͎͋͗̓s̵̡͔̻͆̄͘ i̴̟͔͚͔͗͠ś̴̳̗͙ a̵̧̳͇̜̪̣̅̓n̸̛̰̼͇̱͐̎̀̽̌̐̿̈́̓ͅ ḛ̴̟̉͗x̷̬̩̀̕à̵̡̭̫̤̯͇̫͓̘͊̑͐̎̍͠m̶͎̦̾̾͠p̷̗̬̯̰͙̣̮̋̈́͆͊̇̿̋l̸̨̘̞̗̩̞̱͖̏̍̽̆͜͜e̸̱̹̬̞̹̍̇̓ͅ o̷̊ͅḟ̴͈̆̔̾̒́ g̴̤̪̻̰̗̀̓̎͋͝l̷̨͇͔͈̤̝̊̀̂͛͜į̴̡̦̼̄̏̏͛̒ẗ̶̙̻̜̺͉́̽̒̅̀̐͝c̸̛̛͇̱͇̮͔͔͙̼̀̈́̀͜h̵̙̘̣̻͈̫͇̜͂́̍͊͗̀͜ t̷̬̹̜̼̫̘͒̊ę̷̰̬̠̭̠͉̳̐́̒͑͋̓̎̽̈́͠x̷̢̢̛͓̜͚̖̜͕̼̙̌̍ţ̵̖͖̜̜̪́̎͒̚͜͝.̷̛̬̖̳̻̪̩̾̾̆̄̓͋͒̚͠</p>
        </div>
        <br />
        <div className="content1">
          <h3>Binary Code Translator</h3>
          <p>
            Use the following generator to translate binary code into English
            and English into binary code. Simply type normally, and you'll
            receive a series of 0’s and 1’s in return.
          </p>
          <p>
            01000010 01101001 01101110 01100001 01110010 01111001 00100000
            01000011 01101111 01100100 01100101 00100000 01010100 01110010
            01100001 01101110 01110011 01101100 01100001 01110100 01101111
            01110010
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Bold Text Generator</h3>
          <p>
            A fast way to bold your text online. Just type the regular text into
            the tool, and it will automatically be converted to bold, ready for
            you to copy and paste.
          </p>
          <p>𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Italic Text Converter</h3>
          <p>
            If you'd like to italicize your font, this tool is perfect. Simply
            type your regular text, and it will automatically be slanted, ready
            for you to copy and paste wherever you need.
          </p>
          <p>𝘛𝘩𝘪𝘴 𝘪𝘴 𝘢𝘯 𝘦𝘹𝘢𝘮𝘱𝘭𝘦 𝘰𝘧 𝘪𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeComponent;
