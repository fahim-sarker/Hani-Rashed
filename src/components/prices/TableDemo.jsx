import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoCheckmark } from "react-icons/io5";

const invoices = [
  {
    featheredText: "Feature text goes here",
    ten: <IoCheckmark />,
    tweentyFive: <IoCheckmark />,
    unlimited: <IoCheckmark />,
  },
  {
    featheredText: "Feature text goes here",
    ten: <IoCheckmark />,
    tweentyFive: <IoCheckmark />,
    unlimited: <IoCheckmark />,
  },
  {
    featheredText: "Feature text goes here",
    tweentyFive: <IoCheckmark />,
    unlimited: <IoCheckmark />,
  },
  {
    featheredText: "Feature text goes here",
    tweentyFive: <IoCheckmark />,
    unlimited: <IoCheckmark />,
  },
  {
    featheredText: "Feature text goes here",
    unlimited: <IoCheckmark />,
  },
];

export function TableDemo() {
  return (
    <Table className="demoTable text-[16px]">
      <TableHeader>
        <TableRow className="border-none bg-[#F3F3F3]">
          <TableHead className="py-3 text-lg"></TableHead>
          <TableHead className="py-3 text-lg text-gray-800">10</TableHead>
          <TableHead className="py-3 text-lg text-gray-800">25</TableHead>
          <TableHead className="py-3 text-lg text-gray-800">
            Unlimited
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, idx) => (
          <TableRow
            key={idx}
            className={`border-none ${idx % 2 !== 0 ? "bg-[#F3F3F3]" : ""}`}
          >
            <TableCell className="py-4 ">{invoice.featheredText}</TableCell>
            <TableCell className="py-4 text-lg">{invoice.ten}</TableCell>
            <TableCell className="py-4 text-lg">
              {invoice.tweentyFive}
            </TableCell>
            <TableCell className="py-4 text-lg">{invoice.unlimited}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
