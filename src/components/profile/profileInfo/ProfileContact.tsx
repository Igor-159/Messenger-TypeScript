import { FC } from "react"

interface constactProps{
    contactTitle: string,
    contactValue: any
}

const Contact: FC<constactProps> = ({contactTitle, contactValue}) => {
    return <div>
                {contactTitle} : {contactValue}
           </div>
}

export default Contact