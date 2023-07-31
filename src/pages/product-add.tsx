import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { updateForm, updateSchema } from '../models'


const ProductAdd= () => {
  






    return <div>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            {/* <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}> */}
                <div>
                    <label className="font-medium text-[20px]">Name Product</label>
                    <input
                        className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                        placeholder="Tên Sản Phẩm"
                      
                    />
                    <p className='text-red-600 text-[10px]'>
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="font-medium text-[20px]" >Price</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black p-3 font-medium text-sm"
                            placeholder="Giá Khuyến Mãi"
                            type='number'
                        />
                        <p className='text-red-600 text-[10px]'>
                        </p>
                    </div>

                    <div>
                        <label className="font-medium text-[20px]" >Price Original</label>
                        <input
                            className="w-full rounded-lg border-2 bordered-b border-black font-medium p-3 text-sm"
                            placeholder="Giá Gốc"
                            type='number'
                        />
                        <p className='text-red-600 text-[10px]'>
                        </p>
                    </div>
                </div>
                <div>
                    <label className="font-medium text-[20px]" >Mô Tả</label>

                    <textarea
                        className="w-full rounded-lg border-2 bordered-b border-black font-medium p-3 text-sm h-[200px]"
                        placeholder="Mô Tả"
                    ></textarea>
                    <p className='text-red-600 text-[10px]'>
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
            {/* </form> */}
        </div>
    </div>
}

export default ProductAdd