import React from 'react';
import { Stack } from '@mui/material';
import { Tabs, Tab, TabPanel, TabsList } from '@mui/base';

const Description = ({ summary, author }) => {
    return (
        <Stack sx={{ width: '100%' }}>
            <Tabs defaultValue={1}>
                <TabsList className="CustomTabsList">
                    <Tab className="CustomTab" value={1}>
                        Description
                    </Tab>

                    <Tab className="CustomTab" value={2}>
                        About Author
                    </Tab>

                    <Tab className="CustomTab" value={3}>
                        Three
                    </Tab>
                </TabsList>

                <TabPanel className="CustomTabPanel" value={1}>
                    {summary}
                </TabPanel>

                <TabPanel className="CustomTabPanel" value={2}>
                    {author}
                </TabPanel>

                <TabPanel className="CustomTabPanel" value={3}>
                    Third page
                </TabPanel>
            </Tabs>
        </Stack>
    );
};

export default Description;