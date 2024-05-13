'use client'
import React from 'react';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabPanel } from '@mui/lab';
import { projects } from '../routes';

interface projectTab {
  title: string;
  content: string;
}

export default function Page() {
  const [value, setValue] = React.useState("oilgas");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="bg-white mt-16">
    <section className="w-full h-full py-12 md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
      <div className="container px-4 md:px-6 max-h-max">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We have a deep understanding of various industries and can help you achieve your goals.
            </p>
          </div>
        </div>
          <div className="mt-12 rounded-lg border">
          <TabContext value={value}>
          <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
      >
        <Tab label="oil gas & energy" value="oilgas"/>
        <Tab label="power" value="power"/>
        <Tab label="private equity" value="privateequity"/>
        <Tab label="banking" value="banking"/>
        <Tab label="ict & telecommunications" value="ict"/>
        <Tab label="technology development" value="technology"/>
        <Tab label="consumer market" value="consumer"/>
        <Tab label="healthcare" value="healthcare"/>
      </Tabs>
    </Box>
    {
      Object.keys(projects).map((key) => (
        projects[key].map((item:projectTab) => (
          <TabPanel key={key} value={key}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 ">
              {item.content}
            </p>
          </TabPanel>
        ))
      ))
    }
    </TabContext>
        </div>
      </div>
    </section>
    </div>
  )
}