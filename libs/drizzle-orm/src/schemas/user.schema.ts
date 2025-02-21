import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import { index, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers';
import { postsTable } from './post.schema';

// Define a users table
export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    roles: varchar('roles', { length: 255 }).notNull().default('user'),
    ...timestamps,
  },
  (table) => [
    index('email_idx').on(table.email),
    index('name_idx').on(table.name),
  ],
);

export const usersRelations = relations(usersTable, ({ many }) => ({
  posts: many(postsTable),
}));

export type User = InferSelectModel<typeof usersTable>;
export type UserCreate = InferInsertModel<typeof usersTable>;
