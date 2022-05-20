import { setupTestContext } from '~utils/testsUtils/setupTest';

/* Setup stage */
const test = setupTestContext(() => {
  return {};
});

test('Empty test for check', (t) => {
  t.pass();
});