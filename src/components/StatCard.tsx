interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className = '' }: StatCardProps) => {
  return (
    <div className={`stat-card ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
