import React,{useState} from 'react';
import { Box,  Grid , Tab, Tabs , Typography } from '@material-ui/core';
import { ReviewResult } from './ReviewResult';

export const Reviews = () =>{

    const [value, setValue] = useState(0);

    const handleChange = (event,newValue) =>{
        setValue(newValue);
    };

    const tabsStyle = {margin:"10px auto"};


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography component={'span'}>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    
    const reviews1 = [{
        id:1,
        author: "Maria Cortes",
		date: "September 14, 2016",
        message:"Beatiful and i am very happy",
        calification:5
    }, {
        id:2,
        author: "Diego Armando Maradona",
		date: "December 14, 2016",
        message:"Wonderful site",
        calification:4
    }, {
        id:3,
        author: "Edson Arantes do Nascimento",
		date: "October 14, 2016",
        message:"Very interesting site",
        calification:3
    }];

    const reviews2 = [{
        id:1,
        author: "Nicolas Aguilera",
		date: "September 14, 2016",
        message:"Beatiful and i am very happy",
        calification:5
    }];

    return (
        <div>
            <Grid>
            <h3 className="Reviews">Settings</h3>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab style={tabsStyle} label="Reviews about you" />
                <Tab style={tabsStyle} label="Reviews you have done" />
            </Tabs>
            <TabPanel style={{margin:"20px auto"}} value={value} index={0}>
                <ReviewResult reviews={reviews1}></ReviewResult> 
            </TabPanel>
            <TabPanel  style={{margin:"10px auto"}} value={value} index={1}>
                <ReviewResult reviews={reviews2}></ReviewResult> 
            </TabPanel>
        </Grid>
        </div>
    );

}


