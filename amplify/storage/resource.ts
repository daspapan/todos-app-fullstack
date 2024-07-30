import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: "todosStorage",
    access: (allow) => ({
        "media/*": [
            allow.guest.to(["read", "write", "delete"]),
        ],
    }),
});