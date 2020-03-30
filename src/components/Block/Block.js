import React from 'react';

const Block = props => {
  const { label, data, processor } = props;
  if (!data) return null;

  const items = processor(data);

  return (
    <div className="block">
      <h2>{label}</h2>
      <ul className="list">
        {items.map(item => {
          const { key, label, value } = item;
          return (
            <li key={key}>
              <span className="label">{label}</span>
              <span className="value">{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Block;
