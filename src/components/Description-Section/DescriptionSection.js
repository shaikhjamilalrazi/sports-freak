import React from "react";

const DescriptionSection = (props) => {
  const { descriptionEN, descriptionFR } = props;
  const textStyle = { color: "white", textAlign: "justify" };
  return (
    <div className="width mt-4">
      <p style={textStyle}>{descriptionEN}</p>
      <br />
      <p style={textStyle}>{descriptionFR}</p>
    </div>
  );
};

export default DescriptionSection;
