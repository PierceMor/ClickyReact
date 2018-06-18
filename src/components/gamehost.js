import React, { Component } from "react";
import Cat from './cat'
import '../css/gamehost.css'

let catimg = [
    {
        id: 1,
        src: "../img/cat1.jpg",
        name: "Cat 1"
    },    {
        id: 2,
        src: "../img/cat2.jpg",
        name: "Cat 2"
    },    {
        id: 3,
        src: "../img/cat3.jpg",
        name: "Cat 3"
    },    {
        id: 4,
        src: "../img/cat4.jpg",
        name: "Cat 4"
    },    {
        id: 5,
        src: "../img/cat5.jpg",
        name: "Cat 5"
    },    {
        id: 6,
        src: "./../img/cat6.jpg",
        name: "Cat 6"
    },    {
        id: 7,
        src: "../img/cat7.jpg",
        name: "Cat 7"
    },    {
        id: 8,
        src: "../img/cat8.jpg",
        name: "Cat 8"
    },    {
        id: 9,
        src: "../img/cat9.jpg",
        name: "Cat 9"
    },    {
        id: 10,
        src: "../img/cat10.jpg",
        name: "Cat 10"
    },    {
        id: 11,
        src: "img/cat11.jpg",
        name: "Cat 11"
    },    {
        id: 12,
        src: "img/cat12.jpg",
        name: "Cat 12"
    }
]



class Gamehost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lastClicked: false,
            score: 0,
            topscore: 0
        }
    }

    render() {
        return (
            <div id="catStuff" >
                {catimg.map(image => 
                <Cat
                    src={image.src}
                    alt={image.name}
                    id={image.id}
                    key={image.id.toString()}
                    handleClick={this.handleClick}
                />)}
            </div>
        )
    }
} //gamehost end

export default Gamehost;