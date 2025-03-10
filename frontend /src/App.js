import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import HomeComponent from './component/HomeComponent';
import BigTextConverter from './Text Modification Formatting/BigTextConverter';
import BoldTextGenerator from './Text Modification Formatting/BoldTextGenerator';
import DuplicateLineRemover from './Text Modification Formatting/DuplicateLineRemover';
import ItalicTextConverter from './Text Modification Formatting/ItalicTextConverter';
import PlainTextConverter from './Text Modification Formatting/PlainTextConverter';
import RemoveLineBreaks from './Text Modification Formatting/RemoveLineBreaks';
import ReverseTextGenerator from './Text Modification Formatting/ReverseTextGenerator';
import SentenceCaseConverter from './Text Modification Formatting/SentenceCaseConverter';
import SmallTextGenerator from './Text Modification Formatting/SmallTextGenerator';
import StackedTextGenerator from './Text Modification Formatting/StackedTextGenerator';
import StrikethroughTextGenerator from './Text Modification Formatting/StrikethroughTextGenerator';
import SuperscriptGenerator from './Text Modification Formatting/SuperscriptGenerator';
import TitleCaseConverter from './Text Modification Formatting/TitleCaseConverter';
import UnderlineTextGenerator from './Text Modification Formatting/UnderlineTextGenerator';
import UnicodeTextConverter from './Text Modification Formatting/UnicodeTextConverter';
import WhitespaceRemover from './Text Modification Formatting/WhitespaceRemover';
import WideTextGenerator from './Text Modification Formatting/WideTextGenerator';

import BinaryCodeTranslator from './Code & Data Translation/BinaryCodeTranslator';
import CSVtoJSONConverter from './Code & Data Translation/CSVtoJSONConverter';
import HextoTextConverter from './Code & Data Translation/HextoTextConverter';
import JSONStringifyTextGenerator from './Code & Data Translation/JSONStringifyTextGenerator';
import UTMBuilderGenerator from './Code & Data Translation/UTMBuilderGenerator';

import AsciiArtGenerator from './Image Tools/AsciiArtGenerator';
import JPGtoPNGConverter from './Image Tools/JPGtoPNGConverter';
import JPGtoWebPConverter from './Image Tools/JPGtoWebPConverter';
import PNGtoJPGConverter from './Image Tools/PNGtoJPGConverter';
import PNGtoWebPConverter from './Image Tools/PNGtoWebPConverter';
import SVGtoPNGConverter from './Image Tools/SVGtoPNGConverter';
import WebPtoJPGConverter from './Image Tools/WebPtoJPGConverter';
import WebPtoPNGConverter from './Image Tools/WebPtoPNGConverter';

import OnlineNotepad from './Misc. Tools/OnlineNotepad';
import OnlineSentenceCounter from './Misc. Tools/OnlineSentenceCounter';
import RepeatTextGenerator from './Misc. Tools/RepeatTextGenerator';
import RomanNumeralDateConverter from './Misc. Tools/RomanNumeralDateConverter';
import SortWordsAlphabetically from './Misc. Tools/SortWordsAlphabetically';
import TextReplacementTool from './Misc. Tools/TextReplacementTool';

import RandomChoiceGenerator from './Random Generators/RandomChoiceGenerator';
import RandomDateGenerator from './Random Generators/RandomDateGenerator';
import RandomIPAddressGenerator from './Random Generators/RandomIPAddressGenerator';
import RandomLetterGenerator from './Random Generators/RandomLetterGenerator';
import RandomMonthGenerator from './Random Generators/RandomMonthGenerator';
import RandomNumberGenerator from './Random Generators/RandomNumberGenerator';
import StrongPasswordGenerator from './Random Generators/StrongPasswordGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/BigTextConverter" element={<BigTextConverter />} />
          <Route path="/BoldTextGenerator" element={<BoldTextGenerator />} />
          <Route path="/DuplicateLineRemover" element={<DuplicateLineRemover />} />
          <Route path="/ItalicTextConverter" element={<ItalicTextConverter />} />
          <Route path="/PlainTextConverter" element={<PlainTextConverter />} />
          <Route path="/RemoveLineBreaks" element={<RemoveLineBreaks />} />
          <Route path="/ReverseTextGenerator" element={<ReverseTextGenerator />} />
          <Route path="/SentenceCaseConverter" element={<SentenceCaseConverter />} />
          <Route path="/SmallTextGenerator" element={<SmallTextGenerator />} />
          <Route path="/StackedTextGenerator" element={<StackedTextGenerator />} />
          <Route path="/StrikethroughTextGenerator" element={<StrikethroughTextGenerator />} />
          <Route path="/SuperscriptGenerator" element={<SuperscriptGenerator />} />
          <Route path="/TitleCaseConverter" element={<TitleCaseConverter />} />
          <Route path="/UnderlineTextGenerator" element={<UnderlineTextGenerator />} />
          <Route path="/UnicodeTextConverter" element={<UnicodeTextConverter />} />
          <Route path="/WhitespaceRemover" element={<WhitespaceRemover />} />
          <Route path="/WideTextGenerator" element={<WideTextGenerator />} />
          
          <Route path="/BinaryCodeTranslator" element={<BinaryCodeTranslator />} />
          <Route path="/CSVtoJSONConverter" element={<CSVtoJSONConverter />} />
          <Route path="/HextoTextConverter" element={<HextoTextConverter />} />
          <Route path="/JSONStringifyTextGenerator" element={<JSONStringifyTextGenerator />} />
          <Route path="/UTMBuilderGenerator" element={<UTMBuilderGenerator />} />
          
          <Route path="/AsciiArtGenerator" element={<AsciiArtGenerator />} />
          <Route path="/JPGtoPNGConverter" element={<JPGtoPNGConverter />} />
          <Route path="/JPGtoWebPConverter" element={<JPGtoWebPConverter />} />
          <Route path="/PNGtoJPGConverter" element={<PNGtoJPGConverter />} />
          <Route path="/PNGtoWebPConverter" element={<PNGtoWebPConverter />} />
          <Route path="/SVGtoPNGConverter" element={<SVGtoPNGConverter />} />
          <Route path="/WebPtoJPGConverter" element={<WebPtoJPGConverter />} />
          <Route path="/WebPtoPNGConverter" element={<WebPtoPNGConverter />} />
          
          <Route path="/OnlineNotepad" element={<OnlineNotepad />} />
          <Route path="/OnlineSentenceCounter" element={<OnlineSentenceCounter />} />
          <Route path="/RepeatTextGenerator" element={<RepeatTextGenerator />} />
          <Route path="/RomanNumeralDateConverter" element={<RomanNumeralDateConverter />} />
          <Route path="/SortWordsAlphabetically" element={<SortWordsAlphabetically />} />
          <Route path="/TextReplacementTool" element={<TextReplacementTool />} />
          
          <Route path="/RandomChoiceGenerator" element={<RandomChoiceGenerator />} />
          <Route path="/RandomDateGenerator" element={<RandomDateGenerator />} />
          <Route path="/RandomIPAddressGenerator" element={<RandomIPAddressGenerator />} />
          <Route path="/RandomLetterGenerator" element={<RandomLetterGenerator />} />
          <Route path="/RandomMonthGenerator" element={<RandomMonthGenerator />} />
          <Route path="/RandomNumberGenerator" element={<RandomNumberGenerator />} />
          <Route path="/StrongPasswordGenerator" element={<StrongPasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
