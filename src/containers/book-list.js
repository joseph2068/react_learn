import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

	renderList = () => {
		return this.props.books.map(book => (<li key={book.title}>{book.title}</li>));
	}
	
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

const mapStateToProps = state => (
	{
		books: state.books,
	// 這邊的鍵是要對應 reducer 的名稱，
	// 而你在 reducer/index.js 的第五行原本是取叫做 book ，少了 s 而找不到對應的 state。
	}
);

export default connect(mapStateToProps)(BookList);
