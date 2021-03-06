const fp = require('lodash/fp')

const meta = {
  _cn6ca: 'name',
  _cokwr: 'occupation',
  _cpzh4: 'city'
}

const themes = {
  executing: 'achiever',
  _chk2m: 'arranger',
  _ciyn3: 'belief',
  _ckd7g: 'consistency',
  _clrrx: 'deliberative',
  _cyevm: 'discipline',
  _cztg3: 'focus',
  _d2mkx: 'restorative',
  _d180g: 'responsibility',
  influencing: 'activator',
  _cu76f: 'command',
  _cvlqs: 'communication',
  _cx0b9: 'competition',
  _d9ney: 'maximizer',
  _db1zf: 'self-assurance',
  _dcgjs: 'significance',
  _ddv49: 'woo',
  relationshipbuilding: 'adaptability',
  _d5fpr: 'connectedness',
  _d6ua4: 'developer',
  _d88ul: 'empathy',
  _dkvya: 'harmony',
  _dmair: 'includer',
  _dnp34: 'individualization',
  _dp3nl: 'positivity',
  _df9om: 'relator',
  strategicthinking: 'analytical',
  _di2tg: 'context',
  _djhdx: 'futuristic',
  _dw4je: 'ideation',
  _dxj3v: 'input',
  _dyxo8: 'intellection',
  _e0c8p: 'learner',
  _dqi9q: 'strategic'
}

const mappings = {
  ...meta,
  ...themes
}

const keys = fp.keys(mappings)
const valuesMeta = fp.values(meta)
const valuesThemes = fp.values(themes)

function findName(key) {
  return mappings[key]
}

function appendTop(value) {
  return `top${value}`
}

function translateRow(rows) {
  return fp.pipe([
    fp.pickAll(keys),
    fp.pickBy(fp.identity),
    fp.mapKeys(findName)
  ])(rows)
}

function map(rows) {
  const translatedRow = translateRow(rows)

  return {
    ...fp.pipe([fp.pickAll(valuesThemes), fp.mapValues(appendTop), fp.invert])(
      translatedRow
    ),
    ...fp.pickAll(valuesMeta)(translatedRow)
  }
}

module.exports = {map}
