-- EXERCICIO 1

-- A) 
-- Nada mais é do que uma chave de uma tabela de fora (estrangeira) que corresponde a
-- coluna que é a chave primaria da outra tabela, criando uma relação

-- B)

CREATE TABLE Avaliacao (
    id VARCHAR(255) PRIMARY KEY,
    comment VARCHAR (255) NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(6) NOT NULL
);

INSERT INTO Avaliacao (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

SELECT * from Filmes;

ALTER TABLE  Filmes DROP COLUMN  avaliação;

-- EXERCICIO 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- A) Tabela com chaves estrangeiras provavelmente para usar as informações
-- para preencher uma tabela com chaves primarias

select * from MovieCast;
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
		"001"
)

-- ERRO Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416993-nei-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

-- NÃO SEI DO QUE SE TRATA