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

### Production (GitHub OAuth)

The site is configured to use GitHub authentication for production. Here's how to set it up:

#### Step 1: Create a GitHub OAuth App

1. Go to: https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name:** Wellness Medical Center CMS
   - **Homepage URL:** `https://your-deployed-site.com`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`

   > **Note:** Even if not on Netlify, use the Netlify callback URL - Decap CMS uses Netlify's OAuth service

4. Click "Register application"
5. Copy the **Client ID** (you'll need this)
6. Click "Generate a new client secret" and copy it (you'll need this too)

#### Step 2: Deploy with Netlify (Easiest Option)

1. Deploy your site to Netlify
2. In Netlify dashboard, go to **Site settings > Access control > OAuth**
3. Under "Authentication providers", click "Install provider"
4. Select **GitHub**
5. Paste your **Client ID** and **Client Secret**
6. Save

Now navigate to `https://yoursite.netlify.app/admin` and click "Login with GitHub"!

#### Alternative: Self-Hosted OAuth

If not using Netlify, you'll need to run your own OAuth server:
- Use [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- Or use a service like [decap-server-oauth](https://github.com/i40west/decap-server-oauth)

This is more complex - **Netlify is recommended** for simplicity.

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
