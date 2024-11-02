export const genderColorClass = (gender: string) => {
  if (gender === "male") return "text-blue-500 border-blue-500";
  if (gender === "female") return "text-green-500 border-green-500";
  return "text-gray-500";
};
