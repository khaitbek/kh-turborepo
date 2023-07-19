CREATE TABLE `projects` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`link` varchar(255),
	`sourceCode` varchar(255),
	`description` longtext,
	`technologies` text,
	CONSTRAINT `projects_name_unique` UNIQUE(`name`),
	CONSTRAINT `projects_link_unique` UNIQUE(`link`),
	CONSTRAINT `projects_sourceCode_unique` UNIQUE(`sourceCode`)
);
