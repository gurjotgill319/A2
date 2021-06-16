import React from 'react';

const SCP = ({scp}) =>
{
    return(
        
        
        <div>
            
            {
               scp.map(
                   (scp) => (
                    <div className ="row" key={scp.id}>

                    <div className="row row-cols-sm-2 p-3 m-2 rounded border dropshadow">
                        
                        
                        <h2>ID: {scp.id}</h2>


                        <h3>Item: {scp.Item} </h3>

                        <h3>Desciption: </h3>
                        <p>{scp.description}</p>

                        
                    </div>
                    </div>
                   )
               )
            }

        </div>

    )
};

export default SCP;