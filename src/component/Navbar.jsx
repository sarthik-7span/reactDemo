import React, { useEffect, useState } from 'react';
import "../demo.css";

function App() {
    const [data, setData] = useState([]);
    const [time, setTime] = useState(''); // Initialize time with an empty string
    const scrpath = "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=";
    const [greetingMsg, setGreetingMsg] = useState('');
    const [styleObj, setStyleObj] = useState(); // Initialize styleObj with an empty object

    useEffect(() => {
        fetch('https://data.covid19india.org/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data.statewise);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        const date = new Date(2022, 5, 4, 17);
        const hours = date.getHours();

        if (hours >= 6 && hours < 12) {
            setGreetingMsg("Good morning");
            setStyleObj({ color: "blue" });
        } else if (hours >= 12 && hours < 19) {
            setGreetingMsg("Good afternoon");
            setStyleObj({ color: "orange" });
        } else {
            setGreetingMsg("Good evening");
            setStyleObj({ color: "black" });
        }
    }, []);

    const itemElements = data.map((item, index) => (
        <li className='bg-orange-400 m-2 border-orange-700 p-4' key={index}>
            State:  {item.state}<br />
            Confirmed:  {item.confirmed}<br />
            Recovered: {item.recovered}<br />
            Deaths: {item.deaths}<br />
        </li>
    ));

    const text = "sunny";
    const heading = { color: 'green', textAlign: "left" };

    return (
        <div className="App pb-20">
            <div>
                <ul className='grid grid-cols-4'>{itemElements}</ul>
            </div>

            <p style={heading}>{text}</p>
            <img src={scrpath} alt="Sunset silhouette" />
            <p className='text-2xl text-blue-600 font-extrabold' style={styleObj}>{greetingMsg}</p>
        </div>
    );
}

export default App;
