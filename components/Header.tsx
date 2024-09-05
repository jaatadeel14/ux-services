"use client"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"


export default function Header() {

  

  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 border-b w-full fixed bg-white">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
            width="40"
            height="40"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <span className="text-2xl font-bold text-black">UXSERVICES</span>
        </div>
        <nav className="hidden items-center space-x-6 text-lg font-medium text-black md:flex">
          <a href="#" className="hover:text-gray-600 hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            services
          </a>
          <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            trainings
          </a>
          <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            community
          </a>
          <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            web 3.0 UX
          </a>
          <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            blog
          </a>
          <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
            TR
          </a>
        </nav>
        <div className="flex items-center">
          <button className="p-2 text-gray-600 hover:text-black">
            <SearchIcon className="w-6 h-6" />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-4 md:hidden">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <nav className="flex flex-col space-y-4 text-lg font-medium text-black">
                <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
                  services
                </a>
                <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200 ">
                  trainings
                </a>
                <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200 ">
                  community
                </a>
                <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200 ">
                  web 3.0 UX
                </a>
                <a href="#" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200 ">
                  blog
                </a>
                <a href="" className="hover:text-gray-600  hover:underline hover:underline-offset-8 hover:decoration-orange-600 hover:decoration-[2px] hover:transition-transform hover:ease-linear hover:duration-200">
                  TR
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      
    </div>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}





function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
