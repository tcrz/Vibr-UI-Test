import { FC } from "react"

type HeadingProps = {
  heading: string,
  subText: string
}

const Heading:FC<HeadingProps> = ({heading, subText}) => {
  return (
    <div className="borderr-2 flex flex-col">
      <h4 className="text-[#00100B] font-semibold">{heading}</h4>
      <p className="text-[#808885]">{subText}</p>
    </div>
  )
}

export default Heading