import Head from "next/head"
import Header from "../components/Header"
import Image from 'next/image'
import HeaderOptions from "../components/HeaderOptions"
import {API_KEY,CONTEXT_KEY} from '../Keys'
import Response from "../Response"
import {useRouter} from 'next/router'
import SearchResult from "../components/SearchResult"
import Footer from "../components/Footer"

function Search({results}) {
  const router=useRouter()
  console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        
        <SearchResult results={results}/>
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const startIndex=context.query.start || 0

  const dummyData=false
  const data=dummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res=>res.json())
  return {
    props:{
      results:data
    }
  }
}