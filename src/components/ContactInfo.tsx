import React, { Dispatch } from "react"
import { useDispatch } from "react-redux"

type Props = {
    contactInfo: ContactInfo
    removeContactInfo: (contactInfo: ContactInfo) => void
}

export const ContactInfo: React.FC<Props> = ({contactInfo, removeContactInfo}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteContactInfo = React.useCallback(
        (contact: ContactInfo) => dispatch(removeContactInfo(contactInfo)),
        [dispatch, removeContactInfo]
    )

    return(
        <div className="ContactInfo">
            <div>
                <h1>Contact Info</h1>

            </div>
        </div>
    )
}