import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { IdeaUpdatePopup } from "../dashboard/idea/IdeaUpdatePopup";

export default function DropdownMenuComponent({
  id,
  onDelete,
  setIsOpenPopup,
  setIdeaData,
  setIdeaId,
  item,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const handleDeleteIdea = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/delete-idea/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Idea deleted successfully");
      onDelete(id);
    } catch (error) {
      toast.error("Failed to delete idea");
    }
  };

  const handleEditClick = () => {
    setIdeaData(item);
    setIdeaId(id);
    setDropdownOpen(false);
    setIsOpenPopup(true);
  };

  return (
    <>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[120px] rounded-md">
          <DropdownMenuItem
            className="py-2 cursor-pointer"
            onClick={() => handleEditClick()}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2 cursor-pointer text-destructive focus:text-destructive"
            onClick={() => handleDeleteIdea()}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
