import MainPagePhoto from "./MainPage/MainPagePhoto";
import MainPageBody from "./MainPage/MainPageBody";
import MainPageSearch from "./MainPage/MainPageSearch";

export default function Home() {
  return (
    <>
      <MainPageSearch/> 
      <MainPagePhoto/>
      <MainPageBody/>
    </>
  );
}