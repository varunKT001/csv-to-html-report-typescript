import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';
import { MatchData } from '../MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  data: MatchData[] = [];

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  constructor(public reader: DataReader) {}

  load(): MatchData[] {
    this.reader.read();
    this.data = this.reader.data.map((row: string[]): any => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult /* 'H', 'A', 'D' */,
        row[6],
      ];
    });
    return this.data;
  }
}
