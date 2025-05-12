
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPost = ({ image, title, excerpt, date, slug, category }: BlogPostProps) => {
  return (
    <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
      <Link to={`/blog/${slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-muted-foreground text-sm ml-3">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {date}
          </div>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-primary-600 font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Importance of User-Centered Design in Digital Products",
      excerpt:
        "Learn why putting users at the center of your design process is crucial for creating successful digital products that resonate with your audience.",
      date: "May 10, 2025",
      slug: "importance-of-user-centered-design",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Modern Web Development Practices for Better Performance",
      excerpt:
        "Explore the latest techniques and best practices in web development that can significantly improve the performance of your website.",
      date: "April 28, 2025",
      slug: "modern-web-development-practices",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Creating a Cohesive Brand Identity for Startups",
      excerpt:
        "A comprehensive guide to developing a strong and consistent brand identity that will help your startup stand out in a crowded market.",
      date: "April 15, 2025",
      slug: "creating-cohesive-brand-identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Mobile App Design Trends to Watch in 2025",
      excerpt:
        "Stay ahead of the curve with these emerging trends in mobile app design that are shaping the future of digital experiences.",
      date: "March 22, 2025",
      slug: "mobile-app-design-trends-2025",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "The Role of Animation in User Experience",
      excerpt:
        "Discover how thoughtful animations can enhance user experience, provide feedback, and make digital interactions more intuitive and enjoyable.",
      date: "March 10, 2025",
      slug: "role-of-animation-in-ux",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Accessibility in Design: Making Digital Products for Everyone",
      excerpt:
        "Why accessibility should be a priority in your design process and how to create digital products that can be used by people of all abilities.",
      date: "February 25, 2025",
      slug: "accessibility-in-design",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    }
  ];

  const categories = [
    "UX Design",
    "Web Development",
    "Branding",
    "Mobile Design",
    "Graphic Design"
  ];

  const popularPosts = blogPosts.slice(0, 3);

  const filteredPosts = searchQuery.trim() === ""
    ? blogPosts
    : blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights and thoughts on design, development, and the digital industry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search Mobile */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogPost
                      key={post.id}
                      image={post.image}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      slug={post.slug}
                      category={post.category}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No articles found matching your search.
                  </p>
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Desktop */}
              <div className="hidden lg:block mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-xl p-6 border border-border mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-3 font-normal hover:text-primary-600"
                        onClick={() => setSearchQuery(category)}
                      >
                        {category}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="font-medium hover:text-primary-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center text-muted-foreground text-xs mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
