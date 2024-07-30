import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/../amplify_outputs.json';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs
});


export const isAuthenticated = async (): Promise<boolean> => {
    return await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        async operation(contextSpec) {
            try {
                const user = await getCurrentUser(contextSpec);
                console.log("[Amplify-Utils]", user)
                return !!user;
            } catch (error) {
                return false;
            }
        },
    });
};