import { Factory } from 'miragejs';
import { randUser } from '@ngneat/falso';

export default Factory.extend({
  name() {
    return randUser().username;
  },
  email() {
    return randUser().email;
  },
  password() {
    return 'demo';
  },
});
