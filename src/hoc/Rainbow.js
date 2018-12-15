import React from "react";

const Rainbow = ColoredText => {
  const color = ["red", "blue", "orange"];
  const rIndex = Math.floor(Math.random() * 3);
  const colorName = color[rIndex] + "-text";
  console.log(colorName);
  return props => {
    return (
      <div className={colorName}>
        <ColoredText {...props} />;
      </div>
    );
  };
};

export default Rainbow;
