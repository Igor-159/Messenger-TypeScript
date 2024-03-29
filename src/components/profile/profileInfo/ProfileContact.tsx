import { FC } from "react"

interface constactProps{
    contactTitle: string,
    contactValue: string
}

const Contact: FC<constactProps> = ({contactTitle, contactValue}) => {
    return <div>
                {contactTitle} : {contactValue}
           </div>
}

export default Contact