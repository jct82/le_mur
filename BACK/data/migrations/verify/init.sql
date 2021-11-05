-- Verify omur:init on pg
BEGIN;
SELECT id, title, title_color, description, photo, pdf, owner_id, created_at, updated_at
FROM wall WHERE false;


SELECT id, name, lastname, email, password, created_at, updated_at
FROM "user" WHERE false;

SELECT id, name, position, wall_id, created_at, updated_at
FROM "column" WHERE false;

SELECT id, name, description, type, position, link, src, wall_id, column_id, owner_id, created_at, updated_at
FROM element WHERE false;

SELECT id, wall_id,user_id
FROM participate WHERE false;

ROLLBACK;
