// app/data/blogs.js
// Central blog data — add new blogs here and they auto-appear on listing + detail pages.

export const blogs = [
  {
    slug: "its-okay-not-to-be-okay",
    title: "It's Okay Not To Be Okay",
    thumbnail: "/blogs/blog1.jpeg",
    category: "Emotional Wellness",
    readTime: "4 min read",
    date: "2026-02-28",
    author: {
      name: "Rachna Saxena",
      role: "Pursuing M.A. in Clinical Psychology",
      tagline: "Your Friendly Neighbourhood Psychologist",
      linkedin: "https://www.linkedin.com/in/rachna-saxena-388avv",
    },
    excerpt:
      "Life is never the same — some days we're on top of the moon and some days we want to cancel all plans. The truth is, it's actually okay to feel so.",
    content: [
      {
        type: "paragraph",
        text: 'When I say "it\'s okay not to be okay", I\'m not talking about the series (though yes, it was great too). I mean the real life — the messy and tough, annoying but beautiful parts of our lives.',
      },
      {
        type: "paragraph",
        text: "Life is never the same — some days we're on the top of the moon and some days we want to cancel all plans and become a couch potato. And the truth is, it's actually okay to feel so.",
      },
      {
        type: "highlight",
        text: "You're allowed to feel stuff. Happy, angry, sad, frustrated, elated and everything else... feelings don't make us weak, they make us human.",
      },
      {
        type: "paragraph",
        text: "Here's the truth: We all have things we love and the things we hate, and sometimes we even hate the things we love. But guess what — you're allowed to feel stuff. Happy, angry, sad, frustrated, elated and everything else... feelings don't make us weak, they make us human.",
      },
      {
        type: "subheading",
        text: "Why Pretending Hurts More Than It Helps",
      },
      {
        type: "paragraph",
        text: "Pretending to be OKAY is tiring and exhausting. Pushing feelings down only makes them louder later. Asking for help makes you strong. Healing isn't linear... sometimes you heal, then un-heal and then heal again — it's still progress.",
      },
      {
        type: "subheading",
        text: "What Psychology Says",
      },
      {
        type: "paragraph",
        text: "Psychology talks about this too. When we suppress emotions, they don't just disappear. Research shows they often come back stronger — in the form of anxiety, burnout, physical symptoms, or emotional numbness. While simply acknowledging what we feel helps us regulate our nervous system and reduces emotional overwhelm.",
      },
      {
        type: "highlight",
        text: "Instead of focusing on \"what's wrong\", start thinking \"what do I need right now?\" That shift won't fix everything, but it will help you become kinder to yourself.",
      },
      {
        type: "subheading",
        text: "A Personal Turning Point",
      },
      {
        type: "paragraph",
        text: "For me, learning that it's okay not to be okay was a turning point. It helped me stop forcing myself to push through on hard days and fighting myself to put up a strong front. Instead of focusing on \"what's wrong\", I started thinking \"what do I need right now?\" That shift wasn't a miracle that fixed everything, but it helped me become kinder to myself. That kindness made healing feel possible, even on days when progress looked messy or invisible.",
      },
      {
        type: "paragraph",
        text: "So today, if you're simply surviving more than thriving, it still counts. You don't have to fix yourself before you're worthy of care. Let's just be honest with ourselves first.",
      },
      {
        type: "callout",
        text: "How are you feeling today — not the polite answer, the real one?",
      },
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) || null;
}

export function getAllSlugs() {
  return blogs.map((b) => b.slug);
}
