import { cookieBasedClient } from "@/utils/amplify-utils";


export default async function Home() {

  const {data: posts, errors} = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "iam"
  })

  console.log("[Get-Posts-List]: ", posts, errors);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-2xl pb-1">List of All Titles</h1>

      <ul>
        {posts?.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </ul>
      
    </main>
  );
}
