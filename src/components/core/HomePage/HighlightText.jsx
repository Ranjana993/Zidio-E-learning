import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#e67ff3] via-[#fa6712] to-[#e89d51] text-transparent bg-clip-text font-bold gradient-underline">
      {text}
    </span>
  );
};

export default HighlightText;