import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {

    return (
        <Box>
            <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
        </Box>
    )
};