export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information and outline',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based',
        slug:'generated-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        aiPrompt:'Give me blog content based on topic ant outline only based',
        slug:'generated-blog-content',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog topic idea',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt:'Give me blog topic idea based on topic ant outline only',
        slug:'generated-blog-topic',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'YouTube SEO Title',
        desc:'An AI tool that helps you optimize YouTube SEO titles to boost visibility, focusing on relevant keywords, captivating thumbnails, audience engagement, and algorithm updates.',
        category:'You tube',
        icon:'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        aiPrompt:'Generate catchy and SEO-optimized YouTube video titles specifically tailored for a niche provided. Make sure the titles include relevant keywords, have a high click-through rate potential, and effectively communicate the content of the videos.',
        slug:'generated-youtube-seo',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        aiPrompt:'Generate a detailed and informative YouTube video description using this AI-powered YouTube description generator. Include a catchy introduction to hook viewers, a comprehensive overview of the video content, relevant keywords for SEO optimization, a call-to-action to engage the audience, social media links for promotion, and any necessary disclaimers or disclosures. Maximize engagement and discoverability with compelling copy tailored to videos target audience and objectives.',
        slug:'generated-youtube-description',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'AI-powered tool to optimize YouTube tags for enhanced visibility and engagement. Explore expert strategies for tag selection, keyword research, and advanced tips to maximize your video\'s reach effectively.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        aiPrompt: 'Generate a list of 20 trending YouTube tags relevant to given niche to boost video visibility and engagement among viewers.',
        // aiPrompt: 'Create an in-depth guide for a YouTube video on improving YouTube tag optimization for greater visibility and reach on the social media platform. Cover effective methods for choosing appropriate tags, the significance of researching keywords, and advice for using tags to their maximum potential in order to boost searchability and connect with the target audience.',
        slug: 'generated-youtube-tags',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    }
    ,
    {
        name:'Paragraph Generator',
        desc:'AI Model to generate programming code in any language more effeciently and with high accurancy',
        category:'Code',
        icon:'https://cdn-icons-png.flaticon.com/128/16163/16163523.png',
        aiPrompt:'Generate a paragraph',
        slug:'generated-para',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        aiPrompt:'Generate a creative and engaging Instagram post using vibrant colors, trendy hashtags, and a captivating caption that highlights a positive message or inspirational quote. Make sure the image complements the text and evokes emotions, encouraging likes and comments from followers.',
        slug:'generated-Insta-Post',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name: "Caption for Instagram and More",
        desc: "An AI tool that creates captivating and imaginative captions perfect for different situations, including travel, food, friends, and more, to enhance your posts on Instagram and other social networks. Discover a diverse array of caption suggestions that connect with various audiences and boost interaction with your content.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
        aiPrompt: "Generate captivating and imaginative captions for Instagram and other social networks to boost interaction with your content.",
        slug: "generated-caption",
        form: [
            {
                label: "Enter your post description",
                field: "input",
                name: "description",
                required: true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
            // {
            //     label: "Choose a category",
            //     field: "select",
            //     name: "category",
            //     options: ["Travel", "Food", "Friends", "Fitness", "Fashion", "Lifestyle"],
            //     required: true
            // }
        ]
    },
    {
        name:'Instagram Hash Tag Generator',
        desc:'Generate a list of trending hashtags to enhance the discoverability and engagement of posts on Instagram, Facebook, Twitter, and TikTok.',
        category:'Social Media',
        icon:'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        aiPrompt:'Generate a list of trending hashtags to enhance the discoverability and engagement of posts on Instagram, Facebook, Twitter, and TikTok.',
        slug:'generated-hashtag',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Instagram Post/Reel Idea',
        desc:'An AI tool that generate New and trending instagram idea depends on your niche',
        category:'Social Media',
        icon:'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        aiPrompt:'Generate innovative Instagram post or reel ideas for a given niche - provide the niche you have in mind, preferred tone (e.g., humorous, informative, motivational), and any specific details such as colors, themes, or key elements you want to include. The ideas should be engaging, creative, and tailored to resonate with the target audience in the chosen niche.',
        slug:'generated-Insta-idea',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Product Description',
        desc:'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        aiPrompt:'Generate a product description.',
        slug:'generated-product-desc',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    }
]