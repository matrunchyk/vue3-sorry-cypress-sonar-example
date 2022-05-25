import { Factory } from 'miragejs';
import { randPost, randBetweenDate, randUuid } from '@ngneat/falso';

export default Factory.extend({
  uuid() {
    return randUuid();
  },
  title() {
    return randPost().title;
  },
  content() {
    return randPost().body;
  },
  date() {
    return randBetweenDate({ from: new Date('10/07/2020'), to: new Date() });
  },
});
