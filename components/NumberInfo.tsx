
const NumberInfo = ({ value, description } : { value: number, description: string}) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-[72px] text-orange-600">{value}</p>
        <p>{description}</p>
    </div>
  )
}

export default NumberInfo