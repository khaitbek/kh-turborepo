import { Technology } from "@/server/schema/technology"

export interface TechnologyToSelectOptions {
    value: Technology["id"]
    label: (Technology["name"])
}

export interface ArticleTech {}