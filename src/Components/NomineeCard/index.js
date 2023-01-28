import React, { useState } from "react"
import './index.css'

export default function NomineeCard({ nominees, catagoryId, buttonText, setSelectedNominee }) {
    const [activeNomineeId, setActiveNomineeId] = useState(null);
    const [hoveredNomineeId, setHoveredNomineeId] = useState(null);

    const handleSelection = (nominee, catagoryId) => {
        setSelectedNominee((prevSelectedNominee) => ({
            ...prevSelectedNominee,
            [catagoryId]: nominee.id,
        }));
        setActiveNomineeId(nominee.id);
    };

    const handleNomineeHover = (nomineeId) => {
        asetHoveredNomineeId(nomineeId);
    }


    return (
        <div className='parent-div'>
            {nominees?.map((nominee) => {


                return (
                    <div key={nominee.id} className={`ballot-parent-container ${activeNomineeId === nominee.id ? 'active' : ''}`}>
                        <div className='child-parent-ballot'>
                            <div className='ballot-image-parent'>
                                {<img className='ballot-image' src={nominee.photoUrL} alt={nominee.title} />}
                            </div>
                            <div className='ballot-title-parent'>
                                <div className="ballot-title"
                                    onMouseEnter={() => handleNomineeHover(nominee.id)}
                                    onMouseLeave={() => handleNomineeHover(null)}
                                >
                                    {nominee.title}
                                </div>
                            </div>
                            <div className='ballot-btn-parent'>
                                <button
                                    className='ballot-btn'
                                    onClick={() => handleSelection(nominee, catagoryId)}
                                >
                                    {activeNomineeId === nominee.id ? 'Selected' : buttonText}
                                </button>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

