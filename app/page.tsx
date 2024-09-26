
import Clients from "@/components/Clients";
import Feedback from "@/components/Feedback";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hiring from "@/components/Hiring";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data/landing";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
      <FloatingNav navItems={navItems}/>
        <Hero/>  
        <Grid/>
        <Hiring/>
        <RecentProjects/>
        <Clients/>
        <Feedback/>
        
        <Footer/>
      </div>
    </main>
  );
}
