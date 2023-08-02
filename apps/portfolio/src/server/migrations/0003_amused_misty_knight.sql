CREATE TABLE `articles` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`body` text,
	`createdAt` datetime DEFAULT '2023-08-02 06:39:57.652',
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
CREATE TABLE `technologies` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`createdAt` datetime DEFAULT '2023-08-02 06:39:57.651',
	CONSTRAINT `technologies_name_unique` UNIQUE(`name`)
);
