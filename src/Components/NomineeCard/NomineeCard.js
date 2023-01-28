import { useState, useEffect } from "react"
import './index.css'
export default function NomineeCard({ nominees, catagoryId, button }) {
    const [selectedNominee, setSelectedNominee] = useState([]);
    const [tempSelectedNominee, setTempSelectedNominee] = useState({ title: '', photoUrL: '', id: '' });
    let Selectednominees = [];
    const handleSelection = (nominee, catagoryId) => {
        console.log("ggg", Selectednominees.length)
        if (selectedNominee) {
            let activeNominee = {...nominee,...catagoryId }
            console.log(activeNominee,"active")
            setSelectedNominee([ ...selectedNominee, ...activeNominee ])
            console.log(selectedNominee, "selectedNominee")
        }
    };
    
    useEffect(() => {
        console.log(selectedNominee, "selected nominiee")
    },
        [selectedNominee]);
        
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
                                    <span className="ballot-title">
                                            <span className='tooltiptext'>{nominee.title}</span>
                                    </span>
                                </div>
                                <div className='ballot-btn-parent'>
                                    <button
                                        className='ballot-btn'
                                        onClick={() => handleSelection(nominee, catagoryId)}
                                    >
                                        {button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )git 
                })}
            </div>
        </>

    )
}
