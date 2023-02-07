import {useTheme} from "next-themes";
import {useState, useEffect} from "react";

export default function Home() {


  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          
          <div className="w-10 h-10 text-yellow-500 "  onClick={() => setTheme('light')} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

          </div>
          
        )
      }

      else {
        return (
          <div className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

            
             </div>
          
        )
      }
   };







  return (
    <div>

      <section className="flex flex-col h-screen w-screen bg-orange-300 dark:bg-teal-900 justify-center items-center space-y-10 ">
      
        
        <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-yellow-300 ">light/Dark Mode Projekt</h2>
        {renderThemeChanger()}
        
      </section>
    </div>
  );
}