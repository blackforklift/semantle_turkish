import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';

const SearchBox = ({ url = "", onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Avoid searching with empty input
  
    const requestBody = {
      ...(url === 'http://localhost:5000/guessed-word') && { guessed_word: searchTerm.trim().toLowerCase() },
      ...(url !== 'http://localhost:5000/guessed-word') && { target_word: searchTerm.trim().toLowerCase() },
    };
  
    try {
      const response = await axios.post(url, requestBody);
      console.log("arama sonucu: ", response.data);
      setSearchResult(response.data.message);
      onSearch(searchTerm.trim().toLowerCase());
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <Grid container justifyContent="flex-start" alignItems="center" mb={8} mt={8} sx={{ padding: '0 20px 0 20px' }}>
      <OutlinedInput
        placeholder="Kelimeyi girin"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        endAdornment={
          <IconButton onClick={handleSearch} size="small">
            <SearchIcon />
          </IconButton>
        }
        inputProps={{ style: { padding: '12px' } }}
        sx={{ maxWidth: isSmallScreen ? '500px' : isMediumScreen ? '500px' : '920px' }}
      />
      {searchResult && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          {searchResult === 'Böyle bir kelime bilmiyorum' ? searchResult : null}
        </div>
      )}
    </Grid>
  );
};

export default SearchBox;
