export const pricingPlans = [
  {
    id: 1,
    tier: "Tier 1",
    label: "Free Forever",
    price: "Free Forever",
    description:
      "Kickstart hiring with free tools to engage your hiring team and streamline recruitment.",
    features_heading: "(Currently Used)",
    features: [
      { text: "Manage Recruiter" },
      { text: "Manage Panel" },
      { text: "Doc Vault" },
      { text: "Job Post" },
    ],
    buttonText: "Continue",
  },
  {
    id: 2,
    tier: "Tier 2",
    label: "Standard",
    price: "36,000",
    description:
      "Unlock features to reduce candidate drop-offs and uncover candidate sentiment.",
    features_heading: "(Everything in Tier 1 +)",
    features: [
      {
        text: "Pix Vault",
        description:
          "Upload Company Logos and Photos to Personalize your Offer with Branded images",
      },
      {
        text: "Feature Employer",
        description:
          "Gain exclusive Featured Employer status and enjoy all the benefits of enhanced visibility, a reinforced employer brand, and superior hiring outcomes",
      },
      {
        text: "Hiring Pipeline",
        description:
          "Quickly identify active and stalled positions in your pipeline, providing you with a clear overview of your current hiring status",
      },
      {
        text: "Interview No-Show Prediction",
        description:
          "Predict potential no-shows 20% early and optimize your schedules",
      },
      {
        text: "Offer No-Show Prediction",
        description:
          "Predict potential no-shows 20% early and optimize your Onboarding",
      },
      {
        text: "EC Insights",
        description:
          "Gain unrivalled visibility into your hiring data, from active positions to schedules and offers across various timelines",
      },
      {
        text: "Job Post",
        description:
          "Post 25 Jobs (Web & App).  you can see the status of your job posts in Organization Dashboard",
      },
    ],
    buttonText: "Request for Quote",
  },
  {
    id: 3,
    tier: "Tier 3",
    label: "Premium",
    price: "56,000",
    description:
      "Supercharge your hiring with premium tools, deep analytics, and executive dashboards.",
    features_heading: "(Everything in Tier 2 +)",
    features: [
      {
        text: "Vid Vault",
        description:
          "Upload custom welcome videos to engage and excite new hires using your Media Library",
      },
      {
        text: "Interview No-Show Prediction",
        description:
          "Predict potential no-shows 40% early and optimize your schedules",
      },
      {
        text: "Offer No-Show Prediction",
        description:
          "Predict potential no-shows 40% early and optimize your Onboarding",
      },
      {
        text: "Hiring Explorer",
        description:
          "Gain unparalleled behavioural insights into your recruiters, interview panel, and candidates at various stages of the hiring process",
      },
      {
        text: "C360",
        description:
          "Gain Unparalleled Control and Customize Candidate Feedback templates to Shape a Personalized and reflective Candidate experience",
      },
      {
        text: "C Suite",
        description:
          "Gain exclusive Featured Employer status and enjoy all the benefits of enhanced visibility, a reinforced employer brand, and superior hiring outcomes",
      },
      {
        text: "Job Post ",
        description:
          "Post 100 Jobs (Web & App).  you can see the status of your job posts in Organization Dashboard",
      },
    ],
    buttonText: "Request for Quote",
  },
];

export const comparisonData = [
  {
    id: 1,
    services: [
      { service: "Job Post", tiers: [true, true, true] },
      { service: "Panel Access", tiers: [true, true, true] },
      { service: "Recruiter Management", tiers: [true, true, true] },
    ],
  },

  {
    id: 2,
    service_heading: "Vault",
    services: [
      { service: "Doc Vault", tiers: [true, true, true] },
      { service: "Pix Vault", tiers: [false, true, true] },
      { service: "Vid Vault", tiers: [false, false, true] },
    ],
  },
  {
    id: 3,
    service_heading: "Hiring Pipeline",
    services: [
      { service: "Active Pipeline", tiers: [false, true, true] },
      { service: "Inactive Pipeline", tiers: [false, true, true] },
    ],
  },
  {
    id: 4,
    service_heading: "No-Show Prediction",
    services: [
      {
        service: "Interview No-Show Prediction (20%)",
        tiers: [false, true, true],
      },
      { service: "Offer No-Show Prediction (20%)", tiers: [false, true, true] },
      {
        service: "Interview No-Show Prediction (40%)",
        tiers: [false, false, true],
      },
      {
        service: "Offer No-Show Prediction (40%)",
        tiers: [false, false, true],
      },
    ],
  },
  {
    id: 5,
    service_heading: "Feature Employer",
    services: [{ service: "Feature Employer", tiers: [false, true, true] }],
  },
  {
    id: 6,
    service_heading: "EC Insights",
    services: [
      { service: "Hiring Velocity Insights", tiers: [false, true, true] },
    ],
  },
  {
    id: 7,
    service_heading: "Hiring Explorer",
    services: [
      { service: "Interview Explorer", tiers: [false, false, true] },
      { service: "Offer Explorer", tiers: [false, false, true] },
    ],
  },
  {
    id: 8,
    service_heading: "C 360 Templates",
    services: [
      { service: "Resume Templates", tiers: [false, false, true] },
      { service: "Interview Templates", tiers: [false, false, true] },
      { service: "Schedule Templates", tiers: [false, false, true] },
      { service: "Offer Templates", tiers: [false, false, true] },
      { service: "Other Templates", tiers: [false, false, true] },
    ],
  },
  {
    id: 9,
    service_heading: "C Suite",
    services: [
      { service: "Target Affecting Bottlenecks", tiers: [false, false, true] },
      {
        service: "Recommendation to Reach Target",
        tiers: [false, false, true],
      },
    ],
  },
];
