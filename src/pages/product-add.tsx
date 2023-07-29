import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams, useNavigate } from 'react-router-dom'
import { getById, update } from '../api/products'
import { useEffect } from 'react'
import { updateForm, updateSchema } from '../models'


const ProductAdd= () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductByid(id)
            }
        }
    })
    // defaultValues:{
    //     name: "Iphone",
    //     price: 1000,
    //     original_price: 100,
    //     description: "mô tả"
    // }

    const onSubmit = async (data: updateForm) => {
        try {
            if (id) {
                const response = await update(id, data)
                console.log(response);
                navigate('/admin')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProductByid = async (id: string) => {
        const { data } = await getById(id)
        return data
    }


    // useEffect(() => {
    //     if (id) {
    //         fetchProductById(id)
    //     }
    // }, [])
    // Giá trị của biến id được sử dụng để kiểm tra nếu tồn tại id thì mới gọi hàm fetchProductById.


    return <div>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="font-medium text-[20px]">Name Product</label>
                    <input
                        className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                        placeholder="Tên Sản Phẩm"
                        {...register('name')}
                    />
                    <p className='text-red-600 text-[10px]'>
                        {errors.name && errors.name.message}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="font-medium text-[20px]" >Price</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                            placeholder="Giá Khuyến Mãi"
                            {...register('price')}
                            type='number'
                        />
                        <p className='text-red-600 text-[10px]'>
                            {errors.price && errors.price.message}
                        </p>
                    </div>

                    <div>
                        <label className="font-medium text-[20px]" >Price Original</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black font-medium p-3 text-sm"
                            placeholder="Giá Gốc"
                            {...register('original_price')}
                            type='number'
                        />
                        <p className='text-red-600 text-[10px]'>
                            {errors.original_price && errors.original_price.message}
                        </p>
                    </div>
                </div>
                <div>
                    <label className="font-medium text-[20px]" >Mô Tả</label>

                    <textarea
                        className="w-full rounded-lg border-2 bordered-b border-black font-medium p-3 text-sm h-[200px]"
                        placeholder="Mô Tả"
                        {...register('description')}
                    ></textarea>
                    <p className='text-red-600 text-[10px]'>
                        {errors.description && errors.description.message}
                    </p>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                        Thêm Sản Phẩm
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default ProductAdd