import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@heroicons/react/outline"
import { prefix } from "lib/prefix"
import { parseFile } from "lib/csv"
import { basicSearch } from "lib/sort"
import Container from "components/Container"
import Footer from "components/Footer"
import Header from "components/Header"
import Button from "components/Button"
import Select from "components/Select"

const Introduction = ({ active }) => (
   <section className={`flex duration-500 ease-in-out ${active ? 'h-0 opacity-0' : 'h-[200px] sm:h-[250px] md:h-[300px] xl:h-[500px]'}`}>
      <div className="flex-1 flex flex-col justify-center py-16 sm:py-24 lg:py-32">
         <Container>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center tracking-tighter leading-tight text-gray-800">
               A collection of open source<br /> imaging data sets.
            </h1>
         </Container>
      </div>
   </section>
)

const DataList = ({ search, setSearch, active, setActive }) => {

   // Local state 
   const [data, setData] = useState([])
   const [showFilters, setShowFilters] = useState(false)
   const filteredData = useMemo(() => data.length > 0 ? search ? basicSearch(search, data) : data : [])

   // Get marker data, parse + store 
   const getData = async () => {

      // Parse file 
      const data = await parseFile('/data/snapshot-dataset.csv')

      // Remove headers
      const headers = data.shift()

      // Loop and create associative array 
      let arr = []
      for(let i = 0; i < data.length; i++) {
         arr[i] = []
         for(let j = 0; j < headers.length; j++) {
            arr[i][headers[j].toLowerCase()] = data[i][j]
         }
      }

      // Set data 
      setData(arr)

   }

   // On load, get markers
   useEffect(() => {
      getData()
   }, [])

   return (
      <section className={`pt-2 pb-6 duration-500 ease-in-out`}>
         <Container>
            <div className={`relative bg-white border border-gray-100 shadow-xl rounded-xl`}>
               <div className="py-6 bg-white rounded-t-xl sticky top-0 px-6">
                  <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 sm:items-center">
                     <div className="relative flex-1">
                        <div className="absolute top-0 left-0 p-3">
                           <SearchIcon className="w-4 h-4 text-gray-800" />
                        </div>
                        <input
                           type="text"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           onFocus={() => setActive(true)}
                           className="w-full border-gray-300 pl-10 pr-3 py-2 sm:text-sm text-gray-800 focus:ring-blue-500 focus:ring-2 focus:border-transparent focus:ring-offset-1"
                           placeholder="Search datasets"
                        />
                     </div>
                     <div className="flex flex-col items-stretch">
                        <Button type="button" color="blue" onClick={() => setShowFilters(!showFilters)}>
                           {showFilters ? 'Hide filters' : 'Filter datasets'}
                        </Button>
                     </div>
                  </div>
                  {
                     showFilters && (
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 mt-3 mb-2 sm:items-center">
                           <div className="flex-1">
                              <Select
                                 label="Image Type"
                                 options={[
                                    {
                                       value: "ct",
                                       label: "CT"
                                    },
                                    {
                                       value: "mri",
                                       label: "MRI"
                                    },
                                    {
                                       value: "xray",
                                       label: "X-ray"
                                    },
                                 ]}
                              />
                           </div>
                           <div className="flex-1">
                              <Select
                                 label="Focus"
                                 options={[
                                    {
                                       value: "alzheimers",
                                       label: "Alzheimers"
                                    },
                                    {
                                       value: "covid",
                                       label: "Covid"
                                    },
                                    {
                                       value: "arthritis",
                                       label: "Arthritis"
                                    },
                                 ]}
                              />
                           </div>
                           <div className="flex-1">
                              <Select
                                 label="Permission"
                                 options={[
                                    {
                                       value: "open-access",
                                       label: "Open Access"
                                    },
                                    {
                                       value: "on-application",
                                       label: "On Application"
                                    },
                                    {
                                       value: "none",
                                       label: "None"
                                    },
                                 ]}
                              />
                           </div>
                        </div>
                     )
                  }
               </div>
               <div>
                  {
                     filteredData.length > 0 ? (
                        <div className="flex flex-col">
                           <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                 <div className="overflow-hidden border-b border-gray-200">
                                    <table className="min-w-full divide-y divide-gray-200">
                                       <thead className="bg-gray-50">
                                          <tr>
                                             <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                             >
                                                Name
                                             </th>
                                             <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                             >
                                                Type
                                             </th>
                                             <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                             >
                                                Focus
                                             </th>
                                             <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                             >
                                                Permissions
                                             </th>
                                          </tr>
                                       </thead>
                                       <tbody className="divide-y divide-gray-200">
                                          {filteredData.map((entry, index) => (
                                             <tr key={index}>
                                                <td className="px-6 py-4">
                                                   <Link href={entry['url'] ?? '#'}>
                                                      <a target="_blank">
                                                         <span className="block text-sm font-medium text-gray-900">{entry['name'] || '-'}</span>
                                                         <span className="block text-sm text-blue-500">{entry['url']}</span>
                                                         <span className="block text-sm text-gray-500 mt-2">{entry['data notes']}</span>
                                                      </a>
                                                   </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{entry['type of resource']}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{entry['area of focus']}</td>
                                                <td className="px-6 py-4 flex flex-col space-y-2 items-start whitespace-nowrap">
                                                   {entry['open access'] === "TRUE" && (
                                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                         Open Access
                                                      </span>
                                                   )}
                                                   {entry['access on application'] === "TRUE" && (
                                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                         Access on Application
                                                      </span>
                                                   )}
                                                   {entry['commercial access'] === "TRUE" && (
                                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                         Commercial Access
                                                      </span>
                                                   )}
                                                </td>
                                             </tr>
                                          ))}
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <div className="text-center text-sm py-6 text-gray-600">
                           No results found.
                        </div>
                     )
                  }
               </div>
            </div>
         </Container>
      </section >
   )
}


export default function Home() {

   // Local state 
   const [search, setSearch] = useState('')
   const [active, setActive] = useState(false)

   return (
      <div className="relative flex flex-col min-h-screen bg-gray-50">

         {/* Pattern bg */}
         <div className="absolute inset-0 z-[1] pointer-events-none bg-repeat bg-[length:50px_50px] opacity-[3%]" style={{ backgroundImage: `url(${prefix}/hideout.svg)` }}></div>

         {/* Above the fold */}
         <div className="relative z-[3] flex flex-col">
            <Header />
            <Introduction active={active} setActive={setActive} />
         </div>

         {/* Data list */}
         <div className="relative z-[3]">
            <DataList search={search} setSearch={setSearch} active={active} setActive={setActive} />
            <Footer />
         </div>
      </div>
   )
}
