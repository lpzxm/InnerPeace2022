-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2022 a las 04:42:47
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inner_peace_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_psicologo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `administrador`:
--   `id_psicologo`
--       `psicologos` -> `id`
--   `id_usuario`
--       `usuarios` -> `id`
--

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `id_usuario`, `id_psicologo`) VALUES
(0, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bot`
--

CREATE TABLE `bot` (
  `id` int(11) NOT NULL,
  `Preguntas_preregistradas` varchar(200) NOT NULL,
  `Respuestas_preregistradas` varchar(200) NOT NULL,
  `Respuestas_usuario` varchar(200) NOT NULL,
  `Respuestas_concurrentes` varchar(200) NOT NULL,
  `id_estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `bot`:
--

--
-- Volcado de datos para la tabla `bot`
--

INSERT INTO `bot` (`id`, `Preguntas_preregistradas`, `Respuestas_preregistradas`, `Respuestas_usuario`, `Respuestas_concurrentes`, `id_estudiante`) VALUES
(0, '¿Como te sientes hoy?\r\n', 'Me siento insatisfecho.', 'Me siento mal', 'Tengo problemas académicos por mis padres.', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_estudiante`
--

CREATE TABLE `datos_estudiante` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Especialidad` varchar(100) NOT NULL,
  `Codigo_estudiante` varchar(255) NOT NULL,
  `Año` varchar(100) NOT NULL,
  `Seccion` varchar(100) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `datos_estudiante`:
--   `id_usuario`
--       `usuarios` -> `id`
--

--
-- Volcado de datos para la tabla `datos_estudiante`
--

INSERT INTO `datos_estudiante` (`id`, `Nombre`, `Especialidad`, `Codigo_estudiante`, `Año`, `Seccion`, `Fecha_nacimiento`, `id_usuario`) VALUES
(1, 'Sara Yamileth Torres Henriquez', 'Desarrollo de Software', '20220198', 'Primer año', 'C', '2006-02-27', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `psicologos`
--

CREATE TABLE `psicologos` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Correo_electronico` varchar(255) NOT NULL,
  `Carnet_psicologo` varchar(100) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `psicologos`:
--   `id_usuario`
--       `usuarios` -> `id`
--

--
-- Volcado de datos para la tabla `psicologos`
--

INSERT INTO `psicologos` (`id`, `Nombre`, `Correo_electronico`, `Carnet_psicologo`, `id_usuario`) VALUES
(1, 'Dennis Rivera', 'dennis.rivera@cdb.edu.sv', '12345678', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Correo_electronico` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla dirigida a estudiantes';

--
-- RELACIONES PARA LA TABLA `usuarios`:
--

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `Correo_electronico`, `contraseña`) VALUES
(1, 'Sara Yamileth Torres Henriquez', 'estudiante20220319@cdb.edu.sv', 'aBcDeFg'),
(4, 'Dennis Rivera', 'dennis.rivera@cdb.edu.sv', 'DonBosco12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD KEY `id_psicologo` (`id_psicologo`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `datos_estudiante`
--
ALTER TABLE `datos_estudiante`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `psicologos`
--
ALTER TABLE `psicologos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos_estudiante`
--
ALTER TABLE `datos_estudiante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `psicologos`
--
ALTER TABLE `psicologos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_psicologo`) REFERENCES `psicologos` (`id`),
  ADD CONSTRAINT `administrador_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `datos_estudiante`
--
ALTER TABLE `datos_estudiante`
  ADD CONSTRAINT `datos_estudiante_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `psicologos`
--
ALTER TABLE `psicologos`
  ADD CONSTRAINT `psicologos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
