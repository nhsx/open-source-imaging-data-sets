import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react"
import Label from "./Label";

export default function Select({ label, options, onSelect = () => { } }) {

   // Local state 
   const [loaded, setLoaded] = useState(false)
   const [selectedOption, setSelectedOption] = useState(options[0])

   /**
    * On selected option change, return to parent
    */
   useEffect(() => {
      if (loaded) onSelect(selectedOption)
      if (!loaded) setLoaded(true)
   }, [selectedOption])

   return (
      <Listbox value={selectedOption} onChange={setSelectedOption}>
         <div className="relative">
            {label && <Label>{label}</Label>}
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-sm text-left bg-white rounded-md border border-gray-200 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
               <span className="block truncate">{selectedOption?.label}</span>
               <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
               </span>
            </Listbox.Button>
            <Transition
               as={Fragment}
               leave="transition ease-in duration-100"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <Listbox.Options className="absolute w-full p-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options?.map((option) => (
                     <Listbox.Option
                        key={option.value}
                        value={option}
                        className={({ active }) =>
                           `${active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'}
                           cursor-default select-none relative rounded-md py-2 pl-10 pr-4`
                        }
                     >
                        {({ active, selected }) => (
                           <>
                              <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                 {option.label}
                              </span>
                              {selected ? (
                                 <span className={`${active ? 'text-blue-600' : 'text-blue-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                                    <CheckIcon className="h-5 w-5" />
                                 </span>
                              ) : null}
                           </>
                        )}
                     </Listbox.Option>
                  ))}
               </Listbox.Options>
            </Transition>
         </div>
      </Listbox>
   )
}