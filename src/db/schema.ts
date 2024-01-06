import  { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todos = pgTable('users', {
    id: serial('id').primaryKey(),
    text: text('text'),
    completed: boolean('completed'),
});