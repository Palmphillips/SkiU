-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: us-cdbr-iron-east-05.cleardb.net    Database: heroku_d087506ec02ec33
-- ------------------------------------------------------
-- Server version	5.6.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `driver_info`
--

DROP TABLE IF EXISTS `driver_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `driver_info` (
  `username` varchar(40) NOT NULL,
  `car_model` varchar(20) NOT NULL,
  `car_year` varchar(4) NOT NULL,
  `seats` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_info`
--

LOCK TABLES `driver_info` WRITE;
/*!40000 ALTER TABLE `driver_info` DISABLE KEYS */;
INSERT INTO `driver_info` VALUES ('KimJongUn@bestKorea.nk','KoreaKar','2017','20');
/*!40000 ALTER TABLE `driver_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(1) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `departure` varchar(10) NOT NULL,
  `date` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `passengers` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=202 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (201,'usertest@colorado.edu','Aspen','6:00am','12/25/17','Going snowboarding.','6'),(181,'fakeboi@bruh.com','Arapahoe Basin','9:00am','12/16/17','Going Snowboarding','5'),(101,'my.name@colorado.edu','Keystone','test','test','test','test'),(191,'class@colorado.edu','Vail','7:00am','12/25','Going to Vail Bros','3'),(131,'my.name@colorado.edu','Eldora','9:00am','Thursday','i like shi','3'),(141,'my.name@colorado.edu','Steamboat','10:00am','12/2/41','Quick little run','1'),(151,'steve.martin@colorado.edu','Beaver Creek','9:00am','12/524/123','Surfs up bros','1'),(161,'sam.smith@colorado.edu','Breckenridge','8:30am','12/4/17','Hitting the black diamonds yo','0');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `username` varchar(40) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `school_year` varchar(4) DEFAULT NULL,
  `age` varchar(20) DEFAULT NULL,
  `events` varchar(255) DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `bio` varchar(1000) DEFAULT NULL,
  `rider_type` varchar(20) DEFAULT NULL,
  `preferred_terrain` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES ('duaa@colorado.edu','$2a$10$0JVNphoo2iAanGygvFJN/eJTgCpvMOP3/m8ybxJhSh372tantEtc6','Duaa','Alahmed','7203226544','1111',NULL,NULL,NULL,NULL,NULL,NULL),('fakeboi@bruh.com','$2a$10$vgwaGsoUpNReCxNsk.nLQ.cmN21L2MdIs2/5FibZ1bCmmMFDiUpy6','super','last','777','666',NULL,NULL,NULL,NULL,NULL,NULL),('sousheel@colorado.edu','$2a$10$WRXqUzgb8QwZhHh.KqJmneQnE1bc90GPU','Sam','Sheel','666','6666',NULL,NULL,NULL,NULL,NULL,NULL),('hassan@colorado.edu','$2a$10$oF/8zbFEvB2obqNuub5a8uE47NhawTdkIULl1tL74joFxJ3o6ctBi','Hassan','Al','7657659870','3333',NULL,NULL,NULL,NULL,NULL,NULL),('my.name@colorado.edu','$2a$10$z8Sv0ps.PAuz4OzWOM9a2e4dawo4fL/OfkV9h7egxz9utdJs4tkO6','my','name','720-823-14','1997',NULL,'35, 5, 5, 5, 121, 131, 141, , 171, 171, ',NULL,NULL,NULL,NULL),('usertest@colorado.edu','$2a$10$7oKX63dOPzfYHcZU0TH.MuOuVYMBL1wtceR1Yba//rsPurMlRZnai','Tester','One','1234567890','fres',NULL,NULL,NULL,NULL,NULL,NULL),('sosheel.vunam@colorado.edu','$2a$10$RAu3JCDgPsNyl9iJ5rvCJuBh6uuFWgC7G2S9HwwIkqVdYMnzy5eum','Sousheel','Vunnam','3033462884','2020','','171, ','','','',''),('steve.martin@colorado.edu','$2a$10$HI63TIhX9XQDwM9n.ERKxO5A42WOgbj7CouF3njE34Dt4YFG.xsWC','Steve','Martin','','','','151, 123, ','','','',''),('sam.smith@colorado.edu','$2a$10$RPFb/YIFSgb3rglZG3timeOHE2clH19gCqzGNbWF2F4IZ0iBJUSg2','Sam','Smith','720-867-53','Seni','','161, 131, ','','','',''),('class@colorado.edu','$2a$10$rHv5JjrLLs55.SqRKgxJE.CM6t0xgm5pm.GF8wpvv/d9mQh9j2VYC','John','Phillips','1234567890','2017','','191, 181, ','','','',''),('classtest@colorado.edu','$2a$10$Q5CE1PaE2nsikfadqoorHO1Qcg4hWBeQUDCkR5R0PsW6b9dOroIdy','John','Phillips','1234567890','2017','','','','','','');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-14 22:56:55
