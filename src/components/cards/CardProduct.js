import { Anchor, Card, CardBody, CardFooter, CardHeader, Paragraph, Text } from 'grommet'
import { Favorite, ShareOption } from 'grommet-icons'
import React from 'react'

export const CardProduct = (props) => {
    return (
        <Card width='small' background="background3" gap='small'>
            <CardHeader alignSelf='center' pad={{ horizontal: 'small', top: 'small' }}>
                <Anchor href={props.to} label={<Text weight='bold' size='medium'>{props.header}</Text>} />
            </CardHeader>
            <CardBody pad={{ horizontal: 'small' }}>
                <Paragraph size='small' textAlign='center'>
                    {props.body}
                </Paragraph>
            </CardBody>
            <CardFooter pad={{ vertical: 'xsmall', horizontal: "medium" }} background="light-4">
                <Favorite color="red" />
                <ShareOption color="plain" />
            </CardFooter>
        </Card>
    )
}
