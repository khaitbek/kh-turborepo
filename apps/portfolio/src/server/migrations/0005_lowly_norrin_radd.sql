CREATE TABLE `articles_to_technologies` (
	`articleId` bigint NOT NULL,
	`technologyId` bigint NOT NULL,
	CONSTRAINT `articles_to_technologies_articleId_technologyId` PRIMARY KEY(`articleId`,`technologyId`)
);
--> statement-breakpoint
DROP TABLE `articles`;--> statement-breakpoint
DROP TABLE `projects`;--> statement-breakpoint
DROP TABLE `technologies`;--> statement-breakpoint
ALTER TABLE `articles_to_technologies` ADD CONSTRAINT `articles_to_technologies_articleId_articles_id_fk` FOREIGN KEY (`articleId`) REFERENCES `articles`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `articles_to_technologies` ADD CONSTRAINT `articles_to_technologies_technologyId_technologies_id_fk` FOREIGN KEY (`technologyId`) REFERENCES `technologies`(`id`) ON DELETE no action ON UPDATE no action;