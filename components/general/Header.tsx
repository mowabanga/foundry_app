import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className="pt-4 flex flex-col md:flex-row w-full items-center gap-4 justify-between">
                <div className="flex items-center gap-2 sm:gap-4 border border-black/50 rounded-2xl px-2 py-1 w-full sm:w-auto">
                    <Input 
                        placeholder="Search" 
                        className="border border-transparent shadow-transparent w-full sm:w-auto"
                    />
                    <SearchIcon size={20} className="hover:cursor-pointer"/>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full md:w-auto">
                    <Button className="rounded-2xl hover:cursor-pointer w-full md:w-auto"><span className="text-xl">+</span> Create account</Button>
                    <Button className="rounded-2xl hover:cursor-pointer w-full md:w-auto"><span className="text-xl">+</span>Register Member</Button>
                </div>
        </div>
    )
}