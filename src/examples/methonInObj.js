const Obj = {
  thisFunc() {
    const thisVal = this;
    return thisVal;
  },
};

const thisObj = {
  thisGlobalValue: Obj.thisFunc(),
  titleGlobal: ` "this" in method in Object`,
  infoTextGlobal: `"this" in method in Object creates context and refers to Object`,
};

export default thisObj;
