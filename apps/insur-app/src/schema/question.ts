import { z } from "zod"

export const questionSchema = z.object({
    id: z.string().optional(),
    titleUz: z.string().min(10),
    titleRu: z.string().min(10),
    answerUz: z.string().min(2),
    answerRu: z.string().min(2),
})

export interface Question extends z.infer<typeof questionSchema> {}
