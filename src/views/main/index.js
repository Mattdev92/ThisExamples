import '../../css/index.scss';
import CreateThisExample from '../../modules/this-view';
import thisGlobal from '../../examples/globalThis';
import thisObj from '../../examples/methonInObj';
import arrowThisObj from '../../examples/arrowInObj';

const examples = [thisGlobal, thisObj, arrowThisObj];

examples.map((example) =>
  new CreateThisExample(
    example.thisGlobalValue,
    example.titleGlobal,
    example.infoTextGlobal
  ).showExample()
);
