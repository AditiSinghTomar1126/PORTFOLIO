"use client";

export function FAQSchema() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Aditi Singh Tomar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aditi Singh Tomar is a Full Stack Developer from Uttar Pradesh, India specializing in React, FastAPI, Redux, and Next.js. She has expertise in building scalable, high-performance web applications with modern technologies including React, Redux, WebSockets, and next.js."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Aditi Singh Tomar specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aditi Singh Tomar specializes in Python , JavaScript/TypeScript (React, Next.js), database technologies (MongoDB), DevOps tools (Docker), message brokers (Redis, Celery), real-time communication (WebSockets), and cloud platforms (AWS). She focuses on full stack development with emphasis on backend architecture."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact Aditi Singh Tomar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Aditi Singh Tomar through email at aditisinghtomar1126@gmail.com, connect on LinkedIn at https://www.linkedin.com/in/aditi-singh-tomar-598320305, or check out her work on GitHub at https://github.com/AditiSinghTomar1126. Visit her portfolio at https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ for more information and a contact form."
                }
            },
            {
                "@type": "Question",
                "name": "What projects has Aditi Singh Tomar built?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aditi Singh Tomar has built several notable projects including KrishiBazar, a premium full-stack Agri e-commerce platform with real-time admin notifications, and a high-performance Software Development Agency website. Her projects showcase expertise in React, MongoDB, Next.js, Docker, AWS, and WebSockets."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Aditi Singh Tomar located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aditi Singh Tomar is based in Uttar Pradesh,India. She works as a Full Stack  Developer and is available for Full Time Opportunities and Internships."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
