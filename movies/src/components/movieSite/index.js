import React, { useEffect, useState }  from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { getKeywords } from '../../api/tmdb-api' 
import Chip from '@mui/material/Chip';

const MovieSite = ({ movie }) => {
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    getKeywords(movie.id).then(keywords => {
      if (keywords) {
        setKeywords(keywords.keywords)
      }
    })
  },[])

  // console.log(keywords)

  function formatNumber (value) {
    if (!value) {
       return 0.00
    }
    var newVal = value.toString()
    var arr = newVal.split('.')
    var intpart = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    if (arr[1]) {
        return intpart + '.' + arr[1]
    } else {
        return intpart
    }
  }

  // console.log(keywords)
return(
  <>
    <Box sx={{ width: '30rem'}}>
    {/* <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            <LocalMoviesIcon />
            <p style={{fontWeight: 'bold'}}>Status</p>
            <p style={{marginLeft: '1rem',marginTop:'1rem'}}>{movie.status}</p>

          </Stack>
        </Paper>
      </Stack> */}
      <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            {/* <GTranslateIcon /> */}
            <p style={{fontWeight: 'bold'}}>Original Language</p>
          <p style={{marginLeft: '1rem',marginTop:'1rem'}}>{movie.spoken_languages[0].english_name}</p>

          </Stack>
        </Paper>
      </Stack>
      {/* <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            <ChatIcon />
            <p style={{fontWeight: 'bold'}}>Popularity</p>
          </Stack>
          <p style={{marginLeft: '1rem'}}>{movie.popularity}</p>
        </Paper>
      </Stack> */}
      {/* <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            <PlayCircleIcon />
            <p style={{fontWeight: 'bold'}}>Runtime</p>
          </Stack>
          
          <p style={{marginLeft: '1rem'}}>{movie.runtime}</p>
        </Paper>
      </Stack> */}
      <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            {/* <AttachMoneyIcon /> */}
            <p style={{fontWeight: 'bold'}}>Revenue</p>
          <p style={{marginLeft: '1rem',marginTop:'1rem'}}>${formatNumber(movie.revenue)}</p>

          </Stack>
        </Paper>
      </Stack>
      <Stack spacing={2}>
        <Paper style={{padding: '0 2rem',boxShadow:'unset'}}>
          <Stack style={{paddingTop: '1rem'}} direction="row" spacing={1}>
            {/* <AccountBalanceWalletIcon /> */}
            <p style={{fontWeight: 'bold'}}>Budget</p>
          <p style={{marginLeft: '1rem',marginTop:'1rem'}}>${formatNumber(movie.budget)}</p>

          </Stack>
        </Paper>
      </Stack>
      {/* <Paper style={{marginTop: '1rem'}}>
        <Stack style={{margin:'2rem', paddingBottom: '2rem'}}>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Keywords</p>
          <Stack spacing={1} alignItems="center">
            <div>
            {keywords.map((keyword) => (
              <Chip key={keyword.id} style={{margin: '0.3rem'}} label={keyword.name} color="primary" />
            ))}
            </div>
          </Stack>
        </Stack>
      </Paper> */}
    </Box>
  </>
)

}

export default MovieSite;