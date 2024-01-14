


import { intcomma } from '../utils';
import { Conf } from './types';


export default class BTUCalculator {
  private prefix = 'btuCalculator';
  private conf: Conf = {
    translation: {
      height: 'Height',
      lenght: 'Lenght',
      width: 'Width',
      results: 'Results',
      suggestedPower: 'Approximate power required',
      recommendedPower: 'Recommended power',
    },
    defaults: {
      height: 15,
      lenght: 12,
      width: 9,
      credits: 'https://wilmermartinez.dev'
    }
  }
  private height: number;
  private lenght: number;
  private width: number;
  //private errors: Record<string, string> = {};
  private factor = 0.312;

  constructor(height = 15, lenght = 12, width = 9) {
    this.height = height || this.conf.defaults.height;
    this.lenght = lenght || this.conf.defaults.lenght;
    this.width = width || this.conf.defaults.width;
  }

  setConf(conf?: Conf) {
    if (conf !== undefined) {
      if (conf.translation) {
        this.conf.translation = { ...this.conf.translation, ...conf.translation };
      }
      if (conf.defaults) {
        this.conf.defaults = { ...this.conf.defaults, ...conf.defaults };
      }
    }
    this.height = this.conf.defaults.height;
    this.lenght = this.conf.defaults.lenght;
    this.width = this.conf.defaults.width;
  }

  create(selector?: string) {
    selector = selector || `#${this.prefix}`;
    this.createElements(this.conf, selector);
    this.calculate();
  }

  createElements(conf: Conf, selector: string) {
    const containerElement = document.querySelector(selector);

    if (!containerElement) {
      throw Error(`The HTML selector '${selector}' is not defined.`)
    }

    containerElement.innerHTML = `
    <div>
      <style>
        .form-control {
          margin-bottom: 1rem;
          width: 100%;
          text-align: center;
        }
        .form-control-container {
          display: flex;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
        }
        .fw-bold {
          font-weight: bold;
        }
        .btu-calculator {
          position: relative;
          text-align: center;
        }
        .btu-calculator-form {
          position: relative;
        }
        .btu-suggested {
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }
        .btu-required {
          /**/
        }
      </style>
      <div class="btu-calculator">
        <div class="btuCalculatorAlerts">
          <div id="alert1" class="alert"></div>
          <div id="alert2" class="alert"></div>
        </div>
        <div class="btu-calculator-form">
          <div class="form-container form-control-height">
            <label class="form-label">${conf.translation.height} (FT)</label>
            <div class="form-control-container">
              <input type="number" id="btuCalculatorHeight" class="form-control" value="${conf.defaults.height}" min="0">
            </div>
          </div>
          <div class="form-control-lenght">
            <label class="form-label">${conf.translation.lenght} (FT)</label>
            <div class="form-control-container">
              <input type="number" id="btuCalculatorLenght" class="form-control" value="${conf.defaults.lenght}" min="0">
            </div>
          </div>
          <div class="form-control-width">
            <label class="form-label">${conf.translation.width} (FT)</label>
            <div class="form-control-container">
              <input type="number" id="btuCalculatorWidth" class="form-control" value="${conf.defaults.width}" min="0">
            </div>
          </div>
        </div>
        <div class="btu-calculator-results">
          <div class="btu-suggested">
            <div>${conf.translation.suggestedPower}:</div>
            <div id="btuSuggested" class="fw-bold"></div>
          </div>
          <div class="btu-required">
            <div>${conf.translation.recommendedPower}:</div>
            <div id="btuRequired" class="fw-bold"></div>
          </div>
        </div>
      </div>

    </div>
    `

    const btuCalculatorHeight =  document.getElementById('btuCalculatorHeight');
    if (btuCalculatorHeight) {
      btuCalculatorHeight.onchange = this.onChangeHeight;
      btuCalculatorHeight.oninput = this.onChangeHeight;
    }

    const btuCalculatorLenght =  document.getElementById('btuCalculatorLenght');
    if (btuCalculatorLenght) {
      btuCalculatorLenght.onchange = this.onChangeLenght;
      btuCalculatorLenght.oninput = this.onChangeLenght;
    }

    const btuCalculatorWidth =  document.getElementById('btuCalculatorWidth');
    if (btuCalculatorWidth) {
      btuCalculatorWidth.onchange = this.onChangeWidth;
      btuCalculatorWidth.oninput = this.onChangeWidth;
    }
  }

  getInputValue(id: string) {
    const input = document.getElementById(id);
    if (input && input instanceof HTMLInputElement) {
      return parseFloat(input.value);
    }
    return 0;
  }

  onChangeHeight = () => {
    console.log(this)
    this.height = this.getInputValue('btuCalculatorHeight');
    this.onChange();
  }

  onChangeLenght = () => {
    this.lenght = this.getInputValue('btuCalculatorLenght');
    this.onChange();
  }

  onChangeWidth = () => {
    this.width = this.getInputValue('btuCalculatorWidth');
    this.onChange();
  }

  onChange = () => {
    this.calculate();
  }

  calculate() {
    //this.errors = {};

    //const alert1Element = document.getElementById('alert1') as HTMLDivElement;
    const alert2Element = document.getElementById('alert2') as HTMLDivElement;
    const btuRequiredElement = document.getElementById('btuRequired') as HTMLDivElement;
    const btuSuggestedElement = document.getElementById('btuSuggested') as HTMLDivElement;
    const a = this.lenght * this.factor;
    const b = this.width * this.factor;
    const c = this.height * this.factor;
    const d = 4;
    const e = 0;
    const units3 = 165;
    let tmp = a * b * c;
    let tmp2 = (d + e) * 400;

    tmp2 = Math.floor((tmp2 * 100) + 0.5) / 100;
    tmp = Math.floor((tmp * 100) + 0.5) / 100;
    tmp = tmp * units3;
    tmp = tmp + tmp2;
    tmp = Math.floor((tmp * 100) + 0.5) / 100;

    btuRequiredElement.innerHTML = intcomma(tmp) + ' BTU';

    const btuRanges = [
      { min: 1, max: 9000, value: 9000 },
      { min: 9001, max: 12000, value: 12000 },
      { min: 12001, max: 18000, value: 18000 },
      { min: 18001, max: 24000, value: 24000 },
      { min: 24001, max: 36000, value: 36000 },
      { min: 36001, max: 48000, value: 48000 },
      { min: 48001, max: 60000, value: 60000 }
    ];

    let selectedBtuValue = btuRequiredElement.innerHTML; // Default value

    for (const range of btuRanges) {
      if (tmp >= range.min && tmp <= range.max) {
        selectedBtuValue = range.value.toString();
        break;
      }
    }

    btuSuggestedElement.innerHTML = intcomma(selectedBtuValue) + " BTU";

    if (tmp > btuRanges[btuRanges.length - 1].max) {
      alert2Element.classList.remove("d-none");
    }

  }
}