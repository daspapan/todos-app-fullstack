# Create Project
```sh
npx create-next-app [PROJECT-NAME]
```

# Install packages
```sh
npm install --save aws-amplify @aws-amplify/adapter-nextjs @aws-amplify/ui-react @aws-amplify/ui-react-storage
```

# Setup Amplify
```sh
npm create amplify@latest
```


# Setup Amplify Authentication
## Step 1. Create Authenticator Client
```sh
"use client"

import { Authenticator } from "@aws-amplify/ui-react";

const AuthClient = () => {
    return <Authenticator />;
};

export default AuthClient;
```

## Setup CDK Infra
npm install --save git-branch
npm install --save-dev @types/git-branch  --legacy-peer-deps

git init
git add .
git commit -m "Initial Commit"

Source https://dev.to/aws/how-to-create-an-app-on-aws-aws-amplify-gen-2-2534