import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    text: "Welcome to Prefrontal Cortex. Let’s begin a 90-minute cycle. Start by watching a 15-minute timer video.",
    action: {
      label: "Open 15-Min Timer",
      url: "https://www.youtube.com/watch?v=5uH4djgYbZg",
    },
  },
  {
    id: 2,
    text: "Now, start a 10-minute timer in a new tab.",
    action: {
      label: "Start 10-Min Timer",
      url: "https://www.google.com/search?q=10+minute+timer",
    },
  },
  {
    id: 3,
    text: "Choose a week or topic from your course."
  },
  {
    id: 4,
    text: "Open your notes if you have any."
  },
  {
    id: 5,
    text: "Open the slideshow for that topic."
  },
  {
    id: 6,
    text: "Highlight or list what you're confident about or confused by."
  },
  {
    id: 7,
    text: "Decide what actions would reinforce your learning best."
  },
  {
    id: 8,
    text: "Set goals for the next hour based on your decision."
  },
  {
    id: 9,
    text: "Choose your study rhythm: Pomodoro, 40/20, or 1-hour session."
  },
  {
    id: 10,
    text: "Write down a small reward for yourself after this session."
  },
];

export default function PrefrontalCortex() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 text-center"
      >
        <h1 className="text-2xl font-semibold text-emerald-900 mb-4">
          Step {stepIndex + 1} of {steps.length}
        </h1>
        <p className="text-lg text-emerald-800 mb-6">{step.text}</p>
        {step.action && (
          <a
            href={step.action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
          >
            {step.action.label}
          </a>
        )}
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600"
        >
          Next
        </button>
      </motion.div>
    </div>
  );
}