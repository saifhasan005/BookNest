import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex  items-center justify-center">
       <CircleLoader  color="#3b82f6" size={50} />
    </div>
  );
};

export default Loading;