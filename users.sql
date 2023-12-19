-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2023 at 06:59 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `login_user` varchar(35) NOT NULL,
  `password_user` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `birthday` date DEFAULT NULL,
  `musical_instrument` text NOT NULL,
  `experience` int(11) DEFAULT NULL,
  `city` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `login_user`, `password_user`, `first_name`, `last_name`, `birthday`, `musical_instrument`, `experience`, `city`) VALUES
(1, 'polieshko04@gmail.com', 'exponenta', 'Артём', 'Полешко', '2004-02-14', 'Гитара', 13, 'Красноярск'),
(6, 'ahaaaa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-07', 'Бас-гитара', 2, 'красно'),
(7, 'ahaaafa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-28', 'Вокал', 2, 'красно'),
(9, 'ahaaadaa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-29', 'бас', 3, 'красно'),
(12, 'ahaaaaafa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-29', 'бас', 2, 'красно'),
(14, 'ahaadadaaa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-28', 'бас', 3, 'красно'),
(16, 'ahaadddaaaa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-28', 'бас', 3, 'красно'),
(18, 'ahaaaadfgaa@gmail.com', 'ffffs', 'макс', 'изо', '2023-11-29', 'бас', 21, 'красно'),
(20, 'ahaaaafafaqf@gmail.com', 'ffff', 'макс', 'изо', '2023-12-06', 'бас', 31, 'красно'),
(22, 'aha111aaa@gmail.com', 'ffff', 'макс', 'изо', '2023-11-29', 'бас', 3, 'красно');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `login_user` (`login_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
