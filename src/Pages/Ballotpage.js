import React, { useEffect, useState } from 'react';
import api from '../Api/Api'
import Category from '../Components/Category/Category'
import NomineeCard from '../Components/NomineeCard/NomineeCard.js'

const Ballot = ({ buttonText }) => {
    const [ballotData, setBallotData] = useState([])
    useEffect(() => {
        api?.getBallotData().then((response) => {
            setBallotData(response.items)
        })
    }, [])
    return (
        <>
            {ballotData.map((catagory) => {
                return (
                    <>
                        <div className=''>
                            <Category title={catagory.title} />
                            <NomineeCard nominees={catagory.items} catagoryId={catagory.id} buttonText={"Select"} />
                        </div>
                    </>
                )
            })}
        </>
    );
};

export default Ballot;
