

const blogData = [
    {
        category: 'security',
        title: 'Understanding Zero-Day Vulnerabilities',
        excerpt: 'Explore the dangerous world of zero-day exploits and learn how organizations can protect themselves from unknown threats before patches are available.',
        icon: './assets/articles/zero-day.jpg',
        date: 'Dec 20, 2025',
        readTime: '5 min read'
    },
    {
        category: 'security',
        title: 'The Rise of AI-Powered Cyber Atacks',
        excerpt: 'Machine learning is being weaponized by hackers. Discover how artificial intelligence is changing the cybersecurity landscape and what it means for defense strategies.',
        icon: './assets/articles/aic.jpg',
        date: 'Dec 18, 2025',
        readTime: '7 min read'
    },
    {
        category: 'awareness',
        title: 'Phishing Scams: How to Spot Them',
        excerpt: 'Learn to identify sophisticated phishing attempts that target individuals and businesses. Understand the psychology behind social engineering attacks.',
        icon: './assets/articles/ph.jpg',
        date: 'Dec 15, 2025',
        readTime: '4 min read'
    },
    {
        category: 'awareness',
        title: 'Password Security Best Practices 2025',
        excerpt: 'Passwords remain the first line of defense. Discover modern strategies for creating and managing strong passwords in an era of advanced cracking techniques.',
        icon: './assets/articles/pas.jpg',
        date: 'Dec 12, 2025',
        readTime: '6 min read'
    },
    {
        category: 'defense',
        title: 'Building a Multi-Layered Security Strategy',
        excerpt: 'Defense in depth is crucial. Learn how to implement multiple security layers to protect your infrastructure from various attack vectors.',
        icon: './assets/articles/mul.avif',
        date: 'Dec 10, 2025',
        readTime: '8 min read'
    },
    {
        category: 'defense',
        title: 'Ransomware Defense Tactics',
        excerpt: 'Ransomware attacks are increasing. Explore proven strategies for preventing, detecting, and recovering from ransomware incidents.',
        icon: './assets/articles/ransom.jpg',
        date: 'Dec 8, 2025',
        readTime: '7 min read'
    },
    {
        category: 'security',
        title: 'Cloud Security: Risks and Solutions',
        excerpt: 'As businesses migrate to the cloud, new security challenges emerge. Understand cloud-specific vulnerabilities and how to mitigate them effectively.',
        icon: './assets/articles/cl.jpg',
        date: 'Dec 5, 2025',
        readTime: '6 min read'
    },
    {
        category: 'awareness',
        title: 'Social Media Privacy: What You Need to Know',
        excerpt: 'Your social media presence can be a security risk. Learn how to protect your personal information and maintain privacy online.',
        icon: './assets/articles/social.png',
        date: 'Dec 3, 2025',
        readTime: '5 min read'
    },
    {
        category: 'defense',
        title: 'Network Segmentation for Enhanced Security',
        excerpt: 'Divide and conquer your network security. Discover how proper network segmentation can limit the spread of breaches and contain threats.',
        icon: './assets/articles/net.avif',
        date: 'Nov 30, 2025',
        readTime: '9 min read'
    }
];

const blogContainer = document.getElementById('blogContainer');
const categoryButtons = document.querySelectorAll('.a-btn');

function renderBlogs(category = 'all') {
    const filteredBlogs = category === 'all' ? blogData : blogData.filter(blog => blog.category === category);

    if (filteredBlogs.length === 0) {
        blogContainer.innerHTML = '<div class="no-posts">No articles found in this category.</div>';
        return;
    }

    blogContainer.innerHTML = filteredBlogs.map(blog => `
                <div class="blog-card">
                    <div class="blog-image">
                        <img class="images-art" src="${blog.icon}"></img>
                    </div>
                    <div class="blog-content">
                        <span class="blog-category">${blog.category.toUpperCase()}</span>
                        <h2 class="blog-title">${blog.title}</h2>
                        <p class="blog-excerpt">${blog.excerpt}</p>
                        <div class="blog-meta">
                            <span>${blog.date} • ${blog.readTime}</span>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </div>
                </div>
            `).join('');
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        renderBlogs(category);
    });
});

// Initial render
renderBlogs('all');