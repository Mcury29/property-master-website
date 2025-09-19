// Founders page data structure
export const FOUNDER_DATA = {
  companyName: "Property Masters",
  founder: {
    fullName: "FIRST LAST", // To be updated with actual founder name
    title: "Founder & Managing Partner",
    location: "Sherwood Park, Alberta",
    shortPitch: "Building lasting partnerships through comprehensive commercial property management and expert real estate solutions.",
    bioParagraphs: [
      "With over 25 years of experience in commercial real estate and property management, [Name] founded Property Masters to provide comprehensive solutions for property owners and businesses across Edmonton and Sherwood Park. Starting with a vision to transform how commercial properties are managed and maintained, [he/she] has built a reputation for reliability, expertise, and exceptional client service.",
      "Under [his/her] leadership, Property Masters has successfully managed dozens of commercial properties, facilitated numerous successful leases, and maintained an exceptional track record of tenant satisfaction. [His/Her] hands-on approach and deep understanding of the local market have made Property Masters a trusted name in Alberta's commercial real estate sector.",
      "Committed to building long-term relationships, [Name] believes that successful property management goes beyond basic maintenance—it's about creating value, ensuring tenant satisfaction, and protecting property investments. When not managing properties, [he/she] enjoys spending time with family and giving back to the Sherwood Park community."
    ],
    highlights: [
      "25+ years commercial real estate experience",
      "Expert property management across office, retail, and mixed-use",
      "Licensed and insured with trusted vendor network across Alberta"
    ],
    contact: {
      email: "hello@propertymasters.ca",
      phone: "(780) 555-0100", // To be updated with actual phone
      linkedin: "https://www.linkedin.com/in/USERNAME" // To be updated with actual LinkedIn
    },
    headshot: {
      fileName: "founder-headshot.webp",
      alt: "Portrait of [Name], Founder of Property Masters"
    }
  }
};

export type FounderData = typeof FOUNDER_DATA;