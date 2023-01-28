import React, { useEffect, useState } from 'react';
import api from '../../Api/Api'
import Category from '../../Components/Category'
import ModalView from '../../Components/Modal';
import NomineeCard from '../../Components/NomineeCard/index.js'

const BallotPage = ({ buttonText }) => {
    const [ballotData, setBallotData] = useState([])
    const [selectedNominee, setSelectedNominee] = useState();

    const [open, setOpen] = useState(false);


    const onOpenModal = () => {
        setOpen(true);
        console.log("your selected Nominees are :", selectedNominee)
    };
    useEffect(() => {
        api?.getBallotData().then(({ items }) => {
            setBallotData(items)
        })
    }, [])
    return (
        <>
            {ballotData?.map((catagory) => {
                return (

                    <div className='' key={catagory.id}>
                        <Category title={catagory.title} />
                        <NomineeCard nominees={catagory.items} catagoryId={catagory.id} selectedNominee={selectedNominee} setSelectedNominee={setSelectedNominee} buttonText={"Select"} />
                    </div>

                )
            })},
            <div className='submit-btn-parent'>
                <button className='submit-btn' onClick={onOpenModal}>Submit Ballot</button>
                <ModalView open={open} setOpen={setOpen} />
            </div>

        </>
    );
};

export default BallotPage;
