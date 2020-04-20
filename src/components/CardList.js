import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

   
    return (
        <div className = 'flex flex-wrap items-center justify-center'>
            {
                robots.map((robot, i) => {
                    return (<Card 
                        key = {robots[i].id} 
                        name = {robots[i].name} 
                        id = {robots[i].id} 
                        email = {robots[i].email} 
                        username = {robots[i].username} 
                    />  ); 
                })
            }
        </div>

    );
    
}

export default CardList;