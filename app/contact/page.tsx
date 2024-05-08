'use client'
import * as Form from '@radix-ui/react-form';
import './styles.css';

export default function Page() {
  return (
    <div className='bg-white mt-16'>
        <section className="w-full md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-center">Contact</h1>
                <p className="text-gray-500 dark:text-gray-400">
                Please contact by submitting form below. 
To get the latest updates from Penta Bay, please feel free to contact team of Penta Bay
                </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Enter your name"
                        required
                        type="text"
                    />
                    </div>
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="Enter your email"
                        required
                        type="email"
                    />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="subject"
                    >
                    Subject
                    </label>
                    <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="subject"
                    placeholder="Enter a subject"
                    required
                    type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                    >
                    Message
                    </label>
                    <textarea
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]"
                    id="message"
                    placeholder="Write your message here..."
                    required
                    ></textarea>
                </div>
                </div>
                <div className="flex items-center p-6 justify-end">
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    type="submit"
                >
                    Submit
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
  )
}