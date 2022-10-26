import React, {useState} from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import './Dashboard.css';
import MyCoverLetter from './MyCoverLetter';
import MyResume from './MyResume';

function Dashboard() {
    const [tabIndex, setTabIndex] = useState(0);

    return ( 
        <div className="dashboard">
            <div className="container">
                <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
                    <div className="row">

                    {/* SIDE BAR */}

                        <div className="col-3 side-bar">
                            <TabList id='tab-list'>
                                <Tab>Create a resume</Tab>
                                <Tab>Create a cover letter</Tab>
                                <Tab>Nothing</Tab>
                                <Tab>Nothing</Tab>
                            </TabList>

                        </div>

                    {/* MAIN CONTENT */}

                        <div className="col-9 main-content">
                            <TabPanel>
                                <MyResume />
                            </TabPanel>
                            <TabPanel>
                                <MyCoverLetter />
                            </TabPanel>
                            <TabPanel>
                                Nothing for now
                            </TabPanel>
                            <TabPanel>
                                Nothing for now
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
     );
}

export default Dashboard;