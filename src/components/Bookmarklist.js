import React from 'react'
import Bookmarkitem from './Bookmarkitem'

function Bookmarklist(props) {
    const {urlArr, handleVisit, handleDelete} = props;
    return (
        <div id="display">
            <ul id="list">
                {
                    urlArr && ( urlArr.map((url) => <Bookmarkitem key={url.urlName} 
                                                        urlName={url.urlName}
                                                        url={url.url}
                                                        handleVisit= { ()=> handleVisit(url.url)}
                                                        handleDelete ={() => handleDelete(url.url)}/>) 
                                                        )
                }
            </ul>
        </div>
        
    )
}

export default Bookmarklist
