import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  content: string
  coverImage?: string
  tags?: string[]
  location?: string
  ageGroup?: string
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
      coverImage: data.coverImage,
      tags: data.tags,
      location: data.location,
      ageGroup: data.ageGroup,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,
    coverImage: data.coverImage,
    tags: data.tags,
    location: data.location,
    ageGroup: data.ageGroup,
  }
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.tags?.includes(tag))
}

export async function getPostsByLocation(location: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.location === location)
}

export async function getPostsByAgeGroup(ageGroup: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.ageGroup === ageGroup)
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const tags = new Set<string>()
  
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag))
  })
  
  return Array.from(tags)
}

export async function getAllLocations(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const locations = new Set<string>()
  
  allPosts.forEach((post) => {
    if (post.location) locations.add(post.location)
  })
  
  return Array.from(locations)
}

export async function getAllAgeGroups(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const ageGroups = new Set<string>()
  
  allPosts.forEach((post) => {
    if (post.ageGroup) ageGroups.add(post.ageGroup)
  })
  
  return Array.from(ageGroups)
} 