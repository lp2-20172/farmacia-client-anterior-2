import React, { Component } from 'react'

class form extends Component {
    render() {
        return (
        	<form action="/my-handling-form-page" method="post">
			    <div>
			        <label for="name">nombre de producto :</label>
			        <input type="text" id="name" />
			    </div>
			    <br />
			    <div>
			        <label for="mail">E-mail:</label>
			        <input type="email" id="mail" />
			    </div>
			    <br />	
			    <div>
			        <label for="msg">Message:</label>
			        <textarea id="msg"></textarea>
			    </div>
			</form>
        );
    }
}

export default form;