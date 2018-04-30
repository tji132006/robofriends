import React from 'react';

// class Card extends React.Component{
// 	render(){
// 		return()
// 	}
// }

const Card = (props) => {
    //distructive
    const {name, email, id} = props;
	return(
		<div className= 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3'>
			<img alt='robots' src={`https://robohash.org/${id}??200x200`} />
			<div>
                {/*<h2>{props.name}</h2>*/}
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;