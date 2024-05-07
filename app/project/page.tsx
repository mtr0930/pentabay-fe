'use client'
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Card } from '@radix-ui/themes';

export default function Page() {
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
          <Tabs.Root className=" flex-grow-0 flex justify-between" defaultValue="oil-gas">
            <Tabs.List className=" border-b break-words" aria-orientation='vertical'>
              <Tabs.Trigger value="oil-gas" className="TabsTrigger block w-full px-1 py-1">Oil, Gas & Energy</Tabs.Trigger>
              <Tabs.Trigger value="power" className="TabsTrigger block w-full px-1 py-1">Power</Tabs.Trigger>
              <Tabs.Trigger value="private-equity" className="TabsTrigger block w-full px-1 py-1">Private Equity</Tabs.Trigger>
              <Tabs.Trigger value="banking" className="TabsTrigger block w-full px-1 py-1">Banking & Capital Market</Tabs.Trigger>
              <Tabs.Trigger value="ict" className="TabsTrigger block w-full px-1 py-1">ICT & Telecommunications</Tabs.Trigger>
              <Tabs.Trigger value="technology" className="TabsTrigger block w-full px-1 py-1">Technology Development</Tabs.Trigger>
              <Tabs.Trigger value="consumer" className="TabsTrigger block w-full px-1 py-1">Consumer Market</Tabs.Trigger>
              <Tabs.Trigger value="healthcare" className="TabsTrigger block w-full px-1 py-1">Healthcare</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden over" value="oil-gas">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <h3 className="text-lg font-semibold ">Oil & Gas</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We provide comprehensive solutions for the oil and gas industry, from exploration to distribution.
                    </p>
                </Card>
                <Card>
                    <h3 className="text-lg font-semibold ">Energy</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our expertise extends to the energy sector, including renewable and traditional sources.
                    </p>
                </Card>
                <Card >
                    <h3 className="text-lg font-semibold ">Petrochemicals</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We understand the unique challenges of the petrochemical industry and can provide tailored
                      solutions.
                    </p>
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="power">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Power Generation</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We have expertise in power generation, including conventional and renewable sources.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Power Transmission</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our team can help with power transmission and distribution projects.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Energy Efficiency</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We provide solutions to improve energy efficiency and reduce carbon footprint.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="private-equity">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                <Card >
                  
                    <h3 className="text-lg font-semibold">Investment Advisory</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our team provides expert investment advisory services to private equity firms.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Portfolio Management</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We can help manage your private equity portfolio for optimal performance.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Fundraising</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our expertise extends to fundraising for private equity firms.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="banking">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Corporate Banking</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We provide comprehensive corporate banking solutions to businesses.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Capital Markets</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our expertise extends to the capital markets, including investment banking and trading.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Wealth Management</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We offer comprehensive wealth management solutions to high-net-worth individuals.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="ict">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                <Card >
                    <h3 className="text-lg font-semibold">Telecommunications</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      We have expertise in the telecommunications industry, including network infrastructure and
                      services.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">IT Consulting</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our IT consulting services help organizations optimize their technology investments.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Digital Transformation</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We assist clients in their digital transformation journeys to stay competitive.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="technology">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Software Development</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our software development team creates custom solutions to meet your business needs.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Cybersecurity</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We provide comprehensive cybersecurity services to protect your organization.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Data Analytics</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our data analytics experts can help you make data-driven decisions.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="consumer">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Retail</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We have expertise in the retail industry, helping clients optimize their operations.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">E-commerce</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our team can help you build and scale your e-commerce business.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Consumer Goods</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We understand the consumer goods industry and can provide tailored solutions.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
            <Tabs.Content className="p-6 sm:p-8 overflow-hidden" value="healthcare">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Pharmaceuticals</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our expertise extends to the pharmaceutical industry, including drug development and distribution.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Healthcare IT</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      We provide IT solutions to healthcare organizations to improve patient care and operational
                      efficiency.
                    </p>
                  
                </Card>
                <Card >
                  
                    <h3 className="text-lg font-semibold ">Medical Devices</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                      Our team has expertise in the medical devices industry, helping clients navigate regulatory
                      requirements.
                    </p>
                  
                </Card>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
    </div>
  )
}