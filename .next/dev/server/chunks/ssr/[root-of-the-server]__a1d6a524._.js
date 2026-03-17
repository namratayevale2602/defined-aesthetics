module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "beforeAfters",
    ()=>beforeAfters,
    "blogPosts",
    ()=>blogPosts,
    "companyInfo",
    ()=>companyInfo,
    "galleryItems",
    ()=>galleryItems,
    "navItems",
    ()=>navItems,
    "process",
    ()=>process,
    "services",
    ()=>services,
    "testimonials",
    ()=>testimonials,
    "whyChooseUs",
    ()=>whyChooseUs
]);
const companyInfo = {
    name: "Defined MD Aesthetics by Mayuri",
    artist: "Mayuri Londhe",
    phone: "+91 8422926464",
    whatsapp: "https://wa.me/918422926464",
    instagram: "https://www.instagram.com/_defined_aesthetics_by_mayuri",
    instagramHandle: "@_defined_aesthetics_by_mayuri",
    email: "definedaestheticsbymayuri@gmail.com",
    address: "Nashik, Maharashtra, India",
    tagline: "Defined Beauty. Lasting Confidence.",
    subTagline: "Achieve perfectly shaped brows every day with permanent makeup for a polished look."
};
const services = [
    {
        slug: "eyebrows",
        title: "Permanent Eyebrows",
        shortTitle: "Eyebrows",
        icon: "✦",
        tagline: "Perfect brows. Every single morning.",
        description: "Achieve perfectly shaped brows every day with permanent eyebrows for a polished look. Each technique is customised to your facial structure, hair colour, and lifestyle for results that look completely natural.",
        image: "/images/eye_brows_before_after.jpeg",
        techniques: [
            {
                name: "Microblading",
                desc: "Fine hair-stroke technique using a manual blade to create ultra-realistic, natural-looking brow hairs. Best for normal to dry skin types.",
                duration: "2–3 hours",
                longevity: "12–18 months"
            },
            {
                name: "Ombre Brows",
                desc: "A soft, powdery brow effect that starts lighter at the front and gradually deepens towards the tail. Works beautifully on all skin types.",
                duration: "2–3 hours",
                longevity: "1–2 years"
            },
            {
                name: "Powder Brows",
                desc: "A filled, polished brow look that mimics the appearance of perfectly applied brow powder. Ideal for oily skin types.",
                duration: "2–3 hours",
                longevity: "1–3 years"
            },
            {
                name: "Combination Brows",
                desc: "The best of both worlds — fine hair strokes at the front with a soft ombre shading towards the tail for a full, dimensional look.",
                duration: "2.5–3 hours",
                longevity: "1–2 years"
            },
            {
                name: "Nano Brows",
                desc: "Machine hair-stroke technique creating the finest, most precise individual hairs. Suitable for all skin types including sensitive skin.",
                duration: "2–3 hours",
                longevity: "1–2 years"
            }
        ],
        faqs: [
            {
                question: "What is microblading?",
                answer: "Microblading is a semi-permanent eyebrow technique where a fine blade deposits pigment into the upper layers of the skin, creating realistic hair-stroke brows that last 12–18 months."
            },
            {
                question: "Does eyebrow tattooing hurt?",
                answer: "A topical numbing cream is applied before the procedure, making it very comfortable. Most clients describe a mild scratching sensation at most."
            },
            {
                question: "How long do permanent eyebrows last?",
                answer: "Depending on the technique and your skin type, permanent eyebrows last 1–3 years. A touch-up session is recommended at 4–6 weeks after the initial procedure."
            },
            {
                question: "What is the healing time for microblading?",
                answer: "The initial healing takes 7–14 days. During this time the brows may appear darker and slightly raised before settling into their final colour."
            },
            {
                question: "Can I choose my brow shape?",
                answer: "Absolutely. Every client receives a full brow mapping and design consultation before the procedure begins. You approve the shape before any pigment is applied."
            }
        ]
    },
    {
        slug: "lip-blush",
        title: "Lip Blush",
        shortTitle: "Lip Blush",
        icon: "♡",
        tagline: "Wake up with beautiful lips every day.",
        description: "Enhance your natural lip colour, correct dark pigmentation, and achieve the perfect pout that lasts. From natural nudes to bold shades — customised entirely to your preference.",
        image: "/images/lip_before_after.jpeg",
        techniques: [
            {
                name: "Dark Neutralisation",
                desc: "Specially designed to correct and neutralise very dark, hyperpigmented lips — common for darker skin tones. Creates a beautiful, even base for natural colour.",
                duration: "2–3 hours",
                longevity: "1–2 years"
            },
            {
                name: "Nude Lips",
                desc: "A soft, skin-toned tint that enhances the natural lip border and gives a fresh, 'your lips but better' effect. Effortlessly beautiful.",
                duration: "2 hours",
                longevity: "1–2 years"
            },
            {
                name: "Baby Rosy Lips",
                desc: "A delicate rosy flush that mimics the look of naturally blushed lips. The most popular choice for a soft, feminine aesthetic.",
                duration: "2 hours",
                longevity: "1–2 years"
            },
            {
                name: "Bold Lip Color",
                desc: "For those who love a statement lip. Choose from deep berries, true reds, or rich mauves — wake up with a full lip look every day.",
                duration: "2.5 hours",
                longevity: "1–2 years"
            }
        ],
        faqs: [
            {
                question: "What is lip blush?",
                answer: "Lip blush is a semi-permanent cosmetic tattoo that adds colour, definition, and the illusion of fuller lips. The result is a natural, watercolour-like tint that lasts 1–2 years."
            },
            {
                question: "Can dark lips be treated?",
                answer: "Yes! Our Dark Neutralisation technique is specifically designed for hyperpigmented lips. It uses colour theory to neutralise darkness before layering a beautiful natural shade on top."
            },
            {
                question: "Is lip blush painful?",
                answer: "A strong topical numbing cream is applied before and during the procedure. Most clients find it very manageable — the lips are one of the most effectively numbed areas."
            },
            {
                question: "How long does lip blush last?",
                answer: "Lip blush typically lasts 1–2 years depending on your lifestyle, sun exposure, and skin type. A touch-up at 6–8 weeks after the first session perfects the result."
            },
            {
                question: "Will my lips look overdone?",
                answer: "Never. We work with you to choose a shade that complements your natural colouring. The healed result is always softer and more natural than it appears immediately after the procedure."
            }
        ]
    },
    {
        slug: "scalp-micropigmentation",
        title: "Scalp Micropigmentation",
        shortTitle: "SMP",
        icon: "◈",
        tagline: "Restore confidence. Restore your hairline.",
        description: "A non-surgical, permanent solution for hair thinning, receding hairlines, and baldness. SMP creates the illusion of a full head of hair using micro-pigment deposits on the scalp.",
        image: "/images/what_we_do.jpeg",
        techniques: [
            {
                name: "Hairline Restoration",
                desc: "Recreate a natural-looking hairline for those with receding hairlines or frontal hair loss. Each pigment dot is placed with precision to match natural hair follicles.",
                duration: "3–5 hours",
                longevity: "3–5 years"
            },
            {
                name: "Density Enhancement",
                desc: "Add the appearance of density to thinning areas of the scalp. Works alongside existing hair to create a fuller, thicker look.",
                duration: "2–4 hours",
                longevity: "3–5 years"
            },
            {
                name: "Full Scalp (Alopecia/Bald)",
                desc: "Complete scalp coverage for those with full or near-full hair loss. Creates the appearance of a close-shaved, full head of hair.",
                duration: "4–6 hours",
                longevity: "3–5 years"
            }
        ],
        faqs: [
            {
                question: "What is scalp micropigmentation?",
                answer: "Scalp micropigmentation (SMP) is a non-surgical cosmetic treatment where natural pigments are applied at the epidermal level of the scalp to replicate the natural appearance of hair follicles."
            },
            {
                question: "Is SMP suitable for women?",
                answer: "Yes. SMP is highly effective for women experiencing hair thinning, alopecia, or scalp scarring. It creates the appearance of density without affecting existing hair."
            },
            {
                question: "How long does SMP last?",
                answer: "SMP typically lasts 3–5 years before a touch-up is needed. The longevity depends on sun exposure, skincare routine, and individual skin characteristics."
            },
            {
                question: "Does it look natural?",
                answer: "When performed by a skilled artist, SMP is virtually indistinguishable from real hair follicles. We precisely match pigment tone to your natural hair colour for the most realistic result."
            }
        ]
    },
    {
        slug: "beauty-spot",
        title: "Beauty Spot Making",
        shortTitle: "Beauty Spot",
        icon: "•",
        tagline: "A timeless accent. Perfectly placed.",
        description: "Add a touch of elegance with a precisely placed permanent beauty spot. A subtle, timeless accent that enhances your natural features and adds a classic, iconic charm to your look.",
        image: "/images/what_we_do.jpeg",
        techniques: [
            {
                name: "Classic Beauty Spot",
                desc: "The iconic beauty mark — a small, perfectly round pigmented dot placed at your preferred location. Cheek, above the lip, or near the eye — you choose.",
                duration: "30–45 mins",
                longevity: "1–3 years"
            }
        ],
        faqs: [
            {
                question: "What is permanent beauty spot making?",
                answer: "Beauty spot making is a cosmetic tattoo procedure where a small, precise dot of pigment is deposited into the skin to create a permanent or semi-permanent beauty mark at a location of your choice."
            },
            {
                question: "How long does a beauty spot last?",
                answer: "A permanent beauty spot typically lasts 1–3 years depending on skin type and sun exposure. The colour gradually fades naturally over time."
            },
            {
                question: "Where can a beauty spot be placed?",
                answer: "The most popular placements are near the upper lip (Marilyn Monroe style), on the cheek, or near the eye. We work with your facial structure to find the most flattering placement."
            }
        ]
    }
];
const whyChooseUs = [
    {
        icon: "✦",
        title: "Customised to You",
        desc: "Every treatment is tailored to your unique facial structure, skin tone, and personal aesthetic goals."
    },
    {
        icon: "◈",
        title: "Safe & Hygienic",
        desc: "Single-use, sterile equipment on every client. Premium quality pigments that are skin-safe and long-lasting."
    },
    {
        icon: "♡",
        title: "Natural Results",
        desc: "We specialise in results that enhance your natural beauty — never overdone, always refined."
    },
    {
        icon: "✿",
        title: "Expert Artist",
        desc: "Mayuri Londhe brings precision, artistry, and passion to every procedure for stunning, consistent results."
    },
    {
        icon: "◎",
        title: "Consultations Included",
        desc: "Every appointment begins with a thorough consultation and design session. You approve everything before we begin."
    },
    {
        icon: "✺",
        title: "Aftercare Support",
        desc: "Full aftercare guidance provided. We're available for questions and support throughout your healing journey."
    }
];
const beforeAfters = [
    {
        id: 1,
        service: "Eyebrows",
        technique: "Microblading",
        beforeImage: "/images/eye_brows_before_after.jpeg",
        afterImage: "/images/eye_brows_before_after.jpeg",
        isComposite: true
    },
    {
        id: 2,
        service: "Lip Blush",
        technique: "Dark Neutralisation",
        beforeImage: "/images/facial_before.jpeg",
        afterImage: "/images/facial_after.jpeg",
        isComposite: false
    },
    {
        id: 3,
        service: "Lip Blush",
        technique: "Lip Blush Treatment",
        beforeImage: "/images/lip_before_after.jpeg",
        afterImage: "/images/lip_before_after.jpeg",
        isComposite: true
    }
];
const testimonials = [
    {
        name: "Priya S.",
        location: "Nashik",
        service: "Microblading",
        rating: 5,
        text: "Mayuri is an absolute artist. My brows look so natural — everyone thinks I was born with them! The whole experience was comfortable and professional."
    },
    {
        name: "Sneha R.",
        location: "Nashik",
        service: "Lip Blush",
        rating: 5,
        text: "I had very dark lips my whole life and was always self-conscious. After Mayuri's dark neutralisation treatment, my lips are a beautiful natural pink. I'm obsessed!"
    },
    {
        name: "Kavita M.",
        location: "Nashik",
        service: "Ombre Brows",
        rating: 5,
        text: "I save so much time on my morning makeup now. My brows are perfect every single day. The consultation process was so thorough — she really listened to what I wanted."
    },
    {
        name: "Anita P.",
        location: "Nashik",
        service: "Scalp Micropigmentation",
        rating: 5,
        text: "The SMP treatment genuinely changed my confidence. My thinning hairline is no longer something I stress about. Mayuri's work is incredibly precise and natural-looking."
    },
    {
        name: "Radha K.",
        location: "Nashik",
        service: "Combination Brows",
        rating: 5,
        text: "Best decision I ever made! I've tried drawing my brows for years and never got it right. Now they're perfect. Mayuri's skill is exceptional."
    }
];
const process = [
    {
        step: "01",
        title: "Consultation",
        desc: "We discuss your goals, skin type, and preferred aesthetic. All your questions answered."
    },
    {
        step: "02",
        title: "Design",
        desc: "Brow mapping or treatment planning tailored to your facial structure. You approve before we begin."
    },
    {
        step: "03",
        title: "Numbing",
        desc: "Premium topical numbing cream applied for maximum comfort throughout the procedure."
    },
    {
        step: "04",
        title: "Treatment",
        desc: "The procedure is performed with precision and care using sterile, single-use equipment."
    },
    {
        step: "05",
        title: "Aftercare",
        desc: "Full aftercare instructions provided. We support you through every stage of healing."
    },
    {
        step: "06",
        title: "Touch-up",
        desc: "A follow-up session 4–8 weeks later perfects and locks in your results."
    }
];
const blogPosts = [
    {
        slug: "microblading-vs-ombre-brows",
        title: "Microblading vs Ombre Brows: Which Is Right for You?",
        excerpt: "Not sure which eyebrow technique suits your skin and lifestyle best? Here's everything you need to know to make the right choice.",
        date: "2024-12-15",
        readTime: "5 min",
        category: "Eyebrows",
        tags: [
            "microblading",
            "ombre brows",
            "eyebrow techniques"
        ],
        content: [
            {
                type: "intro",
                text: "When it comes to permanent eyebrows, two techniques dominate the conversation: microblading and ombre brows. Both deliver beautiful, long-lasting results — but they work differently, suit different skin types, and produce distinct looks. Choosing the right technique can make all the difference between brows that feel truly yours and brows that just don't quite fit."
            },
            {
                type: "heading",
                text: "What Is Microblading?"
            },
            {
                type: "paragraph",
                text: "Microblading is a manual technique that uses a fine blade to deposit pigment into the upper layers of the skin in individual hair-like strokes. The result is incredibly natural — each stroke mimics a real brow hair with precision. When done well, you genuinely cannot tell the difference between microbladed strokes and actual hair."
            },
            {
                type: "paragraph",
                text: "Microblading works best on normal to dry skin types. On oily skin, the pigment can blur or fade faster as excess sebum breaks down the strokes. If you have naturally sparse or over-plucked brows and want a realistic, feathery look, microblading is typically the go-to choice."
            },
            {
                type: "heading",
                text: "What Are Ombre Brows?"
            },
            {
                type: "paragraph",
                text: "Ombre brows (also called powder brows) use a shading technique — either manually or with a machine — to create a soft, filled brow that starts lighter at the inner corners and gradually deepens toward the tail. The result looks like perfectly applied brow powder: polished, defined, and beautifully dimensional."
            },
            {
                type: "paragraph",
                text: "Unlike microblading, ombre brows work wonderfully on all skin types, including oily and combination skin. The shaded technique holds up better over time because it isn't relying on crisp individual strokes. Many clients who've had microblading before choose to switch to ombre brows on their next session for improved longevity."
            },
            {
                type: "heading",
                text: "Key Differences at a Glance"
            },
            {
                type: "list",
                items: [
                    "Microblading: Hair-stroke effect — looks natural and feathery. Best for dry skin.",
                    "Ombre Brows: Shaded, filled effect — looks polished and defined. Works on all skin types.",
                    "Microblading: Lasts 12–18 months. Ombre brows last 1–2 years.",
                    "Microblading: Heals lighter. Ombre brows have a more consistent healed result.",
                    "Combination brows merge both — hair strokes at the front, shading toward the tail."
                ]
            },
            {
                type: "heading",
                text: "Which Should You Choose?"
            },
            {
                type: "paragraph",
                text: "The best technique for you depends on four factors: your skin type, your lifestyle, your natural brow density, and the look you want to achieve."
            },
            {
                type: "paragraph",
                text: "If you have dry to normal skin and want the most natural, barely-there enhancement possible — microblading is ideal. If your skin is oily, large-pored, or you want a more defined, makeup-like look that lasts longer — ombre or powder brows are the better choice. If you want the best of both, combination brows give you hair strokes at the front for a natural start and a soft shadow toward the tail for depth."
            },
            {
                type: "callout",
                text: "Not sure which technique is right for your skin? Book a free WhatsApp consultation with Mayuri and she'll guide you personally."
            }
        ]
    },
    {
        slug: "dark-lip-neutralisation-guide",
        title: "The Complete Guide to Dark Lip Neutralisation",
        excerpt: "Dark, pigmented lips are incredibly common in Indian skin tones. Learn how permanent lip neutralisation can transform your lips naturally.",
        date: "2024-11-28",
        readTime: "6 min",
        category: "Lip Blush",
        tags: [
            "lip blush",
            "dark lips",
            "lip neutralisation",
            "Indian skin"
        ],
        content: [
            {
                type: "intro",
                text: "Dark, hyperpigmented lips are one of the most common beauty concerns among Indian women — and one of the most under-discussed. Whether caused by sun exposure, hormonal changes, or simply genetics, dark lips can make even the most confident person feel self-conscious. Dark lip neutralisation is the permanent makeup solution that's quietly transforming how women across India feel about their lips."
            },
            {
                type: "heading",
                text: "Why Do Indian Skin Tones Often Have Dark Lips?"
            },
            {
                type: "paragraph",
                text: "Darker skin tones naturally produce more melanin — the pigment responsible for skin colour. This higher melanin production can concentrate in areas like the lips, leading to uneven or very dark pigmentation. Sun exposure accelerates this process, as does hormonal fluctuation, smoking, and certain nutritional deficiencies."
            },
            {
                type: "paragraph",
                text: "The result is often lips that appear much darker than the rest of the face — sometimes with a bluish or brownish cast that makes wearing lip colour challenging. Foundation doesn't cover them effectively, and most lipsticks look muddy or unnatural over very dark pigmentation."
            },
            {
                type: "heading",
                text: "What Is Dark Lip Neutralisation?"
            },
            {
                type: "paragraph",
                text: "Dark lip neutralisation is a specialised permanent makeup technique that uses colour theory to counteract and neutralise dark lip pigmentation. Instead of simply adding colour on top (which doesn't work on very dark lips), neutralisation first deposits a corrective pigment — usually a warm, orange-toned shade — to cancel out the darkness."
            },
            {
                type: "paragraph",
                text: "Once the neutralising pigment has healed and the darkness is corrected, a beautiful natural shade — nude, pink, or rosy — is applied over the top to create the desired lip colour. The final result is a naturally beautiful lip that looks like it's simply your lip's natural colour, just enhanced."
            },
            {
                type: "heading",
                text: "What Does the Process Involve?"
            },
            {
                type: "list",
                items: [
                    "Consultation: We assess your lip pigmentation, skin undertone, and desired result.",
                    "Colour mapping: The correct neutralising shade is selected based on your specific pigmentation.",
                    "Numbing: Strong topical anaesthetic is applied for maximum comfort.",
                    "Session 1 — Neutralisation: The corrective pigment is applied. Lips will appear quite bold immediately after.",
                    "Healing period (4–8 weeks): The corrective layer heals, lightening significantly.",
                    "Session 2 — Colour: The desired lip shade is applied over the neutralised base.",
                    "Touch-up (optional): A final session perfects shade and evenness."
                ]
            },
            {
                type: "heading",
                text: "What Results Can You Expect?"
            },
            {
                type: "paragraph",
                text: "After the full process, you'll wake up every day to naturally beautiful lips — soft, evenly coloured, and perfectly defined. No more foundation on the lips. No more lipstick that looks wrong. Just your lips, but beautiful."
            },
            {
                type: "paragraph",
                text: "Results typically last 1–2 years. Maintaining lips with SPF lip balm and staying hydrated extends longevity significantly."
            },
            {
                type: "callout",
                text: "Ready to transform your lips? Message Mayuri on WhatsApp for a free consultation and personalised colour assessment."
            }
        ]
    },
    {
        slug: "microblading-aftercare-tips",
        title: "Microblading Aftercare: Day-by-Day Healing Guide",
        excerpt: "The healing process is crucial for perfect results. Follow this day-by-day guide to ensure your brows heal beautifully.",
        date: "2024-11-10",
        readTime: "7 min",
        category: "Aftercare",
        tags: [
            "microblading",
            "aftercare",
            "healing",
            "eyebrows"
        ],
        content: [
            {
                type: "intro",
                text: "Getting microblading done is only half the process. How you care for your brows during the healing period directly determines how your final result looks. Proper aftercare is the difference between brows that heal beautifully and brows that fade unevenly, lose definition, or develop texture issues. Here's exactly what to expect and how to care for your brows day by day."
            },
            {
                type: "heading",
                text: "Days 1–3: The Fresh Stage"
            },
            {
                type: "paragraph",
                text: "Immediately after the procedure, your brows will look bold, defined, and darker than you expected. This is completely normal — don't panic. The colour will appear 30–40% darker than the healed result. There may be slight redness and mild swelling around the brow area."
            },
            {
                type: "list",
                items: [
                    "Blot gently with a clean tissue every hour to remove lymph fluid (clear sticky liquid).",
                    "Do NOT wet your brows for at least 10 days — avoid swimming, saunas, steam rooms.",
                    "Apply a thin layer of the provided aftercare ointment with a clean cotton bud.",
                    "Avoid touching, picking, or scratching the brow area.",
                    "Sleep on your back if possible to avoid friction on the brows."
                ]
            },
            {
                type: "heading",
                text: "Days 4–7: The Peeling Stage"
            },
            {
                type: "paragraph",
                text: "This is the stage most clients find mentally challenging. The brows will begin to peel and flake, and may appear patchy, lighter in areas, or seem like they're disappearing. This is entirely normal and expected — it simply means the skin is healing and the pigment is settling into the deeper layers."
            },
            {
                type: "list",
                items: [
                    "Do NOT pick, peel, or scratch the flaking skin — this removes pigment prematurely.",
                    "Let the flakes fall off naturally on their own time.",
                    "Continue applying aftercare ointment as directed.",
                    "Avoid heavy exercise or activities that cause sweating.",
                    "Keep the area away from direct sunlight."
                ]
            },
            {
                type: "heading",
                text: "Days 8–14: The Ghost Brow Stage"
            },
            {
                type: "paragraph",
                text: "Once the peeling is complete, many clients experience what's called the 'ghost brow' — the brows appear very light, almost like the colour has disappeared entirely. This is not a sign that the treatment hasn't worked. It's the skin completing its healing process, with a fresh layer of skin cells sitting over the pigment."
            },
            {
                type: "paragraph",
                text: "Over the following 2–4 weeks, the colour will gradually resurface as the skin fully heals. By week 4, you'll begin to see the true healed result emerging."
            },
            {
                type: "heading",
                text: "Weeks 4–8: The True Result"
            },
            {
                type: "paragraph",
                text: "By 4–6 weeks post-procedure, your brows are fully healed and showing their true, settled colour. This is when you attend your touch-up appointment to fill any gaps, adjust tone, and perfect the final shape. The touch-up is an essential part of the process — not an optional extra."
            },
            {
                type: "heading",
                text: "What to Avoid During Healing"
            },
            {
                type: "list",
                items: [
                    "Water, sweat, or steam on the brow area for 10 days",
                    "Makeup on or near the brows until fully healed",
                    "Sun tanning or sunbeds",
                    "Retinol, AHA, or BHA skincare products near the brow area",
                    "Facials, chemical peels, or exfoliation near the brows",
                    "Picking or peeling flaking skin"
                ]
            },
            {
                type: "callout",
                text: "Questions about your healing process? Mayuri is always available on WhatsApp to support you through every stage."
            }
        ]
    },
    {
        slug: "what-is-scalp-micropigmentation",
        title: "What Is Scalp Micropigmentation? Everything You Need to Know",
        excerpt: "SMP is transforming lives for people experiencing hair loss. Discover how this non-surgical treatment works and who it's best for.",
        date: "2024-10-20",
        readTime: "5 min",
        category: "Scalp",
        tags: [
            "scalp micropigmentation",
            "SMP",
            "hair loss",
            "hairline"
        ],
        content: [
            {
                type: "intro",
                text: "Hair loss affects millions of people across India — men and women alike. Whether it's a receding hairline, thinning crown, alopecia, or complete baldness, the emotional impact can be significant. Scalp micropigmentation (SMP) is a non-surgical cosmetic solution that has quietly become one of the most effective treatments for hair loss — producing results that are realistic, long-lasting, and life-changing."
            },
            {
                type: "heading",
                text: "What Is Scalp Micropigmentation?"
            },
            {
                type: "paragraph",
                text: "Scalp micropigmentation is a cosmetic tattooing technique where natural pigments are deposited at the epidermal level of the scalp to replicate the appearance of real hair follicles. Each tiny pigment dot mimics a closely shaved hair follicle — creating the illusion of a full, dense head of hair or a perfectly defined hairline."
            },
            {
                type: "paragraph",
                text: "Unlike a traditional tattoo, SMP uses specialised equipment and pigments specifically formulated for the scalp. The technique requires an artist with precision and an eye for natural hair patterns, as even slightly unnatural follicle placement is visible up close."
            },
            {
                type: "heading",
                text: "Who Is SMP Suitable For?"
            },
            {
                type: "list",
                items: [
                    "Men with receding hairlines or male pattern baldness",
                    "Women with thinning hair or alopecia (where SMP adds the appearance of density)",
                    "Anyone with scalp scars from surgery, accidents, or hair transplants",
                    "People with alopecia areata (patchy hair loss)",
                    "Those wanting to camouflage a hair transplant scar"
                ]
            },
            {
                type: "heading",
                text: "What Does the Treatment Involve?"
            },
            {
                type: "paragraph",
                text: "SMP is typically performed over 2–3 sessions, spaced 2–4 weeks apart. This multi-session approach allows the artist to build depth and density gradually, ensuring a completely natural result. Each session layers pigment to add realism — just as natural hair has multiple depths and tones."
            },
            {
                type: "paragraph",
                text: "Before beginning, a thorough consultation maps out the desired hairline shape, and the appropriate pigment shade is matched to your natural hair colour and skin tone. The result must look like it belongs — that's the difference between good SMP and exceptional SMP."
            },
            {
                type: "heading",
                text: "How Long Does SMP Last?"
            },
            {
                type: "paragraph",
                text: "Scalp micropigmentation lasts 3–5 years before a touch-up is needed. The longevity depends on sun exposure (UV breaks down pigment), your skincare routine, and individual skin characteristics. Protecting the scalp with SPF and moisturising regularly significantly extends the treatment's lifespan."
            },
            {
                type: "callout",
                text: "Considering SMP? Speak with Mayuri on WhatsApp for a personalised consultation and learn exactly what results to expect for your specific hair loss pattern."
            }
        ]
    },
    {
        slug: "lip-blush-indian-skin-tones",
        title: "Lip Blush for Indian Skin Tones: What to Expect",
        excerpt: "Indian skin tones require specific pigment knowledge for beautiful lip blush results. Here's what makes our approach different.",
        date: "2024-09-30",
        readTime: "4 min",
        category: "Lip Blush",
        tags: [
            "lip blush",
            "Indian skin",
            "pigmentation",
            "lip colour"
        ],
        content: [
            {
                type: "intro",
                text: "Lip blush is one of the fastest-growing permanent makeup treatments in India — and for good reason. Waking up with naturally beautiful, perfectly tinted lips every single day is transformative. But Indian skin tones require a very specific approach to achieve results that look natural rather than artificial. Here's what you need to know before booking your appointment."
            },
            {
                type: "heading",
                text: "Why Indian Skin Tones Are Different"
            },
            {
                type: "paragraph",
                text: "Indian skin tones span a beautiful spectrum — from very light to very deep — and each comes with unique characteristics that affect how pigment is absorbed, retained, and healed. Higher melanin production means pigment can heal differently than it does on lighter skin. Certain shades that look lovely on fair skin can appear muddy or unnatural on deeper tones."
            },
            {
                type: "paragraph",
                text: "Additionally, many Indian women have naturally darker lip pigmentation, which means a standard lip blush shade applied directly over dark lips will produce completely different results than expected. This is why an artist's knowledge of colour theory, pigment science, and Indian skin undertones is not optional — it's essential."
            },
            {
                type: "heading",
                text: "Colour Selection for Indian Skin"
            },
            {
                type: "paragraph",
                text: "The most flattering lip blush shades for Indian skin typically fall in the warm-neutral to warm-pink range — dusty rose, warm mauve, soft terracotta, and peachy nudes. Cool-toned pinks that look gorgeous on fairer skin can appear grey or lifeless on warmer, deeper skin tones."
            },
            {
                type: "list",
                items: [
                    "Light-medium Indian skin: Dusty rose, warm nude, baby pink, soft coral",
                    "Medium-deep Indian skin: Warm mauve, terracotta nude, deep berry",
                    "Very dark lips (hyperpigmented): Neutralisation required before any colour application",
                    "Warm undertones: Peachy, coral, and warm pink shades work beautifully",
                    "Cool undertones: Soft rose and berry shades can be flattering"
                ]
            },
            {
                type: "heading",
                text: "What to Expect During Healing"
            },
            {
                type: "paragraph",
                text: "Healing lip blush on Indian skin typically takes 4–6 weeks to fully settle. Immediately after the procedure, colour will appear 50–70% darker and more vivid than the final healed result — this is true for all skin tones but especially noticeable on Indian skin. Don't be alarmed. The pigment will fade and soften considerably."
            },
            {
                type: "paragraph",
                text: "A touch-up session at 6–8 weeks allows the artist to assess the healed result and adjust shade, saturation, or coverage as needed. This second session is where the final result is truly perfected."
            },
            {
                type: "callout",
                text: "Ready to wake up with beautiful lips every day? Book a free consultation with Mayuri to discuss the perfect shade for your skin tone."
            }
        ]
    }
];
const galleryItems = [
    {
        id: 1,
        service: "Eyebrows",
        technique: "Microblading",
        image: "/images/eye_brows_before_after.jpeg",
        type: "composite",
        alt: "Microblading before and after results — Defined MD Aesthetics Nashik"
    },
    {
        id: 2,
        service: "Lip Blush",
        technique: "Dark Neutralisation",
        beforeImage: "/images/facial_before.jpeg",
        afterImage: "/images/facial_after.jpeg",
        type: "split",
        alt: "Lip blush dark neutralisation before and after — Defined MD Aesthetics"
    },
    {
        id: 3,
        service: "Lip Blush",
        technique: "Lip Blush Treatment",
        image: "/images/lip_before_after.jpeg",
        type: "composite",
        alt: "Lip blush treatment results — Defined MD Aesthetics Nashik by Mayuri"
    },
    {
        id: 4,
        service: "Studio",
        technique: "Artist at Work",
        image: "/images/what_we_do.jpeg",
        type: "single",
        alt: "Mayuri Londhe performing permanent makeup — Defined MD Aesthetics studio Nashik"
    },
    {
        id: 5,
        service: "Studio",
        technique: "Our Work",
        image: "/images/what_we_do_2.jpeg",
        type: "single",
        alt: "Permanent makeup procedure at Defined MD Aesthetics by Mayuri — Nashik"
    }
];
const navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            {
                label: "Permanent Eyebrows",
                href: "/services/eyebrows"
            },
            {
                label: "Lip Blush",
                href: "/services/lip-blush"
            },
            {
                label: "Scalp Micropigmentation",
                href: "/services/scalp-micropigmentation"
            },
            {
                label: "Beauty Spot Making",
                href: "/services/beauty-spot"
            }
        ]
    },
    {
        label: "Gallery",
        href: "/gallery"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
}),
"[project]/components/Navbar/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileServicesOpen, setMobileServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMobileOpen(false);
        setServicesOpen(false);
    }, [
        pathname
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const isHome = pathname === "/";
    const navBg = scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8D5A3]/30" : isHome ? "bg-transparent" : "bg-[#0C3B2E]";
    const textColor = scrolled ? "text-[#0C3B2E]" : "text-[#FAF7F2]";
    const logoTextColor = scrolled ? "text-[#C9A435]" : "text-[#C9A435]";
    const activeLinkColor = scrolled ? "text-[#C9A435]" : "text-[#E8D5A3]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`,
            role: "navigation",
            "aria-label": "Main navigation",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16 md:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#C9A435]/40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/logo_aesthetics.jpeg",
                                            alt: "Defined MD Aesthetics by Mayuri Logo",
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "56px",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `hidden sm:block transition-colors duration-300 ${logoTextColor}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold leading-tight",
                                                style: {
                                                    fontFamily: "var(--font-cormorant), serif",
                                                    letterSpacing: "0.05em"
                                                },
                                                children: "Defined MD Aesthetics"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs opacity-80 leading-tight",
                                                style: {
                                                    fontFamily: "var(--font-jost), sans-serif"
                                                },
                                                children: "by Mayuri"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>item.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: dropdownRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-white/10 ${pathname.startsWith("/services") ? activeLinkColor : textColor}`,
                                                style: {
                                                    fontFamily: "var(--font-jost), sans-serif"
                                                },
                                                onClick: ()=>setServicesOpen(!servicesOpen),
                                                onMouseEnter: ()=>setServicesOpen(true),
                                                "aria-expanded": servicesOpen,
                                                "aria-haspopup": "true",
                                                children: [
                                                    item.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14,
                                                        className: `transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 95,
                                                columnNumber: 21
                                            }, this),
                                            servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8D5A3]/40 overflow-hidden z-50",
                                                onMouseLeave: ()=>setServicesOpen(false),
                                                children: item.dropdown.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: sub.href,
                                                        className: `block px-5 py-3 text-sm text-[#1A1A1A] hover:bg-[#0C3B2E] hover:text-[#C9A435] transition-all duration-200 border-b border-[#FAF7F2] last:border-0 ${pathname === sub.href ? "bg-[#0C3B2E]/5 text-[#C9A435]" : ""}`,
                                                        style: {
                                                            fontFamily: "var(--font-jost), sans-serif"
                                                        },
                                                        children: sub.label
                                                    }, sub.href, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-white/10 ${pathname === item.href ? activeLinkColor : textColor}`,
                                        style: {
                                            fontFamily: "var(--font-jost), sans-serif"
                                        },
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/918422926464",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-colors duration-200",
                                        "aria-label": "WhatsApp",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                            className: "text-[#25D366]",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "px-5 py-2 rounded-full text-sm font-semibold bg-[#C9A435] text-[#0C3B2E] hover:bg-[#E8D5A3] transition-all duration-200 shadow-sm",
                                        style: {
                                            fontFamily: "var(--font-jost), sans-serif"
                                        },
                                        children: "Book Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `lg:hidden p-2 rounded-lg transition-colors ${textColor}`,
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                "aria-label": "Toggle menu",
                                "aria-expanded": mobileOpen,
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 175,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 175,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/Navbar.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"} bg-[#0C3B2E] border-t border-[#C9A435]/20`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 space-y-1",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navItems"].map((item)=>item.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center justify-between w-full px-4 py-3 text-[#E8D5A3] text-sm font-medium rounded-xl hover:bg-white/5 transition-colors",
                                            style: {
                                                fontFamily: "var(--font-jost), sans-serif"
                                            },
                                            onClick: ()=>setMobileServicesOpen(!mobileServicesOpen),
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14,
                                                    className: `transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this),
                                        mobileServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-1 space-y-1",
                                            children: item.dropdown.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: sub.href,
                                                    className: "block px-4 py-2.5 text-[#C9A435] text-sm rounded-xl hover:bg-white/5 transition-colors",
                                                    style: {
                                                        fontFamily: "var(--font-jost), sans-serif"
                                                    },
                                                    children: sub.label
                                                }, sub.href, false, {
                                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${pathname === item.href ? "text-[#C9A435] bg-white/5" : "text-[#E8D5A3] hover:bg-white/5"}`,
                                    style: {
                                        fontFamily: "var(--font-jost), sans-serif"
                                    },
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 flex gap-3 border-t border-[#C9A435]/20 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/918422926464",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/20 text-[#25D366] text-sm font-medium flex-1 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            "WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "flex-1 text-center px-4 py-2.5 rounded-full bg-[#C9A435] text-[#0C3B2E] text-sm font-semibold",
                                        style: {
                                            fontFamily: "var(--font-jost), sans-serif"
                                        },
                                        children: "Book Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/Navbar.jsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar/Navbar.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/utils/seoConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBlogMetadata",
    ()=>buildBlogMetadata,
    "buildMetadata",
    ()=>buildMetadata,
    "getBreadcrumbSchema",
    ()=>getBreadcrumbSchema,
    "getFAQSchema",
    ()=>getFAQSchema,
    "getOrganizationSchema",
    ()=>getOrganizationSchema,
    "pageSEO",
    ()=>pageSEO,
    "siteSEO",
    ()=>siteSEO
]);
const siteSEO = {
    siteName: "Defined MD Aesthetics by Mayuri",
    shortName: "Defined Aesthetics",
    defaultTitle: "Defined MD Aesthetics by Mayuri | Permanent Makeup Studio Nashik",
    defaultDescription: "Defined MD Aesthetics by Mayuri — Premium permanent makeup studio in Nashik. Expert microblading, ombre brows, lip blush, scalp micropigmentation & beauty spot. Book your appointment today.",
    tagline: "Defined Beauty. Lasting Confidence.",
    baseUrl: "https://definedaesthetics.in",
    defaultImage: "/og-defined-aesthetics.jpg",
    locale: "en_IN",
    email: "definedaestheticsbymayuri@gmail.com",
    phone: "+918422926464",
    address: "Nashik, Maharashtra, India",
    artist: "Mayuri Londhe",
    foundingYear: "2022",
    instagram: "https://www.instagram.com/_defined_aesthetics_by_mayuri",
    whatsapp: "https://wa.me/918422926464",
    gaMeasurementId: "G-XXXXXXXXXX"
};
const pageSEO = {
    home: {
        title: "Defined MD Aesthetics by Mayuri | Best Permanent Makeup Artist Nashik",
        description: "Defined MD Aesthetics by Mayuri — Nashik's premier permanent makeup studio. Microblading, ombre brows, lip blush, scalp micropigmentation & beauty spot making by expert artist Mayuri Londhe.",
        keywords: "permanent makeup nashik, microblading nashik, lip blush nashik, ombre brows nashik, eyebrow tattoo nashik, scalp micropigmentation nashik, permanent makeup artist nashik, Mayuri Londhe",
        canonical: "/"
    },
    about: {
        title: "About Mayuri Londhe | Permanent Makeup Artist Nashik | Defined Aesthetics",
        description: "Meet Mayuri Londhe, expert permanent makeup artist at Defined MD Aesthetics. Specialising in eyebrow microblading, lip blush & scalp micropigmentation in Nashik, Maharashtra.",
        keywords: "Mayuri Londhe permanent makeup artist, about defined aesthetics nashik, PMU artist nashik",
        canonical: "/about"
    },
    services: {
        title: "Services | Permanent Makeup Treatments | Defined MD Aesthetics Nashik",
        description: "Explore all permanent makeup services at Defined MD Aesthetics: eyebrows (microblading, ombre, powder, nano), lip blush, scalp micropigmentation & beauty spots. Nashik, Maharashtra.",
        keywords: "permanent makeup services nashik, microblading services, lip blush treatment, scalp micropigmentation, beauty spot making nashik",
        canonical: "/services"
    },
    eyebrows: {
        title: "Permanent Eyebrows Nashik | Microblading, Ombre, Nano Brows | Defined Aesthetics",
        description: "Perfect your brows forever. Microblading, ombre powder brows, combination brows & nano brows by Mayuri Londhe at Defined MD Aesthetics, Nashik. Wake up with flawless brows daily.",
        keywords: "microblading nashik, ombre brows nashik, powder brows nashik, nano brows nashik, combination brows nashik, eyebrow tattoo nashik, permanent eyebrows nashik",
        canonical: "/services/eyebrows",
        h1: "Permanent Eyebrows — Nashik",
        breadcrumb: "Eyebrows"
    },
    lipBlush: {
        title: "Lip Blush Nashik | Dark Lip Neutralisation | Defined MD Aesthetics",
        description: "Lip blush & dark lip neutralisation treatments by Mayuri Londhe in Nashik. Achieve natural nude, baby rosy or bold lip colours that last. Expert lip pigmentation artist.",
        keywords: "lip blush nashik, dark lip neutralisation nashik, lip tattoo nashik, lip pigmentation nashik, nude lips treatment nashik",
        canonical: "/services/lip-blush",
        h1: "Lip Blush & Neutralisation — Nashik",
        breadcrumb: "Lip Blush"
    },
    scalp: {
        title: "Scalp Micropigmentation Nashik | SMP Hair Treatment | Defined Aesthetics",
        description: "Scalp micropigmentation (SMP) in Nashik by Defined MD Aesthetics. Non-surgical hair loss treatment, hairline restoration & density illusion for men and women.",
        keywords: "scalp micropigmentation nashik, SMP nashik, hair loss treatment nashik, hairline tattoo nashik, hair density treatment nashik",
        canonical: "/services/scalp-micropigmentation",
        h1: "Scalp Micropigmentation — Nashik",
        breadcrumb: "Scalp Micropigmentation"
    },
    beautySpot: {
        title: "Beauty Spot Making Nashik | Permanent Beauty Mark | Defined Aesthetics",
        description: "Add a timeless beauty spot with precision permanent makeup at Defined MD Aesthetics, Nashik. Subtle, elegant & lasting beauty mark placement by expert artist Mayuri Londhe.",
        keywords: "beauty spot nashik, permanent beauty mark nashik, beauty mole making nashik",
        canonical: "/services/beauty-spot",
        h1: "Beauty Spot Making — Nashik",
        breadcrumb: "Beauty Spot"
    },
    gallery: {
        title: "Gallery | Before & After Results | Defined MD Aesthetics Nashik",
        description: "View stunning before & after transformations at Defined MD Aesthetics Nashik. Real results for microblading, lip blush, scalp micropigmentation & beauty spots by Mayuri Londhe.",
        keywords: "before after microblading nashik, lip blush results nashik, permanent makeup gallery nashik, eyebrow transformation nashik",
        canonical: "/gallery"
    },
    contact: {
        title: "Contact & Book Appointment | Defined MD Aesthetics Nashik",
        description: "Book your permanent makeup appointment at Defined MD Aesthetics by Mayuri in Nashik. Call, WhatsApp or fill the inquiry form. Free consultation available.",
        keywords: "book permanent makeup appointment nashik, contact defined aesthetics, Mayuri Londhe appointment, permanent makeup consultation nashik",
        canonical: "/contact"
    },
    blog: {
        title: "Blog | Permanent Makeup Tips & Aftercare | Defined MD Aesthetics",
        description: "Expert permanent makeup tips, aftercare guides, and beauty insights from Defined MD Aesthetics by Mayuri. Learn about microblading, lip blush, and scalp micropigmentation.",
        keywords: "permanent makeup blog, microblading aftercare, lip blush tips, scalp micropigmentation guide",
        canonical: "/blog"
    }
};
function buildMetadata(pageKey) {
    const seo = pageSEO[pageKey] || pageSEO.home;
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
            canonical: `${siteSEO.baseUrl}${seo.canonical}`
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: `${siteSEO.baseUrl}${seo.canonical}`,
            siteName: siteSEO.siteName,
            locale: siteSEO.locale,
            type: "website",
            images: [
                {
                    url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
                    width: 1200,
                    height: 630,
                    alt: seo.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            images: [
                `${siteSEO.baseUrl}${siteSEO.defaultImage}`
            ]
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large"
            }
        }
    };
}
function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": [
            "LocalBusiness",
            "BeautySalon"
        ],
        name: siteSEO.siteName,
        image: `${siteSEO.baseUrl}/images/logo_aesthetics.jpeg`,
        "@id": siteSEO.baseUrl,
        url: siteSEO.baseUrl,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        description: siteSEO.defaultDescription,
        priceRange: "₹₹",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Nashik",
            addressRegion: "Maharashtra",
            addressCountry: "IN"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 19.9975,
            longitude: 73.7898
        },
        sameAs: [
            siteSEO.instagram
        ],
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                opens: "10:00",
                closes: "19:00"
            }
        ],
        founder: {
            "@type": "Person",
            name: siteSEO.artist
        }
    };
}
function getFAQSchema(faqs) {
    return {
        "@type": "FAQPage",
        mainEntity: faqs.map((f)=>({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer
                }
            }))
    };
}
function buildBlogMetadata(post) {
    const title = `${post.title} | Defined MD Aesthetics Blog`;
    const description = post.excerpt;
    return {
        title,
        description,
        keywords: post.tags ? post.tags.join(", ") : siteSEO.defaultTitle,
        alternates: {
            canonical: `${siteSEO.baseUrl}/blog/${post.slug}`
        },
        openGraph: {
            title,
            description,
            url: `${siteSEO.baseUrl}/blog/${post.slug}`,
            siteName: siteSEO.siteName,
            locale: siteSEO.locale,
            type: "article",
            publishedTime: post.date,
            authors: [
                siteSEO.artist
            ],
            images: [
                {
                    url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                `${siteSEO.baseUrl}${siteSEO.defaultImage}`
            ]
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large"
            }
        }
    };
}
function getBreadcrumbSchema(items) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i)=>({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                item: `${siteSEO.baseUrl}${item.href}`
            }))
    };
}
}),
"[project]/components/common/FloatingButtons.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$seoConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/seoConfig.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FloatingButtons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$seoConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteSEO"].whatsapp,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Chat on WhatsApp",
                className: "fixed bottom-6 right-6 z-50 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-pulse-ring"
                    }, void 0, false, {
                        fileName: "[project]/components/common/FloatingButtons.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg group-hover:scale-110 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/components/common/FloatingButtons.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/FloatingButtons.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
                        children: "Chat with us"
                    }, void 0, false, {
                        fileName: "[project]/components/common/FloatingButtons.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/FloatingButtons.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$seoConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteSEO"].phone}`,
                "aria-label": "Call us",
                className: "fixed bottom-6 left-6 z-50 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300",
                        style: {
                            background: "var(--gold)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            size: 22,
                            color: "#0C3B2E",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/components/common/FloatingButtons.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/FloatingButtons.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-16 top-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
                        style: {
                            background: "var(--dark)"
                        },
                        children: "Call Mayuri"
                    }, void 0, false, {
                        fileName: "[project]/components/common/FloatingButtons.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/FloatingButtons.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a1d6a524._.js.map