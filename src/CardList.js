import React from 'react';
import Card from './Card'


const CardList = ({ gamers }) => {
    return (
        <div>
            {
                gamers.map((gamer, i) => {
                    return (
                        <Card
                            key={i}
                            id={gamers[i].id}
                            name={gamers[i].name}
                            email={gamers[i].email}
                            />

                    );
                })
            }
        </div>
    );
}

export default CardList;