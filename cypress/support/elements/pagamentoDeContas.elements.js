export const pagamentoDeContasElements = {
  linkPagamentoDeContas: '#leftPanel > ul > :nth-child(4) > a',
  inputPayeeName: 'input[name="payee.name"]',
  inputAddress: 'input[name="payee.address.street"]',
  inputCity: 'input[name="payee.address.city"]',
  inputState: 'input[name="payee.address.state"]',
  inputZipCode: 'input[name="payee.address.zipCode"]',
  inputPhoneNumber: 'input[name="payee.phoneNumber"]',
  inputAccountNumber: 'input[name="payee.accountNumber"]',
  inputVerifyAccountNumber: 'input[name="verifyAccount"]',
  inputAmount: 'input[name="amount"]',
  selectFromAccount: 'select[name="fromAccountId"]',
  buttonSendPayment: 'input[value="Send Payment"]',
};

export const validarPagamentoDeContasElements = {
  labelWelcome: '.smallText',
  mensagemWelcome: 'div[id="rightPanel"] p',
  titleWelcome: '.title',
};
