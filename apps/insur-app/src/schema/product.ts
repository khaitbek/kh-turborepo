import * as z from "zod"
import { CompleteAdmin, RelatedAdminModel } from "./index"

export const ProductModel = z.object({
    nameUz: z.string(),
    nameRu: z.string(),
    descriptionUz: z.string(),
    descriptionRu: z.string(),
    userId: z.string().nullish(),
    color: z.string().nullish(),
    imgOne: z.string(),
    imgTwo: z.string(),
    imgThree: z.string(),
    onSale: z.boolean(),
    category: z.string().optional(),
    type: z.string().optional()
})

export const ProductEditModel = z.object({
    nameUz: z.string(),
    nameRu: z.string(),
    descriptionUz: z.string(),
    descriptionRu: z.string(),
    userId: z.string().nullish(),
    color: z.string().nullish(),
    imgOne: z.string().optional(),
    imgTwo: z.string().optional(),
    imgThree: z.string().optional(),
    onSale: z.boolean()
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
    createdBy?: CompleteAdmin | null
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() =>
    ProductModel.extend({
        createdBy: RelatedAdminModel.nullish(),
    })
)
