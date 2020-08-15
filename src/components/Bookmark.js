import React, { Component } from 'react'
import Bookmarkinput from './Bookmarkinput'
import Bookmarklist from './Bookmarklist'

export class Bookmark extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            urlObj : {
                urlName : '',
                url : ''
            },
            urlArr : []
        }
    }
    
    handleUrlName = (e)=>{
        this.setState({
            urlObj :{
                ...this.state.urlObj,
                urlName : e.target.value
            }
        })
    }
    handleUrl = (e)=>{
        this.setState({
            urlObj :{
                ...this.state.urlObj,
                url : e.target.value
            }
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            urlArr : [...this.state.urlArr, this.state.urlObj],
            urlObj : {
                urlName : '',
                url : ''
            }
        }, ()=> console.log(this.state.urlArr))

    }
    handleVisit = (url) =>{
        window.open(`${url}`)
    }
    handleDelete = (urlDel) =>{
        const updatedUrlArr = this.state.urlArr.filter(url => url.url !== urlDel )
        this.setState({
            urlArr : updatedUrlArr
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>BookMarker</h1>
                <Bookmarkinput urlName={this.state.urlObj.urlName}
                                url={this.state.urlObj.url}
                                handleUrlName={this.handleUrlName}
                                handleUrl={this.handleUrl}
                                handleSubmit={this.handleSubmit}/>
                <Bookmarklist urlArr={this.state.urlArr}
                                handleVisit={this.handleVisit}
                                handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default Bookmark
