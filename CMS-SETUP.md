# Decap CMS Setup Guide

## What is Decap CMS?

Decap CMS (formerly Netlify CMS) is a git-based content management system. All your blog content is stored as markdown files in your repository, making it version-controlled and portable.

## Accessing the CMS

### Local Development

**IMPORTANT:** You need TWO terminal windows running:

**Terminal 1 - Astro Dev Server:**
```bash
npm run dev
```

**Terminal 2 - Decap CMS Local Backend:**
```bash
npx decap-server
```

Then navigate to: **`http://localhost:4321/admin`**

The page will show a login button. Click "Login" and you can now create and edit blog posts!

> **Note:** Both servers must be running. The Decap server runs on port 8081 and acts as a local git proxy.

### Production (After Deployment)

You'll need to set up authentication. Two options:

#### Option 1: Git Gateway (Recommended for Netlify)
1. Deploy to Netlify
2. Enable Identity in Netlify dashboard
3. Enable Git Gateway in Netlify dashboard
4. Navigate to `https://yoursite.com/admin`

#### Option 2: GitHub Backend (Direct GitHub Auth)
Update `/public/admin/config.yml`:
```yaml
backend:
  name: github
  repo: your-username/your-repo-name
  branch: main
```

## How It Works

- **Blog posts** are stored in `src/content/blog/` as markdown files
- **Images** are uploaded to `src/content/blog/images/`
- **Content schema** is defined in `/public/admin/config.yml`
- **Changes** are committed directly to your git repository

## Creating a Blog Post

1. Go to `/admin`
2. Click "New Blog Posts"
3. Fill in:
   - Title
   - Publish Date
   - Author name
   - Read Time (e.g., "5 min read")
   - Featured Image (upload)
   - Description (optional excerpt)
   - Body (main content in markdown)
4. Click "Publish"
5. Changes are committed to your repo automatically

## Editing Existing Posts

1. Go to `/admin`
2. Click "Blog Posts" in the sidebar
3. Select a post to edit
4. Make changes and click "Publish"

## Content Format

Posts are saved as markdown files with frontmatter:

```markdown
---
title: "Your Post Title"
pubDate: 2025-01-15T10:00:00.000Z
author: "Dr. Maria Mitchell"
readTime: "5 min read"
image: "/src/content/blog/images/your-image.jpg"
description: "A brief description of your post"
---

Your markdown content here...
```

## Customizing the CMS

Edit `/public/admin/config.yml` to:
- Add new content types
- Modify fields
- Change media folder location
- Update authentication settings

## No External Services Required

Unlike Sanity, Decap CMS doesn't require:
- External account signup
- API keys
- Paid plans
- External database

Everything is in your git repository!
