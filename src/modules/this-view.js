import Event from './this-events';
import Logic from './this-logic';

class CreateThisExample {
  constructor(thisExa, globalTitleExa, infoTextExa) {
    this.author = 'Mattdev92';
    this.thisExample = thisExa;
    this.event = new Event();
    this.logic = new Logic();
    this.elements = {
      body: document.querySelector('body'),
      section: document.createElement('section'),
      info: document.createElement('h3'),
      button: document.createElement('button'),
      sectionTitle: globalTitleExa,
      buttonText: 'check',
      infoText: infoTextExa,
    };
    this.classNames = {
      globalSectionName: 'globalThisSection',
      buttonClassName: 'btn',
    };
  }

  createExample = () => {
    const {
      section,
      body,
      button,
      sectionTitle,
      buttonText,
      info,
    } = this.elements;
    const { globalSectionName, buttonClassName } = this.classNames;
    body.append(section);
    section.append(sectionTitle);
    section.classList.add(globalSectionName);
    button.classList.add(buttonClassName);
    button.append(buttonText);
    section.append(button);
  };
  showExample = () => {
    const example = this.thisExample;
    const { info, section, infoText, button } = this.elements;
    this.createExample();
    this.event.buttonClicked(button, example, info, section, infoText);
  };
}

export default CreateThisExample;
