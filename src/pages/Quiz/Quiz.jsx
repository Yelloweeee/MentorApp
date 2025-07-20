import React, { useState } from "react";
import LikertSlider from "./LikertSlider"; // import the component
import "./Quiz.css";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";


const db = getFirestore(app);
const auth = getAuth(app);

const questions = [
  "You enjoy connecting ideas across unrelated subjects.",
  "You prefer solving problems with logical steps instead of thinking 'outside the box.'",
  "You like to mentally simulate a situation before you deal with it.",
  "You often re-read or review material multiple times, even if you understood it earlier.",
  "You usually find shortcuts or smart ways to learn faster.",
  "You make detailed notes to review later.",
  "You rely more on persistence than natural intelligence.",
  "You tend to analyze what went wrong when you make mistakes.",
  "You often find myself studying at the last minute — and it works for you.",
  "You try to find the easiest or smartest way to learn something new.",
  "You like to use metaphors or stories to understand difficult topics.",
  "You tend to jump into studying without much preparation.",
  "You often visualize concepts in creative ways to understand them.",
  "You prefer quick understanding over thorough repetition.",
  "You act quickly under pressure and fix things on the fly.",
  "You like to pause and think before solving a problem.",
  "You perform best when you can take your time and review.",
  "You prefer step-by-step explanations over open-ended brainstorming.",
  "You believe success mostly comes from putting in consistent hours.",
  "You usually decide how to study based on how you feel in the moment.",
  "You feel more productive when you follow a clear study structure.",
  "You enjoy making visual diagrams or mind maps from what You learn.",
  "You regularly check my progress against a timeline or schedule.",
  "You rely on breaking problems into rules and categories.",
  "You prefer to plan my study schedule days in advance.",
  "You prefer to take action quickly and revise later if needed.",
  "You often come up with unusual or original ideas while studying.",
  "You like to use diagrams or sketches when studying.",
  "You get overwhelmed by rigid plans and prefer to go with the flow.",
  "You rely on intuition more than analysis in time-sensitive tasks.",
  "You often study longer than others to feel confident.",
  "You feel anxious when you don't have a clear plan.",
  "You rely more on visual memory than verbal memory.",
  "You often write to-do lists or goals before starting a study session.",
  "You think using my imagination helps you remember things more easily.",
  "You often trust my first instinct in tests or problem-solving.",
  "You value consistency in study more than cramming smartly.",
  "You like to study alone rather than in groups.",
  "You rely more on visual memory than verbal memory.",
  "You like to pause and reflect before making a decision.",
];

const PersonalityTest = () => {
  const [responses, setResponses] = useState(Array(questions.length).fill(4)); // default to neutral
  const navigate=useNavigate();

  const handleSliderChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  
  
  
  // After submit btn
  const saveResponsesToFirestore = async () => {
   
  const user = auth.currentUser;
  if (!user) {
    alert("User not signed in!");
    return;
  }

  const quizRef = doc(db, "users", user.uid, "quiz", "response");

  const dataToSave = {
    responses,
    submittedAt: new Date(),
  };

  try {
    await setDoc(quizRef, dataToSave);
    alert("Quiz saved in subcollection!");
  } catch (error) {
    console.error("Error:", error.message);
  
    alert("Error saving to Firestore.");
    return ;

  }

navigate('/HomePage')

};


  return (
<div className="container">
    <div className="quiz">
      
      <h2>On a scale of strongly disagree to strongly agree,</h2>

      {questions.map((q, i) => (
        <div className="card">
        <LikertSlider
          key={i}
          question={q}
          index={i}
          value={responses[i]}
          onChange={handleSliderChange}
        />
        </div>
      ))}
      
    </div>
    <button className="submit-btn" onClick={saveResponsesToFirestore}>
       Submit
    </button>

    </div>
  );
};

export default PersonalityTest;
