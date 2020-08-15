import React from 'react'

function Bookmarkinput(props) {
    const {urlName, url, handleUrlName, handleUrl, handleSubmit} = props;
    return (
        <div className='box-1'>
            <h2> BookMark your favourite site</h2>
            <form action="" id="form-input" onSubmit={handleSubmit}>
                <label>site Name</label>
                <input value={urlName} onChange={handleUrlName} type="text" id="input-name" placeholder="website name"/>
                <label>site URL</label>
                <input value={url} onChange={handleUrl} type="text" id="input-url" placeholder="website url"/>
                <button type="submit" className="btn" id="btn"> Submit</button>
            </form>
        </div>
    )
}

export default Bookmarkinput
