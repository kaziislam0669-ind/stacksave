export const pricingData = {
  ChatGPT: {
    monthlyPrice: 20,
    category: "general",
    alternatives: ["Claude", "Gemini"],
  },

  Claude: {
    monthlyPrice: 20,
    category: "research",
    alternatives: ["ChatGPT", "Gemini"],
  },

  Cursor: {
    monthlyPrice: 20,
    category: "coding",
    alternatives: ["Copilot"],
  },

  Copilot: {
    monthlyPrice: 10,
    category: "coding",
    alternatives: ["Cursor"],
  },

  Gemini: {
    monthlyPrice: 0,
    category: "general",
    alternatives: ["ChatGPT"],
  },
};