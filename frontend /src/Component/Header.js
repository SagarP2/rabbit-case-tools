import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from './Image/favicon10.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const options = [
    {
      label: "Text Editer & Formatting",
      items: [
        { label: "Big Text Converter", value: "BigTextConverter" },
        { label: "Bold Text Generator", value: "BoldTextGenerator" },
        { label: "Duplicate Line Remover", value: "DuplicateLineRemover" },
        { label: "Italic Text Converter", value: "ItalicTextConverter" },
        { label: "Plain Text Converter", value: "PlainTextConverter" },
        { label: "Remove Line Breaks", value: "RemoveLineBreaks" },
        { label: "Reverse Text Generator", value: "ReverseTextGenerator" },
        { label: "Sentence Case Converter", value: "SentenceCaseConverter" },
        { label: "Small Text Generator", value: "SmallTextGenerator" },
        { label: "Stacked Text Generator", value: "StackedTextGenerator" },
        { label: "Strikethrough Text Generator", value: "StrikethroughTextGenerator" },
        { label: "Superscript Generator", value: "SuperscriptGenerator" },
        { label: "Title Case Converter", value: "TitleCaseConverter" },
        { label: "Underline Text Generator", value: "UnderlineTextGenerator" },
        { label: "Unicode Text Converter", value: "UnicodeTextConverter" },
        { label: "Whitespace Remover", value: "WhitespaceRemover" },
        { label: "Wide Text Generator", value: "WideTextGenerator" }
      ]
    },
    {
      label: "Code & Data Translation",
      items: [
        { label: "Binary Code Translator", value: "BinaryCodeTranslator" },
        { label: "CSV to JSON Converter", value: "CSVtoJSONConverter" },
        { label: "Hex to Text Converter", value: "HextoTextConverter" },
        { label: "JSON Stringify Text Generator", value: "JSONStringifyTextGenerator" },
        { label: "UTM Builder Generator", value: "UTMBuilderGenerator" }
      ]
    },
    {
      label: "Image Tools",
      items: [
        { label: "Ascii Art Generator", value: "AsciiArtGenerator" },
        { label: "JPG to PNG Converter", value: "JPGtoPNGConverter" },
        { label: "JPG to WebP Converter", value: "JPGtoWebPConverter" },
        { label: "PNG to JPG Converter", value: "PNGtoJPGConverter" },
        { label: "PNG to WebP Converter", value: "PNGtoWebPConverter" },
        { label: "SVG to PNG Converter", value: "SVGtoPNGConverter" },
        { label: "WebP to JPG Converter", value: "WebPtoJPGConverter" },
        { label: "WebP to PNG Converter", value: "WebPtoPNGConverter" }
      ]
    },
    {
      label: "Random Generators",
      items: [
        { label: "Random Choice Generator", value: "RandomChoiceGenerator" },
        { label: "Random Date Generator", value: "RandomDateGenerator" },
        { label: "Random IP Address Generator", value: "RandomIPAddressGenerator" },
        { label: "Random Letter Generator", value: "RandomLetterGenerator" },
        { label: "Random Month Generator", value: "RandomMonthGenerator" },
        { label: "Random Number Generator", value: "RandomNumberGenerator" },
        { label: "Strong Password Generator", value: "StrongPasswordGenerator" }
      ]
    },
    {
      label: "Miscellaneous Tools",
      items: [
        { label: "Online Notepad", value: "OnlineNotepad" },
        { label: "Online Sentence Counter", value: "OnlineSentenceCounter" },
        { label: "Repeat Text Generator", value: "RepeatTextGenerator" },
        { label: "Roman Numeral Date Converter", value: "RomanNumeralDateConverter" },
        { label: "Sort Words Alphabetically", value: "SortWordsAlphabetically" },
        { label: "Text Replacement Tool", value: "TextReplacementTool" }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleLinkClick = () => {
    setDropdownOpen(null);  // Close the dropdown
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown"
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                className="dropbtn"
                onClick={() => handleDropdownToggle(index)}
              >
                {option.label}
              </button>
              {dropdownOpen === index && (
                <div className="dropdown-content">
                  {option.items.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && idx % 20 === 0 && <br />}
                      <Link to={`/${item.value}`} onClick={handleLinkClick}>
                        {item.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
