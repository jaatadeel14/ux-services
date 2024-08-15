import { Wand, Pi, UsersRound } from "lucide-react"

const Card = ({ icon }: { icon: string }) => {
    return (
        <div className="py-12 px-8 flex flex-col border border-gray-300 rounded-xl items-center justify-center w-80">
            <p className="!text-start w-full">
                {icon === 'Wand' ? <Wand size={40} color="orange" /> : icon === 'Pi' ? <Pi /> : <UsersRound />}
            </p>
            <h2 className="text-start w-full text-2xl font-semibold">Experience</h2>
            <p className="text-start text-gray-700">
                The Experience Design ecosystem is super-wide. We know most of it, but we only offer what we’re best at.
            </p>
        </div>
    )
}

export default Card