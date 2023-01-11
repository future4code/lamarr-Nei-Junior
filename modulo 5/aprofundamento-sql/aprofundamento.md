-- APROFUNDAMENTO SQL




-- 1)

-- a) vai deleter a coluna salario
-- b) vai alterar gender para sex com 6 caracteres
-- c) vai alterar o gender para 255 caracters

-- 2)

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";


UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

-- 3)

DELETE FROM Actor WHERE name = "Fernanda Montenegro";


DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
-- 4)
   
SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*) FROM Actor;

-- 5)
-- a  
-- Vai contar quantos generos tem e separar em grupos

-- b
SELECT id, name FROM Actor
ORDER BY name DESC;

-- c
SELECT * FROM Actor
ORDER BY salary;

-- d
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender ;