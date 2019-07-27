import {
  setupContext,
  teardownContext,
  getContext,
  currentURL,
  visit,
} from '@ember/test-helpers';

export async function refresh(mocking: () => void = () => undefined) {
  const url = currentURL();
  const ctx = getContext();
  await teardownContext(ctx);
  await setupContext(ctx);
  await mocking();
  await visit(url);
}
