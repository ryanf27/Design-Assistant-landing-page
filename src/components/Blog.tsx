import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

export function Blog() {
  const posts = [
    {
      image: blog1,
      title: "Starting and Growing a Career in Web Design",
      readTime: "6 min read",
      date: "Apr 8, 2023",
    },
    {
      image: blog2,
      title: "Create a Landing Page That Performs Great",
      readTime: "5 min read",
      date: "Mar 15, 2023",
    },
    {
      image: blog3,
      title: "How Can Designers Prepare for the Future?",
      readTime: "7 min read",
      date: "Feb 28, 2023",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Stay Inspired with Our{" "}
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into our blog for the latest trends, tips, and insights in the world of design and AI 
            technology. Whether you're looking for inspiration, tutorials, or industry news, our articles 
            are crafted to keep you informed and inspired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="blog-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}