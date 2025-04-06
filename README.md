# VancouverLocalBuzz - Family Travel Blog

VancouverLocalBuzz is a modern blog platform focused on family travel experiences, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📝 MDX-based blog posts
- 🎨 Modern, responsive design
- 🔍 SEO-friendly
- 🚀 Fast performance
- 📱 Mobile-first approach
- 🏷️ Tag-based categorization
- 📍 Location-based filtering
- 👶 Age group filtering

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vancouverlocalbuzz.git
   cd vancouverlocalbuzz
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Creating Blog Posts

Blog posts are written in MDX format and stored in the `src/content/posts` directory. Each post should include frontmatter with the following fields:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post"
coverImage: "/images/your-image.jpg"
tags: ["tag1", "tag2"]
location: "City, Country"
ageGroup: "1-3 years"
---

Your post content here...
```

## Deployment

### Deploying to Vercel

The easiest way to deploy VancouverLocalBuzz is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import your project to Vercel.
3. Vercel will detect Next.js and set up the build configuration automatically.
4. Your site will be deployed and you'll get a URL to access it.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

```
vancouverlocalbuzz/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── content/         # Blog posts and other content
│   │   └── posts/       # MDX blog posts
│   └── lib/             # Utility functions and helpers
├── public/              # Static assets
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Vercel](https://vercel.com/)
