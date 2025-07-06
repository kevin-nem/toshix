# My Personal Space 🌟

A beautiful, modern personal website built with Next.js and Tailwind CSS for sharing thoughts, photos, and memories.

## Features ✨

- **Responsive Design**: Beautiful on all devices
- **Modern UI**: Clean, elegant design with smooth animations
- **Dark Mode**: Automatic dark/light mode support
- **Three Main Sections**:
  - 💭 **Thoughts**: Personal blog posts and reflections
  - 📸 **Photos**: Photo gallery with descriptions and tags
  - 🌟 **Memories**: Timeline of special moments and experiences

## Tech Stack 🛠️

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons and Emojis
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel

## Getting Started 🚀

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd toshi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Customization 🎨

### Content
- Edit the sample data in each page (`src/app/thoughts/page.tsx`, `src/app/photos/page.tsx`, `src/app/memories/page.tsx`)
- Replace placeholder content with your own thoughts, photos, and memories

### Styling
- Customize colors in `src/app/globals.css`
- Modify component styles in the respective `.tsx` files
- Update the gradient themes for each section

### Metadata
- Update site metadata in `src/app/layout.tsx`
- Change the site title and description
- Update author information

## Deployment 🚀

This project is optimized for Vercel deployment:

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Import your repository in Vercel
   - Deploy automatically

2. **Environment Variables**:
   - No environment variables needed for the basic version
   - Add any API keys or database URLs if you extend the functionality

## Project Structure 📁

```
src/
├── app/
│   ├── components/
│   │   └── Navigation.tsx     # Site navigation
│   ├── thoughts/
│   │   └── page.tsx          # Blog posts page
│   ├── photos/
│   │   └── page.tsx          # Photo gallery page
│   ├── memories/
│   │   └── page.tsx          # Memories timeline page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
```

## Future Enhancements 🔮

- **CMS Integration**: Connect to a headless CMS for dynamic content
- **Photo Upload**: Add photo upload functionality
- **Comments**: Enable comments on thoughts/posts
- **Search**: Add search functionality across all content
- **Analytics**: Integrate web analytics
- **Contact Form**: Add a contact form
- **RSS Feed**: Generate RSS feed for thoughts
- **Newsletter**: Add newsletter signup

## Contributing 🤝

This is a personal website template, but feel free to:
- Fork the repository
- Submit issues for bugs or improvements
- Create pull requests for enhancements

## License 📝

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
