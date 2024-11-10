import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FilterCategory = ({ title, items }) => {
    return (
        <Select>
            <SelectTrigger className="w-[200px] border-0 shadow-none">
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FilterCategory;