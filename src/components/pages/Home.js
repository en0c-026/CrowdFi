import { Anchor, Box, Grid, Paragraph, ResponsiveContext, Text } from "grommet"
import { CardProduct } from "../cards/CardProduct"
import { useContext } from 'react'
import { useEffect } from "react"


const dataCards = [
    { id: '1', to: '/buyMeaCoffe', header: 'buyMeaCoffee', body: 'It is a crowdfunding space that seeks to unite content creators, NGOs or projects with people who want to contribute to what they do. In a kind way buying coffees!' },
    { id: '2', to: '/lendFi', header: 'lendFi', body: 'Coming soon' },
    { id: '3', to: '/liquidFi', header: 'liquidFi', body: 'Coming soon' }
]

export const Home = () => {
    const size = useContext(ResponsiveContext);
    useEffect(() => {
        console.log(size);
    }, [size])
    return ( 
        <Box pad={{ top: 'medium', bottom: 'xxsmall' }} align='center' justify='center' gap='large'>
            <Text size='large' weight='bold'>Give value to your knowledge</Text>
            <Box gap='small' align='center' justify='center' border='horizontal' pad={{ bottom: 'small', horizontal:'small' }} fill>
                <Paragraph textAlign='center'>
                    <Text weight='bold'>CrowdFi</Text> is a profit sharing community. Offers spaces to finance ideas in a collaborative way
                </Paragraph>
                <Text textAlign='center' size="small">Some Benefits:</Text>
                <Text textAlign='center' size="small">- Owning a part of the property</Text>
                <Text textAlign='center' size="small">- Receive income for each user interaction based on their participation</Text>
                <Text textAlign='center' size="small">- Being part of the government and decision-making at <Text weight='bold' size="small">CrowdFi</Text></Text>
                <Text textAlign='center' size="small">More about the PSC! <Anchor href='https://www.arweave.org/profit-sharing-communities' label='Here' /></Text>
            </Box>
            <Text>Our products:</Text>
            <Box direction={ size !== 'small' ? 'row' : 'column'} align='center' justify='center' gap='medium'  height="100%">
                {dataCards.map(card => (
                    <CardProduct key={card.id} to={card.to} header={card.header} body={card.body} />
                ))}
            </Box>
        </Box>
    )
}
