import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function objToFormData(object: object) {
    const formData = new FormData()
    Object.entries(object).forEach((pair) => {
        formData.append(pair[0], pair[1])
    })
    return formData
}
