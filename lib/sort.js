/**
 * Sort by name property 
 */
export const nameSort = (a, b) => {
   if (a.name < b.name) return -1
   if (a.name > b.name) return 1
   return 0
}

/**
 * Basic search which matches search string again title and URL's present in data 
 */
export const textSearch = (search, data) => data.filter(entry => (
   entry['Name'].toLowerCase().indexOf(search.toLowerCase()) > -1 ||
   entry['Name'].toLowerCase().indexOf(search.toLowerCase()) > -1
)).sort(nameSort)

/**
 * Multi column boolean search (E.G. Imaging type - xray)
 */
export const booleanMultiColumnSearch = (type, identifiers, data) => data.filter(entry => (
   identifiers.filter(identifier => entry[`${type} - ${identifier}`] == "TRUE").length > 0
)).sort(nameSort)


/**
 * Single column boolean search (E.G. Open access)
 */
export const booleanColumnSearch = (column, data) => data.filter(entry => (
   entry[column] == "TRUE"
)).sort(nameSort)
