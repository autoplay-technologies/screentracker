# Screentracker Node.js Library

The Screentracker Node library provides convenient access to the Screentracker API from
client applications written in JavaScript.

## Documentation

See the [`screentracker` API docs](https://docs.screentracker.io/api?lang=node) for Node.js.

## Installation

Install the package with:

```sh
npm install screentracker
# or
yarn add screentracker
```

## Usage

Screentracker functions require a config object containing information about the client app and current version.
Config objects are available in the [Screentracker Dashboard](https://dashboard.screentracker.com/).

<!-- prettier-ignore -->
```js
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...',
};
const screentracker = require('screentracker')(config);

screentracker.logScreenChange({
  screen_id: 'home',
})
  .then(event => console.log(event.created_at))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Screentracker from 'screentracker';
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...',
};
const screentracker = new Screentracker(config);

(async () => {
  try {
      const event = await screentracker.logScreenChange({
        screen_id: 'home',
      });
    
      console.log(event.created_at);
  }
  catch (error) {
      console.error(error);
  }
})();
```

### Usage with TypeScript

Screentracker maintains types for the latest [API version][api-versions].

Import Screentracker as a default import (not `* as Screentracker`, unlike the DefinitelyTyped version)
and instantiate it as `new Screentracker()`.

```ts
import Screentracker from 'screentracker';
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...'
};
const screentracker = new Screentracker(config);

const createScreenChangeEvent = async () => {
  const params: Screentracker.ScreenChangeEventCreateParams = {
    screen_id: 'home',
  };

  const event: Screentracker.ScreenChangeEvent = await screentracker.logScreenChange(params);

  console.log(event.created_at);
};
createScreenChangeEvent();
```


[api-versions]: https://docs.screentracker.io/api/versioning