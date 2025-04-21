import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
  disabled?: boolean;
}

export const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 "
        />
        <Input
          disabled={disabled}
          className="pl-8"
          placeholder="Search Products.."
        />
        {/* TODO: Add Categories View All Button */}
        {/* TODO: Add Libary Button */}
      </div>
    </div>
  );
};
