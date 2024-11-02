export const ErrorMessage = ({ title }: { title: string }) => {
  return (
    <section className="h-full">
      <h2 className="text-red-900">Error: {title}</h2>
    </section>
  );
};
