module.exports = {
  '*.md': ['cspell --no-must-find-files'],
  '*.{json,yaml}': ['prettier --write', 'cspell --no-must-find-files'],
  '*.{js,ts,tsx}': ['eslint --fix', 'cspell --no-must-find-files'],
};
