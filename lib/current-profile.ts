import { db } from '@/lib/db';

export const currentProfile = async () => {
    // Without authentication, return a default public profile
    // Users can be identified by session/connection in future implementation
    const profile = await db.profile.findFirst();
    return profile;
};
