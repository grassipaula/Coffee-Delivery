import { Catalog } from "./components/Catalog";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

export function Home() {
  return (
    <>
    <Navigation />
    <Header />
    <Catalog />
    </>
  )
}