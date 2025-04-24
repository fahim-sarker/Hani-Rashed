import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiSearch } from "react-icons/ci";

export function SearchPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
          <input
            type="text"
            className="border outline-none ps-12 pe-2 py-2 rounded w-[300px] 2xl:w-[400px]"
            placeholder="Search here...."
          />
          <button className="absolute left-4 top-2">
            <CiSearch className="text-2xl text-gray-500" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[797px]">
        <DialogHeader>
          <DialogTitle className="text-3xl mb-5 text-center block">
            Search
          </DialogTitle>
        </DialogHeader>
        <div>
          <label
            htmlFor="name"
            className="text-lg font-medium mb-2 block text-[#252C32]"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Type the name here"
            className="block w-full border py-[10px] px-4 rounded outline-none"
          />
        </div>
        <div>
          <label className="text-lg font-medium mb-2 block text-[#252C32]">
            Company Type
          </label>
          <select className="block w-full border py-[10px] px-4 rounded outline-none">
            <option value="Small Business">Small Business</option>
            <option value="Consultancy Firms">Consultancy Firms</option>
          </select>
        </div>
        <div>
          <label className="text-lg font-medium mb-2 block text-[#252C32]">
            Country
          </label>
          <select className="block w-full border py-[10px] px-4 rounded outline-none">
            <option value="">Dubai</option>
            <option value="">Bangladesh</option>
            <option value="">Pakistan</option>
            <option value="">Europe</option>
          </select>
        </div>
        <div>
          <label className="text-lg font-medium mb-2 block text-[#252C32]">
            Industry
          </label>
          <select className="block w-full border py-[10px] px-4 rounded outline-none">
            <option value="">Food</option>
            <option value="">Visiting</option>
            <option value="">Restaurant</option>
          </select>
        </div>
        <div>
          <label className="text-lg font-medium mb-2 block text-[#252C32]">
            Company Stage
          </label>
          <select className="block w-full border py-[10px] px-4 rounded outline-none">
            <option value="">Small</option>
            <option value="">Big</option>
            <option value="">Large</option>
          </select>
        </div>
        <button
          className="px-5 w-28 mt-5 mx-auto py-3 text-center rounded shadow bg-primaryGreen text-white"
          type="submit"
        >
          Search
        </button>
      </DialogContent>
    </Dialog>
  );
}
