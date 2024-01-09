"use client"
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
function Page() {
  const router = useRouter();

  const [inputData, setInputData] = useState(() => {
    const storedData = localStorage ? JSON.parse(localStorage.getItem('inputData')) : null;

    return storedData || {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      companyAddress: '',
      companyWebsite: '',
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('inputData', JSON.stringify(inputData));
  };


  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}>
        <Box zIndex={2}>
          <Sidebar />
        </Box>
        <Box zIndex={1} ml={35}
          sx={{ width: 1 }}>
          <Box p={10} mt={6}>
            <Box sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>

              <Container sx={{
                mt: "50px"
              }}>
                <Card sx={{
                  p: 5,
                  borderRadius: 2,
                }}>
                  <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    mb: 2
                  }}>
                    Kişisel Bilgiler
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    mb: 2
                  }}>
                    <TextField
                      value={inputData.firstName}
                      name='firstName'
                      onChange={(e) => handleChange(e)}
                      sx={{ flex: 1 }}
                      label="Adınız"
                      variant="standard"
                    />
                    <TextField
                      value={inputData.lastName}
                      name='lastName'
                      onChange={(e) => handleChange(e)}
                      sx={{ flex: 1 }}
                      label="Soyadınız"
                      variant='standard'
                    />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    mb: 5
                  }}>
                    <TextField
                      value={inputData.phoneNumber}
                      name='phoneNumber'
                      onChange={(e) => handleChange(e)}
                      sx={{ flex: 1 }}
                      label="Telefon Numarası"
                      variant='standard'
                    />
                    <TextField
                      value={inputData.email}
                      name='email'
                      onChange={(e) => handleChange(e)}
                      sx={{ flex: 1 }}
                      label="E Mail Adresi"
                      variant='standard'
                    />
                  </Box>
                  <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    mb: 2
                  }}>
                    İşletme Bilgileri
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                  }}>
                    <TextField
                      name='companyName'
                      value={inputData.companyName}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                      label="İşletme Adı"
                      variant='standard'
                    />
                    <TextField
                      name='companyAddress'
                      value={inputData.companyAddress}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                      label="İşletme Adresi"
                      variant='standard'
                    />
                    <TextField
                      name='companyWebsite'
                      value={inputData.companyWebsite}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                      label="Website"
                      variant='standard'
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ mt: 3 }}
                      onClick={handleSubmit}
                    >
                      Profilini Düzenle
                    </Button>
                  </Box>
                </Card>
              </Container>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Page