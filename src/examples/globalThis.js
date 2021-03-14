const thisGlob = this;

const thisGlobal = {
  thisGlobalValue: thisGlob,
  titleGlobal: ` "this" in global scope`,
  infoTextGlobal: ` "this" in global scope has reference to window object, in strict mode "this" is undefined`,
};
export default thisGlobal;
