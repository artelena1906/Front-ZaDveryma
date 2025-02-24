// import { Main } from "next/document";
import MainPageHeader from "./MainPage/MainPageHeader";
import MainPagePhoto from "./MainPage/MainPagePhoto";
import MainPageBody from "./MainPage/MainPageBody";
import MainPageSearch from "./MainPage/MainPageSearch";


export default function Home() {
  return (
    <>
      <MainPageHeader />
      <MainPageSearch/> 
      <MainPagePhoto/>
      {/* <MainPageSearch/> */}
      <MainPageBody/>
    </>
  );
}