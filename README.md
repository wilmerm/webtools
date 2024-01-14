# simple-webtools

simple-webtools is a collection of lightweight web tools designed to simplify development workflows and enhance user experiences.

## The webtools

### btuCalculator (BTU Calculator)

The BTU Calculator is a tool to help you calculate the recommended BTU (British Thermal Units) for air conditioning based on specific room dimensions.

To use the BTU Calculator, simply include the following HTML code in your project:

```.html
<div id="btuCalculator"></div>

<script src="https://unpkg.com/simple-webtools@latest/dist/webtools.js"></script>

<script>
  window.addEventListener('load', (event) => {
    window.webtools.btuCalculator.create('#btuCalculator');
  });
</script>
```

![image](https://github.com/wilmerm/webtools/assets/44853160/d224cda7-427c-4680-ae1f-d86bc927f8fe)

### currencyRates (Currency Rates List)

This tool provides an interactive widget that displays updated exchange rates. Information is updated daily, ensuring you always have accurate and relevant data at your disposal.

```.html
<div id="currencyRates"></div>

<script src="https://unpkg.com/simple-webtools@latest/dist/webtools.js"></script>

<script>
  window.addEventListener('load', (event) => {
    window.webtools.currencyRates.create('#currencyRates', 'USD', ['CNY', 'EUR', 'CLP', 'GBP', 'GTQ', 'NIO']);
  });
</script>
```

![image](https://github.com/wilmerm/webtools/assets/44853160/e5a63e3d-ca86-4505-a399-c42292bf4f85)

## Installation

### CDN

[https://unpkg.com/simple-webtools@latest/dist/webtools.js](https://unpkg.com/simple-webtools@latest/dist/webtools.js)

### Install with Npm

```.sh
npm install simple-webtools
```

### Install with Yarn

```.sh
yarn add simple-webtools
```

## Developer

To contribute to the development of simple-webtools or customize it to your needs, you can follow these steps:

1. Install dependencies:

```.sh
npm install
```

2. Start the development server:

```.sh
npm run dev
```

3. Build the project for production:

```.sh
npm run build
```

Feel free to extend, modify, and improve simple-webtools according to your requirements. We welcome contributions and suggestions to make this collection of web tools even more useful!

## Author

Created by Wilmer Martinez

* Website: [wilmermartinez.dev](https://wilmermartinez.dev)
* Email: info@wilmermartinez.dev

## Proyect Status

This project is under development

## Contribution 💗

If you find value in this project and would like to show your support, please consider making a donation via PayPal:

[Donate on PayPal](https://paypal.me/martinezwilmer?country.x=DO&locale.x=es_XC)

Your generosity helps us to continue improving and maintaining this project. We appreciate every contribution, however small. Thanks for being part of our community!
