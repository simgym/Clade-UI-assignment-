import Navbar from "./components/Navbar";
import SecondNav from "./components/SecondNav";
import "./App.css";
import LeftHalf from "./components/jobPreview/LeftHalf";
import { JobPreview } from "./components/jobPreview/JobPreview";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <p>Hello</p> */}
        <Navbar />
        <SecondNav />
        {/* <LeftHalf /> */}
        <JobPreview />
      </div>
    </>
  );
}

export default App;
