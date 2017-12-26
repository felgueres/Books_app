import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { connect } from 'react-redux';

class PerformanceHorizontalOptimized extends Component{
	render () {
    // Add this line to avoid trying to get a property from an object that has not been defined, aka, error.
    if(!this.props.book){
      return <div></div>
    }
  	return (
			<div>
				<div>
				<h3 className='subtitles'>Performance Over IE Forecast with Plant Optimization</h3>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<BarChart
		          width={600}
		          height={300}
		          data={this.props.book.data}
		          layout="vertical"
		          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
		         <XAxis dataKey="Estimate" type="number"/>
		         <YAxis dataKey="name" type="category"/>
		         <CartesianGrid strokeDasharray="3 3"/>
		         <Tooltip />
		         <Legend />
		         <Bar dataKey="Estimate" fill="#003041" />
						 <Bar dataKey="Optimized" fill="#C8C8C8" />
						 <Bar dataKey="Production" fill="#ADD5DB" />
		        </BarChart>
					</div>
					<div className="col-sm-6 right-col-text commentary-title">
						<p className='commentary-title'> Commentary </p>
						<p className='commentary'> If <strong>{this.props.book.title}</strong> had operated optimally, it would be underperforming the TMY expectations by {this.props.book.data[0].Difference} MWh.</p>
					</div>
				</div>
	    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(PerformanceHorizontalOptimized);
