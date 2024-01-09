"use client"
import { AppBar, Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '@/Components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import AddProductModal from '@/Components/AddProductModal'
import UpdateProductModal from '@/Components/UpdateProductModal'
import DefaultImage from '@mui/icons-material/HideImage';
import userData from '../../Database/userData.json'
import { useGetProduct, useCreateProduct, useDeleteProduct } from '@/services/useGetProduct'
import { mutate } from 'swr'

function Page() {
  const { data, isLoading, mutate } = useGetProduct()

  const [isUpdated, setIsUpdated] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null); // New state
  const [selectedImage, setSelectedImage] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState(
    {
      title: "",
      content: "",
      price: ""
    }
  );


  const handleOpen = () => {
    setOpen(true)
  }

  const handleAddProduct = () => {
    const productLastVersion = {
      ...newProduct,
      image: selectedImage,
    };

    if (
      newProduct.head !== "" &&
      newProduct.content !== "" &&
      newProduct.price !== "" &&
      newProduct.category !== undefined
    ) {
      try {
        userData.users[0].products.push(productLastVersion);
        useCreateProduct(productLastVersion);
        mutate(false);

        setNewProduct({
          head: "",
          content: "",
          price: "",
          category: undefined,
        });
        setSelectedImage(null);
      } catch (e) {
        console.log(e);
      }
      setOpen(false);
    } else {
      if (newProduct.head === "") alert("Lütfen Ürün Başlığını Girin!");
      else if (newProduct.content === "") alert("Lütfen Ürün İçeriğini Girin!");
      else if (newProduct.price === "") alert("Lütfen Ürün Fiyatını Girin!");
      else if (newProduct.category === undefined)
        alert("Lütfen Bir Kategori Seçin!");
    }
  };


  const handleDeleteProduct = async (productId) => {
    try {
      if (productId) {
        await useDeleteProduct(productId);
        mutate();
      } else {
        console.error('Ürün ID bilgisi eksik. Silme işlemi gerçekleştirilemedi.');
      }
    } catch (error) {
      console.error('Ürün silme başarısız oldu:', error.message);
    }
  };




  const handleClickUpdate = (product) => {
    setSelectedProduct(product);
    setIsUpdated(true);
  };


  if (isLoading) {
    return <div>Loading</div>
  }



  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row"
        }}>
        <Box zIndex={2}>
          <Sidebar />
        </Box>
        <Box zIndex={1} ml={35} width={1} >
          <Box p={6} mt={6} sx={{ width: 1 }}>
            <Container>
              <Stack>
                <Box>
                  <Typography variant='h5'>Yeni Ürün Ekleyin</Typography>
                  <Card sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: "15px",
                    mt: 2
                  }}>
                    <Button onClick={handleOpen}><AddIcon />Yeni Ürün Ekle</Button>
                  </Card>
                </Box>
                <AddProductModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} handleAddProduct={handleAddProduct} newProduct={newProduct} setNewProduct={setNewProduct} open={open} setOpen={setOpen}></AddProductModal>
              </Stack>
            </Container>
          </Box>
          <Box pl={10} pr={10} sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            {
              data?.filter((item) => Boolean(item.title)).map((product) => (
                <Card
                  key={product._id}
                  sx={{
                    width: "calc(25% - 20px)",
                    height: "350px",
                    margin: "10px",
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {product.image ? (
                      <Box
                        sx={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "3px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={`Product ${product.id}`}
                          style={{ width: "100%" }}
                        />
                      </Box>
                    ) : <DefaultImage sx={{
                      width: "150px",
                      height: "150px",
                      opacity: ".6"
                    }}>
                    </DefaultImage>}
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography fontSize="18px" fontWeight="600">{product.title}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textAlign: "start"
                      }}
                    >
                      <Typography>{product.content}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>{product.category}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography color="error">{product.price} ₺</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2
                    }}
                  >
                    <Button
                      onClick={() => handleClickUpdate(product)}
                      variant="outlined"
                      color="primary"
                    >
                      Düzenle
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        console.log(product.id); // Check the ID in the console
                        handleDeleteProduct(product._id);
                      }}
                    >
                      Sil
                    </Button>

                  </Box>
                </Card>
              ))}

          </Box>
          <UpdateProductModal
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
            selectedProduct={selectedProduct}
            setProducts={setProducts}
          />
        </Box>
      </Box>
    </Box >
  )
}

export default Page;
