import DifficultyScale from "./DifficultyScale";

function CoursItem({ id, name, difficulty }) {
  return (
    <div key={id}>
      {name}
      <DifficultyScale careType="difficulty" scaleValue={difficulty} />
    </div>
  );
}

export default CoursItem;
