import { Model } from 'miragejs';
import type { ModelDefinition, Registry } from 'miragejs/-types';
import type Schema from 'miragejs/orm/schema';
import { Post, User } from '@/useStore';

const user: ModelDefinition<User> = Model.extend({});
const post: ModelDefinition<Post> = Model.extend({});

type AppRegistry = Registry<{
  user: typeof user;
  post: typeof post;
}, {}>;

export type AppSchema = Schema<AppRegistry>;
