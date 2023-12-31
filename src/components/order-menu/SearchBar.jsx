import { IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const InputField = styled('input')({
    padding: '12px 17px 12px 17px',
    borderWidth: '1px',
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderRadius: '25px',
    fontWeight: 'bold',
    minWidth: '400px',
    color: 'grey',
});

export default function SearchBar({ style }) {
    return (
        <div style={{ position: 'relative' }}>
            <InputField
                style={{ ...style }}
                type={'text'}
                placeholder={'find your favourites....'}
            />
            <IconButton style={{ position: 'absolute', top: 0, right: '0' }}>
                <SearchIcon />
            </IconButton>
        </div>
    );
}
