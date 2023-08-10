import React from 'react'

function JournalCard ( { title, description, _id } ) {
  
  return (
    <div className="JournalCard">
      <Link to={`/Journal/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default JournalCard; 