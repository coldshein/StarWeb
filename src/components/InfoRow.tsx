
interface Props {
  label: string;
  value: string | undefined | number;
}

export const InfoRow: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex justify-between text-main-text">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};
