import { Main } from "next/document";
import MainPageHeader from "./MainPage/MainPageHeader";
import MainPagePhoto from "./MainPage/MainPagePhoto";
import MainPageBody from "./MainPage/MainPageBody";


export default function Home() {
  return (
    <>
      <MainPageHeader />
      <MainPagePhoto/>
      <MainPageBody/>
    </>
  );
}