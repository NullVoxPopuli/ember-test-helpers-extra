/// <reference types="qunit" />
export declare function getService<T>(name: string): T;
export declare const stubService: (name: string, hash?: {}) => void;
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
export declare function setupServiceStub(hooks: NestedHooks, name: string, stub: Record<string, any>): void;
