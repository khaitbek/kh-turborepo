import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const AdminModel = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
})

export interface CompleteAdmin extends z.infer<typeof AdminModel> {
  products: CompleteProduct[]
}

/**
 * RelatedAdminModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAdminModel: z.ZodSchema<CompleteAdmin> = z.lazy(() => AdminModel.extend({
  products: RelatedProductModel.array(),
}))
