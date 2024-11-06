import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
