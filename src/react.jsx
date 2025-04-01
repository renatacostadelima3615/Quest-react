import React from 'react';

// Componente ColoredUppercaseText
export function ColoredUppercaseText({ text, color }) {
  const style = { color, textTransform: 'uppercase' };
  return <p style={style}>{text}</p>;
}

// Componente Button
export function Button({ label }) {
  const handleClick = () => {
    alert(`A label desse botão é: ${label}`);
  };

  return <button onClick={handleClick}>{label}</button>;
}
  