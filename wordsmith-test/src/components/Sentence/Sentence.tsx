'use client';

import React from 'react';

type Props = {
  sentence: string;
  edits: any;
};

const Sentence: React.FC<Props> = ({ sentence, edits }) => {
  const words = sentence.split(' ');

  return (
    <p>
      {words.map((word, index) => {
        const edit = edits.find((edit: any) => edit.initial === word);

        if (edit) {
          return (
            <React.Fragment key={index}>
              <span className="line-through text-red-500 mr-1">
                {edit.initial}
              </span>
              <span className="text-green-500 mr-1">
                {edit.replacement}
              </span>
            </React.Fragment>
          );
        } else {
          return (
            <span key={index} className="mr-1">
              {word}
            </span>
          );
        }
      })}
    </p>
  );
};

export default Sentence;
