SELECT 
   regiao AS 'Região',
   sum(populacao) AS Total
FROM `estados`
GROUP BY regiao
ORDER BY total DESC

SELECT 
    sum(populacao) AS Total
FROM `estados`