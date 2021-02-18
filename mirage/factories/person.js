import { Factory } from 'ember-cli-mirage';

const NAMES = [
  'Alice',
  'Bob',
  'Charlie',
  'Dianna',
  'Edna',
  'Frank',
  'Gertrude',
  'Harold',
  'Igor',
  'Jeff',
  'Kelsey',
  'Liam',
  'Mark',
  'Nico',
  'Oscar',
  'Penelope',
  'Quinne',
  'Ronald',
  'Shelly',
  'Tom',
  'Ulysses',
  'Victoria',
  'Wanda',
  'Xander',
  'Yusef',
  'Zane',
];

export default Factory.extend({
  name(i) {
    return NAMES[i % NAMES.length];
  }
});
