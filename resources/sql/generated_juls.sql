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
  KEY `FK_ccaefe5b83741e0ccsdhfshfgs4` (`imagen`),
  CONSTRAINT `FK_ab04f36cadd0c4414f77d7250e9` FOREIGN KEY (`paisId`) REFERENCES `pais` (`id`),
  CONSTRAINT `FK_ab04f36cadd0c4414f772342345` FOREIGN KEY (`imagen`) REFERENCES `imagen` (`uuid_imagen`),
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

-- development.auditoria definition

CREATE TABLE `auditoria` (
  `id_auditoria` int NOT NULL AUTO_INCREMENT,
  `id_evento` int NOT NULL,
  `evento_tipo` varchar(150) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `correo_usuario` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
  KEY `FK_eventos` (`id_evento`),
  CONSTRAINT `FK_eventos` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- development.evento definition

CREATE TABLE `evento` (
  `id_evento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- development.imagen definition

CREATE TABLE `imagen` (
  `uuid_imagen` int NOT NULL AUTO_INCREMENT,
  `nombre_imagen` varchar(255) NOT NULL,
  `archivos` int NOT NULL,
  `resoluciones` int NOT NULL,
  PRIMARY KEY (`uuid_imagen`),
  KEY `FK_archivo` (`archivos`),
  KEY `FK_resoluciones` (`resoluciones`),
  CONSTRAINT `FK_archivo` FOREIGN KEY (`archivos`) REFERENCES `archivo` (`id`),
  CONSTRAINT `FK_resoluciones` FOREIGN KEY (`resoluciones`) REFERENCES `resoluciones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- development.archivo definition

CREATE TABLE `archivo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- development.archivo definition

CREATE TABLE `imagen_resolucion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_archivo` varchar(255) NOT NULL,
  `alto` int  NOT NULL,
  `ancho` int  NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- development.notificacion definition

CREATE TABLE `notificacion` (
  `id_notificacion` int NOT NULL AUTO_INCREMENT,
  `id_evento` int NOT NULL,
  `id_auditoria` int NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `usuario_email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_evento_notificacion` (`id_evento`),
  KEY `FK_auditoria_notificacion` (`id_auditoria`),
  KEY `FK_usuario_email` (`usuario_email`),
  CONSTRAINT `FK_evento_notificacion` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`),
  CONSTRAINT `FK_auditoria_notificacion` FOREIGN KEY (`id_auditoria`) REFERENCES `auditoria` (`id_auditoria`),
  CONSTRAINT `FK_usuario_email` FOREIGN KEY (`usuario_email`) REFERENCES `usuario` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

