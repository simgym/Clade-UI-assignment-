import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import "./JobPreview.css";

export const JobPreview = () => {
  return (
    <div className="jobPreviewWrapper">
      <LeftHalf />
      <RightHalf />
    </div>
  );
};
