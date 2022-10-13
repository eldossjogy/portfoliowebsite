import { useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import toast, { Toaster } from 'react-hot-toast';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function SignIn() {
  const [userName, setUserName] = useState("")
  const [userPass, setUserPass] = useState("")
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    signIn("credentials", { redirect: false, username: userName.trim(), password: userPass })
      .then(({ ok, error }) => {
        if (ok) {
          router.push("/admin/edit");
        } else {
          toast("Credentials do not match!", { type: "error" });
        }
      })
  }

  const { data: session } = useSession()

  if (session) {
    
    router.push("/admin/edit")
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <IconButton aria-label="delete" onClick={()=>{router.push("/")}}>
        <HomeIcon fontSize="large" />
      </IconButton>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          name="username"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          sx={{ borderRadius: "4px" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
          sx={{ borderRadius: "4px" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: "40px" }}
        >
        </Button>
      </Box>
      <Toaster />
    </Box>
  );
}