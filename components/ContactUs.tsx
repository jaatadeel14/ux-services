import Image from "next/image"
import { Button } from "./ui/button"

const ContactUs = () => {
  return (
    <div className="w-full md:flex gap-16 justify-between items-center my-16 md:my-32">
        <div className="w-full md:w-[50%]">
        <Image src="/placeholder.svg" style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
        }} width={1200} height={1200} alt="Contact Us Image"/>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-y-6 py-4">
            <h3 className="text-3xl md:text-6xl font-semibold text-orange-600">Have a project in mind?</h3>
            <div>
            <Button size="lg" className="text-lg md:text-2xl bg-orange-600">Contact Us</Button>
                
            </div>
        </div>
    </div>
  )
}

export default ContactUs