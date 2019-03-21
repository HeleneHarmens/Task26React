import React from 'react';

const myStyle = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '200px',
};

const myHeader = (props) => {
   return (
       <header className="header">
           <h1>Hello world</h1>
        </header>
   );
}

export default myHeader;