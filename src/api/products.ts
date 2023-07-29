import instance from "."
import { addForm, updateForm } from "../models"


export const getAll = () => {
    const uri = '/products/products'
    return instance.get(uri)
}

export const getById = (id: string ) => {
    const uri = '/products/' + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = '/products/' + id
    return instance.put(uri, body)
}

export const deleteId = (id: string) => {
    const uri = '/products/' + id
    return instance.delete(uri)
}

export const addProduct = (productForm: addForm) => {
    const uri = '/products/products'
    return instance.post(uri, productForm)
}



