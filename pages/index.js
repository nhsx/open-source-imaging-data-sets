import Container from "components/Container"
import Header from "components/Header"
import Spinner from "components/Spinner"
import { parseFile } from "lib/csv"
import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@heroicons/react/outline"
import Button from "components/Button"
import Select from "components/Select"
import Link from "next/link"

/**
 * Sort by name property 
 */
const nameSort = (a, b) => a.name > b.name

/**
 * Basic search which matches search string again title and URL's present in data 
 */
const basicSearch = (search, data) => data.filter(entry => (
   entry.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
   entry.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
).sort(nameSort)

const DataList = () => {

   // Local state 
   const [data, setData] = useState([])
   const [search, setSearch] = useState('')
   const [showFilters, setShowFilters] = useState(false)
   const filteredData = useMemo(() => data.length > 0 ? search ? basicSearch(search, data) : data : [])

   // Get marker data, parse + store 
   const getData = async () => {

      // Parse file 
      const data = await parseFile('/data/open-source-datasets-raw.csv')

      // Remove headers
      data.shift()

      // Set data
      setData(data.map(entry => ({
         name: entry[0],
         url: entry[1],
         area: entry[2],
         imageType: entry[3],
         resourceType: entry[4],
         focusType: entry[5],
         openAccess: entry[6],
         requestAccess: entry[7],
         commercialAccess: entry[8],
         dataType: entry[9],
      })))

   }

   // On load, get markers
   useEffect(() => {
      getData()
   }, [])

   if (!filteredData.length) return (
      <div className="flex justify-center py-6">
         <Spinner />
      </div>
   )
   return (
      <div className="relative">
         <div className="py-4 bg-white sticky top-0">
            <Container>
               <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 sm:items-center">
                  <div className="relative flex-1">
                     <div className="absolute top-0 left-0 p-3">
                        <SearchIcon className="w-4 h-4 text-gray-800" />
                     </div>
                     <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:ring-2 focus:border-transparent focus:ring-offset-1"
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
            </Container>
         </div>
         <Container>
            <div className="flex flex-col">
               <div className="-my-2 overflow-x-auto -mx-6 lg:-mx-8">
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
                                    Image Types
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
                                 <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="bg-white divide-y divide-gray-200">
                              {filteredData.map((entry) => (
                                 <tr key={entry.url}>
                                    <td className="px-6 py-4">
                                       <div className="text-sm font-medium text-gray-900">{entry.name || '-'}</div>
                                       <div className="text-sm text-gray-500">{entry.url}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.imageType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{entry.focusType}</td>
                                    <td className="px-6 py-4 flex flex-col space-y-2 items-start whitespace-nowrap">
                                       {entry.openAccess && (
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             Open Access
                                          </span>
                                       )}
                                       {entry.requestAccess && (
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                             Access on Request
                                          </span>
                                       )}
                                       {entry.openAccess && (
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                             Commercial Access
                                          </span>
                                       )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                       <Link href={entry.url}>
                                          <a target="_blank" className="text-blue-600 hover:text-blue-900">
                                             View
                                          </a>
                                       </Link>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}


export default function Home() {
   return (
      <>
         <Header />
         <section className="py-4">
            <Container>
               <p className="sm:text-lg md:text-xl text-gray-500">
                  A collection of open source imaging data sets.
               </p>
            </Container>
         </section>
         <section className="pt-2 pb-6">
            <DataList />
         </section>
      </>
   )
}
