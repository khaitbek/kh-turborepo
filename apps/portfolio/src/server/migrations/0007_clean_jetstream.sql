CREATE TABLE `articles` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`body` text,
	`createdAt` datetime DEFAULT '2023-09-17 03:42:08.333',
	`updatedAt` datetime,
	CONSTRAINT `articles_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`link` varchar(255),
	`sourceCode` varchar(255),
	`description` longtext,
	`technologies` longtext,
	CONSTRAINT `projects_name_unique` UNIQUE(`name`),
	CONSTRAINT `projects_link_unique` UNIQUE(`link`),
	CONSTRAINT `projects_sourceCode_unique` UNIQUE(`sourceCode`)
);
--> statement-breakpoint
CREATE TABLE `articles_to_technologies` (
	`articleId` bigint NOT NULL,
	`technologyId` bigint NOT NULL,
	CONSTRAINT `articles_to_technologies_articleId_technologyId` PRIMARY KEY(`articleId`,`technologyId`)
);
--> statement-breakpoint
CREATE TABLE `technologies` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`createdAt` datetime DEFAULT '2023-09-17 03:42:08.332',
	CONSTRAINT `technologies_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
ALTER TABLE `articles_to_technologies` ADD CONSTRAINT `articles_to_technologies_articleId_articles_id_fk` FOREIGN KEY (`articleId`) REFERENCES `articles`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `articles_to_technologies` ADD CONSTRAINT `articles_to_technologies_technologyId_technologies_id_fk` FOREIGN KEY (`technologyId`) REFERENCES `technologies`(`id`) ON DELETE no action ON UPDATE no action;