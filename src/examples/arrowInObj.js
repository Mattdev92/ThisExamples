const Obj = {
  thisFunc: () => {
    const thisVal = this;
    return thisVal;
  },
};

const arrowThisObj = {
  thisGlobalValue: Obj.thisFunc(),
  titleGlobal: ` "this" in arrow function in Object`,
  infoTextGlobal: `"this" in arrow function in Object doesn't create context and refers to global - in strict mode it's undefined`,
};

export default arrowThisObj;
