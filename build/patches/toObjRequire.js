'use strict';

const classToObjRequire = code => code
// class => obj
  .replace(/class [^{]+/g, '')
  .replace(/static? get (.+)\(\).+(require(.+));[^}]+}/g, `$1: $2,`);

const reduceToObjRequire = (patches, target) =>
  (patches[target] = [classToObjRequire], patches);

const toObjRequire = (...targets) =>
  targets.length > 0
    ? targets.reduce(reduceToObjRequire, {})
    : classToObjRequire;

module.exports = toObjRequire;
