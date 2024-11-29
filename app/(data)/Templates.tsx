export default  [
    {
        name:'Blog Tittle',
        code:1,
        decs:"An AI tool that generate blog tittle depends on your blog information",
        category:"Blog",
        icon:'/blog-tittle.png',
        aiPrompt:"Give me 5 blog topic idea in bullet points  based on given niche & outline topic and give me result in Rich text editor format",
        slug:"generate-blog-title",
        form:[
            {
                label:"Enter your blog niche",
                field:"input",
                name:'niche',
                requirement:true,
            },
            {
                label:"Enter your blog outline",
                field:"textarea",
                name:"outline",
                requirement: false
            }
        ]

    },
    {
        name: 'Meta Ad Copy',
        code: 13,
        decs: "An AI tool that generates compelling ad copy for Meta (Facebook/Instagram) ads",
        category: "Advertising",
        icon: '/meta-ads.png',
        aiPrompt: "Create engaging primary text, headline, and description for a Meta ad based on the product/service details and target audience. Give output in rich text editor format",
        slug: "generate-meta-ad",
        form: [
            {
                label: "Product/Service details",
                field: "textarea",
                name: "product",
                requirement: true,
            },
            {
                label: "Target audience",
                field: "input",
                name: "audience",
                requirement: true
            }
        ]
    },
    {
        name: 'YouTube Description',
        code:2,
        decs: "An AI tool that generates engaging descriptions for YouTube videos based on the video topic and keywords.",
        category: "YouTube",
        icon: '/youtube-desc.png',
        aiPrompt: "Generate a compelling YouTube video description based on the given video title niche and keywords provided. Ensure to include relevant calls-to-action and SEO-optimized text.Give output in Rich text Editor format ",
        slug: "generate-youtube-description",
        form: [
            {
                label: "Enter your video title",
                field: "input",
                name: "title",
                requirement: true
            },
            {
                label: "Enter keywords",
                field: "textarea",
                name: "keywords",
                requirement: false
            }
        ]
    },
    {
        name: 'Video Script',
        code: 15,
        decs: "An AI tool that generates video scripts for various content formats",
        category: "Video Content",
        icon: '/video-script.png',
        aiPrompt: "Create a detailed video script with intro, main content, and outro based on the provided topic and duration. Include hooks and transitions. Give output in rich text editor format",
        slug: "generate-video-script",
        form: [
            {
                label: "Video topic",
                field: "input",
                name: "topic",
                requirement: true,
            },
            {
                label: "Video duration (in minutes)",
                field: "input",
                name: "duration",
                requirement: true
            },
            {
                label: "Key points to cover",
                field: "textarea",
                name: "points",
                requirement: false
            }
        ]
    },
    {
        name: 'FAQ Generator',
        code: 16,
        decs: "An AI tool that generates relevant FAQs and answers for your product/service",
        category: "Content",
        icon: '/faq-generator.png',
        aiPrompt: "Generate 5-7 frequently asked questions and detailed answers based on the product/service information provided. Give output in rich text editor format",
        slug: "generate-faqs",
        form: [
            {
                label: "Product/Service description",
                field: "textarea",
                name: "description",
                requirement: true,
            },
            {
                label: "Specific areas to focus on",
                field: "input",
                name: "focus",
                requirement: false
            }
        ]
    },
   
    {
        name: 'Email Newsletter',
        code: 10,
        decs: "An AI tool that creates engaging email newsletters for your marketing campaigns",
        category: "Email Marketing",
        icon: '/email-newsletter.png',
        aiPrompt: "Generate a compelling email newsletter with subject line, body content, and call-to-action based on the provided topic and purpose. Give output in rich text editor format",
        slug: "generate-email-newsletter",
        form: [
            {
                label: "Newsletter purpose",
                field: "input",
                name: "purpose",
                requirement: true,
            },
            {
                label: "Key points to include",
                field: "textarea",
                name: "points",
                requirement: false
            }
        ]
    },
  
    {
        name: 'TikTok Caption',
        code:4,
        decs: "An AI tool that creates catchy TikTok captions based on the video content.",
        category: "TikTok",
        icon: '/tiktok-caption.png',
        aiPrompt: "Generate 3 engaging TikTok captions in bullet points based on the content provided, including emojis and hashtags.Give output in Rich text Editor format.",
        slug: "generate-tiktok-caption",
        form: [
            {
                label: "Enter your video content details",
                field: "textarea",
                name: "content",
                requirement: true
            },
            {
                label: "Enter your target audience",
                field: "input",
                name: "audience",
                requirement: false
            }
        ]
    },
    {
        name: 'Social Media Caption',
        code:5,
        decs: "An AI tool that generates captions for social media posts on platforms like Instagram, Facebook, and Twitter.",
        category: "Social Media",
        icon: '/social-caption.png',
        aiPrompt: "Generate 3 engaging social media captions in bullet points, optimized for Instagram, Facebook, and Twitter, based on the provided content details.Give output in Rich text Editor format.",
        slug: "generate-social-media-caption",
        form: [
            {
                label: "Enter your content topic",
                field: "input",
                name: "topic",
                requirement: true
            },
            {
                label: "Enter key message",
                field: "textarea",
                name: "message",
                requirement: false
            }
        ]
    },
    {
        name: 'Code Commenter',
    code:7,
    decs: "An AI tool that generates comments for a given code snippet to make it more understandable.",
    category: "Coding",
    icon: '/programming.png',
    aiPrompt: "Generate detailed comments for the provided code snippet to explain its functionality and logic clearly.",
    slug: "generate-code-comments",
    form: [
        {
            label: "Enter your code snippet",
            field: "textarea",
            name: "code",
            requirement: true,
        },
        {
            label: "Programming language",
            field: "input",
            name: "language",
            requirement: false
        }
    ]
},

{
    name: 'Blog Post',
    decs: "An AI tool that generates a full blog post based on the given topic and outline.",
    category: "Blog",
    code:8,
    icon: '/blog-content.png',
    aiPrompt: "Generate a detailed blog post based on the provided niche and outline. The post should be structured with an introduction, body, and conclusion.Give output in rich text Editor format",
    slug: "generate-blog-post",
    form: [
        {
            label: "Enter blog topic",
            field: "input",
            name: "topic",
            requirement: true
        },
        {
            label: "Enter blog outline",
            field: "textarea",
            name: "outline",
            requirement: false
        }
    ]
},
{
    name: 'YouTube Video Title',
    code:6,
    decs: "An AI tool that generates attention-grabbing YouTube video titles based on content and keywords.",
    category: "YouTube",
    icon: '/youtube-title.png',
    aiPrompt: "Generate 5 catchy YouTube video titles in bullet points based on the provided content details and keywords.Give output in Rich text Editor format.",
    slug: "generate-youtube-title",
    form: [
        {
            label: "Enter your video content",
            field: "textarea",
            name: "content",
            requirement: true
        },
        {
            label: "Enter keywords",
            field: "input",
            name: "keywords",
            requirement: false,
        }
    ]
},
{
    name: 'Text Improver',
    code:9,
    decs: "An AI tool that improves the quality of a given text by enhancing clarity, grammar, and style.",
    category: "Writing",
    icon: '/text-improver.png',
    aiPrompt: "Improve the provided text by enhancing its clarity, grammar, and style. Maintain the original meaning while making the text more engaging and polished.Give output in rich text editor format",
    slug: "text-improver",
    form: [
        {
            label: "Enter the text to improve",
            field: "textarea",
            name: "text",
            requirement: true
        }
    ]
},



    
    
    







































{
    name: 'Product Description',
    code: 11,
    decs: "An AI tool that generates compelling product descriptions for e-commerce",
    category: "E-commerce",
    icon: '/product-desc.png',
    aiPrompt: "Create an engaging product description highlighting key features, benefits, and unique selling points. Include technical specifications if provided. Give output in rich text editor format",
    slug: "generate-product-description",
    form: [
        {
            label: "Product name and type",
            field: "input",
            name: "product",
            requirement: true,
        },
        {
            label: "Key features and specifications",
            field: "textarea",
            name: "features",
            requirement: true
        }
    ]
},
{
    name: 'LinkedIn Post',
    code: 12,
    decs: "An AI tool that creates professional LinkedIn posts for personal branding",
    category: "Social Media",
    icon: '/LinkedIn.png',
    aiPrompt: "Generate a professional LinkedIn post with appropriate hashtags based on the given topic. Include engagement hooks and call-to-action. Give output in rich text editor format",
    slug: "generate-linkedin-post",
    form: [
        {
            label: "Post topic",
            field: "input",
            name: "topic",
            requirement: true,
        },
        {
            label: "Industry/Niche",
            field: "input",
            name: "industry",
            requirement: false
        }
    ]
},

{
    name: 'SEO Meta Description',
    code: 14,
    decs: "An AI tool that creates SEO-optimized meta descriptions for web pages",
    category: "SEO",
    icon: '/seo-meta.png',
    aiPrompt: "Generate an SEO-friendly meta description within 155-160 characters that includes the target keyword and encourages clicks. Give output in rich text editor format",
    slug: "generate-meta-description",
    form: [
        {
            label: "Page title/topic",
            field: "input",
            name: "title",
            requirement: true,
        },
        {
            label: "Target keyword",
            field: "input",
            name: "keyword",
            requirement: true
        }
    ]
},


{
    name: 'Podcast Description',
    code: 17,
    decs: "An AI tool that creates engaging podcast episode descriptions",
    category: "Podcast",
    icon: '/podcast-desc.png',
    aiPrompt: "Generate an engaging podcast episode description including episode highlights, key takeaways, and timestamps if provided. Give output in rich text editor format",
    slug: "generate-podcast-description",
    form: [
        {
            label: "Episode title",
            field: "input",
            name: "title",
            requirement: true,
        },
        {
            label: "Episode content/topics",
            field: "textarea",
            name: "content",
            requirement: true
        },
        {
            label: "Timestamps (optional)",
            field: "textarea",
            name: "timestamps",
            requirement: false
        }
    ]
},
{
    name: 'Instagram Hashtags',
    code:3,
    decs: "An AI tool that generates relevant and popular hashtags for Instagram posts based on the content topic.",
    category: "Instagram",
    icon: '/insta-hashtag.png',
    aiPrompt: "Generate 10-15 trending Instagram hashtags based on the provided content niche and keywords.Give output in Rich text Editor format ",
    slug: "generate-instagram-hashtags",
    form: [
        {
            label: "Enter your content topic",
            field: "input",
            name: "topic",
            requirement: true
        },
        {
            label: "Enter keywords (optional)",
            field: "input",
            name: "keywords",
            requirement: false
        }
    ]
},
    
    
]