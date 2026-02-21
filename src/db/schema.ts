// Database schema placeholders for contact form and page events.
// Uncomment and install drizzle-orm + drizzle-orm/pg-core when deploying with Vercel Postgres.

// import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
// import { sql } from 'drizzle-orm';

/*
export const contactSubmissions = pgTable('contact_submissions', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 200 }).notNull(),
  message: text('message').notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  status: varchar('status', { length: 20 }).notNull().default('received'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  readAt: timestamp('read_at', { withTimezone: true }),
  repliedAt: timestamp('replied_at', { withTimezone: true }),
  notes: text('notes'),
});

export const pageEvents = pgTable('page_events', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  eventType: varchar('event_type', { length: 50 }).notNull(),
  page: varchar('page', { length: 200 }),
  referrer: varchar('referrer', { length: 500 }),
  country: varchar('country', { length: 2 }),
  deviceType: varchar('device_type', { length: 20 }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
*/

// Type definitions for when DB is connected
export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    ipAddress?: string;
    userAgent?: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    readAt?: Date;
    repliedAt?: Date;
    notes?: string;
}

export interface PageEvent {
    id: string;
    eventType: string;
    page?: string;
    referrer?: string;
    country?: string;
    deviceType?: string;
    createdAt: Date;
}
