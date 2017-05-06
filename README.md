# Identifiers - PubMed ID [![Build Status](https://travis-ci.org/altmetric/identifiers-pubmed.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-pubmed)

Extract, validate and normalize [PubMed IDs](http://www.ncbi.nlm.nih.gov/pubmed).

**Current version:** 0.1.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-pubmed` or `npm install --save identifiers-pubmed`:

```shell
"identifiers-pubmed": "^0.1.0"
```

## Usage

```javascript
const pubmed = require("identifiers-pubmed");

pubmed.extract(" 0123\n456\n ");
//=> ["123", "456"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
