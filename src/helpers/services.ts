import Service from '@ember/service';
import { getContext } from '@ember/test-helpers';
import ApplicationInstance from '@ember/application/instance';

interface Context {
  owner: ApplicationInstance;
}

export function getService<T>(name: string): T {
  const { owner } = getContext() as Context;

  const service = owner.lookup(`service:${name}`);

  return service as T;
}

export const stubService = (name: string, hash = {}): void => {
  let stubbedService;

  // TODO: need to be able to use an extended service that uses services.
  if (hash instanceof Function) {
    stubbedService = hash;
  } else {
    stubbedService = Service.extend(hash);
  }

  let { owner } = getContext() as Context;
  let serviceName = `service:${name}`;

  owner.register(serviceName, stubbedService);
};

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
  stub: Record<string, any>
): void {
  let serviceName = `service:${name}`;
  let originals: any = {};

  hooks.beforeEach(function(): void {
    let { owner } = getContext() as Context;
    let service = owner.lookup(serviceName);

    if (!service) {
      throw new Error(
        `service '${name}' was not registered. You do not need setupServiceStub`
      );
    }

    let propertiesAndMethods = Object.keys(stub);

    propertiesAndMethods.forEach(( key ): void => {
      originals[key] = service[key];

      service[key] = stub[key];
    });
  });

  hooks.afterEach(function(): void {
    let { owner } = getContext() as Context;
    let service = owner.lookup(serviceName);

    let propertiesAndMethods = Object.keys(stub);

    propertiesAndMethods.forEach(( key ): void => {
      service[key] = originals[key];
    });
  });
}
