import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav'


export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    async componentDidUpdate(prevProps){
        if(this.props.selectedTab !== prevProps.selectedTab) {
            const response = (await axios.get(`/api/${this.props.selectedTab}`)).data;
            console.log(response)
            this.setState({ response })
        }
    }

    async componentDidMount () {
        const selectedTab = window.location.hash.slice(1);
        const response = (await axios.get(`/api/${selectedTab}`)).data;
        console.log(selectedTab)
        console.log(response)
        this.setState({
            response
        })
       
        window.addEventListener('hashchange', ()=> {
            this.setState({ selectedTab: window.location.hash.slice(1) })
        } )
        this.setState({ selectedTab: window.location.hash.slice(1) })
    }


    render () {
        const { selectedTab, response } = this.state;
        return (
            <div id="main"> 
            <Nav />
                { !selectedTab && <div className="inner"> Welcome to Acme Music World </div> }
                <div className="inner">
                    <h3> {selectedTab} </h3>
                    { 
                        response.map(el => <li key={el.id}> {el.name} </li>)
                    }
                </div>
            </div>
        )
    }
}

