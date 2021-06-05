import { Menu, Text } from 'grommet'
import React from 'react'


export const MenuProducts = () => {
    return (
        <Menu
        plain
            gap='xxsmall'
            dropProps={{
                align: { top: 'bottom', left: 'left' },
                elevation: 'none',
                margin: { top: 'xsmall'},
                round: true
            }}
            label={<Text size='medium'>Products</Text>}
            items={[
                { aling: 'center', justify: 'center', label: <Text size='small'>buyMeaCoffee</Text>, href: '/buyMeaCoffee' },
                { aling: 'center', justify: 'center', label: <Text size='small'>lendFi</Text>, href: '/lendFi' },
                { aling: 'center', justify: 'center', label: <Text size='small'>liquidFi</Text>, href: '/liquidFi' },
            ]}
        />
    )
}
