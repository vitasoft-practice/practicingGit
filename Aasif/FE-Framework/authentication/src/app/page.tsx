import AllUsers from "@/components/Card/AllUsers";
import PaginationComp from "@/components/Pagination/Pagination";
import SearchBar from "@/components/Search/SearchBar";
import { cookies } from "next/headers";

export default async function Home() {
  

  return (
    <>
      <SearchBar />
      <AllUsers token={cookies().get('token')?.value}/>
    </>
  )
}
