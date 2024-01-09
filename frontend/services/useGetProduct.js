import useSWR from 'swr'
const fetcher = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // İzin verilen origin(ler). Gerekirse burayı güvenlik kurallarınıza göre özelleştirebilirsiniz.
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

const useGetProduct = () => {
    const { data, error, isLoading, mutate } = useSWR('http://localhost:3001/api/products/', fetcher)
    return {
        data, error, isLoading
    }
}
const useCreateProduct = async (data) => {
    try {
        const response = await fetch('http://localhost:3001/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Gerekirse diğer başlıkları buraya ekleyin
            },
            body: JSON.stringify(data),
        });
        return response
    } catch (e) {
        console.log(e)
    }
}
const useDeleteProduct = async (productId) => {
    try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            console.error('Ürün silme başarısız oldu');
            throw new Error('Ürün silme başarısız oldu');
        }
    } catch (error) {
        console.error('Ürün silinirken hata oluştu:', error);
        throw error;
    }
};

export { useGetProduct, useCreateProduct, useDeleteProduct }