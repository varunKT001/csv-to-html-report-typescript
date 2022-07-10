import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;

    if (!fs.existsSync('reports')) {
      fs.mkdirSync('reports');
    }

    fs.writeFileSync('reports/report.html', html, { encoding: 'utf-8' });
  }
}
