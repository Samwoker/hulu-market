
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {  languages } from "@/lib/constants"

const HeaderButtons = () => {
  return (
    <div>
         <Popover>
          <PopoverTrigger className="mt-2 w-18 ml-5">Languages</PopoverTrigger>
          <PopoverContent>
<Command>
  <CommandInput placeholder="Type a Languages to search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Languages">
      {languages.map((c)=>(
        <CommandItem key={c}>{c}</CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
          </PopoverContent>
         </Popover>
    </div>
  )
}

export default HeaderButtons