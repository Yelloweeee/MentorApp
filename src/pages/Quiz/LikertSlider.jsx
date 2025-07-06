import React from 'react';
import './LikertSlider.css';

const LikertSlider = ({ question, index, value, onChange }) => (
  <div className="w-full max-w-xl mb-4 rounded-lg border-2 border-gray-300 bg-white p-5 shadow-md">
    <p className="mb-3 font-semibold">{question}</p>

    <input
      type="range"
      min="1"
      max="7"
      step="0.1"
      value={value}
      onChange={(e) => onChange(index, parseFloat(e.target.value))}
      className="slider w-full"
    />
  </div>
);


export default LikertSlider;
