import React, { useState } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router'

const PlayerDetailsCard = ({ playerData }) => {

    const navigate = useNavigate()
    const navigateImage = (id) => {
        console.log(id)
        navigate(
            `/player-image/${id}`,
            {
                state: { id: id }
            }
        )
    }

    return (
        <>
            <div className='player-list'>
                <img className="player-image" src={`images/${playerData.Id}.jpg`} alt="no-img" onClick={() => navigateImage(playerData.Id)} />
                <h3 className="pname">{playerData.PFName}</h3>
                <div className="player-details ">
                    <h4><span className="skill">Skill:</span> {playerData.SkillDesc}</h4>
                    <h4 ><span className="skill">Value:</span>  ${playerData.Value}</h4>
                </div>
                <h4>UpComing Matches List</h4>

                {playerData.UpComingMatchesList.map((match) => (
                    <div key={match.Id}>

                        <p className="code" key={match.VsCCode}>
                            {match.CCode} vs {match.VsCCode}<br />
                            {moment(match.MDate).format('DD-MM-YYYY h:mm:ss')}
                        </p>

                    </div>
                ))}
            </div>

        </>
    )
}

export default PlayerDetailsCard