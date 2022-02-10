import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('.jumbo button').hasText('About Us');

    await click('.jumbo button');

    assert.equal(currentURL(), '/about');
  });

  test('visting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');
    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h2').hasText('Contact Us')
    assert.dom('.jumbo button').hasText('About us')

    await click('.jumbo button');
    assert.equal(currentURL(), '/about')
  });
});
