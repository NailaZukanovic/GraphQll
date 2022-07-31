const root = {

  hello: () => {
    return 'Hello!!!';
  },

  dajSlucajniBroj: async () => {
    return Math.random();
  },

  nekiSaArgumentima: async (args) => {
    const { nesto } = args;
    return 'Poslali ste ' + nesto;
  },

  nestoSlozeno: async () => {
    return {
      nekiString: 'Cao kako si?',
      nekiBroj: 12345
    };
  }

};

module.exports = root;