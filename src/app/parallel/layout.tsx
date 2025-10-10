export default function ParallelLayout({
  children,
  slot1,
  slot2,
  slot3,
  slot4,
}: {
  children: React.ReactNode;
  slot1: React.ReactNode;
  slot2: React.ReactNode;
  slot3: React.ReactNode;
  slot4: React.ReactNode;
}) {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {children}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slot1}
          {slot2}
          {slot3}
          {slot4}
        </div>
      </div>
    </div>
  );
}
