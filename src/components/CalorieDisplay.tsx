type CaloriesDisplayProps = {
  calories: number;
  text: string;
};
export default function CalorieDisplay({
  calories,
  text,
}: CaloriesDisplayProps) {
  const calorieDeficit = calories < 0;
  return (
    <>
      <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span
          className={`font-black text-6xl text-orange ${
            calorieDeficit && "text-red-500"
          }`}
        >
          {calories}
        </span>
        <span className={`${calorieDeficit && "text-red-500"}`}>{text}</span>
      </p>
    </>
  );
}
