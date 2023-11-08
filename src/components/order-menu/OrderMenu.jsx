import React from 'react';
import Div from '../utils/Div';
import { Divider, Stack, styled } from '@mui/material';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';


const Caption = styled('h5')({
    color: 'gray',
    fontWeight: 'bold',
});

export default function OrderMenu() {
    return (
        <Div style={{ marginTop: '16px' }}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{ p: 2 }}
                style={{
                    border: '2.3px solid whitesmoke',
                    borderRadius: '15px',
                }}
            >
                <Stack sx={{ pl: 3 }} spacing={1}>
                    <Caption>Supplier</Caption>
                    <h4>fruits & vegtables</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>date</Caption>
                    <h4 variant={'h6'}>Thu, Nov 7</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Total</Caption>
                    <h4 variant={'h6'}>$100</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Categoies</Caption>
                    <Stack direction={'row'} spacing={1}>
                        <BadgeIcon />
                        
                    </Stack>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>department</Caption>
                    <h4 variant={'h6'}>200-100</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack sx={{ pr: 3 }} spacing={1}>
                    <Caption>Status</Caption>
                    <h4 variant={'h6'}>approvel</h4>
                </Stack>
            </Stack>
        </Div>
    );
}
