// app/services/[category]/[slug]/page.jsx
export default function ServiceDetail({ params }) {
    const { category, slug } = params;
    const title = slug.replace(/-/g, " ");
  
    // SEO-friendly detailed descriptions for each service
    const serviceDetails = {
      "family-counselling": "Counselling is a professional practice that involves providing guidance, support, and advice to individuals or groups facing personal, emotional, psychological, or social challenges. At our centre, Family Counselling offers a safe, confidential, and empathetic environment where families can address conflicts, improve communication, and build stronger relationships. Our experienced counsellors help families navigate complex issues, ensuring improved well-being and long-term harmony.",
      "personal-counselling": "Personal Counselling is designed to help individuals overcome personal challenges and emotional distress. Our expert counsellors provide tailored guidance to help you understand your emotions, develop effective coping strategies, and foster personal growth. Experience a supportive atmosphere that prioritizes your mental health and long-term success.",
      "couple-counselling": "Couple Counselling is dedicated to helping partners enhance communication, resolve conflicts, and rebuild trust. Our seasoned professionals offer compassionate support and evidence-based strategies to strengthen your relationship. Discover how our tailored approach can foster a more harmonious and fulfilling partnership.",
      "pre-marital-counselling": "Pre-Marital Counselling prepares couples for a successful marriage by addressing potential challenges early on. Our experienced counsellors provide practical advice and effective communication techniques to ensure both partners are fully prepared for the commitments of marriage. Build a strong foundation for your future together with our expert guidance.",
      "career-counselling": "Career Counselling is aimed at guiding individuals through professional transitions and helping you make informed career choices. Our services provide in-depth insights into your strengths and interests, enabling you to identify ideal career paths and overcome workplace challenges for long-term success.",
      "educational-counselling": "Educational Counselling offers personalized advice to help students and professionals choose the right academic and career paths. Our experienced counsellors assist you in identifying your strengths and aligning them with suitable opportunities, ensuring you make informed decisions that pave the way for future achievements.",
      "group-counselling": "Group Counselling provides a supportive environment where individuals can share experiences, learn from one another, and work together toward healing. Facilitated by seasoned professionals, our group sessions focus on building mutual understanding, emotional resilience, and collective growth.",
      "addiction-counselling": "Addiction Counselling is committed to supporting individuals on their journey to recovery. Our expert counsellors combine evidence-based strategies with compassionate support to help you overcome substance abuse and behavioral addictions, empowering you to regain control of your life.",
      "relationship-counselling": "Relationship Counselling addresses interpersonal challenges by offering professional guidance to improve communication and resolve conflicts. Our tailored approach helps rebuild trust and enhance the quality of your relationships, ensuring a healthier and more balanced personal life.",
      "online-counselling": "Online Counselling provides accessible, secure, and confidential support for individuals facing emotional or psychological challenges. Delivered through digital platforms, our services offer flexible scheduling and expert guidance, ensuring you receive professional care wherever you are.",
      "psychotherapy": "Psychotherapy is a structured treatment method designed to help individuals overcome mental health challenges through in-depth, confidential sessions with a trained therapist. Our psychotherapy services provide a supportive environment to explore emotions, resolve conflicts, and promote transformative personal growth.",
      "cognitive-behavioural-therapy": "Cognitive Behavioural Therapy (CBT) is a goal-oriented, evidence-based approach that helps you identify and change negative thought patterns and behaviors. Our expert therapists use CBT techniques to empower you with practical tools, effectively managing anxiety, depression, and other mental health challenges.",
      "gestalt-therapy": "Gestalt Therapy focuses on the here-and-now experience, helping you gain a deeper awareness of your feelings and behaviors. Our approach encourages personal responsibility and holistic healing, paving the way for enhanced self-acceptance and lasting personal growth.",
      "couple-therapy": "Couple Therapy is designed to help partners resolve conflicts and strengthen their bond through improved communication and mutual understanding. Our experienced therapists provide a nurturing space to address issues and rebuild trust, setting the stage for a more balanced and loving relationship.",
      "sex-therapy": "Sex Therapy offers a safe, non-judgmental environment to address sexual health concerns and intimacy issues. Our specialized therapists work with you to overcome challenges, improve sexual well-being, and cultivate a more satisfying and confident intimate life.",
      "colour-therapy": "Colour Therapy leverages the psychological impact of colours to promote healing and balance. Our innovative approach uses colour interventions to reduce stress, boost positive energy, and support overall mental and physical well-being in a uniquely holistic manner.",
      "hypnotherapy": "Hypnotherapy uses guided relaxation and focused attention to help you access your subconscious mind. Our certified hypnotherapists work with you to overcome challenges, change undesired behaviors, and foster a healthier mindset through proven therapeutic techniques.",
      "psychological-consultation": "Our Psychological Consultation service provides expert guidance for individuals facing mental health challenges. We offer personalized insights and strategies designed to boost emotional well-being and promote sustainable mental health improvements.",
      "psychological-assessment": "Our Psychological Assessment service delivers comprehensive evaluations of cognitive, emotional, and behavioral functioning. Through detailed assessments, we identify strengths and areas for improvement to inform targeted therapeutic interventions.",
      "counselling-and-psychotherapy": "Counselling and Psychotherapy combine compassionate support with evidence-based therapeutic techniques to help you overcome emotional challenges. This integrated approach fosters personal growth, resilience, and lasting mental wellness.",
      "occupational-therapy-speech-therapy": "Occupational Therapy & Speech Therapy services are tailored to enhance daily functioning and communication skills. Our specialized programs are designed to support improved quality of life through targeted, client-centered interventions.",
      "applied-behaviour-analysis-behaviour-modification": "Our Applied Behaviour Analysis & Behaviour Modification service utilizes data-driven techniques to understand and modify challenging behaviors. We empower clients with strategies for positive change and improved emotional regulation.",
      "remedial-education": "Remedial Education provides specialized instruction to help individuals overcome learning difficulties. Our targeted educational support reinforces core skills and enhances academic performance for lasting success.",
      "homeopathic-consultation": "Our Homeopathic Consultation offers a holistic, natural approach to health and well-being. Using individualized remedies, we work to restore balance and support your body's innate healing processes.",
      "nutrition-consultation": "Nutrition Consultation focuses on developing personalized dietary strategies to optimize health. Our experts provide guidance on balanced nutrition, aiming to improve energy levels, overall wellness, and long-term vitality.",
      "mindfulness-stress-management": "Mindfulness & Stress Management services teach effective techniques for reducing stress and cultivating mindfulness. Our approach helps you develop resilience, achieve balance, and maintain mental clarity in everyday life.",
      "wellness-coaching": "Wellness Coaching offers personalized support to help you set and achieve your health goals. Our coaches work with you to create sustainable lifestyle changes that enhance physical, mental, and emotional well-being."
    };
  
    const description =
      serviceDetails[slug] ||
      `Discover comprehensive insights about ${title} under our ${category} services. Our expert guidance and tailored solutions are designed to enhance your well-being and support lasting positive change.`;
  
    return (
      <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold capitalize">
          {title} <span className="text-sm font-normal text-gray-600">({category})</span>
        </h1>
        <p className="mt-6 text-gray-700 leading-relaxed">{description}</p>
      </div>
    );
  }
  