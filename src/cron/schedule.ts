import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { sql } from 'drizzle-orm';
import cron from 'node-cron';

export const scheduler = () => {
    cron.schedule('* * * * *', async () => {
        try {
            const result = await db.update(UserSubscription)
                .set({ active: false })
                .where(sql`"expireDate" < NOW() AND "active" = true`);
            console.log(`Deactivated expired subscriptions at ${new Date()}. Rows affected: ${result.rowCount}`);
        } catch (error) {
            console.error(`Error deactivating expired subscriptions at ${new Date()}:`, error);
        }
    }, {
        timezone: "UTC" 
    });
}