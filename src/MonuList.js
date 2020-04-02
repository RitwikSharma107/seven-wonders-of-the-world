import React from 'react';
import Card from './Card';

const MonuList = ({monuments}) => {
return(
    <div>
        {
        monuments.map((_user,i) => {
            return(
            <Card 
            key={i} 
            id={monuments[i].id} 
            name={monuments[i].name} 
            loc={monuments[i].loc} 
            img={monuments[i].image} 
            about={monuments[i].about}/>
            ); 
        })
    }
    </div>
    );
}

export default MonuList;