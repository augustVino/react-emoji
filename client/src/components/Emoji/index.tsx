import React from 'react';
import { Emotions } from './Emotions';
import './index.less';

const Emoji: React.FC<{ onClick?: (emotion: string) => void }> = ({
  onClick = () => {},
}) => {
  return (
    <ul className="emoji-wrap">
      {Emotions.map((emotion, ind) => (
        <li
          key={`${emotion}_${ind}`}
          className="emoji-item"
          onClick={() => {
            onClick(emotion);
          }}
        >
          <span className={`emotion_span emotion_span_${ind + 1}`} />
        </li>
      ))}
    </ul>
  );
};

export default Emoji;
