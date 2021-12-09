function DifficultyScale({ scaleValue, careType }) {
  const range = [1, 2, 3, 4, 5];
  const scaleType = careType === "difficulty" ? "⭐" : null;

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default DifficultyScale;
