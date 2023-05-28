# imaginary-utils

## Description

A collection of utility functions that I frequently use in my projects.

### Installation

npm:

```bash
npm install imaginary-utils
```

yarn:

```bash
yarn add imaginary-utils
```

### Usage

JavaScript:

```js
const { isValidDate } = require('imaginary-utils');

isValidDate(new Date()); // true
isValidDate('2020-01-01'); // false
```

TypeScript:

```ts
import { isValidDate } from 'imaginary-utils';

isValidDate(new Date()); // true
isValidDate('2020-01-01'); // false
```

### Functions

- [arrayUtils.sortByProperty](#arrayUtils.sortByProperty)
- [dateUtils.isValidDate](#dateUtils.isValidDate)
- [dateUtils.getDateString](#dateUtils.getDateString)
- [dateUtils.getTimeString](#dateUtils.getTimeString)
- [dateUtils.formatDate](#dateUtils.formatDate)
- [dateUtils.getDayName](#dateUtils.getDayName)
- [dateUtils.getMonthName](#dateUtils.getMonthName)
- [dateUtils.addDays](#dateUtils.addDays)
- [dateUtils.addMonths](#dateUtils.addMonths)
- [dateUtils.addYears](#dateUtils.addYears)
- [dateUtils.startOfHour](#dateUtils.startOfHour)
- [dateUtils.endOfHour](#dateUtils.endOfHour)
- [dateUtils.startOfDay](#dateUtils.startOfDay)
- [dateUtils.endOfDay](#dateUtils.endOfDay)
- [dateUtils.startOfMonth](#dateUtils.startOfMonth)
- [dateUtils.endOfMonth](#dateUtils.endOfMonth)
- [dateUtils.startOfYear](#dateUtils.startOfYear)
- [dateUtils.endOfYear](#dateUtils.endOfYear)
- [dateUtils.getDaysInMonth](#dateUtils.getDaysInMonth)
- [emailUtils.isValidEmail](#emailUtils.isValidEmail)
- [mathUtils.percentageOf](#mathUtils.percentageOf)
- [mathUtils.sumOfProperty](#mathUtils.sumOfProperty)
- [numberUtils.formatNumber](#numberUtils.formatNumber)
- [numberUtils.msToTime](#numberUtils.msToTime)
- [objectUtils.serializeSearchParams](#objectUtils.serializeSearchParams)
- [stringUtils.camelCaseToHumanReadable](#stringUtils.camelCaseToHumanReadable)
- [stringUtils.snakeCaseToHumanReadable](#stringUtils.snakeCaseToHumanReadable)
- [stringUtils.kebabCaseToHumanReadable](#stringUtils.kebabCaseToHumanReadable)
- [stringUtils.pascalCaseToHumanReadable](#stringUtils.pascalCaseToHumanReadable)
- [stringUtils.capitalize](#stringUtils.capitalize)

### arrayUtils.sortByProperty

Takes an array of objects and sorts them by the given property.

```js
const { sortByProperty } = require('imaginary-utils');

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 20 },
];

sortByProperty(users, item => item.age); // [{ name: 'Jack', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
```

### dateUtils.isValidDate

Checks if the given value is a valid date.

```js
const { isValidDate } = require('imaginary-utils');

isValidDate(new Date()); // true
isValidDate('2020-01-01'); // false
```

### dateUtils.getDateString

Returns the date part of the given date as a string.

```js
const { getDateString } = require('imaginary-utils');

getDateString(new Date()); // '2020-01-01'
```

### dateUtils.getTimeString

Returns the time part of the given date as a string.

```js
const { getTimeString } = require('imaginary-utils');

getTimeString(new Date()); // '12:00:00'
```

### dateUtils.formatDate

Formats the given date with the given format.

```js
const { formatDate } = require('imaginary-utils');

formatDate(new Date(), 'yyyy-MM-dd'); // '2020-01-01'
```

### dateUtils.getDayName

Returns the name of the day of the given date.

```js
const { getDayName } = require('imaginary-utils');

getDayName(new Date()); // 'Monday'
```

### dateUtils.getMonthName

Returns the name of the month of the given date.

```js
const { getMonthName } = require('imaginary-utils');

getMonthName(new Date()); // 'January'
```

### dateUtils.addDays

Adds the given number of days to the given date.

```js
const { addDays } = require('imaginary-utils');

addDays(new Date(), 1); // '2020-01-02'
```

### dateUtils.addMonths

Adds the given number of months to the given date.

```js
const { addMonths } = require('imaginary-utils');

addMonths(new Date(), 1); // '2020-02-01'
```

### dateUtils.addYears

Adds the given number of years to the given date.

```js
const { addYears } = require('imaginary-utils');

addYears(new Date(), 1); // '2021-01-01'
```

### dateUtils.startOfHour

Returns the start of the hour of the given date.

```js
const { startOfHour } = require('imaginary-utils');

startOfHour(new Date()); // '2020-01-01 12:00:00'
```

### dateUtils.endOfHour

Returns the end of the hour of the given date.

```js
const { endOfHour } = require('imaginary-utils');

endOfHour(new Date()); // '2020-01-01 12:59:59'
```

### dateUtils.startOfDay

Returns the start of the day of the given date.

```js
const { startOfDay } = require('imaginary-utils');

startOfDay(new Date()); // '2020-01-01 00:00:00'
```

### dateUtils.endOfDay

Returns the end of the day of the given date.

```js
const { endOfDay } = require('imaginary-utils');

endOfDay(new Date()); // '2020-01-01 23:59:59'
```

### dateUtils.startOfMonth

Returns the start of the month of the given date.

```js
const { startOfMonth } = require('imaginary-utils');

startOfMonth(new Date()); // '2020-01-01 00:00:00'
```

### dateUtils.endOfMonth

Returns the end of the month of the given date.

```js
const { endOfMonth } = require('imaginary-utils');

endOfMonth(new Date()); // '2020-01-31 23:59:59'
```

### dateUtils.startOfYear

Returns the start of the year of the given date.

```js
const { startOfYear } = require('imaginary-utils');

startOfYear(new Date()); // '2020-01-01 00:00:00'
```

### dateUtils.endOfYear

Returns the end of the year of the given date.

```js
const { endOfYear } = require('imaginary-utils');

endOfYear(new Date()); // '2020-12-31 23:59:59'
```

### dateUtils.getDaysInMonth

Returns all the days in the month of the given date.

```js
const { getDaysInMonth } = require('imaginary-utils');

getDaysInMonth(new Date()); // ['2020-01-01', '2020-01-02', '2020-01-03', ...]
```

### emailUtils.isValidEmail

Checks if the given value is a valid email.

```js
const { isValidEmail } = require('imaginary-utils');

isValidEmail('john.doe@email.com'); // true
isValidEmail('john.doe'); // false
```

### mathUtils.percentageOf

Returns the percentage of the given value.

```js
const { percentageOf } = require('imaginary-utils');

percentageOf(10, 100); // 10
```

### mathUtils.sumOfProperty

Returns the sum of the given property of the given array of objects.

```js
const { sumOfProperty } = require('imaginary-utils');

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 20 },
];

sumOfProperty(users, item => item.age); // 75
```

### numberUtils.formatNumber

Formats the given number with the given format.

```js
const { formatNumber } = require('imaginary-utils');

formatNumber(1000); // '1,000'
```

### numberUtils.msToTime

Converts the given milliseconds to a time string.

```js
const { msToTime } = require('imaginary-utils');

msToTime(1000); // '00:00:01'
```

### objectUtils.serializeSearchParams

Serializes the given search params object.

```js
const { serializeSearchParams } = require('imaginary-utils');

serializeSearchParams({ name: 'John', age: 25 }); // 'name=John&age=25'
```

### stringUtils.camelCaseToHumanReadable

Converts the given camel case string to a human readable string.

```js
const { camelCaseToHumanReadable } = require('imaginary-utils');

camelCaseToHumanReadable('firstName'); // 'First Name'
```

### stringUtils.snakeCaseToHumanReadable

Converts the given snake case string to a human readable string.

```js
const { snakeCaseToHumanReadable } = require('imaginary-utils');

snakeCaseToHumanReadable('first_name'); // 'First Name'
```

### stringUtils.kebabCaseToHumanReadable

Converts the given kebab case string to a human readable string.

```js
const { kebabCaseToHumanReadable } = require('imaginary-utils');

kebabCaseToHumanReadable('first-name'); // 'First Name'
```

### stringUtils.pascalCaseToHumanReadable

Converts the given pascal case string to a human readable string.

```js
const { pascalCaseToHumanReadable } = require('imaginary-utils');
```

### stringUtils.capitalize

Capitalizes the given string.

```js
const { capitalize } = require('imaginary-utils');

capitalize('john doe'); // 'John doe'
```
