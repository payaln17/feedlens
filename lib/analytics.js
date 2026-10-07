export const percentage = (value, total = 14) => {
  return Math.round((value / total) * 100);
};

export const surveyStats = {
  algorithmAwareness: 71,
  frequentSimilarity: 57,
  interestChange: 57,
  misinformationExposure: 86,
  opinionInfluence: 24,
  increasedUsageImpact: 43,
};