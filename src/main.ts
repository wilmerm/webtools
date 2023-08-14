import './style.css'
import BTUCalculator from './btn_calculator';


declare global {
  interface Window {
    webtools: {
      btuCalculator: BTUCalculator,
    }
  }
}

const webtools: any = {
  btuCalculator: new BTUCalculator(),
};

window.webtools = webtools;

export default webtools;