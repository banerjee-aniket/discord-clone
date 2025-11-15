import { db } from '@/lib/db';

export const initialProfile = async () => {
    // Get or create a default guest profile for public access
    let profile = await db.profile.findFirst();

    if (profile) return profile;

    // Create a default guest profile
    const newProfile = await db.profile.create({
        data: {
            userId: 'guest-' + Date.now(),
            name: 'Guest User',
            imageUrl: '',
            email: 'guest@connectsphere.local',
        },
    });

    return newProfile;
};
