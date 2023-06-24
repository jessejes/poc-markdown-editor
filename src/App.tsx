import { Tab, TabList, TabPanel, TabPanels, Tabs, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import md from 'markdown-it';

export default function App() {

    const [text, setText] = useState<string>("")

    return (
        <Tabs h="full" w="100%">
            <TabList>
                <Tab>Markdown</Tab>
                <Tab>Formatted</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Textarea value={text} onChange={event => setText(event.target.value)}  />
                </TabPanel>
                <TabPanel>
                    <div className="prose w-full" dangerouslySetInnerHTML={{ __html: md().render(text) }} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}