import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import {Scroll} from "../components/Scroll";


export default function App() {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            });
    },[])//Lembrar de usar o Array vazio para evitar looping no useEffect.

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase()
            .includes(searchField.toLowerCase());
    });
    console.log(robots, searchField)

    return !robots.length ? <h1>Loading</h1> : (<div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
    </div>)

}


