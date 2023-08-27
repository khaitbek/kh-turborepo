

import axios from "axios"

import { Product } from "@/data/products"
import { AdminModel } from "@/schema"
import { z } from "zod"
export const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api/v1",
})
export async function getProducts(skip = 0, take = 10): Promise<Product[]> {
    const products = await axiosClient.get("/product", {
        params: {
            skip,
            take,
        },
    })
    return await products.data.data
}
export async function getProductById(id: Product["id"]) {
    const products = (await axiosClient.get("/product")).data.data as Product[]
    const neededProduct = products?.find((product) => product.id === id)
    return neededProduct
}

export async function addProduct(data: FormData) {
    const newProduct = await axiosClient.post("/product", data)
    return await newProduct.data
}

export async function editProduct(data: Product) {
    return await axiosClient.put(`/product/${data.id}`, data)
}

export async function deleteProduct(id: string) {
    return await (
        await axiosClient.delete(`/product/${id}`)
    ).data
}

export async function loginHandler(values: z.infer<typeof AdminModel>) {
    return await (
        await axiosClient.post("/auth/login", values)
    ).data
}
