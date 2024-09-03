import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

import { parseISO } from 'date-fns'

// Function to determine the series based on date
function getSeries(date: string): string {
  const parsedDate = parseISO(date)
  const boundaryDate = parseISO('2024-09-01')

  if (parsedDate >= boundaryDate) {
    return '2. série'
  } else {
    return '1. série'
  }
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      .map((post) => {
        if (post.excerpt && typeof post.excerpt === 'string') {
          post.excerpt = post.excerpt.replace(/(\d+)\. díl Hnědého práva/, (match, p1) => `${p1} díl ${getSeries(post.date)} Hnědého práva`);
        }
        return post
      })
      // Sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  const boundaryDate = parseISO('2024-09-01')
  const currentPosts = posts.filter((post) => parseISO(post.date) >= boundaryDate)
  const pastPosts = posts.filter((post) => parseISO(post.date) < boundaryDate)

  return { currentPosts, pastPosts, posts }
}
