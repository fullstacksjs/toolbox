import * as fs from 'fs';

interface StatementCoverage {
  pct: number;
}

interface TotalCoverage {
  statements: StatementCoverage;
}

interface CoverageReport {
  total: TotalCoverage;
}
const report: CoverageReport = JSON.parse(
  fs.readFileSync('./coverage/coverage-summary.json', 'utf8'),
);

const coveragePercentage = report.total.statements.pct;

const badgeURL = `https://img.shields.io/badge/coverage-${coveragePercentage}%25-green.svg?&color=EA5F12&style=flat-square`;

console.log(badgeURL);
