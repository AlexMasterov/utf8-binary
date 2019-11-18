'use strict';

const CLASS_REGEXP = /class [^{]+/g;
const STATIC_METHOD_REGEXP = /static? get (.+)\(\).+(require(.+));[^}]+}/g;

const classToObjRequire = (code) => code
// class => obj
  .replace(CLASS_REGEXP, '')
  .replace(STATIC_METHOD_REGEXP, `$1: $2,`);

const reduceToObjRequire = (patches, target) =>
  (patches[target] = [classToObjRequire], patches);

const toObjRequire = (...targets) =>
  targets.length > 0
    ? targets.reduce(reduceToObjRequire, {})
    : classToObjRequire;

module.exports = toObjRequire;
