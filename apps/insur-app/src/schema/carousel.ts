import { z } from "zod"

export const CarouselModel = z.object({
    id:z.string().optional(),
    nameUz: z.string(),
    nameRu: z.string(),
    descriptionUz: z.string(),
    descriptionRu: z.string(),
    image: z.string(),
})

export interface Carousel extends z.infer<typeof CarouselModel> { };