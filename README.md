# ember-test-helpers-extra

## Install

```
yarn add --dev ember-test-helpers-extra
```

## Usage

### `getService`

Retreives a service by name.

```ts
let store = getService('store');
```

### `stubService`

Stubs a service by name, using either an object or Service class definition

```ts
stubService('my-service', {
  foo() {
    return false;
  }
});
```

```ts
stubService('my-service', Service.extend({
  foo() {
    return false;
  }
}));
```

### `setupServiceStub`

This helper is for a special situation in which you need to
stub a service that has already been registered and accessed,
which prevents you from re-registering a service stub.

This stems from (instance) initializers accessing the services.
Generally, it's best practice to avoid initializers -- but sometimes
legacy code has utilized their ability to reduce repetition,
or run some boot-time code.

Related issue reported in ember-cli-qunit: https://github.com/ember-cli/ember-cli-qunit/issues/203#issuecomment-366261794

```ts
module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);
  setupServiceStub(hooks, 'my-service', {
    foo() {
      false;
    }
  })
});

```
