
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
    return (
        <div className='px-6'>
            <Tabs>
                <div className='flex justify-center items-center no-underline mb-4'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital marketing</Tab>
                    </TabList>
                </div>


                <TabPanel>
                    <JobCard />
                </TabPanel>
                <TabPanel>
                    <JobCard />
                </TabPanel>
                <TabPanel>
                    <JobCard />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategories;