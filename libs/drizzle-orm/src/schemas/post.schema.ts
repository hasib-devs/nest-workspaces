import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { usersTable } from './user.schema';

// Define a blogs table
export const postsTable = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    userId: integer('user_id').notNull(),
    ...timestamps,
  },
  (table) => [uniqueIndex('title_idx').on(table.title)],
);

export const postsRelations = relations(postsTable, ({ one }) => {
  return {
    user: one(usersTable, {
      fields: [postsTable.userId],
      references: [usersTable.id],
    }),
  };
});

export type Post = InferSelectModel<typeof postsTable>;
export type PostCreate = InferInsertModel<typeof postsTable>;
