import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/mdx'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-48 w-full">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">{post.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.date}</span>
            {post.location && (
              <>
                <span className="mx-2">•</span>
                <span>{post.location}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
} 