/* Inheritance based approach */
// import { MatchReader } from './inheritance-approach/MatchReader';
// import { MatchResult } from './MatchResult';

/* Interface based approach */
import { WinsAnalyzer } from './analysers/WinsAnalyzer';
import { CsvFileReader } from './composition-approach/CsvFileReader';
import { MatchReader } from './composition-approach/MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

/* Match Reader */
const csvFileReader = new CsvFileReader('assets/football.csv');
const data = new MatchReader(csvFileReader).load();

/* Match Reader using static class methods */
const csvFileReaderUsingStaticMethod = MatchReader.fromCsv(
  'assets/football.csv'
);

/* Wins analysis for the team: Man United */
const analyzer = new WinsAnalyzer('Man United');

/* Console reports */
const consoleTarget = new ConsoleReport();
const consoleSummary = new Summary(analyzer, consoleTarget);

consoleSummary.buildAndPrintReport(data);

/* HTML reports */
const htmlTarget = new HTMLReport();
const htmlSummary = new Summary(analyzer, htmlTarget);

htmlSummary.buildAndPrintReport(data);

/* HTML report using static class methods */
const htmlSummaryUsingStaticMethod =
  Summary.winsAnalysisWithHtmlReport('Man United');

htmlSummaryUsingStaticMethod.buildAndPrintReport(data);
