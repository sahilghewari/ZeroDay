import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "Nov 25, 2025",
      content: (
        <div>
          <p className="text-white font-semibold">Registration Opens</p>
          <p className="text-gray-300 text-sm">Open to all teams interested in competing.</p>
        </div>
      ),
    },
    {
      title: "Dec 1, 2025",
      content: (
        <div>
          <p className="text-white font-semibold">Problem Statements Released</p>
          <p className="text-gray-300 text-sm">Get access to official challenges and choose yours.</p>
        </div>
      ),
    },
    {
      title: "Dec 15, 2025",
      content: (
        <div>
          <p className="text-white font-semibold">Final Date for Problem Statement Submission</p>
          <p className="text-gray-300 text-sm">Submit your project proposal and solution overview.</p>
        </div>
      ),
    },
    {
      title: "Dec 16, 2025",
      content: (
        <div>
          <p className="text-white font-semibold">Top 50 Teams Announced</p>
          <p className="text-gray-300 text-sm">Shortlisted teams selected for offline hackathon.</p>
        </div>
      ),
    },
    {
      title: "Dec 17-21, 2025",
      content: (
        <div>
          <p className="text-white font-semibold">Participant Formalities & Logistics</p>
          <p className="text-gray-300 text-sm">Complete registrations, payments, accommodation, and briefings.</p>
        </div>
      ),
    },
    {
      title: "Dec 25, 2025 (8:00 AM - 9:00 AM)",
      content: (
        <div>
          <p className="text-white font-semibold">Team Check-In (On-Site)</p>
          <p className="text-gray-300 text-sm">Arrive early, complete registration and setup.</p>
        </div>
      ),
    },
    {
      title: "Dec 25, 2025 (9:00 AM - 10:00 AM)",
      content: (
        <div>
          <p className="text-white font-semibold">Opening Ceremony & Event Kickoff</p>
          <p className="text-gray-300 text-sm">Welcome addresses, mentor introductions, rules briefing.</p>
        </div>
      ),
    },
    {
      title: "Dec 25, 2025 (10:00 AM)",
      content: (
        <div>
          <p className="text-white font-semibold">24-Hour Hacking Sprint Starts</p>
          <p className="text-gray-300 text-sm">The clock starts ticking — build your best solution!</p>
        </div>
      ),
    },
    {
      title: "Dec 26, 2025 (10:00 AM)",
      content: (
        <div>
          <p className="text-white font-semibold">Hacking Sprint Ends & Submission Closes</p>
          <p className="text-gray-300 text-sm">Final chance to polish and submit your project.</p>
        </div>
      ),
    },
    {
      title: "Dec 26, 2025 (2:00 PM - 5:00 PM)",
      content: (
        <div>
          <p className="text-white font-semibold">Presentations by Top Teams</p>
          <p className="text-gray-300 text-sm">Top 5 teams from each category present to judges.</p>
        </div>
      ),
    },
    {
      title: "Dec 26, 2025 (After Presentations)",
      content: (
        <div>
          <p className="text-white font-semibold">Winners Announced & Awards Ceremony</p>
          <p className="text-gray-300 text-sm">Celebrate achievements and network with mentors and sponsors.</p>
        </div>
      ),
    },
  ];
  return (
    <section id="timeline" className="min-h-screen w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </section>
  );
}
