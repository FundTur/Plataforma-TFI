-- development.categoria definition

CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.pais definition

CREATE TABLE `pais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `bandera` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.plan definition

CREATE TABLE `plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.rol definition

CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.ciudad definition

CREATE TABLE `ciudad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `paisId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e7741d8797ff60210cecb71eacf` (`paisId`),
  CONSTRAINT `FK_e7741d8797ff60210cecb71eacf` FOREIGN KEY (`paisId`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.convocatoria definition

CREATE TABLE `convocatoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFin` datetime NOT NULL,
  `estado` varchar(255) NOT NULL,
  `paisId` int DEFAULT NULL,
  `idioma` varchar(255) NOT NULL,
  `valorFinanciamiento` int NOT NULL,
  `moneda` varchar(255) NOT NULL,
  `requisitos` varchar(255) NOT NULL,
  `isPremium` tinyint NOT NULL,
  `categoriaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ab04f36cadd0c4414f77d7250e9` (`paisId`),
  KEY `FK_ccaefe5b83741e0ccd3baad09c7` (`categoriaId`),
  CONSTRAINT `FK_ab04f36cadd0c4414f77d7250e9` FOREIGN KEY (`paisId`) REFERENCES `pais` (`id`),
  CONSTRAINT `FK_ccaefe5b83741e0ccd3baad09c7` FOREIGN KEY (`categoriaId`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.observacion definition

CREATE TABLE `observacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `convocatoriaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5094e6694f160f79301197b379f` (`convocatoriaId`),
  CONSTRAINT `FK_5094e6694f160f79301197b379f` FOREIGN KEY (`convocatoriaId`) REFERENCES `convocatoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.usuario definition

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `rolId` int DEFAULT NULL,
  `dateUpdated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dateCreated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `estado` varchar(255) NOT NULL,
  `paisId` int DEFAULT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `estadoPlan` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_611daf5befc024d9e0bd7bdf4da` (`rolId`),
  KEY `FK_9670797eac66f966a357207a459` (`paisId`),
  CONSTRAINT `FK_611daf5befc024d9e0bd7bdf4da` FOREIGN KEY (`rolId`) REFERENCES `rol` (`id`),
  CONSTRAINT `FK_9670797eac66f966a357207a459` FOREIGN KEY (`paisId`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.beneficio definition

CREATE TABLE `beneficio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `convocatoriaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_759bead211350d56c453b908bc7` (`convocatoriaId`),
  CONSTRAINT `FK_759bead211350d56c453b908bc7` FOREIGN KEY (`convocatoriaId`) REFERENCES `convocatoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.convocatoria_participantes_usuario definition

CREATE TABLE `convocatoria_participantes_usuario` (
  `convocatoriaId` int NOT NULL,
  `usuarioId` int NOT NULL,
  PRIMARY KEY (`convocatoriaId`,`usuarioId`),
  KEY `IDX_d94d9227d9c4caa1f02121826c` (`convocatoriaId`),
  KEY `IDX_702c785c2e7f0efd8dadd9c401` (`usuarioId`),
  CONSTRAINT `FK_702c785c2e7f0efd8dadd9c4019` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d94d9227d9c4caa1f02121826c3` FOREIGN KEY (`convocatoriaId`) REFERENCES `convocatoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.pago definition

CREATE TABLE `pago` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateCreated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `estado` varchar(255) NOT NULL,
  `usuarioId` int DEFAULT NULL,
  `planId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_931ebb93af7144f3a1ef90662ad` (`usuarioId`),
  KEY `FK_fb83326a4a3705bdd4678ca202c` (`planId`),
  CONSTRAINT `FK_931ebb93af7144f3a1ef90662ad` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FK_fb83326a4a3705bdd4678ca202c` FOREIGN KEY (`planId`) REFERENCES `plan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;