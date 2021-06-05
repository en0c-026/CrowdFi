import { Anchor, Box, Paragraph, Text } from "grommet"
import { CardProduct } from "../cards/CardProduct"


const dataCards = [
    { id: '1', to: '/buyMeaCoffe', header: 'buyMeaCoffee', body: 'It is a crowdfunding space that seeks to unite content creators, NGOs or projects with people who want to contribute to what they do. In a kind way buying coffees!' },
    { id: '2', to: '/lendFi', header: 'lendFi', body: 'Coming soon' },
    { id: '3', to: '/liquidFi', header: 'liquidFi', body: 'Coming soon' }
]

export const Home = () => {
    return (
        <Box pad={{ top: 'medium', bottom: 'xxsmall' }} align='center' justify='center' gap='large'>
            <Text size='large' weight='bold'>Give value to your knowledge</Text>
            <Box gap='small' align='center' justify='center' border='horizontal' pad={{ bottom: 'small' }} >
                <Paragraph textAlign='center'>
                    <Text weight='bold'>CrowdFi</Text> is a profit sharing community. Offers spaces to finance ideas in a collaborative way
                </Paragraph>
                <Text textAlign='center' >- Owning a part of the property</Text>
                <Text textAlign='center' >- Receive income for each user interaction based on their participation</Text>
                <Text textAlign='center' >- Being part of the government and decision-making at <Text weight='bold'>CrowdFi</Text></Text>
                <Text textAlign='center' >More about the PSC! <Anchor href='https://www.arweave.org/profit-sharing-communities' label='Here' /></Text>
            </Box>
            <Text>Our products:</Text>
            <Box direction='row' gap='medium'>
                {dataCards.map(card => (
                    <CardProduct key={card.id} to={card.to} header={card.header} body={card.body} />
                ))}
            </Box>
        </Box>
    )
}
