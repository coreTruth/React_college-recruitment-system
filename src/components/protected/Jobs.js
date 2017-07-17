import React, { Component } from 'react';
import {firebaseAuth,userRef,jobsRef} from '../../config/constants';
import Loader from '../Loader';

export default class Jobs extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			jobInfo: [],
			loading: true
		}
	}

	componentDidMount(){
		var that  = this;
	firebaseAuth().onAuthStateChanged((user)=>{
		if (user) {
			var userId  = user.uid;
			jobsRef.on('value',snap=>{
				var data = [];
				var companyData = [];

				snap.forEach(function(childSnap){
						var childData  = childSnap.val();
						if (childData.uid===user.uid) {
							companyData.push(childData)
							that.setState({
								jobInfo:companyData 
							});
						}
						
				})
			})
		}
	})
	}
	

	render(){
		return this.state.loading===false ? <Loader />  : (
			<div className="back" >
				<h1 className="panel-heading">My Jobs</h1>
			{
						
					this.state.jobInfo.map((index)=>
			<table className="table table-condensed table-back">
				<thead>
					<tr>
					<th>Job Title</th>
					<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					
					<tr>
						<td>{index.jobTitle}</td>
						<td>{index.salary}</td>
					</tr>
						
				</tbody>
			</table>
			)
					}
			
			</div>
			)
	}
} 