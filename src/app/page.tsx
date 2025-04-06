import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">LocalBuzz Family Travel</h1> <p className="text-xl text-gray-600">
            Discover family-friendly destinations and travel tips for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  )
}
