import PaginationBtn from "./PaginationBtn"
function SearchResult({results}) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-1/4 md:pl-2/4 lg:pl-52">
        <p className="text-gray-600 text-md mb-5 t-3">About {results.searchInformation?.formattedTotalResults} Results {results.searchInformation?.formattedSearchTime} Seconds</p>

        {
            results.items?.map(result=>(
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a  href={result.link} className="text-sm">{result.formattedUrl}</a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))
        }
        <PaginationBtn/>
    </div>
  )
}

export default SearchResult