import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FilterSidebar() {
  return (
    <div className="border-2 border-black p-4 bg-white">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-1">FILTERS</h2>

      <Accordion type="multiple" className="space-y-2">
        <AccordionItem value="publishers" className="border-black">
          <AccordionTrigger className="font-bold py-2 hover:no-underline hover:text-neon-green">
            PUBLISHERS
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["DC Comics", "Marvel", "Image", "Dark Horse", "IDW", "BOOM! Studios"].map((publisher) => (
                <div key={publisher} className="flex items-center space-x-2">
                  <Checkbox id={`publisher-${publisher}`} />
                  <Label htmlFor={`publisher-${publisher}`}>{publisher}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="credits" className="border-black">
          <AccordionTrigger className="font-bold py-2 hover:no-underline hover:text-neon-green">
            CREDITS
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["Writer", "Penciller", "Inker", "Colorist", "Letterer", "Editor"].map((role) => (
                <div key={role} className="flex items-center space-x-2">
                  <Checkbox id={`role-${role}`} />
                  <Label htmlFor={`role-${role}`}>{role}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="genres" className="border-black">
          <AccordionTrigger className="font-bold py-2 hover:no-underline hover:text-neon-green">
            GENRES
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["Superhero", "Sci-Fi", "Horror", "Fantasy", "Crime", "Drama", "Comedy"].map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox id={`genre-${genre}`} />
                  <Label htmlFor={`genre-${genre}`}>{genre}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="types" className="border-black">
          <AccordionTrigger className="font-bold py-2 hover:no-underline hover:text-neon-green">TYPES</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["Single Issue", "TPB", "Hardcover", "Omnibus", "Manga", "Graphic Novel"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="countries" className="border-black">
          <AccordionTrigger className="font-bold py-2 hover:no-underline hover:text-neon-green">
            COUNTRY OF ORIGIN
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["USA", "Japan", "France", "Italy", "UK", "Canada"].map((country) => (
                <div key={country} className="flex items-center space-x-2">
                  <Checkbox id={`country-${country}`} />
                  <Label htmlFor={`country-${country}`}>{country}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <button className="w-full bg-black text-neon-green font-bold py-2 px-4 border-2 border-neon-green hover:bg-neon-green hover:text-black transition-colors">
          APPLY FILTERS
        </button>
        <button className="w-full border-2 border-black font-bold py-2 px-4 hover:border-neon-green hover:text-neon-green transition-colors">
          RESET
        </button>
      </div>
    </div>
  )
}
