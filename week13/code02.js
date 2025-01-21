import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Diary Page</h1>
      <p>{id}번 일기!</p>
    </div>
  );
};

export default Diary;