SELECT * FROM cidades;

INSERT INTO prefeitos (nome, cidade_id)
VALUES
   ('Rodrigo Neves', 2),
   ('Raquel Lyra', 3),
   ('Zeraldo Coutinho', null);

SELECT * FROM prefeitos;

INSERT INTO prefeitos (nome, cidade_id)
VALUES
   ('Rafael Greca', null);

-- INSERT INTO prefeitos (nome, cidade_id)    -- Estrada duplicada
-- VALUES
--    ('Rodrigo Pinheiro', 3);
