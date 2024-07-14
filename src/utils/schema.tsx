import { sql } from "drizzle-orm";
import { pgTable, serial, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const AiOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    templateSlug:varchar('templateSlug').notNull(),
    aiResponse:text('aiResponse'),
    createdBy:varchar('email').notNull(),
    createdAt:varchar('createdAt')
})

export const UserSubscription = pgTable("userSubscription", {
    id: serial("id").primaryKey().notNull(),
    email: varchar("email"),
    userName: varchar("userName"),
    active: boolean("active").default(false),
    paymentId: varchar("paymentId").notNull(),
    joinDate: timestamp("joinDate", {
      withTimezone: true,
      mode: "string",
    }).default(sql`now()`),
    expireDate: timestamp("expireDate", {
      withTimezone: true,
      mode: "string",
    }).notNull(),
  });