CREATE DATABASE  IF NOT EXISTS `ems` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ems`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `event_description` varchar(255) DEFAULT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `organizer` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (9,'Discover the creative talents of local artisans at the Art & Craft Fair. From handmade jewelry to unique home decor, this fair is a treasure trove for art lovers and craft enthusiasts.','Art & Craft Fair',300,'Downtown Arts Park','Artisan Society','#arts','2025-04-10','uploads\\1736485845135_Art_Craft.jpg'),(10,'Experience the magic of live music at the Music Fiesta 2025. This outdoor festival brings together top bands and emerging artists across genres.','Music Fiesta 2025',1000,'City Amphitheater','LiveMusic Inc.','#festival','2025-05-20','uploads\\1736485914930_MusicFiesta.jpg'),(12,'Join industry leaders, innovators, and tech enthusiasts at the Tech Innovators Summit 2025. This event features keynote speeches, panel discussions, and hands-on workshops on AI, blockchain, IoT, and more.','Tech Innovators 2025',500,'Silicon Valley Conference Center','InnovateX','#technology #innovation #summit','2025-03-15',NULL),(13,'Experience the magic of live music at the Music Fiesta 2025. This outdoor festival brings together top bands and emerging artists across genres. Dance under the stars, savor delicious food from local vendors, and create unforgettab','Music Fiesta 2025',1000,'City Amphitheater','LiveMusic Inc.','#music #festival #live','2025-05-20',NULL),(14,'Unlock the secrets to scaling your small business at the Business Growth Workshop. This session covers marketing strategies, financial planning, and operational efficiency. Led by experienced entrepreneurs.','Business Workshop',100,'Corporate Plaza, Suite 12','BizExperts','#business #workshop #growth','2025-02-18',NULL),(15,'Watch as aspiring entrepreneurs pitch their groundbreaking ideas to a panel of seasoned investors at Startup Pitch Night. This event is a great opportunity for networking, discovering innovative solutions, and gaining insights into the startup ecosystem.','Startup Pitch Night',150,'TechHub Auditorium','Startup League','#startup #pitch #investors','2025-03-01',NULL),(16,'Embark on a culinary journey at the Culinary Delights Expo. Meet world-renowned chefs, sample global cuisines, and attend live cooking demonstrations. This expo is a paradise for food lovers and a great opportunity to learn new recipes and techniques.','Culinary Delights Expo',400,'Grand Food Hall','Global Culinary Events','#food #culinary #expo','2025-06-25',NULL),(17,'Enhance your photography skills amidst breathtaking landscapes at the Nature Photography Workshop. Led by professional photographers, this event focuses on capturing nature\'s beauty through the lens. Perfect for beginners and advanced photographers alike.','Nature Photography Workshop',50,'National Park','PhotoArt','\"#photography #nature #workshop','2025-07-15',NULL),(18,'Rejuvenate your mind and body at the Health & Wellness Retreat. This serene escape includes yoga sessions, meditation classes, and workshops on healthy living. Connect with nature and rediscover inner peace in a tranquil environment.','Health & Wellness Retreat',200,'Tranquility Resort','Wellness Co.','#health #wellness #retreat','2025-05-05',NULL),(19,'Test your coding skills at the Coding Hackathon 2025. Work in teams to solve real-world problems and create innovative applications within 48 hours. Win exciting prizes and get noticed by top tech recruiters.','Coding Hackathon 2025',300,'TechLab HQ','CodeMasters','#coding #hackathon #developers','2025-03-20',NULL),(20,'Lace up your running shoes and join the Charity Fun Run. This 5K run supports various local charities and promotes fitness and community spirit. All ages and skill levels are welcome. Enjoy post-run refreshments and a festive atmosphere.','Charity Fun Run Program',600,'City Park','RunForCause','#charity #run #fitness','2025-04-22',NULL);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-11 22:55:45
