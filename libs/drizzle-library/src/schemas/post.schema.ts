import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '@libs/drizzle-library/helpers';

// Define a blogs table
export const postsTable = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    ...timestamps,
  },
  (table) => [uniqueIndex('title_idx').on(table.title)],
);
