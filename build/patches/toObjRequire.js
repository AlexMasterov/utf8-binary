'use strict';

const ClassRE = {
  from: /class [^{]+/g,
  to: '',
};

const MethodRE = {
  FROM: /(?:static get|get) (.+)\(\) {[^}]+(require\(.+\))(?:.+)/g,
  TO: '$1: $2,',
};

const classToObjRequire = (code) => code
  .replace(ClassRE.FROM, ClassRE.TO)
  .replace(MethodRE.FROM, MethodRE.TO);

const reduceToObjRequire = (patches, target) => {
  patches[target] = [classToObjRequire];
  return patches;
};

const toObjRequire = (...targets) =>
  targets.length > 0
    ? targets.reduce(reduceToObjRequire, {})
    : classToObjRequire;

module.exports = toObjRequire;
