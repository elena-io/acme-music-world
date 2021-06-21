import React from 'react'
import axios from 'axios'

const selectedTab = window.location.hash.slice(1);
class Nav extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    async componentDidMount() {
        const albums = (await axios.get('/api/albums')).data;
        const artists = (await axios.get('/api/artists')).data;
        const artistLength = artists.length;
        const albumLength = albums.length;

        this.setState({
            artistLength,
            albumLength
        })
    }
     
     render () {
        const {artistLength, albumLength} = this.state;
        return (
            <div className="nav">
        <a href='/' className={ selectedTab ? 'selected' : '' }>Home</a>
        <a href='/#artists'>Artists ( { artistLength } )</a>
        <a href="/#albums">Albums ( { albumLength } )</a>
        </div>

        )
     }
 }

export default Nav;