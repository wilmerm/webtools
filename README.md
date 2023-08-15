# simple-webtools

simple-webtools is a collection of lightweight web tools designed to simplify development workflows and enhance user experiences.

## The webtools

### BTU Calculator

The BTU Calculator is a tool to help you calculate the recommended BTU (British Thermal Units) for air conditioning based on specific room dimensions.

To use the BTU Calculator, simply include the following HTML code in your project:

```.html
<div id="btuCalculator"></div>

<script src="https://unpkg.com/simple-webtools@latest/dist/webtools.js"></script>

<script>
  // Create a BTU calculator
  webtools.btuCalculator.create();
</script>
```

Replace "./path-to-your" with the actual path to your simple-webtools distribution folder.

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
