import Route from '@ember/routing/route';

export default class DecadenceRoute extends Route {
  model() {
    return `
      <h1>This is a test of the parser component.</h1>

      This bit doesn't have a surrounding tag.

      <p>This is part of a paragraph.</p>

      <img src="/planets/mars.jpg" alt="mars, bro!" />
    `;
  }
}
