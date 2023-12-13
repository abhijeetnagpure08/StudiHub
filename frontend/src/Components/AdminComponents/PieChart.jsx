import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function PieChart(){
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			// theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Pie Chart"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 25, label: "Users" },
					{ y: 30, label: "Courses" },
					{ y: 15, label: "Payment" },
					{ y: 6
                        , label: "Admin" },
					{ y: 12, label: "Active Users" },
					{ y: 10, label: "Content" }	
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
 
export default PieChart;