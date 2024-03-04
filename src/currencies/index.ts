


import { Conf, Currencies } from './types.ts';


const exchangeRatesApiUrl = 'https://www.unolet.com/api/exchangerates/';
const exchangeRatesHtmlUrl = 'https://www.unolet.com/resources/exchangerates/';

export default class CurrencyRates {
  private prefix = 'currencyRates';
  private conf: Conf = {
    translation: {
      // -----
    },
    defaults: {
      mainCurrencyCode: 'USD',
    }
  }
  private mainCurrencyCode: string;
  private displayCurrencyCodes?: string[];
  private currencies?: Currencies;
  private exchangeRatesApiUrl: string;

  constructor(mainCurrencyCode = 'USD', displayCurrencyCodes?: string[]) {
    this.mainCurrencyCode = mainCurrencyCode || this.conf.defaults.mainCurrencyCode;
    this.exchangeRatesApiUrl = `${exchangeRatesApiUrl}${this.mainCurrencyCode}/?natural=1`;
    this.displayCurrencyCodes = displayCurrencyCodes;
  }

  create(selector?: string, mainCurrencyCode?: string, displayCurrencyCodes?: string[]) {
    selector = selector || `#${this.prefix}`;

    if (mainCurrencyCode) {
      this.mainCurrencyCode = mainCurrencyCode;
      this.exchangeRatesApiUrl = `${exchangeRatesApiUrl}${this.mainCurrencyCode}/?natural=1`;
    }

    if (displayCurrencyCodes) {
      this.displayCurrencyCodes = displayCurrencyCodes;
    }

    this.createElements(selector);
  }

  async createElements(selector: string) {

    const containerElement = document.querySelector(selector);

    if (!containerElement) {
      throw Error(`The HTML selector '${selector}' is not defined.`);
    }

    let currenciesTbodyInnerHtml = '';

    if (!this.currencies) {
      try {
        const response = await fetch(this.exchangeRatesApiUrl);
        if (!response.ok) {
          throw new Error(`Error al obtener las tasas de cambio. Código de estado: ${response.status}`);
        }
        const data = await response.json();
        this.currencies = data.rates;
        currenciesTbodyInnerHtml = this.buildCurrenciesTbodyInnerHtml(this.currencies);
      } catch (error) {
        console.error('Error getting the currencies.', error);
        currenciesTbodyInnerHtml = `<tr class="text-danger"><td>Error getting the currencies.</td></tr>`
      }
    }

    containerElement.innerHTML = `
    <div>
      <style>
        .currency-rates .text-danger {
          color: #ff0000;
        }
        .currency-rates .code {
          text-align: left;
        }
        .currency-rates .rate {
          text-align: right;
        }
        .currency-rates table {
          border-collapse: collapse;
        }
        .currency-rates table th, .currency-rates table td {
          padding: .4rem;
        }
        .border-bottom {
          border-bottom: 1px solid #000;
        }
      </style>
      <div class="currency-rates">
        <table>
          <tbody>
            ${currenciesTbodyInnerHtml}
          </tbody>
        </table>
        <br />
        <div><a href="${exchangeRatesHtmlUrl}" target="_blank">More currencies</a></div>
      </div>
    </div>
    `
  }

  buildCurrenciesTbodyInnerHtml(currencies?: Currencies, displayCurrencyCodes?: string[]) {
    currencies = currencies || this.currencies || {};

    displayCurrencyCodes = displayCurrencyCodes || this.displayCurrencyCodes || Object.keys(currencies);

    let html = '';
    for (const code of displayCurrencyCodes) {
      const rate = currencies[code];
      html += `<tr class="class="currency-rate"><th class="code border-bottom">${code}</th><td class="rate border-bottom">${rate}</td></tr>`;
    }
    return html;
  }
}