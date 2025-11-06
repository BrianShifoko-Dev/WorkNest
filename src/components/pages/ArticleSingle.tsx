import {
  Clock,
  User,
  Calendar,
  Share2,
  ArrowRight,
  MessageCircle,
  Mail,
} from "lucide-react";
import { Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Breadcrumbs } from "../Breadcrumbs";
import { useState } from "react";
import { toast } from "sonner";

interface ArticleSingleProps {
  onNavigate: (page: string, data?: any) => void;
  articleSlug?: string;
}

export function ArticleSingle({ onNavigate, articleSlug }: ArticleSingleProps) {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  // In a real app, this would fetch based on articleSlug
  const article = {
    title: "How Remote Teams Thrive in Eldoret's Tech Hub",
    category: "Inside Kenya Spaces",
    author: "Sarah Kamau",
    authorTitle: "Community Manager",
    date: "November 1, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjIxNTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const relatedArticles = [
    {
      title: "From Startup to Scale-up: Nairobi Entrepreneur's Journey",
      category: "Success Stories",
      image:
        "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjMzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "8 min",
    },
    {
      title: "Kenyan-Inspired Workspace Design",
      category: "Design Inspirations",
      image:
        "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwcm9vbXxlbnwxfHx8fDE3NjIyMzM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "6 min",
    },
    {
      title: "Coffee Culture Meets Work Culture",
      category: "Inside Kenya Spaces",
      image:
        "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjIyMzM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "5 min",
    },
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setCommentData({ name: "", email: "", comment: "" });
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = article.title;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "copy":
        // Fallback method for copying text when Clipboard API is blocked
        try {
          await navigator.clipboard.writeText(url);
          toast.success("Link copied to clipboard!");
        } catch (err) {
          // Fallback to old method
          const textArea = document.createElement("textarea");
          textArea.value = url;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            document.execCommand("copy");
            toast.success("Link copied to clipboard!");
          } catch (error) {
            toast.error("Failed to copy link. Please copy manually: " + url);
          }
          document.body.removeChild(textArea);
        }
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]" data-section="magazine">
      <Breadcrumbs
        items={[
          { name: "Magazine", onClick: () => onNavigate("magazine") },
          { name: article.title },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white" data-content="magazine">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Badge className="bg-[#D4AF37]/15 text-[#5C4033] border border-[#D4AF37]/30 mb-4">
                {article.category}
              </Badge>
              <h1 className="text-5xl text-[#5C4033] mb-6">{article.title}</h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#5C4033]/70 pb-6 border-b border-[#5C4033]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#5C4033]">{article.author}</p>
                    <p className="text-xs text-[#5C4033]/50">
                      {article.authorTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{article.readTime}</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-[#5C4033]/60 mr-2">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    aria-label="Share on X (formerly Twitter)"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                    aria-label="Copy link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-xl text-[#5C4033]/80 leading-relaxed mb-8">
                Kenya's tech ecosystem is experiencing unprecedented growth, and
                Eldoret has emerged as an unexpected hub for innovation. Remote
                workers, digital nomads, and distributed teams are discovering
                the advantages of working from premium coworking spaces in this
                vibrant city.
              </p>

              <h2 className="text-3xl text-[#5C4033] mb-4 mt-12">
                The Rise of Remote Work in Kenya
              </h2>
              <p className="text-[#5C4033]/80 mb-6">
                The global shift to remote work has created new opportunities
                for Kenyan professionals. With reliable internet infrastructure,
                a growing tech-savvy workforce, and competitive costs, Eldoret
                has become an attractive location for companies seeking regional
                hubs in East Africa.
              </p>
              <p className="text-[#5C4033]/80 mb-6">
                At Finale Workspace, we've witnessed this transformation
                firsthand. Our members include software developers working for
                Silicon Valley startups, consultants serving European clients,
                and local entrepreneurs building the next generation of African
                tech solutions.
              </p>

              {/* Pull Quote */}
              <div className="my-12 p-8 bg-[#FFFFF0] border-l-4 border-[#D4AF37] rounded-r-lg">
                <p className="text-2xl text-[#5C4033] italic">
                  "Finding Finale was a game-changer for our remote team. The
                  professional environment, reliable connectivity, and vibrant
                  community helped us stay productive and connected."
                </p>
                <p className="text-sm text-[#5C4033]/60 mt-4">
                  — James Kariuki, Engineering Lead at TechFlow Africa
                </p>
              </div>

              <h2 className="text-3xl text-[#5C4033] mb-4 mt-12">
                Why Remote Teams Choose Eldoret
              </h2>
              <p className="text-[#5C4033]/80 mb-6">
                Several factors make Eldoret an ideal location for remote work:
              </p>
              <ul className="space-y-3 mb-6 text-[#5C4033]/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Cost Efficiency:</strong> Lower operating costs
                    compared to Nairobi while maintaining high-quality
                    infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Strategic Location:</strong> Easy access to other
                    East African markets and international airports
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Growing Talent Pool:</strong> Access to skilled
                    professionals from local universities and training programs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Quality of Life:</strong> Pleasant climate, safe
                    neighborhoods, and balanced lifestyle
                  </span>
                </li>
              </ul>

              {/* Inline Image */}
              <div className="my-12 rounded-lg overflow-hidden shadow-refined-lg">
                <img
                  src="https://images.unsplash.com/photo-1693902997450-7e912c0d3554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG5haXJvYmklMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYyMjMzNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Eldoret cityscape"
                  className="w-full"
                />
                <p className="text-sm text-[#5C4033]/60 p-4 bg-[#FFFFF0]">
                  Eldoret's growing skyline reflects Kenya's expanding business
                  opportunities
                </p>
              </div>

              <h2 className="text-3xl text-[#5C4033] mb-4 mt-12">
                Success Stories from Our Community
              </h2>
              <p className="text-[#5C4033]/80 mb-6">
                The proof is in the results. Remote teams working from Finale
                have achieved remarkable milestones:
              </p>
              <p className="text-[#5C4033]/80 mb-6">
                A fintech startup grew from 3 to 18 employees in just 14 months.
                A digital marketing agency tripled their client base while
                maintaining work-life balance. An international NGO established
                their East African operations center, creating 25 local jobs.
              </p>
              <p className="text-[#5C4033]/80 mb-6">
                These success stories share common threads: access to
                professional workspace, reliable infrastructure, and a
                supportive business community that fosters collaboration and
                innovation.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="my-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg p-8 text-center">
              <h3 className="text-2xl text-[#5C4033] mb-4">
                Ready to Join Our Community?
              </h3>
              <p className="text-[#5C4033]/80 mb-6 max-w-2xl mx-auto">
                Experience the perfect blend of professional workspace,
                cutting-edge amenities, and vibrant community that helps remote
                teams thrive.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate("book-tour")}
                  className="bg-[#5C4033] hover:bg-[#4A3329] text-white"
                >
                  Book a Tour
                </Button>
                <Button
                  onClick={() => onNavigate("products")}
                  variant="outline"
                  className="border-[#5C4033] text-[#5C4033] bg-white hover:bg-[#5C4033] hover:text-white"
                >
                  View Pricing
                </Button>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl text-[#5C4033] mb-4 mt-12">
                Looking Ahead
              </h2>
              <p className="text-[#5C4033]/80 mb-6">
                As remote work continues to reshape the global employment
                landscape, Eldoret is positioned to become a major player in
                Kenya's digital economy. The combination of infrastructure
                investment, growing talent pool, and supportive business
                environment creates ideal conditions for remote teams to
                flourish.
              </p>
              <p className="text-[#5C4033]/80 mb-6">
                Whether you're a solo entrepreneur, a growing startup, or an
                established company exploring East African opportunities, Finale
                Workspace provides the foundation for your success story.
              </p>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-[#5C4033]/10">
              <p className="text-sm text-[#5C4033]/60 mb-4">
                Share this article:
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="border-[#5C4033]/20 text-[#5C4033] hover:bg-[#D4AF37]/10"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="border-[#5C4033]/20 text-[#5C4033] hover:bg-[#D4AF37]/10"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("facebook")}
                  className="border-[#5C4033]/20 text-[#5C4033] hover:bg-[#D4AF37]/10"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    (window.location.href = `mailto:?subject=${encodeURIComponent(
                      article.title
                    )}&body=${encodeURIComponent(window.location.href)}`)
                  }
                  className="border-[#5C4033]/20 text-[#5C4033] hover:bg-[#D4AF37]/10"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
            <h2 className="text-3xl text-[#5C4033] mb-8">Related Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <div
                  key={index}
                  onClick={() => onNavigate("article")}
                  className="bg-white rounded-lg overflow-hidden shadow-refined hover:shadow-xl transition-all cursor-pointer group border border-[#5C4033]/10"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="bg-[#D4AF37]/15 text-[#5C4033] border border-[#D4AF37]/30 mb-3 text-xs">
                      {related.category}
                    </Badge>
                    <h3 className="text-lg text-[#5C4033] mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-[#5C4033]/60">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        <span>{related.readTime} read</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-2xl text-[#5C4033]">Leave a Comment</h2>
            </div>
            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#5C4033] mb-2">
                    Name *
                  </label>
                  <Input
                    value={commentData.name}
                    onChange={(e) =>
                      setCommentData({ ...commentData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    required
                    className="border-[#5C4033]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5C4033] mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={commentData.email}
                    onChange={(e) =>
                      setCommentData({ ...commentData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                    className="border-[#5C4033]/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#5C4033] mb-2">
                  Your Comment *
                </label>
                <Textarea
                  value={commentData.comment}
                  onChange={(e) =>
                    setCommentData({ ...commentData, comment: e.target.value })
                  }
                  placeholder="Share your thoughts..."
                  rows={6}
                  required
                  className="border-[#5C4033]/20"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#5C4033]"
              >
                Submit Comment
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
