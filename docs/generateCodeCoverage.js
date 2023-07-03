const fs = require('node:fs');

/**
 * @type {{ total: { statements: { pct: number; } }}}
 */
const report = JSON.parse(
  fs.readFileSync('./coverage/coverage-summary.json', 'utf8'),
);

const percentage = report.total.statements.pct;

const badgeURL = `https://img.shields.io/badge/coverage-${percentage}%25-green.svg?&color=4CEB9C&style=flat-square`;
process.stdout.write(`${badgeURL}\n`);
