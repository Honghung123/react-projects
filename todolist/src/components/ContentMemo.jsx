import {memo} from "react"
function ChildComponent({onClick}) {
    console.log("Child component render or re-render ");
    return (
      <>
        <h1 className="text-yellow">This is a child component</h1>
        <small>
          This component not receive props or state from its parent one
        </small>
        <button onClick={onClick}>Run counter</button>
      </>
    );
}

export default memo(ChildComponent);