import Image from "next/image";
import Banner from "./Components/Banner";
import Books from "./Components/Books";
import BannerFooter from "./Components/BannerFooter";


export default function Home() {
  return (
    <div>
    <Banner/>
    <BannerFooter/>
    <Books/>
    </div>
  );
}
