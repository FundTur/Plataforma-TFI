-- auditoria.auditorias definition

CREATE TABLE `auditorias` (
  `id_auditoria` int NOT NULL AUTO_INCREMENT,
  `id_evento` int NOT NULL,
  `evento_tipo` varchar(150) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `correo_usuario` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `ip_usuario` int NOT NULL,
  PRIMARY KEY (`id`)
  KEY `FK_eventos` (`id_evento`),
  CONSTRAINT `FK_eventos` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- auditoria.eventos definition

CREATE TABLE `eventos` (
  `id_evento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;