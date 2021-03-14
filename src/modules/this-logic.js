class Logic {
  constructor() {
    this.author = 'Mattdev1992';
  }
  globalReason = (info, section, infoText) => {
    section.removeChild(section.lastChild);
    section.append(info);
    info.classList.add('info');
    info.append(infoText);
  };
}
export default Logic;
