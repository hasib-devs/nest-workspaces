import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { usersTable } from './user.schema';
import { relations } from 'drizzle-orm';
import { timestamps } from '../helpers';

// Define a blogs table
export const postsTable = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    userId: serial('user_id').notNull(),
    content: text('content').notNull(),
    ...timestamps,
  },
  (table) => [uniqueIndex('title_idx').on(table.title)],
);

export const postsRelations = relations(postsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [postsTable.userId],
    references: [usersTable.id],
  }),
}));
