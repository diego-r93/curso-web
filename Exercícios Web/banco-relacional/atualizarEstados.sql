UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT estados.`nome` FROM estados WHERE sigla = 'MA'

UPDATE `estados`
SET nome = 'Paraná', populacao = 11.32
where sigla = 'PR'

SELECT estados.`nome`, sigla, populacao 
FROM estados
WHERE sigla = 'PR'