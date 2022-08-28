-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2022 a las 06:49:40
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
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `id_usuario`, `id_psicologo`) VALUES
(1, 1, 1);

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
-- Volcado de datos para la tabla `datos_estudiante`
--

INSERT INTO `datos_estudiante` (`id`, `Nombre`, `Especialidad`, `Codigo_estudiante`, `Año`, `Seccion`, `Fecha_nacimiento`, `id_usuario`) VALUES
(1, 'Rodrigo Daniel Pineda Ardon', 'Desarrollo de Software', '20220241', 'Primer_año', 'C', '2006-05-05', 2),
(2, 'Carlos Eduardo Merino Ventura', 'Desarrollo de Software', '20110289', 'Primer_año', 'C', '2006-09-02', 3),
(3, 'José Adrián López Medina', 'Desarrollo de Software', '20130119', 'Primer_año', 'C', '2006-04-13', 4),
(4, 'Sara Yamileth Torres Henríquez', 'Desarrollo de Software', '20220319', 'Primer_año', 'C', '2006-02-27', 5),
(5, 'Dennis Josue Cartagena Argumedo', 'Mecanica Automotriz', '20180247', 'Primer_año', 'D', '2006-05-06', 6),
(6, 'Carlos Javier Andino Soriano', 'Diseño Grafico', '20160441', 'Primer_año', 'A', '2006-07-09', 7),
(7, 'Alan Rodrigo Guzmán Barahona', 'Electronica', '20110287', 'Primer_año', 'D', '2006-03-08', 8),
(8, 'Julio Cesar Hernandez Nolasco', 'Atención Primaria en Salud', '20120268', 'Primer_año', 'E', '2006-07-21', 9),
(9, 'Roberto Carlos Chávez Rodríguez', 'Electromecanica', '20120071', 'Primer_año', 'G', '2006-05-12', 10),
(10, 'Gerardo Rafael Bonilla Saz', 'Desarrollo de Software', '20180249', 'Primer_año', 'B', '2006-12-13', 11),
(11, 'Lucy Fabiola Guerra Carranza', 'Desarrollo de Software', '20220461', 'Primer_año', 'C', '2006-04-14', 12);

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
-- Volcado de datos para la tabla `psicologos`
--

INSERT INTO `psicologos` (`id`, `Nombre`, `Correo_electronico`, `Carnet_psicologo`, `id_usuario`) VALUES
(1, 'Dennis Rivera', 'dennis.rivera@cdb.edu.sv', '123456789', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todolists`
--

CREATE TABLE `todolists` (
  `id` int(11) NOT NULL,
  `task` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `todolists`
--

INSERT INTO `todolists` (`id`, `task`, `created_at`, `updated_at`) VALUES
(2, 'ada', '2022-08-26 11:51:45', '2022-08-26 11:51:45');

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
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `Correo_electronico`, `contraseña`) VALUES
(1, 'Dennis Rivera', 'dennis.rivera@cdb.edu.sv', 'DonBosco1234'),
(2, 'Rodrigo Daniel Pineda Ardon', 'estudiante20220241@cdb.edu.sv', 'JgYYhjGr'),
(3, 'Carlos Eduardo Merino Ventura', 'estudiante20110289@cdb.edu.sv', 'hJyuiGhVc'),
(4, 'José Adrián López Medina', 'estudiante20130119@cdb.edu.sv', 'qYgJfCrE'),
(5, 'Sara Yamileth Torres Henríquez', 'estudiante20220319@cdb.edu.sv', 'JoQyRfQ'),
(6, 'Dennis Josue Cartagena Argumedo', 'estudiante20180247@cdb.edu.sv', 'hjGrUYrT'),
(7, 'Carlos Javier Andino Soriano', 'estudiante20160441@cdb.edu.sv', 'jHgCbVrf'),
(8, 'Alan Rodrigo Guzmán Barahona', 'estudiante20110287@cdb.edu.sv', 'qHjFcDss'),
(9, 'Julio Cesar Hernandez Nolasco', 'estudiante20120268@cdb.edu.sv', 'YujGrdWQ'),
(10, 'Roberto Carlos Chávez Rodríguez', 'estudiante20120071@cdb.edu.sv', 'qHoJnBfrt'),
(11, 'Gerardo Rafael Bonilla Saz', 'estudiante20180249@cdb.edu.sv', 'jIuytRgFr'),
(12, 'Lucy Fabiola Guerra Carranza', 'estudiante20220461@cdb.edu.sv', 'yHgJGtryR');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `psicologos_fk` (`id_psicologo`),
  ADD KEY `usuario_fk` (`id_usuario`);

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
-- Indices de la tabla `todolists`
--
ALTER TABLE `todolists`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `datos_estudiante`
--
ALTER TABLE `datos_estudiante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `psicologos`
--
ALTER TABLE `psicologos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `todolists`
--
ALTER TABLE `todolists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `psicologos_fk` FOREIGN KEY (`id_psicologo`) REFERENCES `psicologos` (`id`),
  ADD CONSTRAINT `usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

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
