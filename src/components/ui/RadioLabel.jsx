import React from 'react';

// withSpan 속성을 추가하여 span 태그를 온오프 함
const RadioLabel = ({ name, value, checked, onChange, label, withSpan }) => (
  <label className="mr20">
    <input
      type="radio"
      className="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange} 
    />
    <em></em>
    {withSpan ? <span>{label}</span> : null}  
  </label>
  
);

export default RadioLabel;