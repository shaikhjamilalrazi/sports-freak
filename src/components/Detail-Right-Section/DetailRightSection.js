import React from "react";

const DetailRightSection = (props) => {
  const { grpImage } = props;
  return (
    <div className="col-lg-5">
      <img
        style={{ width: "100%", height: "249px", borderRadius: "15px" }}
        className="img-fluid float-end"
        src={grpImage}
        alt=""
      />
    </div>
  );
};

export default DetailRightSection;
