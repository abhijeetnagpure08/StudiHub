import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Flex } from '@chakra-ui/react';
import { AdminNavbar } from './AdminNavbar';
import { Sidebar } from './Sidebar';
import PieChart from './PieChart';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const AdminDashboard = () => {	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Yearly Sales from 2018"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}
		
		return (
		<div>
      <AdminNavbar title={"Dashboard"}/>
      <Flex>
        <Flex >
            <Sidebar/>
        </Flex>
            <Flex w="70%" m="auto" mt={"100"} flexDirection={"column"}>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
            <div style={{marginTop: "10px"}}>
                <PieChart />
            </div>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </Flex>
      </Flex>
		</div>
		);
}
 
export default AdminDashboard;   