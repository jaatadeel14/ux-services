"use client"
import Logo from "./Logo"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormInput } from "lucide-react"

const Footer = () => {

    const formSchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })

    const form = useForm<z.infer<typeof formSchema>>
        ({
            resolver: zodResolver(formSchema),

            defaultValues: {
                name: "",
                email: "",
            },
        })

    return (
        <footer className="md:flex gap-5 justify-around items-center py-20 bg-gray-100">
            <div className="flex flex-col gap-y-16 md:w-[33%] p-16">
                <h3 className="text-orange-600">hello!</h3>
                <p className="">UXservices is an international UX design and research company that provides consulting and trainings, organizes conferences and events, and publishes books and resources.</p>
                <Logo />
            </div>

            <div className="md:w-[33%] p-16 flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-8">
                    <h3 className="text-orange-600">contact us</h3>
                    <div>
                        <p>call: +90 212 276 06 43</p>
                        <p>write: hello@uxservices.com</p>
                        <p>click: Contact Page</p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-8">
                    <h3 className="text-orange-600">fast links</h3>
                    <div>
                        <p>career opportunities</p>
                        <p>uxbootcamp</p>
                        <p>uxtester</p>
                        <p>contact</p>
                    </div>

                </div>
            </div>

            <div className="md:w-[34%] px-16 md:px-10 flex flex-col gap-y-10">
                <h3 className="text-orange-600">newsletter</h3>
                <Form {...form}>
                    <form className="flex flex-col gap-y-8" onSubmit={() => { }}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg md:text-xl font-light">Adiniz</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )
                            }

                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg md:text-xl font-light">Mail Adresiniz</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="bg-orange-600 text-white items-start w-24" type="submit">kaydol</Button>
                    </form>


                </Form>
            </div>
        </footer>
    )
}

export default Footer