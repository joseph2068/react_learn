import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookList extends Component {

	renderList =()=>(this.props.books.map
		(book => (<li key={book.title}>{book.title}</li>))
		);
	
	render() {
		return (
			<div>
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps =(state)=>(
	 {
     books:state.books
	}
);

export default connect(mapStateToProps)(BookList);