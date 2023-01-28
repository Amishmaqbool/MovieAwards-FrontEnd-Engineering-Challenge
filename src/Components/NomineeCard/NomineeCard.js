import { useState, useEffect } from "react"
import Ellipsis from 'react-lines-ellipsis';
import './index.css'
export default function NomineeCard({ nominees, catagoryId, buttonText }) {
    const [selectedNominee, setSelectedNominee] = useState({
        "best-picture": null,
        "best-director": null,
        "best-actor": null,
        "best-actress": null,
        "best-supporting-actor": null,
        "best-supporting-actress": null,
        "best-visual-effects": null
    });

    const handleSelection = (nominee, catagoryId) => {
        console.log(nominee, "nominee")
        setSelectedNominee((prevSelectedNominee) => ({
            ...prevSelectedNominee,
            [catagoryId]: nominee.id,
        }));

    };

    useEffect(() => {
        console.log(selectedNominee, "selected nominiee")
    }, [selectedNominee])
    return (
        <>
            <div className='parent-div'>
                {nominees?.map((nominee) => {

                    return (
                        <div className='ballot-parent-container'>
                            <div className='child-parent-ballot'>
                                <div className='ballot-image-parent'>
                                    {<img className='ballot-image' src={nominee.photoUrL} alt={nominee.title} />}
                                </div>
                                <div className='ballot-title-parent'>
                                    <Ellipsis className="ballot-title" lines={2} text={nominee.title} suffix="Read more" />
                                </div>
                                <div className='ballot-btn-parent'>
                                    <button
                                        className='ballot-btn'
                                        onClick={() => handleSelection(nominee, catagoryId)}
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
