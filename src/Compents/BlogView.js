import React from "react";
import "../PageCss/Blog.css"; // Make sure to create and import this CSS file

const BlogView = () => {
  const Blog = {
    title: "Top 10 Guest Posting Websites for High-Quality Backlink",
    Descriptions: ` Guest posting is one of the most effective strategies to boost your SEO game and increase online visibility.  
    Not only does it help you earn valuable backlinks, but it also positions you as an authority in your niche.  
    Below, you’ll find the full rundown of the top 10 sites—complete with Domain Authority (DA), Page Authority (PA), and key benefits—so you can choose the best platforms for your next guest post.
`,
Descriptions2:` Medium is a highly authoritative website with a DA (Domain Authority) of 96+. It’s perfect for sharing in‑depth articles that can rank well on Google.  
    With its large user base, your posts can get exposure and even go viral, earning you natural backlinks.  
    <strong>Key Benefits:</strong> High Domain Authority, large readership, easy submission process.  
    <strong>Best For:</strong> Content marketing, personal branding, and thought leadership.
    <br/>
    <br/>
        HubSpot is a renowned marketing blog with millions of readers. They accept high‑quality guest posts related to marketing, sales, and customer service.  
    Guest posting here can drive targeted traffic and offer credible backlinks.  
    <strong>Key Benefits:</strong> Excellent for marketing‑related content, DA 91+, strong backlink opportunities.  
    <strong>Best For:</strong> Marketing and business professionals.
    <br/>
    <br/>
        Outbrain is a top platform for marketers and content creators, with an emphasis on content amplification and native advertising.  
    Guest posting here not only enhances your SEO but also gives you access to a professional audience.  
    <strong>Key Benefits:</strong> Niche audience in digital marketing, DA 88+, can drive traffic through content recommendation widgets.  
    <strong>Best For:</strong> Digital marketers and content creators
    <br/>
    <br/>
        Mashable is a well-established media platform covering technology, entertainment, and social media.  
    Submitting a guest post to Mashable can significantly increase your exposure.  
    <strong>Key Benefits:</strong> Global readership, DA 93+, broad niche coverage.  
    <strong>Best For:</strong> Tech, entertainment, and business‑focused content.
        If you’re looking to target a business‑minded audience, Business 2 Community is your go‑to. Their platform is well‑suited for marketing, social media, and entrepreneurial content.  
    <strong>Key Benefits:</strong> DA 87+, active business community, guest posts can generate leads.  
    <strong>Best For:</strong> Entrepreneurs and business strategists.
     <br/>
    <br/>
        ShoutMeLoud is a popular blog in the blogging and SEO community. If you write about digital marketing, blogging, or SEO tips, this platform is perfect for you.  
    The site also offers strong backlinks that can improve your ranking.  
    <strong>Key Benefits:</strong> SEO‑focused audience, DA 75+, high backlink value.  
    <strong>Best For:</strong> SEO experts, bloggers, and affiliate marketers.`
  };
  return (
    <>
    <div className="hero-banner">
    <div className="overlay">
      <div className="hero-content">
        <h1 >Blog View</h1>
        {/* <p>Latest insights and updates from our team</p> */}
      </div>
      </div>
    </div>
    <div className="blog-post">
      <h1 className="blog-heading">{Blog.title}</h1>
      <img  className="blog-image"  src="/Images/Blog-1.jpg" alt="Flex Direction Example" />
      <div className="blog-paragraph">
      <p >{Blog.Descriptions}</p>
      <div
        className="blog-description"
        dangerouslySetInnerHTML={{ __html: Blog.Descriptions2}}
      />
      </div>
    </div>
    </>
  );
};

export default BlogView;
