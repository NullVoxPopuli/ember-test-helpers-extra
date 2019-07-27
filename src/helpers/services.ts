import Service from '@ember/service';
import { getContext } from '@ember/test-helpers';

export function getService<T>(name: string): T {
  const { owner } = getContext();

  const service = owner.lookup<T>(`service:${name}`);

  return service;
}

export const stubService = (name: string, hash = {}) => {
  let stubbedService;

  // TODO: need to be able to use an extended service that uses services. :)
  if (hash instanceof Function) {
    stubbedService = hash;
  } else {
    stubbedService = Service.extend(hash);
  }

  let { owner } = getContext();
  let serviceName = `service:${name}`;

  owner.register(serviceName, stubbedService);
};

export default stubService;

/**
 * Doing a normal service stub will NOT work in a beforeEach
 * or anywhere else in your test because (instance) initializers
 * run before *any* user-land code.
 *
 * https://github.com/ember-cli/ember-cli-qunit/issues/203#issuecomment-366261794
 *
 * @public
 * @param {NestedHooks} hooks module hooks for the test context
 * @param {string} name the name of the service
 * @param {object} stub the overrides to apply to the service
 **/
export function setupServiceStub(
  hooks: NestedHooks,
  name: string,
  stub: Object
) {
  let serviceName = `service:${name}`;
  let originals: any = {};

  hooks.beforeEach(function() {
    let { owner } = getContext();
    let service = owner.lookup(serviceName);

    if (!service) {
      throw new Error(
        `service '${name}' was not registered. You do not need setupServiceStub`
      );
    }

    let propertiesAndMethods = Object.keys(stub);

    propertiesAndMethods.forEach(key => {
      originals[key] = service[key];

      service[key] = stub[key];
    });
  });

  hooks.afterEach(function() {
    let { owner } = getContext();
    let service = owner.lookup(serviceName);

    let propertiesAndMethods = Object.keys(stub);

    propertiesAndMethods.forEach(key => {
      service[key] = originals[key];
    });
  });
}
