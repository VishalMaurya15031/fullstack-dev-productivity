export const icMetrics = {
  developerName: "Alex Mercer",
  role: "Senior Frontend Engineer",
  period: "October 2023",
  metrics: [
    {
      id: "lead_time",
      title: "Lead Time for Changes",
      value: "1.2 days",
      trend: "-0.5 days",
      trendStatus: "positive",
      description: "Average time from PR opened to successful production deployment.",
      interpretation: "Your lead time is very low, indicating that once you open a PR, it is reviewed and deployed quickly. Your team's CI/CD pipeline and review processes are healthy.",
      nextSteps: [
        "Keep PRs small and focused to maintain this speed.",
        "Consider helping teammates who have higher lead times by reviewing their PRs."
      ]
    },
    {
      id: "cycle_time",
      title: "Cycle Time",
      value: "5.4 days",
      trend: "+1.2 days",
      trendStatus: "warning",
      description: "Average time from issue moved to In Progress to issue marked Done.",
      interpretation: "Cycle time is significantly longer than lead time. This suggests work is sitting in 'In Progress' for several days before a PR is even opened.",
      nextSteps: [
        "Break down Jira tickets into smaller tasks.",
        "Ensure requirements are fully clear before moving a ticket to In Progress."
      ]
    },
    {
      id: "bug_rate",
      title: "Bug Rate",
      value: "8%",
      trend: "+3%",
      trendStatus: "warning",
      description: "Escaped production bugs found in the month divided by issues completed in the month.",
      interpretation: "Bug rate has slightly increased. While you are shipping fast, some edge cases might be slipping through to production.",
      nextSteps: [
        "Add unit tests for edge cases before opening a PR.",
        "Request a deeper code review for complex logic."
      ]
    },
    {
      id: "deploy_freq",
      title: "Deployment Frequency",
      value: "14",
      unit: "/ month",
      trend: "+2",
      trendStatus: "positive",
      description: "Count of successful production deployments in the month.",
      interpretation: "Excellent deployment frequency. You are consistently shipping value to users in small, manageable chunks.",
      nextSteps: [
        "Maintain current batch sizes.",
        "Look into automating any manual steps left in your deployment pipeline."
      ]
    },
    {
      id: "pr_throughput",
      title: "PR Throughput",
      value: "22",
      unit: "PRs",
      trend: "+5",
      trendStatus: "positive",
      description: "Count of merged pull requests in the month.",
      interpretation: "High PR throughput shows you are actively contributing and unblocking work.",
      nextSteps: [
        "Ensure quality isn't compromised for volume.",
        "Share your efficient workflow practices with the team."
      ]
    }
  ]
};

export const managerMetrics = {
  teamName: "Frontend Platform Team",
  period: "October 2023",
  teamHealth: "Healthy, slightly strained",
  summaryMetrics: [
    {
      id: "lead_time_team",
      title: "Avg Lead Time",
      value: "2.5 days",
      trend: "-0.2 days",
      trendStatus: "positive"
    },
    {
      id: "cycle_time_team",
      title: "Avg Cycle Time",
      value: "7.1 days",
      trend: "+0.8 days",
      trendStatus: "warning"
    },
    {
      id: "bug_rate_team",
      title: "Team Bug Rate",
      value: "12%",
      trend: "-2%",
      trendStatus: "positive"
    },
    {
      id: "deploy_freq_team",
      title: "Deployments",
      value: "45",
      trend: "+10",
      trendStatus: "positive"
    },
    {
      id: "pr_throughput_team",
      title: "PR Throughput",
      value: "85",
      trend: "+12",
      trendStatus: "positive"
    }
  ],
  insights: [
    "The team is deploying more frequently, which is a great sign of agility.",
    "Cycle time is creeping up; developers might be taking on tickets that are too large or poorly defined.",
    "Bug rate is decreasing, showing the recent push for automated testing is paying off."
  ],
  actionItems: [
    "Hold a backlog grooming session to ensure tickets are properly scoped.",
    "Review the 'In Progress' column in the board to identify bottlenecks.",
    "Celebrate the improved deployment frequency in the next all-hands."
  ]
};
