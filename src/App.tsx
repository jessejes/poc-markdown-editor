import { Box, Editable, EditableInput, EditablePreview, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import md from 'markdown-it';

export default function App() {

    const [title, setTitle] = useState<string>("")
    const [text, setText] = useState<string>("")

    return (
        <VStack p="12">
            <Box display="flex" w="100%">
                <Editable fontWeight="bold" defaultValue={title} placeholder="Untitled" >
                    <EditablePreview />
                    <EditableInput value={title} onChange={event => setTitle(event.target.value)} />
                </Editable>
            </Box>
            <Tabs w="100%">
                <TabList>
                    <Tab>Markdown</Tab>
                    <Tab>Formatted</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Textarea h="xl" value={text} onChange={event => setText(event.target.value)}  />
                    </TabPanel>
                    <TabPanel>
                        <div className="prose w-full" dangerouslySetInnerHTML={{ __html: md().render(text) }} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
        
    )
}