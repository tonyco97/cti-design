/**
 * It can be used to render a standard Image.
 *
 */

import React from 'react';
// import Image from '/src/Images/example.jpg';

export const Image = props => {
  return (
    <div class="flex flex-wrap justify-center">
      <img
        src="https://picsum.photos/200/300/?blur"
        class="max-w-full h-auto"
        alt="standard image"
      />
    </div>
  );
};