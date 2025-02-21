import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '@libs/orm-library/drizzle/helpers';
import { postsTable } from './post.schema';

// Define a users table
export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }),
    mobile: varchar('mobile', { length: 20 }),
    authType: varchar('auth_type', { length: 20 }).notNull().default('local'),
    password: text('password'),
    role: varchar('role', { length: 50 }).notNull().default('user'),
    ...timestamps,
  },
  (table) => [
    uniqueIndex('email_idx').on(table.email),
    uniqueIndex('name_idx').on(table.name),
  ],
);

export const usersRelations = relations(usersTable, ({ many }) => ({
  posts: many(postsTable),
}));

export type User = InferSelectModel<typeof usersTable>;
export type UserCreate = InferInsertModel<typeof usersTable>;
