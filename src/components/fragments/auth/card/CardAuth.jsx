import { Card } from "@/components/ui/card";

export default function CardAuth({
  className,
  icon,
  textStyle,
  title,
  desc,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      className={`w-9/12 mx-auto px-8 py-4 flex flex-col md:flex-row gap-8 items-center justify-center ${className} cursor-pointer`}
    >
      {icon}
      <div className="space-y-4">
        <h6 className="font-semibold text-lg">{title}</h6>
        <p className="text-xs">{desc}</p>
      </div>
    </Card>
  );
}
