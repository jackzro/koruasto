import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCom = ({ list }: any) => {
  return (
    <Accordion type="single" collapsible>
      {list.map((faq: any) => (
        <AccordionItem value={faq.question} key={faq.question}>
          <AccordionTrigger>
            <p className="text-[10px] sm:text-[20px]">{faq.question}</p>
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqCom;
