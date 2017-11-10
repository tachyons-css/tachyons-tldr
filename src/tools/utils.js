export function skinCss(name, colour) {
  return `
.${name} { color: ${colour}; }
.bg-${name} { background-color: ${colour}; }
.b--${name} { border-color: ${colour}; }

.hover-${name}:hover,
.hover-${name}:focus { color: ${colour}; }

.hover-bg-${name}:hover,
.hover-bg-${name}:focus { background-color: ${colour}; }`;
}

const formatRules = (rules, padding = '') => rules.split('\n').join(`\n${padding}`);

export function mqFy(name, sm, lg, rules) {
  return `
.${name} {
  ${formatRules(rules, '  ')}
}

@media screen and (min-width: ${sm}) {
  .${name}-ns {
    ${formatRules(rules, '    ')}
  }
}

@media screen and (min-width: ${sm}) and (max-width: ${lg}) {
  .${name}-m {
    ${formatRules(rules, '    ')}
  }
}

@media screen and (min-width: ${lg}) {
  .${name}-l {
    ${formatRules(rules, '    ')}
  }
}`;
}
