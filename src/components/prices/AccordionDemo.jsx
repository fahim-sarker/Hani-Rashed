import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      <AccordionItem value="item-1" className="border px-5 rounded-lg">
        <AccordionTrigger className="hover:no-underline text-lg font-normal">
          Question text goes here
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border px-5 rounded-lg">
        <AccordionTrigger className="hover:no-underline text-lg font-normal">
          Question text goes here
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border px-5 rounded-lg">
        <AccordionTrigger className="hover:no-underline text-lg font-normal">
          Question text goes here
        </AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border px-5 rounded-lg">
        <AccordionTrigger className="hover:no-underline text-lg font-normal">
          Question text goes here
        </AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border px-5 rounded-lg">
        <AccordionTrigger className="hover:no-underline text-lg font-normal">
          Question text goes here
        </AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
