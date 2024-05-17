-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ventapps
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id_user` bigint(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `phone` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Maria isabel Rodriguez','mariaIsabel@gmail.com',8,'2024-04-28 00:03:08','2024-04-28 03:28:42',300287872),(2,'Juan Antorio Bejorral','juan1234@gmail.com',4,'2024-04-28 00:05:02','2024-04-28 00:05:02',2147483647);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `status` enum('completed','denied','pending') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_order`),
  KEY `id_client` (`id_client`),
  KEY `id_product` (`id_product`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 13','Smartphone de Apple con 128GB de almacenamiento',699,'2024-04-19 02:52:40','2024-04-19 22:51:12','https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp'),(3,'MacBook Pro','Portátil de Apple con procesador M1',1299,'2024-04-19 02:52:40','2024-04-19 23:32:36','https://itechcolombia.co/wp-content/uploads/2022/08/mbp-silver-select-202206.png'),(4,'Dell XPS 13','Portátil de Dell con procesador Intel i7',999,'2024-04-19 02:52:40','2024-04-20 00:41:31','https://i.blogs.es/567725/dell-xps-13/450_1000.jpg'),(5,'iPad Pro','Tableta de Apple con pantalla de 12.9 pulgadas',1099,'2024-04-19 02:52:40','2024-04-19 23:33:58','https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png'),(7,'Sony PlayStation 5','Consola de videojuegos de Sony',499,'2024-04-19 02:52:40','2024-04-20 00:42:52','https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/06/15/15922083920513.jpg'),(8,'Microsoft Xbox Series X','Consola de videojuegos de Microsoft',499,'2024-04-19 02:52:40','2024-04-19 23:35:44','https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png'),(9,'Apple Watch Series 7','Reloj inteligente de Apple',399,'2024-04-19 02:52:40','2024-04-20 00:43:42','https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-large.jpg'),(10,'Oculus Quest 2','Gafas de realidad virtual de Facebook',299,'2024-04-19 02:52:40','2024-04-19 23:37:09','https://mixed-reality.co.za/wp-content/uploads/2022/01/quest-2-256gb.png'),(12,'','Altavoz inteligente con Alexa',99,'2024-04-21 21:52:28','2024-04-21 21:52:28','https://img.freepik.com/fotos-premium/aislado-amazon-echo-dot-4th-generacion-vista-frontal-smart-speak-fondo-blanco-limpio_655090-799113.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quotes` (
  `id_sale` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sale_date` date NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_sale`),
  KEY `id_client` (`id_client`),
  KEY `id_product` (`id_product`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  CONSTRAINT `quotes_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `quotes_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2024-04-18 21:41:28','2024-04-18 21:43:07'),(2,'manager','2024-04-18 21:41:28','2024-04-18 21:43:21');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `document` varchar(20) NOT NULL,
  `names` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `cellphone` varchar(25) NOT NULL,
  `address` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1 COMMENT '//1: Activo, 0: Inactivo',
  `id_roles` bigint(20) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `confirmPassword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idRol` (`id_roles`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'12882662','Yeferson Carrillos','yefersonC@gmail.com','$2a$10$.7DjATXhHlAXVufADitFyOFcWMN5XiQ7q1kmv.BdsQMT7yJPtaQMS','3009876754','cll 37 - 122 sur',30,1,2,'2024-04-18 23:26:23','2024-04-18 23:26:23',NULL,'yCarrillos'),(5,'8992889','carlos suarez arboleda','carlosSuarez@gmail.com','$2a$10$O6dxHk9CHsgUlINlN3Sz5.F/Zg0E6P4C2I/iB23WfNb9FAu6qcrVO','20088444','cr 44 - 122 ',18,1,1,'2024-04-20 21:25:10','2024-04-20 21:25:10',NULL,'carlos'),(8,'29948483','Andres Arriaga','andres@gmail.com','$2a$10$ONEaSPklOJY3MzuQYBrPJue8dReQgy7Wuq70JD516efz8meB3sdq2','64448833','cll 32c #28a-65',24,1,1,'2024-04-20 22:49:38','2024-04-20 22:49:38',NULL,'Andres12345'),(9,'2984784','Karla manuela marin','karla@gmail.com','$2a$10$5WfO34gfu6aorjruKFJ8YetP2KGRcor6gS1zAjJV9bbY/i93tpV9S','1334445','call 10 al lado de la vecina 12',18,1,2,'2024-04-20 22:54:32','2024-04-20 22:54:32',NULL,'Karla123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-29 19:06:07
