import Logic from './this-logic';

class ThisEvents {
  constructor() {
    this.logic = new Logic();
    this.author = 'Mattdev92';
  };

  buttonClicked = (button,example,info, section, infoText) => {
      button.addEventListener('click', () => {
      alert(`${example}`);
      this.logic.globalReason(info, section, infoText);
    });
  };
  };

export default ThisEvents;
