import BTUCalculator from './btn_calculator';
import CurrencyRates from './currencies';


declare global {
  interface Window {
    webtools: {
      btuCalculator: BTUCalculator,
      currencyRates: CurrencyRates,
    }
  }
}

const webtools: any = {
  btuCalculator: new BTUCalculator(),
  currencyRates: new CurrencyRates(),
};

window.webtools = webtools;

export default webtools;