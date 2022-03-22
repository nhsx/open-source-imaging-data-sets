/**
 * Sort by name property 
 */
export const nameSort = (a, b) => a.name > b.name

/**
 * Basic search which matches search string again title and URL's present in data 
 */
export const basicSearch = (search, data) => data.filter(entry => (
   entry['name'].toLowerCase().indexOf(search.toLowerCase()) > -1 ||
   entry['name'].toLowerCase().indexOf(search.toLowerCase()) > -1)
).sort(nameSort)