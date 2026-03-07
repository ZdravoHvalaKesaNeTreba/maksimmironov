# maksimprojects.space

Personal website and tech blog showcasing projects, articles, and experiments by Maksim Mironov.

🌐 **Live**: [maksimprojects.space](https://maksimprojects.space)  
📧 **Contact**: [Your Email]

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)

---

## 🛠 Tech Stack

### Core Technologies
- **Next.js 14.2.35** - Production-ready React framework with SSR and SSG
- **React 18.2.0** - UI library for building interactive interfaces
- **TypeScript 5.3.3** - Type-safe JavaScript for robust code

### Styling & Design
- **Tailwind CSS 4.0.0-alpha.13** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation tool
- **Geist Font** - Modern typeface by Vercel (Sans & Mono variants)

### Content Management
- **next-mdx-remote 5.0.0** - MDX support for interactive blog posts
- **sugar-high 0.6.0** - Syntax highlighting for code blocks

### Analytics & Monitoring
- **@vercel/analytics** - User behavior tracking
- **@vercel/speed-insights** - Performance monitoring

### Package Manager
- **pnpm** - Fast, disk space efficient package manager

---

## ✨ Features

### 🏠 Home Page
- Introduction to personal brand
- Latest blog posts preview
- Call-to-action sections

### 📝 Blog System
- **MDX Support**: Write blog posts with Markdown + React components
- **Frontmatter Metadata**: Title, date, summary for each post
- **Syntax Highlighting**: Code blocks with sugar-high
- **Dynamic Routing**: File-based routing (`/blog/[slug]`)
- **RSS Feed**: Auto-generated at `/rss`
- **SEO Optimized**: Metadata and Open Graph tags

### 💼 Projects Portfolio
- Showcase of personal projects
- Links to detailed blog posts for each project
- Responsive card layout
- Interactive hover effects

### 🎨 UI/UX Features
- **Dark Mode**: System preference detection
- **Responsive Design**: Mobile-first approach
- **Custom Navigation**: Clean, minimal header
- **Footer**: Copyright and GitHub link
- **Typography**: Geist Sans and Mono fonts
- **Loading States**: Smooth page transitions

### 🔍 SEO & Metadata
- Custom metadata for each page
- Dynamic title generation: `{Page} | maksimprojects.space`
- Sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Open Graph images

### ⚡ Performance Optimizations
- Server Components for faster initial load
- Code splitting and lazy loading
- Image optimization with Next.js Image
- Static page generation where possible
- Incremental Static Regeneration (ISR)

---

## 📁 Project Structure

```
my_site_maksim_mironov/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── global.css               # Global styles
│   ├── blog/                    # Blog section
│   │   ├── page.tsx            # Blog listing page
│   │   ├── utils.ts            # Blog utilities (MDX parsing)
│   │   ├── [slug]/             # Dynamic blog post pages
│   │   │   └── page.tsx
│   │   └── posts/              # MDX blog posts
│   │       ├── telegram-parser-project.mdx
│   │       ├── dear-edit-project.mdx
│   │       └── chrome-extension-bookmarks.mdx
│   ├── projects/                # Projects portfolio
│   │   └── page.tsx
│   ├── api/                     # API routes
│   │   └── auth/
│   │       └── signin/
│   │           └── page.tsx    # Sign in page
│   ├── components/              # Reusable components
│   │   ├── nav.tsx             # Navigation bar
│   │   ├── footer.tsx          # Footer component
│   │   ├── mdx.tsx             # MDX renderer with custom components
│   │   └── posts.tsx           # Blog post list component
│   ├── og/                      # Open Graph image generation
│   │   └── route.tsx
│   ├── rss/                     # RSS feed generation
│   │   └── route.ts
│   ├── sitemap.ts               # Sitemap generation
│   ├── robots.ts                # Robots.txt generation
│   └── not-found.tsx            # Custom 404 page
├── package.json                 # Dependencies and scripts
├── pnpm-lock.yaml               # Lock file for pnpm
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🧩 Key Components

### Layout Component (`app/layout.tsx`)
- **Purpose**: Root layout wrapper for all pages
- **Features**:
  - Global metadata configuration
  - Font loading (Geist Sans & Mono)
  - Dark mode support via CSS classes
  - Analytics and Speed Insights integration
  - Navbar and Footer placement

```typescript
// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'maksimprojects.space',
    template: '%s | maksimprojects.space',
  },
  description: 'Personal projects and tech blog by Maksim Mironov',
  // ... Open Graph, robots, etc.
}
```

### Navigation Component (`app/components/nav.tsx`)
- **Purpose**: Top navigation bar
- **Features**:
  - Responsive menu with home, blog, projects links
  - Sign In button (right-aligned)
  - Hover effects with smooth transitions
  - Active link indication

```typescript
const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/projects': { name: 'my projects' },
}
```

### MDX Component (`app/components/mdx.tsx`)
- **Purpose**: Custom MDX renderer for blog posts
- **Features**:
  - Custom components for headings with anchor links
  - Syntax highlighting for code blocks
  - Image optimization with rounded corners
  - Internal/external link handling
  - Table support

```typescript
// Custom components override
let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  // ... h3-h6
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}
```

### Blog Utilities (`app/blog/utils.ts`)
- **Purpose**: MDX file parsing and metadata extraction
- **Key Functions**:
  - `parseFrontmatter()`: Extract YAML frontmatter from MDX
  - `getMDXFiles()`: Get all .mdx files from directory
  - `readMDXFile()`: Read and parse single MDX file
  - `getMDXData()`: Get all blog posts with metadata
  - `getBlogPosts()`: Public API to retrieve all posts
  - `formatDate()`: Human-readable date formatting

```typescript
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}
```

### Blog Post Page (`app/blog/[slug]/page.tsx`)
- **Purpose**: Dynamic blog post renderer
- **Features**:
  - Dynamic metadata generation
  - Structured data (JSON-LD) for SEO
  - 404 handling for non-existent posts
  - Static params generation for build time

```typescript
export function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}
```

### Projects Page (`app/projects/page.tsx`)
- **Purpose**: Portfolio showcase
- **Features**:
  - List of personal projects with descriptions
  - Links to detailed blog posts
  - Custom SVG arrow icons
  - Responsive layout with proper spacing

### RSS Feed (`app/rss/route.ts`)
- **Purpose**: RSS 2.0 feed generation
- **Features**:
  - Auto-generates XML feed from blog posts
  - Includes title, description, pubDate, link
  - Follows RSS 2.0 specification

### Sitemap (`app/sitemap.ts`)
- **Purpose**: XML sitemap for search engines
- **Features**:
  - Static routes (home, blog, projects)
  - Dynamic routes from blog posts
  - Last modified dates
  - Change frequency hints

### Open Graph Image (`app/og/route.tsx`)
- **Purpose**: Dynamic OG image generation
- **Features**:
  - Custom images for social sharing
  - Dynamic text rendering
  - Proper dimensions (1200x630)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: 20.x)
- **pnpm** (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my_site_maksim_mironov.git
   cd my_site_maksim_mironov
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Custom Port
```bash
pnpm dev -p 4000  # Run on port 4000
```

### Adding a New Blog Post

1. Create a new `.mdx` file in `app/blog/posts/`
   ```bash
   touch app/blog/posts/my-new-post.mdx
   ```

2. Add frontmatter and content
   ```mdx
   ---
   title: 'My New Post'
   publishedAt: '2026-03-07'
   summary: 'A brief description of the post'
   ---

   ## Your Content Here

   This is your blog post content with **Markdown** support!
   ```

3. The post will automatically appear at `/blog/my-new-post`

### Customizing Styles

- **Global styles**: Edit `app/global.css`
- **Tailwind config**: Modify classes directly in components
- **Fonts**: Change in `app/layout.tsx`

### Environment Variables

Create `.env.local` for local configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy with zero configuration

3. **Custom Domain**
   - Add `maksimprojects.space` in Vercel settings
   - Update DNS records as instructed

### Other Platforms

#### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "start"]
```

#### Static Export
```bash
# Add to next.config.js
output: 'export'

# Build static files
pnpm build
# Files in /out directory
```

---

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Desktop & Mobile)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Maksim Mironov**
- Website: [maksimprojects.space](https://maksimprojects.space)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Hosting and deployment platform
- [Geist Font](https://vercel.com/font) - Typography

---

**Built with ❤️ by Maksim Mironov**
